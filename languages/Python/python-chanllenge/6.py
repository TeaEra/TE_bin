# -*- coding: utf-8 -*-

__author__ = 'TeaEra'


'''
http://www.pythonchallenge.com/pc/def/channel.html
'''

import re
import zipfile

tempZip = zipfile.ZipFile('channel.zip')
nameList = tempZip.namelist()
contentList = []
infoList = []
# for each in nameList:
#     tempContent = tempZip.read(each)
#     tempInfo = tempZip.getinfo(each)
#     infoList.append(tempInfo.comment)
#     if tempContent.startswith('Next'):
#         continue
#     contentList.append(tempContent)
# #
# print contentList
# print set(infoList)

hint = '90052'
commentList = []
while True:
    currName = hint + '.txt'
    tempContent = tempZip.read(currName)
    commentList.append(tempZip.getinfo(currName).comment)
    hint = ''.join(re.findall('([0-9]*)', tempContent))
    if hint == '':
        break
#
print ''.join(commentList)

