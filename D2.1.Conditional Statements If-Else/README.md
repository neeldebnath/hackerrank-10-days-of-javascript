# Day 2: Conditional Statements: If-Else

**Objective**

In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

**Task**

Complete the _getGrade(score)_ function in the editor. It has one parameter: an integer, **_score_**, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her **_grade_** according to the following rules:

- If **_25 < score ≤ 30_**, then **_grade = A_**.
- If **_20 < score ≤ 25_**, then **_grade = B_**.
- If **_15 < score ≤ 20_**, then **_grade = C_**.
- If **_10 < score ≤ 15_**, then **_grade = D_**.
- If **_5 < score ≤ 10_**, then **_grade = E_**.
- If **_0 ≤ score ≤ 5_**, then **_grade = F_**.

**Input Format**

Stub code in the editor reads a single integer denoting **_score_** from stdin and passes it to the function.

**Constraints**

- **_0 ≤ score ≤ 30_**

**Output Format**

The function must return the value of (i.e., the letter grade) that Julia earned on the exam.

**Sample Input 0**

```
11
```

**Sample Output 0**

```
D
```

**Explanation 0**

Because **_score = 11_**, it satisfies the condition **_10 < score ≤ 15_** (which corresponds to D). Thus, we return D as our answer.

### My solution

```javascript
function getGrade(score) {
  let grade;
  if (score > 25 && score <= 30) grade = "A";
  else if (score > 20 && score <= 25) grade = "B";
  else if (score > 15 && score <= 20) grade = "C";
  else if (score > 10 && score <= 15) grade = "D";
  else if (score > 5 && score <= 10) grade = "E";
  else if (score >= 0 && score <= 5) grade = "F";

  return grade;
}
```
