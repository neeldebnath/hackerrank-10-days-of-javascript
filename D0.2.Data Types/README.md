# Day 0: Data Types

**Objective**

Today, we're discussing data types. Check out the attached tutorial for more details.

Task

Variables named **_firstInteger_**, **_firstDecimal_**, and **_firstString_** are declared for you in the editor below. You must use the `+` operator to perform the following sequence of operations:

Convert **_secondInteger_** to an integer (Number type), then sum it with **_firstInteger_** and print the result on a new line using `console.log`.
Convert **_secondDecimal_** to a floating-point number (Number type), then sum it with **_firstDecimal_** and print the result on a new line using `console.log`.
Print the concatenation of **_firstString_** and **_secondString_** on a new line using `console.log`. Note that **_firstString_** must be printed first.

**Input Format**

| Data Type | Parameter           | Description                                                                                |
| --------- | ------------------- | ------------------------------------------------------------------------------------------ |
| string    | **_secondInteger_** | The string representation of an integer you must sum with **_firstInteger_**.              |
| string    | **_secondDecimal_** | The string representation of a floating-point number you must sum with **_firstDecimal_**. |
| string    | **_secondString_**  | A string of one or more space-separated words you must append to **_firstString_**.        |

**Output Format**

Print the following three lines of output:

1. On the first line, print the sum of **_firstInteger_** and the integer representation of **_secondInteger_**.
2. On the second line, print the sum of **_firstDecimal_** and the floating-point representation of **_secondDecimal_**.
3. On the third line, print concatenated with . You must print **_firstString_** before **_secondString_**.

**Sample Input 0**

```
12
4.32
is the best place to learn and practice coding!
```

**Sample Output 0**

```
16
8.32
HackerRank is the best place to learn and practice coding!
```

**Explanation 0**

When we sum the integers and , we get the integer .
When we sum the floating-point numbers and , we get . When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.

### My Solution

```javascript
function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";

  console.log(firstInteger + +secondInteger);
  console.log(firstDecimal + +secondDecimal);
  console.log(firstString + secondString);
}
```
