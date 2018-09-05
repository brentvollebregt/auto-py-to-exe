"""
This file (as well as requirements.txt) has been kept to make sure the original instructions illustrated in the demonstration video are still valid.
This script is simply a hack to make it seem like `python -m auto_py_to_exe` was called when `python run.py` is executed.
"""

from auto_py_to_exe import __main__ as apte

apte.__name__ = '__main__'
apte.run()