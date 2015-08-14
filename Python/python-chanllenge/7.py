# -*- coding: utf-8 -*-

__author__ = 'TeaEra'

'''
http://www.pythonchallenge.com/pc/def/oxygen.html
'''

import Image

img = Image.open('oxygen.png')
data = img.convert('L').getdata()

message = []
for i in range(3,608,7):
        message.append(chr(data[img.size[0]*50+i]))
print ''.join(message)

hintList = [105, 110, 116, 101, 103, 114, 105, 116, 121]
charList = []
for each in hintList:
    charList.append(chr(each))
print ''.join(charList)