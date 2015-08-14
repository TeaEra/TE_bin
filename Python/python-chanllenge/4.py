# -*- coding: utf-8 -*-

__author__ = 'TeaEra'

'''
linkedlist.php
'''

import urllib
import re

linkPrefix = 'http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing='
#hint = '12345'
hint = '8022'
#hint = '90052'  # zip-file hint
content = urllib.urlopen(linkPrefix + hint).read()
key = 'nothing is '
cnt = 0
while content.__contains__(key):
    cnt += 1
    tempList = content.split(key)
    content = urllib.urlopen(linkPrefix + tempList[1]).read()
    print (cnt, tempList[1])
print content