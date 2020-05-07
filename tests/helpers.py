import os
import platform
import shutil
import tempfile


class PythonScriptAsFile:
    def __init__(self, filename, content):
        self.filename = filename
        self.content = content

    def __enter__(self):
        # Create a temporary directory
        self.directory = tempfile.mkdtemp()

        # Create the Python script
        self.file_path = os.path.join(self.directory, self.filename)
        f = open(self.file_path, 'w')
        f.write(self.content)
        f.close()

        return self.file_path

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Delete the script and temporary directory
        shutil.rmtree(self.directory)


class TemporaryDirectory:
    def __enter__(self):
        self.directory = tempfile.mkdtemp()
        return self.directory

    def __exit__(self, exc_type, exc_val, exc_tb):
        shutil.rmtree(self.directory)


def os_allow(operating_systems):
    """ A decorator to only allow specific operating systems to run a function """
    def decorator(function):
        def wrapper(*args, **kwargs):
            if platform.system() in operating_systems:
                return function(*args, **kwargs)
        return wrapper
    return decorator
