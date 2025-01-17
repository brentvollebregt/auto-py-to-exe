from io import open

from setuptools import setup

from auto_py_to_exe import __version__ as version

setup(
    name="auto-py-to-exe",
    version=version,
    url="https://github.com/brentvollebregt/auto-py-to-exe",
    license="MIT",
    author="Brent Vollebregt",
    author_email="brent@nitratine.net",
    description="Converts .py to .exe using a simple graphical interface.",
    long_description="".join(open("README.md", encoding="utf-8").readlines()),
    long_description_content_type="text/markdown",
    project_urls={
        "Source Code": "https://github.com/brentvollebregt/auto-py-to-exe",
        "Bug Tracker": "https://github.com/brentvollebregt/auto-py-to-exe/issues",
        "Changelog": "https://github.com/brentvollebregt/auto-py-to-exe/blob/master/CHANGELOG.md",
    },
    keywords=["gui", "executable"],
    packages=["auto_py_to_exe"],
    include_package_data=True,
    install_requires=["Eel>=0.11.0,!=0.18.0", "pyinstaller>=5.8.0", "requests"],
    python_requires=">=3.6",
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Programming Language :: Python :: 3.13",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: POSIX :: Linux",
    ],
    entry_points={
        "console_scripts": ["autopytoexe=auto_py_to_exe.__main__:run", "auto-py-to-exe=auto_py_to_exe.__main__:run"],
    },
)
