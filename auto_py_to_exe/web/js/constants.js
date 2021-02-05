const options_ignored = ['help'];
const options_static = ['filenames', 'onefile', 'console', 'icon_file', 'datas'];
const options_overridden = ['specpath', 'distpath', 'workpath', 'noconfirm'];

const options_inputTypeFile = ['runtime_hooks', 'version_file', 'manifest', 'resources'];
const options_inputTypeDirectory = ['upx_dir', 'pathex', 'hookspath'];
const options_inputTypeDoubleFileDest = ['datas', 'binaries'];
const options_inputTypeDoubleDirectoryDest = ['datas'];

const advancedSections = [
    {
        title: '常规选项',
        options: ['name', 'upx_dir', 'ascii', 'clean_build', 'loglevel']
    },
    {
        title: '捆绑什么，搜索哪里',
        options: ['binaries', 'pathex', 'hiddenimports', 'hookspath', 'runtime_hooks', 'excludes', 'key']
    },
    {
        title: '如何生成',
        options: ['debug', 'strip', 'noupx', 'upx_exclude']
    },
    {
        title: 'Windows特定选项',
        options: ['version_file', 'manifest', 'resources', 'uac_admin', 'uac_uiaccess']
    },
    {
        title: '窗口并排汇编搜索选项(高级)  Windows Side-by-side Assembly searching options (advanced)',
        options: ['win_private_assemblies', 'win_no_prefer_redirects']
    },
    {
        title: 'Mac OS X特定选项',
        options: ['bundle_identifier']
    },
    {
        title: '很少使用的特殊选项',
        options: ['runtime_tmpdir', 'bootloader_ignore_signals']
    },
];


// String constants
OPTION_IGNORED = 'OPTION_IGNORED';
OPTION_STATIC = 'OPTION_STATIC';
OPTION_OVERRIDDEN = 'OPTION_OVERRIDDEN';
OPTION_SHOW = 'OPTION_SHOW';

OPTION_INPUT_TYPE_SWITCH = 'OPTION_INPUT_TYPE_SWITCH';
OPTION_INPUT_TYPE_DROPDOWN = 'OPTION_INPUT_TYPE_DROPDOWN';
OPTION_INPUT_TYPE_INPUT = 'OPTION_INPUT_TYPE_INPUT';
OPTION_INPUT_TYPE_MULTIPLE_INPUT = 'OPTION_INPUT_TYPE_MULTIPLE_INPUT';
OPTION_INPUT_TYPE_DOUBLE_MULTIPLE_INPUT = 'OPTION_INPUT_TYPE_DOUBLE_MULTIPLE_INPUT';

OPTION_INPUT_VALUE_TEXT = 'OPTION_INPUT_VALUE_TEXT';
OPTION_INPUT_VALUE_FILE = 'OPTION_INPUT_VALUE_FILE';
OPTION_INPUT_VALUE_DIRECTORY = 'OPTION_INPUT_VALUE_DIRECTORY';
OPTION_INPUT_VALUE_DOUBLE_FILE_DEST = 'OPTION_INPUT_VALUE_DOUBLE_FILE_DEST';
OPTION_INPUT_VALUE_DOUBLE_DIRECTORY_DEST = 'OPTION_INPUT_VALUE_DOUBLE_DIRECTORY_DEST';

PACKAGING_STATE_READY = 'PACKAGING_STATE_READY';
PACKAGING_STATE_PACKAGING = 'PACKAGING_STATE_PACKAGING';
PACKAGING_STATE_COMPLETE = 'PACKAGING_STATE_COMPLETE';
