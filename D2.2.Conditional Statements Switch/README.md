# Day 2: Conditional Statements: Switch

**Objective**

In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

**Task**

Complete the getLetter(s) function in the editor. It has one parameter: a string, **_s_**, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

- If the first character in string **_s_** is in the set **_{a, e, i, o, u}_**, then return A.
- If the first character in string **_s_** is in the set **_{b, c, d, f, g}_**, then return B.
- If the first character in string **_s_** is in the set **_{h, j, k, l, m}_**, then return C.
- If the first character in string **_s_** is in the set **_{n, p, q, r, s, t, v, w, x, y, z}_**, then return D.

**Hint:** You can get the letter at some index **_i_** in **_s_** using the syntax s[i] or s.charAt(i).

**Function Description**

Complete the getLetter function in the editor below.

getLetter has the following parameters:

- string s: a string

**Returns**

- string: a single letter determined as described above

**Input Format**

Stub code in the editor reads a single string denoting **_s_** from stdin.

**Constraints**

- **_1 ≤ |s| ≤ 100_**, where **_|s|_** is the length of **_s_**.
- String **_s_** contains lowercase English alphabetic letters (i.e., a through z) only.

**Sample Input 0**

```
adfgt
```

**Sample Output 0**

```
A
```

**Explanation 0**

The first character of string **_s = adfgt_** is a. Because the given criteria stipulate that we print A any time the first character is in **_{a, e, i, o, u}_**, we return A as our answer.

### My Solution

```javascript
function getLetter(s) {
  let letter;
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    default:
      letter = "D";
      break;
  }

  return letter;
}
```
