#!/usr/bin/python3
"""Fetches https://alx-intranet.hbtn.io/status."""
import urllib.request


if __name__ == "__main__":
    req_uest = urllib.request.Request("https://alx-intranet.hbtn.io/status")
    with urllib.request.urlopen(req_uest) as response:
        body = response.read()
        print("Body response:")
        print("\t- type: {}".format(type(body)))
        print("\t- content: {}".format(body))
        print("\t- utf8 content: {}".format(body.decode("utf-8")))
