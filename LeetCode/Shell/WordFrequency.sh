#
function wordfrequency() {
  awk '
     BEGIN { FS="[^a-zA-Z]+" } {
         for (i=1; i<=NF; i++) {
             word = tolower($i)
             words[word]++
         }
     }
     END {
         for (w in words)
              printf("%d\t%s\n", words[w], w)
     } ' | sort -rn
}

cat WordFrequency.txt | wordfrequency

#