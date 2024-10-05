# Example 4 - Persistent Data

[This example](./main.py) demonstrates how you can manage persistent data outside your executable. This is needed when you have something like a SQLite database or something else used to store data between application runs.

When using "One File" mode, you should not store files you want to persist beside the executable because they will be overwritten on the next run. If you are using "One Directory", this is not an issue as the executable doesn't have to extract itself every time.

## Packaging

To package this, you can use `auto-py-to-exe` and use "Console Based".

- "Console Based" is needed because we need to be able to output the `print` call. If we were to use "Window Based", we would no longer have access to stdout and it would be like we were running the script as a .pyw file - in this case `print` would error.

> "Console Based" is only required for the demonstration as `print` calls are made. If you do not need stdout (like `print` does) in your application, you can use "Window Based".

### Using the Configuration

An auto-py-to-exe config is [supplied here](./auto-py-to-exe-config.json).

1. Open a terminal in this directory (`examples/4-persistent-data`)
2. Execute `auto-py-to-exe --config auto-py-to-exe-config.json` to open auto-py-to-exe with the supplied config
3. Click the big blue convert button at the bottom
4. When done, click the big blue "OPEN OUTPUT FOLDER" to view the output exe

## Running

Run the output exe using the terminal. If you double-click on it, it will run, but the console will close immediately. Running the exe from the terminal will allow you to see the output.

To run the exe using the terminal in Windows (similar for other OS'):

1. Open cmd
2. cd to the directory that the exe was generated in
3. Execute `main.exe` to run the executable.

When running the exe, you will see:

- The target folder gets created if it doesn't exist
- The data file gets created with default data if it doesn't exist
- Even run increments the `count` value in the JSON file

Here is an example of the output:

```
C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file doesn't exist. Creating at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 0}
Saved new contents: {'count': 1}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file exists at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 1}
Saved new contents: {'count': 2}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file exists at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 2}
Saved new contents: {'count': 3}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>main.exe
Data file exists at C:\Users\USER\AppData\Local\AutoPyToExeDemo\data.json
Current contents: {'count': 3}
Saved new contents: {'count': 4}

C:\Users\USER\Repos\auto-py-to-exe\examples\4-persistent-data\output>
```
