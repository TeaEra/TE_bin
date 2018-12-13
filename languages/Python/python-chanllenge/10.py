# -*- coding: utf-8 -*-

__author__ = 'TeaEra'

'''
http://www.pythonchallenge.com/pc/return/bull.html
'''

descList = ['1']
cnt = 1
while cnt <= 30:
    prev = descList[cnt-1]
    #
    charList = []
    prevChar = ''
    prevCnt = 0
    for each in prev:
        if prevChar == each:
            prevCnt += 1
        else:
            charList.append((prevChar, prevCnt))
            prevChar = each
            prevCnt = 1
    if prevChar != '':
        charList.append((prevChar, prevCnt))
    currStr = ''
    for each in charList:
        currChr = each[0]
        currCnt = each[1]
        if currCnt != 0:
            currStr += str(currCnt) + currChr
    descList.append(currStr)
    cnt += 1
#
print descList[30]
print len(descList[30])