#
cat file.txt | grep -Eo '(^([0-9]{3}-){2}[0-9]{4}$)|(^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$)'