import argparse
import json
import os


def argparse_file_eists(file_path):
    """ Validates whether a file exists """
    if not os.path.isfile(file_path):
        raise argparse.ArgumentTypeError('File does not exist')

    return os.path.abspath(file_path)


def argparse_file_json(file_path):
    """ Validates whether a file contains JSON parsable by Python. Raises argparse.ArgumentTypeError if not. """
    if not os.path.isfile(file_path):
        raise argparse.ArgumentTypeError('Provided configuration file does not exist')

    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
    except json.decoder.JSONDecodeError:
        raise argparse.ArgumentTypeError('Provided configuration file content is not json')
    except Exception as e:
        raise argparse.ArgumentTypeError('Cannot parse provided configuration file:\n' + str(e))

    return data
