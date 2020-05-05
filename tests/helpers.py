import os
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
