[!NOTE]
I didn't change anything about the generation itself. Just made it very easy to generate multiple and with compact information.

# Usage
Install node.js

node index.js --help
```
Options:
  -V, --version                  output the version number
  -s, --size <number>            Size of the KenKen puzzle, 2 - 20
  -o, --operations <items>       Operations to use, comma-seperated: addition, subtraction, multiplication, division, max, min, range, mod, avg, par, gcd
  -d, --difficulty <number>      Difficulty level, 1 - 5
  -m, --max-group-size <number>  Maximum group size, 2 - 8
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
1/1/6/6/1/3/3/6/2/4/7/7/2/5/5/7/,&times12/&times12/&times6/&times6/&times12/+6/+6/&times6/+3/2/+11/+11/+3/+4/+4/+11,4132342112432314,0
1/4/6/6/2/4/4/6/3/4/7/6/3/5/7/7/,3/&times48/&times8/&times8/4/&times48/&times48/&times8/+3/&times48/&times36/&times8/+3/1/&times36/&times36,3214432114322143,0
```
The GroupID's are seperated with "/" to make it easier to read when the puzzle get's bigger and you have 2 digits group ID's.
Operations-Numbers, when it's just a number it means the number is placed in that cell. Otherwise it means what operation should be done on the cells. 
Solution means where each number should be placed.

