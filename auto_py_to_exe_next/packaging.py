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


def get_pyinstaller_options():
    parser = __get_pyinstaller_argument_parser()

    options = []
    for action in parser._actions:
        # Clean out what we can't send over to the ui
        # Here is what we currently have: https://github.com/python/cpython/blob/master/Lib/argparse.py#L771
        del action.container
        options.append(action)

    return [o.__dict__ for o in options]


# TODO https://pyinstaller.readthedocs.io/en/stable/usage.html#running-pyinstaller-from-python-code

def package(pyinstaller_arguments, options, output_function=print):
    """
    Call PyInstaller to package a script using provided arguments and options.
    All output is passed to functions provided.
    :param pyinstaller_arguments: Arguments to supply to PyInstaller
    :param options: auto-py-to-exe specific options for setup and cleaning up
    :param output_function: A function to output messages to e.g. output_function("Output Message")
    :return: Whether packaging was successful
    """

    output_function('PyInstaller Arguments: ' + pyinstaller_arguments)
    output_function('Options: ' + str(options))

    # TODO Replace

    import time
    for i in range(5):
        time.sleep(1)
        output_function('Time: ' + str(i))

    # TODO End: Replace

    return True
