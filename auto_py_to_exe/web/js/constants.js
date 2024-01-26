const options_ignored = ['help'];
const options_static = ['filenames', 'onefile', 'console', 'icon_file', 'datas'];
const options_overridden = ['specpath', 'distpath', 'workpath', 'noconfirm'];

const options_inputTypeFile = ['runtime_hooks', 'version_file', 'manifest', 'resources', 'splash'];
const options_inputTypeDirectory = ['upx_dir', 'pathex', 'hookspath'];
const options_inputTypeDoubleFileDest = ['datas', 'binaries'];
const options_inputTypeDoubleDirectoryDest = ['datas'];

const advancedSections = [
  {
    titleI18nPath: 'dynamic.title.generalOptions',
    options: ['name', 'contents_directory', 'upx_dir', 'clean_build', 'loglevel'],
  },
  {
    titleI18nPath: 'dynamic.title.whatToBundleWhereToSearch',
    options: [
      'binaries',
      'pathex',
      'hiddenimports',
      'collect_submodules',
      'collect_data',
      'collect_binaries',
      'collect_all',
      'copy_metadata',
      'recursive_copy_metadata',
      'splash',
      'hookspath',
      'runtime_hooks',
      'excludes',
      'key',
    ],
  },
  {
    titleI18nPath: 'dynamic.title.howToGenerate',
    options: ['debug', 'python_options', 'strip', 'noupx', 'upx_exclude'],
  },
  {
    titleI18nPath: 'dynamic.title.windowsAndMacOsXSpecificOptions',
    options: ['hide_console', 'disable_windowed_traceback'],
  },
  {
    titleI18nPath: 'dynamic.title.windowsSpecificOptions',
    options: ['version_file', 'manifest', 'embed_manifest', 'resources', 'uac_admin', 'uac_uiaccess'],
  },
  {
    titleI18nPath: 'dynamic.title.macOsxSpecificOptions',
    options: ['argv_emulation', 'bundle_identifier', 'target_arch', 'codesign_identity', 'entitlements_file'],
  },
  {
    titleI18nPath: 'dynamic.title.rarelyUsedSpecialOptions',
    options: ['runtime_tmpdir', 'bootloader_ignore_signals'],
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
