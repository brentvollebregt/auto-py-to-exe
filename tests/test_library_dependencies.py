def test_eel_functions_and_variables_exist():
    """Test that the functions and variables that we use from Eel exist."""
    import eel

    # Functions we use for their actions
    assert hasattr(eel, "init")
    assert callable(eel.init)
    assert hasattr(eel, "expose")
    assert callable(eel.expose)
    assert hasattr(eel, "start")
    assert callable(eel.start)

    # Functions we use for their value
    from eel import chrome

    chrome_path = chrome.find_path()
    assert chrome_path is None or isinstance(chrome_path, str)


def test_pyinstaller_functions_and_variables_exist():
    """Test that the functions and variables that we use from PyInstaller exist."""

    # Functions we use for their actions
    import PyInstaller.__main__ as pyi_main

    assert hasattr(pyi_main, "run")
    assert callable(pyi_main.run)

    # Variables we use
    import PyInstaller as pyi

    assert isinstance(pyi.__version__, str)
