# Example 2 - No Console

[This example](./main.py) is a basic GUI application.

## Packaging

To package this, you can use `auto-py-to-exe` and use "Window Based".

- Make sure "Window Based" is used otherwise a blank terminal will also appear (which we do not need as we are not calling `print`).

### Using the Configuration

An auto-py-to-exe config is [supplied here](./auto-py-to-exe-config.json).

1. Open a terminal in this directory (`examples/2-no-console`)
2. Execute `auto-py-to-exe --config auto-py-to-exe-config.json` to open auto-py-to-exe with the supplied config
3. Click the big blue convert button at the bottom
4. When done, click the big blue "OPEN OUTPUT FOLDER" to view the output exe

## Running

You can run the exe using a terminal or by double-clicking it. Since we have used `window.mainloop()`, the application will keep running until the window is closed.
