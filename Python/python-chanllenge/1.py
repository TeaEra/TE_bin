# -*- coding: utf-8 -*-

__author__ = 'TeaEra'

inStr = '''
g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.
'''
res = ''

for each in inStr:
    tempEach = each.lower()
    if tempEach.isalpha() and not tempEach.isspace():
        res += chr((ord(tempEach) - ord('a') + 2) % 26 + ord('a'))
    else:
        res += tempEach

print res

import string

mappingTable = string.maketrans('abcdefghijklmnopqrstuvwxyz', 'cdefghijklmnopqrstuvwxyzab')

print inStr.lower().translate(mappingTable)

url = 'map'

print url.lower().translate(mappingTable)