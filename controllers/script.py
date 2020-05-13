#!/usr/bin/env python3
import requests
import sys

if __name__ == '__main__':
  args = sys.argv
  result = requests.get(args[1])
  print( result.text, result.status_code )