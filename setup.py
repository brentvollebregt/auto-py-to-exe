from io import open
from setuptools import setup

setup(
    name='auto-py-to-exe',
    version='2.4.3',
    url='https://github.com/brentvollebregt/auto-py-to-exe',
    license='MIT',
    author='Brent Vollebregt',
    author_email='brent@nitratine.net',
    description='Converts .py to .exe using a simple graphical interface.',
    long_description=''.join(open('README.md', encoding='utf-8').readlines()),
    long_description_content_type='text/markdown',
    keywords=['gui', 'executable'],
    packages=['auto_py_to_exe'],
    include_package_data=True,
    install_requires=['Eel>=0.9.9', 'pyinstaller'],
    python_requires='>=2.7',
    classifiers=[
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Operating System :: Microsoft :: Windows',
        'Operating System :: POSIX :: Linux',
    ],
    entry_points={
        'console_scripts': [
            'autopytoexe=auto_py_to_exe.__main__:run',
            'auto-py-to-exe=auto_py_to_exe.__main__:run'
        ],
    },
)
