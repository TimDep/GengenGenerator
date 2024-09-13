FYI I didn't change anything about the generation itself. Just made it very easy to generate multiple and with compact information.

# Usage
Install node.js

node index.js --help
```
Options:
  -V, --version                  output the version number
  -s, --size <number>            Size of the KenKen puzzle
  -o, --operations <items>       Operations to use, comma-seperated: addition, subtraction, multiplication, division, max, min, range, mod, avg, par, gcd
  -d, --difficulty <number>      Difficulty level
  -m, --max-group-size <number>  Maximum group size
  -t, --torus                    Use torus board
  -a, --amount <number>          Amount of KenKen puzzles to generate
  -c, --csv                      Output as CSV
  -h, --help                     display help for command
```
# Example
Input:
```
node index.js --size 4 --difficulty 2 --operations addition,multiplication --amount 2 --csv
```
Output:
```
GroupIDs,Operations-Numbers,Solution
1/1/5/5/1/3/3/5/2/4/3/6/2/4/4/4/,&times12/&times12/+7/+7/&times12/+7/+7/+7/+5/&times12/+7/4/+5/&times12/&times12/&times12,1342423131242413,
1/1/5/7/2/2/2/8/3/3/6/6/3/4/6/9/,&times12/&times12/2/1/&times6/&times6/&times6/4/+9/+9/&times8/&times8/+9/1/&times8/3,3421123443122143,
```
The GroupID's are seperated with "/" to make it easier to read when the puzzle get's bigger and you have 2 digits group ID's.
Operations-Numbers, when it's just a number it means the number is placed in that cell. Otherwise it means what operation should be done on the cells. 
Solution means where each number should be placed.

