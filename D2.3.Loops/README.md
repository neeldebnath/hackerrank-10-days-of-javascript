# Day 2: Loops

**Objective**

In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

**Task**

1. First, print each vowel in **_s_** on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in **_s_**.
2. Second, print each consonant (i.e., non-vowel) in **_s_** on a new line in the same order as it appeared in **_s_**.

**Function Description**

Complete the vowelsAndConsonants function in the editor below.

vowelsAndConsonants has the following parameters:

- string s: the string to process

**Prints**

- Print each vowel of **_s_** in order on a new line, then print each consonant in order on a new line. Return nothing.

**Input Format**

There is one line of input with the string **_s_**.

Output Format

First, print each vowel in **_s_** on a new line (in the same order as they appeared in **_s_**). Second, print each consonant (i.e., non-vowel) in **_s_** on a new line (in the same order as they appeared in **_s_**).

**Sample Input 0**

```
javascriptloops
```

**Sample Output 0**

```
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
```

**Explanation 0**

Observe the following:

- Each letter is printed on a new line.
- Then the vowels are printed in the same order as they appeared in **_s_**.
- Then the consonants are printed in the same order as they appeared in **_s_**.

### My Solution

```javascript
function vowelsAndConsonants(s) {
  s.split("").forEach(
    (item) =>
      (item.toLowerCase() === "a" ||
        item.toLowerCase() === "e" ||
        item.toLowerCase() === "i" ||
        item.toLowerCase() === "o" ||
        item.toLowerCase() === "u") &&
      console.log(item)
  );
  s.split("").forEach(
    (item) =>
      item.toLowerCase() !== "a" &&
      item.toLowerCase() !== "e" &&
      item.toLowerCase() !== "i" &&
      item.toLowerCase() !== "o" &&
      item.toLowerCase() !== "u" &&
      console.log(item)
  );
}
```
