# Day 1: Let & Const

**Objective**

In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.

**Task**

1. Declare a constant variable, **_PI_**, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2. Read a number, **_r_**, denoting the radius of a circle from stdin.
3. Use and to **_PI_** calculate the **_area_** and of a circle having radius **_r_**.
4. Print **_area_** as the first line of output and print **_perimeter_** as the second line of output.

**Input Format**

A single integer, **_r_**, denoting the radius of a circle.

**Constraints**

- **_0 <> n ≤ 100_**
- **_r_** is a floating-point number scaled to at most **_3_** decimal places.

**Output Format**

Print the following two lines:

1. On the first line, print the **_area_** of the circle having radius **_r_**.
2. On the second line, print the **_perimeter_** of the circle having radius **_r_**.

**Sample Input 0**

```
2.6
```

**Sample Output 0**

```
21.237166338267002
16.336281798666924
```

**Explanation 0**

Given the radius **_r = 2.6_**, we calculate the following:

- **_area = π • r² = 21.237166338267002_**
- **_perimeter = 2 • π • r = 16.336281798666924_**

We then print **_area_** as our first line of output and **_perimeter_** as our second line of output.

### My Solution

```javascript
function main() {
  const PI = Math.PI;
  let r = readLine();
  console.log(PI * r * r);
  console.log(2 * PI * r);

  //code below this line is provided by hackerRank
  try {
    PI = 0;
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
```
