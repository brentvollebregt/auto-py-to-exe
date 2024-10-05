# Example 1 - Basic

[This example](./main.py) is a basic Hello World application. Nothing is out of the ordinary in this example.

## Packaging

To package this, you can use `auto-py-to-exe` and use "Console Based".

- "Console Based" is needed because we need to be able to output the `print` call. If we were to use "Window Based", we would no longer have access to stdout and it would be like we were running the script as a .pyw file - in this case `print` would error.

### Using the Configuration

An auto-py-to-exe config is [supplied here](./auto-py-to-exe-config.json).

1. Open a terminal in this directory (`examples/1-basic`)
2. Execute `auto-py-to-exe --config auto-py-to-exe-config.json` to open auto-py-to-exe with the supplied config
3. Click the big blue convert button at the bottom
4. When done, click the big blue "OPEN OUTPUT FOLDER" to view the output exe

## Running

Run the output exe using the terminal. If you double-click on it, it will run, but the console will close immediately. Running the exe from the terminal will allow you to see the output.

To run the exe using the terminal in Windows (similar for other OS'):

1. Open cmd
2. cd to the directory that the exe was generated in
3. Execute `main.exe` to run the executable.

Here is an example of the output:

```
C:\Users\USER\Repos\auto-py-to-exe\examples\1-basic\output>main.exe
Hello world
Running with Python 3.9.9 (tags/v3.9.9:ccb0e6a, Nov 15 2021, 18:08:50) [MSC v.1929 64 bit (AMD64)]
```
