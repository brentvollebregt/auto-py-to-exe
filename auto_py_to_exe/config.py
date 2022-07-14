import os
import sys


class UIOpenMode:
    NONE = 0
    CHROME = 1
    USER_DEFAULT = 2


# Temporary directory for packaging scripts to speed up consecutive builds. Created on application start.
temporary_directory = None

# Frontend
FRONTEND_ASSET_FOLDER = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'web')

# Pre-defined variables by Python
DEFAULT_RECURSION_LIMIT = sys.getrecursionlimit()

# Argument-influenced configuration
package_filename = None
ui_open_mode = UIOpenMode.CHROME
supplied_ui_configuration = None
default_output_directory = os.path.abspath('output')
language_hint = None
