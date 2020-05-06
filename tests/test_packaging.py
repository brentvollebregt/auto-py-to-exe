import os
import subprocess

from helpers import TemporaryDirectory, PythonScriptAsFile, os_allow

from auto_py_to_exe.packaging import package
from auto_py_to_exe import config as auto_py_to_exe_config


@os_allow(['Windows'])
def test_basic_packaging():
    """ Test a basic packaging setup on Windows """
    filename = 'script.py'
    content = 'print("Test")'

    with TemporaryDirectory() as build_directory:
        auto_py_to_exe_config.temporary_directory = build_directory

        with TemporaryDirectory() as output_directory:
            with PythonScriptAsFile(filename, content) as script_path:
                pyinstaller_command = 'pyinstaller --noconfirm --onedir --nowindowed "{}"'.format(script_path)
                options = {
                    'increaseRecursionLimit': False,
                    'outputDirectory': output_directory
                }

                success = package(pyinstaller_command, options)
                assert success

                predicted_output_folder = os.path.join(output_directory, filename.split('.')[0])
                assert os.path.exists(predicted_output_folder) and os.path.isdir(predicted_output_folder)

                predicted_exe_location = os.path.join(predicted_output_folder, filename.split('.')[0] + '.exe')
                exe_output = subprocess.check_output([predicted_exe_location], cwd=predicted_output_folder)
                assert exe_output == b'Test\r\n'
