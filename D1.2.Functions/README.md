# Day 1: Functions

**Objective**

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

**Task**

Implement a function named factorial that has one parameter: an integer, . It must return the value of (i.e., factorial).

**Input Format**

Locked stub code in the editor reads a single integer, **_n_**, from stdin and passes it to a function named factorial.

Constraints

- **_1 ≤ n ≤ 10_**

**Output Format**

The function must return the value of **_n!_**.

**Sample Input 0**

```
4
```

**Sample Output 0**

```
24
```

**Explanation 0**

We return the value of **_4! = 4 × 3 × 2 × 1 = 24_**.

### My Solution

```javascript
function factorial(i) {
  if (i === 0) {
    return 1;
  }
  return i * factorial(i - 1);
}
```
