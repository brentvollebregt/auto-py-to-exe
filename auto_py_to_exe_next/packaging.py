import argparse


def __get_pyinstaller_argument_parser():
    from PyInstaller.building.makespec import __add_options as add_makespec_options
    from PyInstaller.building.build_main import __add_options as add_build_options
    from PyInstaller.log import __add_options as add_log_options

    parser = argparse.ArgumentParser()

    add_makespec_options(parser)
    add_build_options(parser)
    add_log_options(parser)

    parser.add_argument('filenames', metavar='scriptname', nargs='+',
                        help=("name of scriptfiles to be processed or "
                              "exactly one .spec-file. If a .spec-file is "
                              "specified, most options are unnecessary "
                              "and are ignored."))  # From PyInstaller.__main__.run

    return parser


def __get_pyinstaller_options():
    parser = __get_pyinstaller_argument_parser()

    options = []
    for action in parser._actions:
        # Clean out what we can't send over to the ui
        # Here is what we currently have: https://github.com/python/cpython/blob/master/Lib/argparse.py#L771
        del action.container
        options.append(action)

    return options
