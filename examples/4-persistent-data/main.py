import json
import os
from pathlib import Path

DEFAULT_DATA = {"count": 0}

# First we identify where the persistent data should sit.
# It cannot be packaged inside our exe because if "One File" mode is used, it will be overwritten every time.
# For this example, I put the data file in the following folder:
#  - If Windows: C:/Users/Brent/AppData/Local/AutoPyToExeDemo
#  - If something else: The users home folder
# For your implementation, you can pick somewhere else - as long as it isn't in the project.
if os.name == "nt":
    data_folder_location = Path.home() / "AppData/Local/AutoPyToExeDemo"
else:
    data_folder_location = Path.home() / "AutoPyToExeDemo"

# We create the directory if it doesn't exist. We also make sure to create any parents if they don't exist.
data_folder_location.mkdir(parents=True, exist_ok=True)

# Next we check if the file exists. If not, we create it and put default data into it.
data_file_location = data_folder_location / "data.json"
if not data_file_location.exists():
    print(f"Data file doesn't exist. Creating at {data_file_location}")
    with open(str(data_file_location), "w") as f:
        json.dump(DEFAULT_DATA, f, indent=2)
else:
    print(f"Data file exists at {data_file_location}")

# We read the file in (as we know it exists now)
with open(str(data_file_location), "r") as f:
    data = json.load(f)
print(f"Current contents: {data}")

# We update the contents of the file
data["count"] += 1

# We write the file back
with open(str(data_file_location), "w") as f:
    json.dump(data, f, indent=2)
print(f"Saved new contents: {data}")
