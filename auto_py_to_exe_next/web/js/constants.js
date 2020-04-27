/*
Constant strings and lists
*/

// Options that are statically defined in the ui, overriden by auto-py-to-exe or not wanted
const staticAndIgnoredOptions = [
    'help', // Will trigger an unwanted short circuit
    'filenames', // filenames is handled by static content
    'onefile', // onefile and onedir and handled by static content
    'console', // console and windowed and handled by static content
    'icon_file', // icon_file is handled by static content
    'datas', // datas is handled by static content
    'specpath', // This is overrided by auto-py-to-exe
    'distpath', // This is overrided by auto-py-to-exe
    'workpath', // This is overrided by auto-py-to-exe
    'noconfirm' // This always used by auto-py-to-exe (-y)
];

// The options to go into each section in the advanced tab
const sectionOptions = [
    {
        title: 'General Options',
        options: ['name', 'upx_dir', 'ascii', 'clean_build', 'loglevel']
    },
    {
        title: 'What to bundle, where to search',
        options: ['binaries', 'pathex', 'hiddenimports', 'hookspath', 'runtime_hooks', 'excludes', 'key']
    },
    {
        title: 'How to generate',
        options: ['debug', 'strip', 'noupx', 'upx_exclude']
    },
    {
        title: 'Windows specific options',
        options: ['version_file', 'manifest', 'resources', 'uac_admin', 'uac_uiaccess']
    },
    {
        title: 'Windows Side-by-side Assembly searching options (advanced)',
        options: ['win_private_assemblies', 'win_no_prefer_redirects']
    },
    {
        title: 'Mac OS X specific options',
        options: ['bundle_identifier']
    },
    {
        title: 'Rarely used special options',
        options: ['runtime_tmpdir', 'bootloader_ignore_signals']
    },
];

// Options that expect file and directory paths
const fileOptions = ['runtime_hooks', 'version_file', 'manifest', 'resources'];
const directoryOptions = ['upx_dir', 'pathex', 'hookspath', 'runtime_tmpdir'];
