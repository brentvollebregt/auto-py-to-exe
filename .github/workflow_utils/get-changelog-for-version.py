"""
Given a version string, will find the text for the version in CHANGELOG.md.
Will print the found text and add it to the environment variable `GITHUB_OUTPUT` as `changes<<{DELIMITER}{TEXT}{DELIMITER}`
"""

import argparse
import os
import random
import re
import string
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("version", help="Target version, e.g. 2.50.1", type=str)
args = parser.parse_args()
version = args.version

# Read in the changelog
changelog_file_path = Path(__file__).parent.parent.parent / "CHANGELOG.md"
with open(changelog_file_path, "r", encoding="utf-8") as f:
    changelog = f.read()

# Get the changes for the current version
changes_for_target_version_regex = r"##\s*{}\s*\n((?:.|\n)*?)(?:\n##\s*|\Z)".format(re.escape(version))
match = re.search(changes_for_target_version_regex, changelog)
if match is None:
    raise Exception(f"Changes were not detected in CHANGELOG.md for version {version}")
changes = re.search(changes_for_target_version_regex, changelog).group(1).strip()

# Replace GitHub user links with @mentions
github_user_regex = re.compile(r"\[[^\]]+\]\(https:\/\/github\.com\/([A-Za-z0-9-]+)\)")
changes = github_user_regex.sub(r"@\1", changes)

# Get the previous version
versions_regex = r"^## (\d+\.\d+\.\d+)(?=^## \d+\.\d+\.\d+|$)"
versions = re.findall(versions_regex, changelog, re.MULTILINE)
current_version_index = [i for i, v in enumerate(versions) if v == version][0]
previous_version = versions[current_version_index + 1]

# Build up the changelog
footer = "\n\n---"
footer += f"\n\n[🌐 auto-py-to-exe {version} on PyPI](https://pypi.org/project/auto-py-to-exe/{version}/)"
footer += f"\n[v{previous_version} ➡️ v{version} changes](https://github.com/brentvollebregt/auto-py-to-exe/compare/v{previous_version}...v{version})"
changes += footer

# Output the changelog
print(changes)

# Writing multiline strings to output: https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#multiline-strings
github_output_file_path = os.getenv("GITHUB_OUTPUT")
if github_output_file_path is None:
    print(
        "\n\nUnable to write output because the environment variable GITHUB_OUTPUT does not exist - this is ok if you are running this locally"
    )
else:
    delimiter = "".join(random.choice(string.ascii_uppercase) for i in range(20))
    with open(github_output_file_path, "a") as github_output_file:
        github_output_file.write(f"changes<<{delimiter}\n{changes}\n{delimiter}")
