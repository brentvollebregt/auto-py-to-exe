# Example 3 - Images and Other Non-.py Files

[This example](./main.py) is a GUI application that also references a GIF (image) and a JSON file.

## Packaging

To package this, you can use `auto-py-to-exe` and use "Window Based". To add the GIF and JSON files, in the "Additional Files" section, click "Add Folder" and select the "assets" folder in this directory.

- Make sure "Window Based" is used otherwise a blank terminal will also appear (which we do not need as we are not calling `print`).
- Adding the assets folder to the "Additional Files" section will make sure all files in that folder are included. When using "One Directory", you will be able to see the folder within the "\_internal" folder.
- You can use either "One Directory" or "One File" for this. The usage of `resource_path` in main.py means both will work.

### Using the Configuration

An auto-py-to-exe config is [supplied here](./auto-py-to-exe-config.json).

1. Open a terminal in this directory (`examples/3-images-and-other-non-py-files`)
2. Execute `auto-py-to-exe --config auto-py-to-exe-config.json` to open auto-py-to-exe with the supplied config
3. Click the big blue convert button at the bottom
4. When done, click the big blue "OPEN OUTPUT FOLDER" to view the output exe

## Running

You can run the exe using a terminal or by double-clicking it. Since we have used `window.mainloop()`, the application will keep running until the window is closed.

## Notes

If you have used "One File" mode, any changes made to the JSON file will be overwritten every time. See example 4 for how to stop this.
