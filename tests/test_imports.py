def test_importing_package_main():
    """Test that simply importing the application works. This checks for any dependency issues."""
    from auto_py_to_exe import __main__ as auto_py_to_exe_main  # noqa: F401
