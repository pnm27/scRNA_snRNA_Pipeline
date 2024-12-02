# This rule will create multiple runs of cellSNP and vireoSNP for each sample
# Provided a file that contains multiple vcfs per each sample
# present as config['gt_demux_pipeline']['vcf_info']
from typing import Union # Need verion > 3.5
import numpy as np, pandas as pd, os

assert sys.version_info >= (3, 5), "This script needs python version >= 3.5!"


# def read_files_ext(fname, h: Union[None, list]=None) -> pd.DataFrame :
def read_files_ext(fname, **kwargs) -> pd.DataFrame :    
    if not os.path.isfile(fname):
        raise OSError(f"The given file {fname} doesn't exist and annotations are impossible without this file!") 

    if fname.endswith('.csv'):
        return pd.read_csv(fname, **kwargs)
    elif fname.endswith('.tsv'):
        return pd.read_csv(fname, sep='\t', **kwargs)
    elif fname.endswith('.txt'):
        return pd.read_csv(fname, sep=' ', **kwargs)
    else:
        raise OSError(f"The given file {fname} doen't have either csv or tsv extension. Other extensions are not supported!")



def ret_cols(fname) -> int :    
    if not os.path.isfile(fname):
        raise OSError(f"The given file {fname} doesn't exist and annotations are impossible without this file!") 
    if fname.endswith('.csv'):
        return pd.read_csv(fname, nrows=1, header=None).shape[1]
    elif fname.endswith('.tsv'):
        return pd.read_csv(fname, sep='\t', nrows=1, header=None).shape[1]
    else:
        raise OSError(f"The given file {fname} doen't have either csv or tsv extension. Other extensions are not supported!")


# Make this function to take first set of final_count_matrix file, if one demux is already done
# or to simply filter the count matrix file (output of alignment) according to the same filters
# as in calico_solo's rule
def get_filt_barcodes(wildcards):

    if global_vars.ADD_SOLO:
        pass
    elif global_vars.ADD_VIREO:
        return f"{config['hashsolo_demux_pipeline']['final_count_matrix_dir']}{config['fold_struct_demux']}{config['hashsolo_demux_pipeline']['final_count_matrix_h5ad']}"
    elif global_vars.ONLY_VIREO or global_vars.BOTH_DEMUX:
        return f"{config['STARsolo_pipeline']['bams_dir']}{config['fold_struct']}{config['STARsolo_pipeline']['genefull_matrix']}"
    else:
        raise ValueError("Unexpected inputs to the rule 'demux_samples_calico_solo_STARsolo'! Please check the INPUTS and the FLAGS!")


# Parameter option
def get_inp_type(wildcards, input):
    if global_vars.ADD_SOLO or global_vars.ADD_VIREO or input[0].endswith('.h5ad'):
        return 'prev'
    else:
        return 'star'


def get_cellsnp_inputs(wildcards):
    ret_list=[]
    ret_list.extend(
        [
        f"{config['gt_demux_pipeline']['inp_for_cellsnp_dir']}{config['fold_struct_filt_bc']}.txt", 
        f"{config['STARsolo_pipeline']['bams_dir']}{config['fold_struct']}{config['STARsolo_pipeline']['bam']}", 
        ]
    )
    
    # 'cellsnp_ref_snps' is useful when per-Pool vcfs need to subset for SNVs
    if config['gt_demux_pipeline']['cellsnp_ref_snps'] is not None:
        # modify this to accept either a text file containing per pool vcf or one single vcf file
        if config['gt_demux_pipeline']['cellsnp_ref_snps'].endswith('.vcf.gz'):
            ret_list.append(config['gt_demux_pipeline']['cellsnp_ref_snps'])
            ret_list.append(config['gt_demux_pipeline']['genome_1k_ref'])
        
    elif config['gt_demux_pipeline']['cellsnp_ref_snps'] is None:
        # If no ref provided then use 1000 Genomes Project vcf as input
        ret_list.append(config['gt_demux_pipeline']['genome_1k_ref'])


    return ret_list

# Consolidate this function and ret_dons
# MAKE THIS COMPATIBLE WITH NPSAD INPUTS WHERE WE HAVE MULTIPLE VCF POOL RUNS i.e. WITH FUNCTION
# MULTI_VCF
# i.e. An input to vireo rule (config['gt_demux_pipeline']['vcf_info']) should be either:
# 1) A three columned (no-header) file containing pool name, expected donors,
#    and corresponding vcf file (can be multiple columns) while config['gt_demux_pipeline']['donors_per_pool_file'] should be None
# 2) A 2-columned (no-header) txt or csv or tsv file with pool name and expected donors
#    and the path to a (single) vcf file (bgzf) containing all donors in config['gt_demux_pipeline']['donors_per_pool_file']
# 3) None, if the runs are to be without any vcf files and config['gt_demux_pipeline']['donors_per_pool_file'] should be 
#    a 2-columned (no-header) txt or csv or tsv file with pool name and expected donors
def get_vir_inputs(wildcards):
    ret_list = [
        f"{config['gt_demux_pipeline']['cellsnp_dir']}{config['fold_struct_gt_demux']}"
        f"{config['gt_demux_pipeline']['cellsnp_cells']}"
        ]
    # if config['gt_demux_pipeline']['vcf_info'].endswith('vcf.gz'):
    #     ret_dict['donor_info'] = config['gt_demux_pipeline']['vcf_info']
    # elif config['gt_demux_pipeline']['vcf_info'].endswith('vcf'):
    #     raise IOError("Given vcf file in 'vcf_info' in config file is not BGZF formatted!")
    # elif config['gt_demux_pipeline']['vcf_info'].endswith('txt') or config['gt_demux_pipeline']['vcf_info'].endswith('csv') \
    #     or config['gt_demux_pipeline']['vcf_info'].endswith('tsv'):
    if config['gt_demux_pipeline']['vcf_info'] is not None \
        and os.path.isfile(config['gt_demux_pipeline']['vcf_info']):
        col_set1 = ["pool", "n_dons", "vcf"]
        # col_set2 = ["pool", "n_dons"]
        n_cols = ret_cols(config['gt_demux_pipeline']['vcf_info'])
        # Make snakemake's wildcard same as the value in the "pool" column
        samp_name = '-'.join(wildcards.id1.split('-')[:-1])
        # For condn. 1)
        if config['gt_demux_pipeline']['donors_per_pool_file'] is None \
            and n_cols == 3:
            temp_df = read_files_ext(config['gt_demux_pipeline']['vcf_info'], 
                                     names=col_set1)
            try:
                ret_list.append(
                    temp_df.loc[temp_df["pool"] == samp_name, "vcf"]
                    .values[0]
                    )
            except:
                pass
        # Run without vcf
        elif config['gt_demux_pipeline']['donors_per_pool_file'] is None \
            and n_cols == 2:
            pass
        # For condn. 2)
        elif config['gt_demux_pipeline']['donors_per_pool_file'].endswith('vcf.gz') \
            and n_cols == 3:
            raise ValueError("Expecting 2-columned"\
                " file: pool name and expected donors")
        elif config['gt_demux_pipeline']['donors_per_pool_file'].endswith('vcf.gz') \
            and n_cols == 2:
            ret_list.append(config['gt_demux_pipeline']['donors_per_pool_file'])
        elif config['gt_demux_pipeline']['donors_per_pool_file'].endswith('vcf'):
            raise IOError("Given vcf file in 'donors_per_pool_file' in "
                          "config file is not BGZF formatted!")
        else:
            raise IOError("Unexpected file type or value provided to "
                          "'donors_per_pool_file' in config file")

    return ret_list



# def get_donor_info(wildcards, input): # OUTDATED
    # temp_df = pd.read_csv(config['meta_data_geno_samp'], skiprows=1, names=config['hash_columns'])
    # donors = ','.join(temp_df.loc[temp_df[config['hash_columns'][2]] == wildcards.id1[:-6], config['hash_columns'][1]].to_list())
    # Dictionary containing keys 'donor' - number of donors and 'vcf' - a vcf file or a list of vcf files using which we want to run
    # vals=dict.fromkeys(['vcf'])
    # if config['last_step'].lower().endswith('multi_vcf'):
    #     assert not config['gt_demux_pipeline']['vcf_info'].endswith('vcf.gz'), \
    #         "Not expecting a single vcf file with multi_vcf module!"
    #     temp_df = read_files_ext(config['gt_demux_pipeline']['vcf_info'])
    #     wet_lab_df = read_files_ext(config['wet_lab_info'])
    #     samp = wildcards.id1.replace('-', '_')+'_cDNA'
    #     cols1 = config['gt_demux_pipeline']['vcf_info_columns']
    #     cols2 = config['gt_demux_pipeline']['wet_lab_file_cols']
    #     set_num = wet_lab_df.loc[wet_lab_df[cols2[1]].str.lower() == samp.lower(), cols2[0]].values[0]
    #     # This function to be modified for:
    #     # 1) if the input is a text file with each pool having its own vcf
    #     # 2) When the pipeline is to be run for multi-vcf inputs
    #     try:
    #         vals['vcf'] = temp_df.loc[temp_df[cols1[0]] == set_num, wildcards.vcf_type].values[0]
    #     except:
    #         vals['vcf'] = None
    # elif 'donor_info' in input:
    #     vals['vcf'] = input['donor_info']

    # return vals



# def ret_dons(wildcards, input) -> Union[None, int]: # DEPRACATED
#     if config['gt_demux_pipeline']['donors_per_pool_file'] is None:
#         return None
#     elif isinstance(input['donor_info'], object):
#         temp_df = read_files_ext(input.donor_info, h=["pool", "n_dons"])
#         # if not np.isnan(temp_df.loc[temp_df['pool'] == wildcards.id1, 'n_dons'].values[0]):
#         # If either values aren't present or if they can't be cast as int
#         # it means that the has the expected number of donors (returns None)
#         try:
#             return int(temp_df.loc[temp_df['pool'] == wildcards.id1, 'n_dons'].values[0])
#         except:
#             return None
#         # If vcfs per pool have exact same number of donors as expected
#         else:
#             return None
#     # when all pools have same no. of expected donors and they are either 
#     # less or more than available donors in each vcf
#     else:
#         try:
#             return int(config['gt_demux_pipeline']['donors_per_pool_file'])
#         except:
#             raise ValueError("Expected a Number, if neither a file containing pools vs donors nor simply 'null'")


# Set logic similar to vir inp function
def ret_dons(wildcards) -> Union[None, int]:
    col_set1 = ["pool", "n_dons", "vcf"]
    col_set2 = ["pool", "n_dons"]
    n_cols = ret_cols(config['gt_demux_pipeline']['vcf_info'])
    # Make snakemake's wildcard same as the value in the "pool" column
    samp_name = '-'.join(wildcards.id1.split('-')[:-1])

    if n_cols == 3:
        temp_df = read_files_ext(config['gt_demux_pipeline']['vcf_info'], names=col_set1)
    elif n_cols == 2:
        temp_df = read_files_ext(config['gt_demux_pipeline']['vcf_info'], names=col_set2)
    else:
        raise ValueError("Unexpected number of columns for 'vcf_info' file in 'gt_demux_pipeline'!!!")
    
    try:
        return int(temp_df.loc[temp_df["pool"] == samp_name, "n_dons"].values[0])
    except:
        return None


# Multi_module branch related function
# def multi_vcfs(wildcards):
#     temp_df = read_files_ext(config['gt_demux_pipeline']['vcf_info'])
#     wet_lab_df = read_files_ext(config['wet_lab_info'])
#     samp = wildcards.id1.replace('-', '_')+'_cDNA'
#     cols1 = config['gt_demux_pipeline']['vcf_info_columns']
#     cols2 = config['gt_demux_pipeline']['wet_lab_file_cols']
#     set_num = wet_lab_df.loc[wet_lab_df[cols2[1]].str.lower() == samp.lower(), cols2[0]].values[0]
#     col = wildcards.vcf_type

#     return temp_df.loc[temp_df[cols1[0]] == set_num, col].values[0]

# Modify this rule's input to accomodate the basic filtering that 
# is used for calico_solo's input
rule create_inp_cellSNP:
    input:
        get_filt_barcodes

    priority: 8

    params:
        inp_type=get_inp_type, 
        # When a run of calico_solo exists
        col_name=config['gt_demux_pipeline']['demux_col'], # Name of the anndata's obs column that contains classification of cells
        bc_len=config['gt_demux_pipeline']['barcode_len'], # Barcode length
        keep_all_cells=config['gt_demux_pipeline']['include_all_cells'], # Include all cells (don't remove cells prev classified as doublets, etc.)
        doub=config['gt_demux_pipeline']['doublet'], # Doublets named as
        neg=config['gt_demux_pipeline']['negative'], # Negatives named as
        na=config['gt_demux_pipeline']['na'], # Cells not present in hashsolo named as
        # When no previous runs of calico_solo exists
        mito=config['max_mito_percentage'],  # Max mitochodrial genes content per cell
        min_genes=config['min_genes_per_cell'], # Min #genes per cell
        min_cells=config['min_cells_per_gene'],  # Min #cells expressing a gene for it to pass the filter
        genes_info=config['gene_info_file'], # File containing gene names and gene ids for annotations
        mito_prefix=config['mito'] # Mitochondrial genes' (names') prefix

    resources:
        mem_mb=allocate_mem_CICS,
        time_min=allocate_time_CICS

    # group: "genotype-demux"
    threads: 2

    output:
        f"{config['gt_demux_pipeline']['inp_for_cellsnp_dir']}{config['fold_struct_filt_bc']}.txt"
    
    conda: "../envs/basic_sctools.yaml"

    shell:
        """
        if [[ "{params.inp_type}" == "prev" ]]; then
            if [[ "{params.keep_all_cells}" == "yes" ]] || [[ "{params.keep_all_cells}" == "True" ]]; then
                python3 helper_py_scripts/create_inp_cellSNP.py {input} \
                -o {output} -c {params.col_name} -b {params.bc_len} \
                --mito_prefix {params.mito_prefix} \
                --keep_all_cells --prev
            else
                python3 helper_py_scripts/create_inp_cellSNP.py {input} \
                -o {output} -c {params.col_name} -e {params.na} \
                -d {params.doub} -n {params.neg} -b {params.bc_len} \
                --mito_prefix {params.mito_prefix} \
                --prev
            fi
        else
            python3 helper_py_scripts/create_inp_cellSNP.py {input} \
            -o {output} -m {params.mito} -g {params.min_genes} \
            --min_cells {params.min_cells} --id2name {params.genes_info} \
            --mito_prefix {params.mito_prefix}
        fi
        sleep 60
        """


# Not yet finished implementing
# rule get_id_hash:
#     input:


#     output:
#         config['gt_demux_pipeline']['meta_data_geno_samp']

#     shell:
#         """
#         sleep 100
#         """


# UMI tag is turned on. Therefore, PCR duplicates are included
rule cellSNP:
    input:
        # bc=get_filt_barcodes,
        get_cellsnp_inputs

    # group: "genotype-demux"

    output:
        f"{config['gt_demux_pipeline']['cellsnp_dir']}{config['fold_struct_gt_demux']}{config['gt_demux_pipeline']['cellsnp_cells']}",
        f"{config['gt_demux_pipeline']['cellsnp_dir']}{config['fold_struct_gt_demux']}{config['gt_demux_pipeline']['cellsnp_base']}"

    params:
        # ref_snps=config['gt_demux_pipeline']['ref_snps'],
        umi_tag=config['gt_demux_pipeline']['umi_tag'],
        cell_tag=config['gt_demux_pipeline']['cell_tag'],
        processors=config['gt_demux_pipeline']['n_proc'],
        min_maf=config['gt_demux_pipeline']['min_maf'],
        min_ct=config['gt_demux_pipeline']['min_aggr_count'],
        output_prefix=lambda wildcards, output: output[0].replace(f"/{config['gt_demux_pipeline']['cellsnp_cells']}", ''),
        filt_vcf_dir=f"{config['gt_demux_pipeline']['filt_vcf_dir']}{config['fold_struct_gt_demux']}"[:-1], # remove trailing forward slash
        threads=config['gt_demux_pipeline']['bcftools_thread']

    threads: 8

    resources:
        mem_mb=allocate_mem_cS,
        time_min=allocate_time_cS
    
    conda: "../envs/gt_demux.yaml"

    shell:
        """
        read -r -a array <<< "{input}"
        opts1=("-b" "-s" "-R")
        opts2=("-b" "-s")
        cmd_str=""
        if [[ "${{#array[@]}}" -lt 4 ]]; then
            for i in {{0..3}}
            do
                cmd_str+="${{opts1[i]}} ${{array[i]}} "
            done
            cmd_str=$(echo ${{cmd_str}} | awk '{$1=$1};1')
            set -x
            cellsnp-lite ${{cmd_str}} -O {params.output_prefix} -p {params.processors} --minMAF {params.min_maf} --minCOUNT {params.min_ct} --cellTAG {params.cell_tag} --UMItag {params.umi_tag} --genotype --gzip
        else
            for i in {{0..1}}
            do
                cmd_str+="${{opts2[i]}} ${{array[i]}} "
            done
            cmd_str=$(echo ${{cmd_str}} | awk '{$1=$1};1')

            ml bcftools/1.15.1
            set -x
            bcftools isec --threads {params.threads} -e- -i'INFO/AF>0.25' -Oz -p {params.filt_vcf_dir} ${{array[@]: -2:2}}
            cellsnp-lite ${{cmd_str}} -O {params.output_prefix} -R {params.filt_vcf_dir}"/0002.vcf.gz" -p {params.processors} --minMAF {params.min_maf} --minCOUNT {params.min_ct} --cellTAG {params.cell_tag} --UMItag {params.umi_tag} --genotype --gzip
        fi
        set +x
        """


rule vireoSNP:
    input:
        get_vir_inputs
        
    output:
        f"{config['gt_demux_pipeline']['vireosnp_dir']}{config['fold_struct_gt_demux']}{config['gt_demux_pipeline']['donors_classification']}"

    # group: "genotype-demux"

    params:
        # donor_info=get_donor_info,
        geno_tag=config['gt_demux_pipeline']['donor_genotype'],
        output_prefix=lambda wildcards, output: output[0].replace(f"/{config['gt_demux_pipeline']['donors_classification']}", ''),
        n_donors=ret_dons

    threads: 7

    resources:
        mem_mb=allocate_mem_vS,
        time_min=allocate_time_vS
        
    conda: "../envs/gt_demux.yaml"

    shell:
        """
        opts=("-c" "-d")
        cmd_str=""
        read -r -a array <<< "{input}"
        for i in "${{!array[@]}}";
        do
            d+="${{opts[i]}} ${{array[i]}} "
        done
        d="${{d:0:${{#d}}-1}}"
        if [[ "{params.n_donors}" != "None" ]]; then
            set -x
            vireo ${{d}} -N {params.n_donors} -o {params.output_prefix} -t {params.geno_tag} --noPlot --randSeed 100
        elif [[ "{params.n_donors}" == "None" ]]; then
            set -x
            vireo ${{d}} -o {params.output_prefix} -t {params.geno_tag} --noPlot --randSeed 100
        else
            echo "Nothing ran! Check the conditions in the rule vireoSNP!"
        fi
        set +x
        """
