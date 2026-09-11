import os
import subprocess

from helpers import PythonScriptAsFile, TemporaryDirectory, os_allow

import auto_py_to_exe.packaging as packaging_module
from auto_py_to_exe import config as auto_py_to_exe_config
from auto_py_to_exe.packaging import package


@os_allow(["Windows"])
def test_basic_packaging():
    """Test a basic packaging setup on Windows"""
    filename = "script.py"
    content = 'print("Test")'

    with TemporaryDirectory() as build_directory:
        auto_py_to_exe_config.temporary_directory = build_directory

        with TemporaryDirectory() as output_directory:
            with PythonScriptAsFile(filename, content) as script_path:
                pyinstaller_command = 'pyinstaller --noconfirm --onedir --nowindowed "{}"'.format(script_path)
                options = {"increaseRecursionLimit": False, "outputDirectory": output_directory}

                success = package(pyinstaller_command, options)
                assert success

                predicted_output_folder = os.path.join(output_directory, filename.split(".")[0])
                assert os.path.exists(predicted_output_folder) and os.path.isdir(predicted_output_folder)

                predicted_exe_location = os.path.join(predicted_output_folder, filename.split(".")[0] + ".exe")
                exe_output = subprocess.check_output([predicted_exe_location], cwd=predicted_output_folder)
                assert exe_output == b"Test\r\n"


def test_packaging_fails_when_output_cannot_be_moved(tmp_path, monkeypatch):
    """A failed move must not be reported as a successful package."""
    build_directory = tmp_path / "build"
    build_directory.mkdir()
    auto_py_to_exe_config.temporary_directory = str(build_directory)

    output_directory = tmp_path / "output"
    output_directory.write_text("not a directory")

    def fake_pyinstaller(_args):
        dist_directory = build_directory / "application"
        dist_directory.mkdir()
        (dist_directory / "built-artifact").write_text("built")

    monkeypatch.setattr(packaging_module, "run_pyinstaller", fake_pyinstaller)

    success = package(
        "pyinstaller",
        {"increaseRecursionLimit": False, "outputDirectory": str(output_directory)},
    )

    assert not success
    assert output_directory.read_text() == "not a directory"
