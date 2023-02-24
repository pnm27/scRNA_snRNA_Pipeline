Search.setIndex({"docnames": ["basic_run", "complex_tutorials", "create_Feat_Barc", "create_h5ad_from_bustools", "create_h5ad_from_calico_solo", "create_inp_cellSNP", "create_inp_splitBam", "create_inp_splitBam_phe_demux", "create_wet_lab_info", "demul_samples_ext_vS", "demul_samples_no_argp", "demultiplex_helper_funcs", "glossary", "highlights", "index", "modules", "set_up", "split_seth5ad_to_samph5ad", "sub_workflows", "update_logs"], "filenames": ["basic_run.md", "complex_tutorials.md", "create_Feat_Barc.rst", "create_h5ad_from_bustools.rst", "create_h5ad_from_calico_solo.rst", "create_inp_cellSNP.rst", "create_inp_splitBam.rst", "create_inp_splitBam_phe_demux.rst", "create_wet_lab_info.rst", "demul_samples_ext_vS.rst", "demul_samples_no_argp.rst", "demultiplex_helper_funcs.rst", "glossary.md", "highlights.md", "index.md", "modules.rst", "set_up.md", "split_seth5ad_to_samph5ad.rst", "sub_workflows.md", "update_logs.rst"], "titles": ["Understanding Snakemake workflows", "Demultiplex pooled snRNA seq datasets", "create_Feat_Barc module", "create_h5ad_from_bustools module", "create_h5ad_from_calico_solo module", "create_inp_cellSNP module", "create_inp_splitBam module", "create_inp_splitBam_phe_demux module", "create_wet_lab_info module", "demul_samples_ext_vS module", "demul_samples_no_argp module", "demultiplex_helper_funcs module", "Glossary", "Salient Features", "snRNA_scRNA_Pipeline Introduction", "helper_py_scripts", "Executing the Pipeline", "split_seth5ad_to_samph5ad module", "Modules", "update_logs module"], "terms": {"To": [0, 1, 12, 13], "begin": [0, 1], "thi": [0, 1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 16, 18], "setup": [0, 1], "i": [0, 1, 2, 13, 14, 16, 18], "highli": 0, "advis": 0, "go": [0, 13], "through": [0, 1, 14], "": [0, 2, 13, 14, 18], "tutori": [0, 1], "surmis": 0, "one": [0, 1, 4, 6, 11, 12, 13, 18], "should": [0, 4, 5, 14], "follow": [0, 1, 14, 18], "bottom": 0, "top": 0, "approach": 0, "e": [0, 5, 14, 18], "identifi": [0, 11, 18], "final": [0, 1, 14], "requir": [0, 18], "build": 0, "wai": [0, 1], "infput": 0, "an": [0, 4, 5, 12, 14], "exampl": [0, 2, 3, 12], "dag": [0, 12], "let": 0, "start": [0, 1], "run": [0, 3, 4, 5, 12, 14, 18], "softwar": [0, 6, 13, 14], "preprocess": [0, 12, 14], "scrnaseq": 0, "data": 0, "us": [0, 1, 2, 4, 5, 11, 12, 13, 14, 18], "starsolo": [0, 13, 14, 18], "align": [0, 14], "our": [0, 1], "cdna": 0, "picard": [0, 14, 18], "tool": [0, 5, 14], "while": [0, 18], "retain": [0, 4, 12], "all": [0, 1, 11, 13, 16, 18], "statist": 0, "produc": [0, 4, 11, 12, 18], "For": [0, 12, 13, 14], "case": [0, 12, 14, 16], "we": [0, 1], "2": [0, 1, 6, 11, 18], "from": [0, 1, 3, 4, 11, 12, 14], "output": [0, 3, 4, 6, 11, 13, 14, 18], "program": [0, 13, 14, 18], "collectgcbiasmetr": [0, 18], "collectrnaseqmetr": [0, 18], "thei": 0, "independ": 0, "each": [0, 1, 6, 11, 12, 14, 18], "other": 0, "henc": 0, "were": 0, "onli": [0, 1, 14], "won": 0, "t": [0, 14], "assimil": 0, "read": [0, 1, 14], "runn": 0, "anoth": [0, 11, 13], "script": [0, 2, 4, 5, 14, 16, 18], "run_update_log": 0, "sh": [0, 16], "click": [0, 12], "here": [0, 1, 12, 13, 16], "know": 0, "firstli": [0, 1], "list": [0, 1, 2, 5, 11], "input": [0, 5, 14, 18], "check": [0, 14], "differ": [0, 14, 16], "style": 0, "text": [0, 6], "line": [0, 14], "per": [0, 11, 18], "sampl": [0, 1, 2, 12, 14, 18], "pic": 0, "show": [0, 1], "present": [0, 1, 11, 13, 14], "directori": 0, "content": 0, "As": 0, "can": [0, 5, 12, 14, 16, 18], "see": [0, 14], "contain": [0, 1, 2, 4, 5, 11, 13, 18], "represent": 0, "doesn": 0, "separ": [0, 1, 2, 11, 14], "r1": 0, "r2": 0, "tree": 0, "structur": [0, 14], "complex": [1, 14], "workflow": [1, 14, 16], "simplifi": [1, 14], "streamlin": [1, 14], "make": [1, 11, 14], "more": [1, 4, 13, 14, 18], "interest": 1, "annot": [1, 4, 6], "individu": [1, 12, 14, 18], "genotyp": [1, 18], "base": [1, 18], "cellsnp": [1, 5, 14, 18], "vireosnp": [1, 11, 14, 18], "well": [1, 14], "hto": [1, 2, 11, 14], "kite": [1, 14, 18], "hashsolo": [1, 4, 11, 14, 18], "The": [1, 11, 13, 14, 16, 18], "visual": 1, "need": [1, 11, 14, 18], "creat": [1, 2, 3, 4, 5, 6, 7, 14, 18], "deriv": 1, "fastq": [13, 14], "which": [1, 12, 13, 14], "input_process": [1, 18], "add": [1, 14], "link": 1, "wildcard": [1, 13, 18], "ani": [1, 14, 16], "utilis": 1, "set": [1, 14, 18], "up": [1, 14], "new_config": [1, 13, 14], "yaml": [1, 13, 14], "config": [1, 14], "ha": [1, 18], "relev": 1, "option": [1, 11, 13, 14, 18], "furthermor": 1, "been": [1, 5], "section": 1, "comment": 1, "sub": [1, 14], "ocur": 1, "order": [1, 14], "appear": 1, "typic": 1, "ar": [1, 11, 13, 14, 16, 18], "certain": [1, 14], "irrespect": 1, "being": 1, "pictur": 1, "showcas": 1, "part": 1, "1": [1, 12, 16, 18], "3": [1, 2, 16], "last_step": 1, "kei": 1, "fed": 1, "pre": [1, 13, 14], "select": [1, 14], "have": [1, 4, 5, 6], "snakefil": 1, "featur": [2, 14], "barcod": [2, 3, 4, 5, 6, 11, 12], "file": [2, 3, 4, 6, 11, 12, 13, 14, 16, 18], "kiteseq": 2, "featurebarcod": 2, "csv": 2, "given": [2, 4], "name": [2, 11, 14, 18], "its": [2, 6, 11, 18], "correspond": [2, 6], "respect": [2, 18], "python3": [2, 3, 4], "py": [2, 3, 4, 14], "h": [2, 3, 4, 11], "input_fil": 2, "o": [2, 3], "output_fil": 2, "sample_nam": 2, "c": 2, "space": 2, "column": [2, 5, 6, 11], "samples_info": 2, "txt": [2, 3], "sample_1_fb": 2, "sample_1": 2, "set_nam": 2, "hto_nam": 2, "hto_bc": 2, "hto1": 2, "atctatggttg": 2, "hto3": 2, "atgaatggttg": 2, "sample_2": 2, "atccggtgttg": 2, "hto4": 2, "hto2": 2, "agctatggttg": 2, "hto6": 2, "atttatggttg": 2, "hto5": 2, "atctcttgttg": 2, "hto8": 2, "atctactattg": 2, "get_argument_pars": [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 17, 19], "gener": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 19], "return": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 19], "argument": [2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 19], "parser": [2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 19], "main": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 19], "function": [2, 5, 6, 8, 11, 14, 18], "h5ad": [3, 4, 5, 14], "bustool": [3, 4, 18], "take": [3, 5, 14], "after": 3, "count": [3, 4, 5, 11, 12, 14, 18], "sample_1_bus_op": 3, "mtx": 3, "h5ad_fil": 3, "hash": [4, 12], "usual": 4, "obtain": 4, "sofwatr": 4, "like": 4, "matrix": [4, 5, 11, 12, 14, 18], "gene": [4, 11, 12, 14], "often": 4, "than": 4, "mai": 4, "lesser": 4, "them": [4, 6, 14], "compar": 4, "thu": 4, "expect": 4, "max": 4, "number": [4, 11], "hase": 4, "effect": 5, "depend": [5, 14, 18], "condit": 5, "some": [5, 14], "cell": [5, 6, 11, 12, 14], "remov": [5, 14, 18], "g": [5, 14], "alreadi": 5, "demultiplex": [5, 6, 14, 18], "wa": 5, "classif": [5, 11], "classifi": [5, 11], "doublet": [5, 11, 12], "neg": [5, 11], "too": [5, 14], "save_df": [6, 7, 15], "df": [6, 7], "suff": [6, 7], "op": [6, 7], "get_subid": [8, 15], "ser1": 8, "df1": 8, "df2": 8, "get_don_id": [9, 11, 15], "x": [9, 11], "t_df": [9, 11], "str": [9, 11], "read_files_ext": [9, 15, 17], "fname": [9, 11, 17], "datafram": [9, 11, 17], "ret_subj_id": [9, 11, 15], "ser": [9, 11], "set_don_id": [9, 11, 15], "redo_test": [], "inp_kei": [], "rem_last_n_char": [], "0": 16, "ret_hto_numb": [], "y": [], "df_info": [], "ret_htos_calico_solo": [11, 15], "bc": 11, "seri": 11, "df_": 11, "panda": 11, "core": 11, "frame": [], "int": 11, "inform": 11, "blah": [], "paramet": [11, 14], "A": [11, 12, 14], "pd": 11, "wet": [11, 14], "lab": [11, 14], "subid": 11, "donor": [6, 11, 12, 14], "id": [11, 14], "pool": [11, 12, 14, 18], "index": [11, 14], "ret_samp_nam": [], "auto_read": [11, 15], "parse_hto": [], "wet_lab_df": 11, "col_val": 11, "s_name": 11, "none": [7, 11, 17], "parse_subid": [11, 15], "where": [12, 18], "oligo": 12, "tag": [12, 14], "antibodi": 12, "against": 12, "ubiquit": 12, "express": 12, "surfac": 12, "protein": 12, "uniqu": [12, 14], "label": 12, "distinct": 12, "subsequ": 12, "szhl": 12, "18": 12, "singl": [12, 14], "experi": 12, "directli": 12, "analysi": 12, "pipelin": [12, 13], "mean": 12, "either": [12, 14, 18], "attribut": 12, "origin": 12, "direct": [12, 18], "acycl": [12, 18], "graph": [12, 18], "marlon": 12, "stoeckiu": 12, "shiwei": 12, "zheng": 12, "brian": 12, "houck": 12, "loomi": 12, "stephani": 12, "hao": 12, "bertrand": 12, "z": 12, "yeung": 12, "william": 12, "m": 12, "mauck": 12, "3rd": 12, "peter": 12, "smibert": 12, "rahul": 12, "satija": 12, "enabl": 12, "multiplex": [12, 14, 18], "detect": 12, "genom": [12, 14], "biol": 12, "19": 12, "224": 12, "decemb": 12, "2018": [12, 16], "heart": 13, "modifi": [13, 14], "properti": 13, "place": 13, "info": [13, 14, 16, 18], "promin": 13, "abil": 13, "captur": 13, "folder": [13, 14], "provid": [13, 14, 18], "organ": [13, 14], "variou": [13, 14], "similar": [11, 13, 14], "vari": 13, "manner": 13, "understand": 13, "ad": [13, 14], "extra": [11, 13, 14], "param": [13, 14], "add_her": 13, "mani": [13, 18], "document": 14, "incomplet": 14, "under": 14, "heavi": 14, "develop": 14, "rule": [14, 18], "specif": [14, 18], "conda": 14, "env": 14, "verifi": 14, "split_bam": [14, 18], "split_bams_gt": [14, 18], "pheno_demux3": [14, 18], "genefull_matric": 14, "geneful": 14, "project": 14, "chang": [11, 14], "create_inp_splitbam": [14, 15], "create_inp_splitbams_gt_demux": 14, "low": 14, "mito": 14, "beautifi": [11, 14], "get_filt_barcod": 14, "snkmk": [14, 18], "emploi": 14, "strategi": 14, "dir": 14, "when": 14, "both": [14, 18], "simultan": 14, "try": 14, "least": 14, "keep": 14, "somewher": 14, "mention": [14, 16, 18], "demultiplex_no_argp": [14, 18], "switch": 14, "do": 14, "gt": 14, "assign": [11, 14], "ref": 14, "snp": 14, "vcf": [14, 18], "subset": 14, "further": 14, "method": 14, "move": 14, "configargpars": 14, "write": 14, "down": 14, "schema": 14, "snrna": 14, "seq": 14, "simpl": 14, "scrna": 14, "combin": [14, 18], "fix": 14, "issu": 14, "old": 14, "wet_lab_info": 14, "updat": 14, "extens": 14, "create_wet_lab_info": [14, 15], "miss": 14, "amp": 14, "ones": 14, "allow": 14, "everi": 14, "wasp": 14, "mode": 14, "starsolo_sort": 14, "new": 14, "metric": [14, 18], "includ": 14, "search": 14, "rank": 14, "readthedoc": 14, "might": [14, 18], "incorpor": 14, "git": 14, "submodul": 14, "repo": 14, "intend": 14, "easi": 14, "doubl": 14, "etc": 14, "also": [11, 14], "facilit": 14, "common": 14, "readymad": 14, "modul": [14, 15], "It": [14, 18], "support": 14, "process": 14, "highlight": 14, "easili": 14, "accomod": 14, "preserv": 14, "mirror": 14, "multipl": [6, 14, 18], "usag": [14, 15], "across": 14, "gene_id": 14, "associ": 14, "gene_nam": 14, "stat": [11, 14], "without": 14, "1000": 14, "min": 14, "now": 14, "convert": [11, 14], "save": 14, "along": 14, "compil": 14, "argpars": 14, "action": 14, "packag": 14, "scanpi": 14, "manual": 14, "snakemak": 14, "gc": 14, "bia": 14, "rna": 14, "kallisto": [14, 18], "extract": 14, "qtltool": [14, 18], "mbv": [14, 18], "salient": 14, "maintain": 14, "modif": 14, "addit": 14, "One": 14, "popular": 14, "resourc": [14, 18], "mainten": 14, "re": 14, "attempt": 14, "known": 14, "error": 14, "execut": [14, 18], "instal": 14, "profil": 14, "basic": 14, "descript": 14, "overview": 14, "dataset": 14, "overwiew": 14, "prepar": 14, "target": 14, "configur": 14, "executor": 14, "glossari": 14, "page": 14, "create_feat_barc": [14, 15], "help": 15, "create_h5ad_from_bustool": [14, 15], "create_h5ad_from_calico_solo": [14, 15], "create_inp_cellsnp": [14, 15], "create_inp_splitbam_phe_demux": [14, 15], "demul_sampl": [], "demul_samples_ext_v": [14, 15], "demul_samples_no_argp": [14, 15], "demultiplex_helper_func": [14, 15], "get_vir_demux_stat": [], "resolve_gt_swap": [], "conv_typ": [], "get_prop_don": [], "split_seth5ad_to_samph5ad": [14, 15], "check_sam": [15, 17], "get_donor": [15, 17], "update_log": [14, 15], "calc_ratio": [15, 19], "get_df": [15, 19], "get_filenam": [15, 19], "get_latest_extra_column": [15, 19], "write_log": [15, 19], "val": 11, "anaconda3": 16, "12": 16, "python": 16, "9": 16, "5": 16, "describ": 16, "add_link": 16, "version": 16, "r": 16, "4": 16, "workload": 16, "manag": 16, "submit": 16, "call": 16, "run_snakemak": 16, "ann_d": 17, "files_l": 17, "ann_d2": 17, "boolean": 17, "inp_df": 17, "col_val1": 17, "col_val2": 17, "d": 17, "mh": 17, "sn_f": 17, "sn_g": 17, "is_log": 17, "batch": 17, "dict": 17, "lev": 17, "aforement": 18, "built": 18, "keyword": 18, "starsolo_rnaseqmet": 18, "starsolo_gcbiasmet": 18, "starsolo_kb_solo": 18, "starsolo_picard": 18, "starsolo_gt_demux": 18, "starsolo_split_bam": 18, "starsolo_split_bams_gt_demux": 18, "starsolo_split_bams_gt_demux_multi_vcf": 18, "starsolo_gt_demux_multi_vcf": 18, "starsolo_cellsnp": 18, "starsolo_rnaseqmet_kb_solo": 18, "starsolo_gcbiasmet_kb_solo": 18, "starsolo_gt_demux_identify_swap": 18, "starsolo_resolve_swaps_gt_demux": 18, "repres": [11, 18], "rnaseqmet": 18, "gcbiasmet": 18, "refer": 18, "inclus": 18, "previous": 18, "kb_solo": 18, "calico_solo": [11, 18], "gt_demux": 18, "split": 18, "bam": 18, "split_bams_gt_demux": 18, "vireo": [11, 18], "identify_swap": 18, "qtltools_mbv": 18, "multi_vcf": 18, "muiltipl": 18, "same": 18, "worflow": 18, "involv": 18, "module_info": 18, "desc": 18, "own": 18, "sub_wkfl": 18, "divid": 18, "self": 18, "These": 18, "memori": 18, "mb": 18, "thread": 18, "time": 18, "minut": 18, "calico_solo_demux": 18, "custom": 18, "collect": 18, "valu": 18, "produce_target": 18, "snv_aware_align": 18, "soon": 18, "picard_metr": 18, "gcbiasmetr": 18, "rnaseqmetr": 18, "swap": 18, "whole": 18, "consolid": 18, "Not": 18, "yet": 18, "implement": 18, "numer": 19, "denom": 19, "inp_path": 19, "loc_dir": 19, "file_struct": 19, "fn": 19, "suffix": 19, "big_df": 19, "mapper": 19, "all_files_dict": 19, "no_prog": 19, "kwarg": [11, 19], "helper_py_script": 14, "entri": [6, 10, 19], "point": [10, 19], "parse_fil": [11, 15], "col": 11, "samp": 11, "sep": [6, 7, 11], "col_list": 11, "row": 11, "first": [6, 11], "second": [6, 11], "demux_by_calico_solo": [11, 15], "obs_index": [], "demux_stat": [11, 15], "demux_freq": 11, "dem_c": 11, "solo": 11, "demux_nam": 11, "If": 6, "want": 6, "demux_by_vireo": [11, 15], "vir_out_fil": 11, "conv_df": 11, "path": 11, "donor_id": 11, "tsv": 11, "demux": 11, "covert": 11, "string": 11, "type": 11, "convent": 11, "convet": 11, "suit": 11, "so": 11, "feasibl": 11}, "objects": {"": [[2, 0, 0, "-", "create_Feat_Barc"], [3, 0, 0, "-", "create_h5ad_from_bustools"], [4, 0, 0, "-", "create_h5ad_from_calico_solo"], [5, 0, 0, "-", "create_inp_cellSNP"], [6, 0, 0, "-", "create_inp_splitBam"], [7, 0, 0, "-", "create_inp_splitBam_phe_demux"], [8, 0, 0, "-", "create_wet_lab_info"], [9, 0, 0, "-", "demul_samples_ext_vS"], [10, 0, 0, "-", "demul_samples_no_argp"], [11, 0, 0, "-", "demultiplex_helper_funcs"], [17, 0, 0, "-", "split_seth5ad_to_samph5ad"], [19, 0, 0, "-", "update_logs"]], "create_Feat_Barc": [[2, 1, 1, "", "get_argument_parser"], [2, 1, 1, "", "main"]], "create_h5ad_from_bustools": [[3, 1, 1, "", "get_argument_parser"], [3, 1, 1, "", "main"]], "create_h5ad_from_calico_solo": [[4, 1, 1, "", "get_argument_parser"], [4, 1, 1, "", "main"]], "create_inp_cellSNP": [[5, 1, 1, "", "get_argument_parser"], [5, 1, 1, "", "main"]], "create_inp_splitBam": [[6, 1, 1, "", "get_argument_parser"], [6, 1, 1, "", "main"], [6, 1, 1, "", "save_df"]], "create_inp_splitBam_phe_demux": [[7, 1, 1, "", "get_argument_parser"], [7, 1, 1, "", "main"], [7, 1, 1, "", "save_df"]], "create_wet_lab_info": [[8, 1, 1, "", "get_argument_parser"], [8, 1, 1, "", "get_subid"], [8, 1, 1, "", "main"]], "demul_samples_ext_vS": [[9, 1, 1, "", "get_argument_parser"], [9, 1, 1, "", "get_don_ids"], [9, 1, 1, "", "main"], [9, 1, 1, "", "read_files_ext"], [9, 1, 1, "", "ret_subj_ids"], [9, 1, 1, "", "set_don_ids"]], "demul_samples_no_argp": [[10, 1, 1, "", "get_argument_parser"], [10, 1, 1, "", "main"]], "demultiplex_helper_funcs": [[11, 1, 1, "", "auto_read"], [11, 1, 1, "", "demux_by_calico_solo"], [11, 1, 1, "", "demux_by_vireo"], [11, 1, 1, "", "demux_stats"], [11, 1, 1, "", "get_don_ids"], [11, 1, 1, "", "parse_file"], [11, 1, 1, "", "parse_subids"], [11, 1, 1, "", "ret_htos_calico_solo"], [11, 1, 1, "", "ret_subj_ids"], [11, 1, 1, "", "set_don_ids"]], "split_seth5ad_to_samph5ad": [[17, 1, 1, "", "check_same"], [17, 1, 1, "", "get_argument_parser"], [17, 1, 1, "", "get_donors"], [17, 1, 1, "", "main"], [17, 1, 1, "", "read_files_ext"]], "update_logs": [[19, 1, 1, "", "calc_ratio"], [19, 1, 1, "", "get_argument_parser"], [19, 1, 1, "", "get_df"], [19, 1, 1, "", "get_filename"], [19, 1, 1, "", "get_latest_extra_columns"], [19, 1, 1, "", "main"], [19, 1, 1, "", "write_logs"]]}, "objtypes": {"0": "py:module", "1": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"]}, "titleterms": {"understand": [0, 14], "snakemak": [0, 18], "workflow": [0, 13, 18], "A": 0, "basic": 0, "pipelin": [0, 1, 14, 16, 18], "set": [0, 16], "up": [0, 16], "how": 0, "fastq": [0, 1], "file": [0, 1], "ar": 0, "arrang": 0, "creat": 0, "fastq_fil": 0, "txt": 0, "demultiplex": 1, "pool": 1, "snrna": 1, "seq": 1, "dataset": 1, "overwiew": 1, "prepar": 1, "target": 1, "configur": 1, "common": 1, "project": [1, 13], "specif": 1, "paramet": 1, "dag": 1, "control": 1, "info": 1, "param": 1, "folder": 1, "structur": [1, 13], "extra": 1, "can": 1, "remov": 1, "soon": 1, "modul": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19], "selector": 1, "chang": 1, "rule": [1, 13], "executor": 1, "script": 1, "create_feat_barc": 2, "help": [2, 3], "usag": 2, "create_h5ad_from_bustool": 3, "create_h5ad_from_calico_solo": 4, "create_inp_cellsnp": 5, "create_inp_splitbam": 6, "create_inp_splitbam_phe_demux": 7, "create_wet_lab_info": 8, "demul_sampl": [], "demul_samples_ext_v": 9, "demul_samples_no_argp": 10, "demultiplex_helper_func": 11, "ret_htos_calico_solo": [], "get_vir_demux_stat": [], "glossari": 12, "salient": 13, "featur": 13, "streamlin": 13, "maintain": 13, "easi": 13, "modif": 13, "addit": 13, "One": 13, "select": [13, 18], "run": 13, "popular": 13, "resourc": 13, "mainten": 13, "re": 13, "attempt": 13, "known": 13, "issu": 13, "error": 13, "snrna_scrna_pipelin": 14, "introduct": 14, "todo": 14, "changelog": 14, "requir": 14, "get": 14, "start": 14, "advanc": 14, "tutori": 14, "refer": 14, "indic": 14, "tabl": 14, "helper_py_script": 15, "resolve_gt_swap": [], "execut": 16, "instal": 16, "depend": 16, "packag": 16, "through": 16, "conda": 16, "pip": 16, "profil": 16, "split_seth5ad_to_samph5ad": 17, "descript": 18, "modules_info": 18, "sub": 18, "sub_snakemake_workflows_t": 18, "overview": 18, "update_log": 19, "paramt": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"Understanding Snakemake workflows": [[0, "understanding-snakemake-workflows"]], "A basic pipeline": [[0, "a-basic-pipeline"]], "Setting up": [[0, "setting-up"]], "How fastq files are arranged": [[0, "how-fastq-files-are-arranged"]], "Create fastq_files.txt": [[0, "create-fastq-files-txt"]], "Salient Features": [[13, "salient-features"]], "Streamlined": [[13, "streamlined"]], "Maintaining project structure": [[13, "maintaining-project-structure"]], "Easy modification or addition of rules": [[13, "easy-modification-or-addition-of-rules"]], "One-select running of popular workflows": [[13, "one-select-running-of-popular-workflows"]], "Easy resource maintenance": [[13, "easy-resource-maintenance"]], "Re-attempts for known issues or errors": [[13, "re-attempts-for-known-issues-or-errors"]], "Executing the Pipeline": [[16, "executing-the-pipeline"]], "Installing dependencies": [[16, "installing-dependencies"]], "Packages installed through conda": [[16, "packages-installed-through-conda"]], "Packages installed through pip": [[16, "packages-installed-through-pip"]], "Setting up profiles": [[16, "setting-up-profiles"]], "Executing Pipeline": [[16, "executing-pipeline"]], "Glossary": [[12, "glossary"]], "Modules": [[18, "modules"]], "Selectable Modules": [[18, "selectable-modules"]], "Module description": [[18, "module-description"]], "Modules_info": [[18, "module-info-table"]], "Sub-Snakemake workflows": [[18, "sub-snakemake-workflows"]], "Sub_Snakemake_workflows_table": [[18, "sub-smk-info-table"]], "Overview of the pipeline": [[18, "overview-of-the-pipeline"]], "Demultiplex pooled snRNA seq datasets": [[1, "demultiplex-pooled-snrna-seq-datasets"]], "Pipeline overwiew": [[1, "pipeline-overwiew"]], "Preparing target files": [[1, "preparing-target-files"]], "Fastq File Structure": [[1, "fastq-file-structure"]], "Configuration File": [[1, "configuration-file"]], "Common (project-specific) parameters": [[1, "common-project-specific-parameters"]], "DAG control and project info params": [[1, "dag-control-and-project-info-params"]], "Folder structures": [[1, "folder-structures"]], "Extra Info (can be removed soon!)": [[1, "extra-info-can-be-removed-soon"]], "Module selector": [[1, "module-selector"]], "Project-specific changes to rules": [[1, "project-specific-changes-to-rules"]], "Changes to executor script": [[1, "changes-to-executor-script"]], "snRNA_scRNA_Pipeline Introduction": [[14, "snrna-scrna-pipeline-introduction"]], "TODO:": [[14, "todo"]], "Changelog:": [[14, "changelog"]], "Requirements": [[14, "requirements"]], "Introduction": [[14, null]], "Getting Started": [[14, null]], "Understanding the Pipeline": [[14, null]], "Advanced Tutorials": [[14, null]], "Reference": [[14, null]], "Indices and tables": [[14, "indices-and-tables"]], "create_Feat_Barc module": [[2, "module-create_Feat_Barc"]], "Help": [[2, "help"], [3, "help"]], "Usage": [[2, "usage"]], "create_h5ad_from_bustools module": [[3, "module-create_h5ad_from_bustools"]], "create_h5ad_from_calico_solo module": [[4, "module-create_h5ad_from_calico_solo"]], "create_inp_cellSNP module": [[5, "module-create_inp_cellSNP"]], "create_inp_splitBam module": [[6, "module-create_inp_splitBam"]], "create_inp_splitBam_phe_demux module": [[7, "module-create_inp_splitBam_phe_demux"]], "create_wet_lab_info module": [[8, "module-create_wet_lab_info"]], "demul_samples_ext_vS module": [[9, "module-demul_samples_ext_vS"]], "demul_samples_no_argp module": [[10, "module-demul_samples_no_argp"]], "demultiplex_helper_funcs module": [[11, "module-demultiplex_helper_funcs"]], "Paramters": [[11, "paramters"]], "helper_py_scripts": [[15, "helper-py-scripts"]], "split_seth5ad_to_samph5ad module": [[17, "module-split_seth5ad_to_samph5ad"]], "update_logs module": [[19, "module-update_logs"]]}, "indexentries": {"create_feat_barc": [[2, "module-create_Feat_Barc"]], "get_argument_parser() (in module create_feat_barc)": [[2, "create_Feat_Barc.get_argument_parser"]], "main() (in module create_feat_barc)": [[2, "create_Feat_Barc.main"]], "module": [[2, "module-create_Feat_Barc"], [3, "module-create_h5ad_from_bustools"], [4, "module-create_h5ad_from_calico_solo"], [5, "module-create_inp_cellSNP"], [6, "module-create_inp_splitBam"], [7, "module-create_inp_splitBam_phe_demux"], [8, "module-create_wet_lab_info"], [9, "module-demul_samples_ext_vS"], [10, "module-demul_samples_no_argp"], [11, "module-demultiplex_helper_funcs"], [17, "module-split_seth5ad_to_samph5ad"], [19, "module-update_logs"]], "create_h5ad_from_bustools": [[3, "module-create_h5ad_from_bustools"]], "get_argument_parser() (in module create_h5ad_from_bustools)": [[3, "create_h5ad_from_bustools.get_argument_parser"]], "main() (in module create_h5ad_from_bustools)": [[3, "create_h5ad_from_bustools.main"]], "create_h5ad_from_calico_solo": [[4, "module-create_h5ad_from_calico_solo"]], "get_argument_parser() (in module create_h5ad_from_calico_solo)": [[4, "create_h5ad_from_calico_solo.get_argument_parser"]], "main() (in module create_h5ad_from_calico_solo)": [[4, "create_h5ad_from_calico_solo.main"]], "create_inp_cellsnp": [[5, "module-create_inp_cellSNP"]], "get_argument_parser() (in module create_inp_cellsnp)": [[5, "create_inp_cellSNP.get_argument_parser"]], "main() (in module create_inp_cellsnp)": [[5, "create_inp_cellSNP.main"]], "create_inp_splitbam": [[6, "module-create_inp_splitBam"]], "get_argument_parser() (in module create_inp_splitbam)": [[6, "create_inp_splitBam.get_argument_parser"]], "main() (in module create_inp_splitbam)": [[6, "create_inp_splitBam.main"]], "save_df() (in module create_inp_splitbam)": [[6, "create_inp_splitBam.save_df"]], "create_inp_splitbam_phe_demux": [[7, "module-create_inp_splitBam_phe_demux"]], "get_argument_parser() (in module create_inp_splitbam_phe_demux)": [[7, "create_inp_splitBam_phe_demux.get_argument_parser"]], "main() (in module create_inp_splitbam_phe_demux)": [[7, "create_inp_splitBam_phe_demux.main"]], "save_df() (in module create_inp_splitbam_phe_demux)": [[7, "create_inp_splitBam_phe_demux.save_df"]], "create_wet_lab_info": [[8, "module-create_wet_lab_info"]], "get_argument_parser() (in module create_wet_lab_info)": [[8, "create_wet_lab_info.get_argument_parser"]], "get_subid() (in module create_wet_lab_info)": [[8, "create_wet_lab_info.get_subid"]], "main() (in module create_wet_lab_info)": [[8, "create_wet_lab_info.main"]], "demul_samples_ext_vs": [[9, "module-demul_samples_ext_vS"]], "get_argument_parser() (in module demul_samples_ext_vs)": [[9, "demul_samples_ext_vS.get_argument_parser"]], "get_don_ids() (in module demul_samples_ext_vs)": [[9, "demul_samples_ext_vS.get_don_ids"]], "main() (in module demul_samples_ext_vs)": [[9, "demul_samples_ext_vS.main"]], "read_files_ext() (in module demul_samples_ext_vs)": [[9, "demul_samples_ext_vS.read_files_ext"]], "ret_subj_ids() (in module demul_samples_ext_vs)": [[9, "demul_samples_ext_vS.ret_subj_ids"]], "set_don_ids() (in module demul_samples_ext_vs)": [[9, "demul_samples_ext_vS.set_don_ids"]], "demul_samples_no_argp": [[10, "module-demul_samples_no_argp"]], "get_argument_parser() (in module demul_samples_no_argp)": [[10, "demul_samples_no_argp.get_argument_parser"]], "main() (in module demul_samples_no_argp)": [[10, "demul_samples_no_argp.main"]], "auto_read() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.auto_read"]], "demultiplex_helper_funcs": [[11, "module-demultiplex_helper_funcs"]], "demux_by_calico_solo() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.demux_by_calico_solo"]], "demux_by_vireo() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.demux_by_vireo"]], "demux_stats() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.demux_stats"]], "get_don_ids() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.get_don_ids"]], "parse_file() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.parse_file"]], "parse_subids() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.parse_subids"]], "ret_htos_calico_solo() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.ret_htos_calico_solo"]], "ret_subj_ids() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.ret_subj_ids"]], "set_don_ids() (in module demultiplex_helper_funcs)": [[11, "demultiplex_helper_funcs.set_don_ids"]], "check_same() (in module split_seth5ad_to_samph5ad)": [[17, "split_seth5ad_to_samph5ad.check_same"]], "get_argument_parser() (in module split_seth5ad_to_samph5ad)": [[17, "split_seth5ad_to_samph5ad.get_argument_parser"]], "get_donors() (in module split_seth5ad_to_samph5ad)": [[17, "split_seth5ad_to_samph5ad.get_donors"]], "main() (in module split_seth5ad_to_samph5ad)": [[17, "split_seth5ad_to_samph5ad.main"]], "read_files_ext() (in module split_seth5ad_to_samph5ad)": [[17, "split_seth5ad_to_samph5ad.read_files_ext"]], "split_seth5ad_to_samph5ad": [[17, "module-split_seth5ad_to_samph5ad"]], "calc_ratio() (in module update_logs)": [[19, "update_logs.calc_ratio"]], "get_argument_parser() (in module update_logs)": [[19, "update_logs.get_argument_parser"]], "get_df() (in module update_logs)": [[19, "update_logs.get_df"]], "get_filename() (in module update_logs)": [[19, "update_logs.get_filename"]], "get_latest_extra_columns() (in module update_logs)": [[19, "update_logs.get_latest_extra_columns"]], "main() (in module update_logs)": [[19, "update_logs.main"]], "update_logs": [[19, "module-update_logs"]], "write_logs() (in module update_logs)": [[19, "update_logs.write_logs"]]}})