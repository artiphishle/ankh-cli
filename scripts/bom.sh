# find BOM in directory
grep -rl $'\xEF\xBB\xBF' .

# replace BOM in directory
find . -type f -exec sed '1s/^\xEF\xBB\xBF//' -i {} \;
