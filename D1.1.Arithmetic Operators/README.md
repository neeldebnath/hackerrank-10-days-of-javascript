# Day 1: Arithmetic Operators

**Objective**

In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.

**Task**

Complete the following functions in the editor below:

1. getArea(length, width): Calculate and return the area of a rectangle having sides **_length_** and **_width_**.
2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides **_length_** and **_width_**.
   The values returned by these functions are printed to stdout by locked stub code in the editor.

**Input Format**

|**getArea**|
| **Data Type** | **Parameter** | **Description** |
--------------- | ------------- | ----------------
Number | _length_ | A number denoting the length of rectangle.
Number | _height_ | A number denoting the height of rectangle.

|**getPerimeter(length, height)**|
| **Data Type** | **Parameter** | **Description** |
--------------- | ------------- | ----------------
Number | _length_ | A number denoting the length of rectangle.
Number | _height_ | A number denoting the height of rectangle.

**Constraints**

- **_1 ≤ length, width ≤ 1000_**
- **_length_** and **_width_** are scaled to at most three decimal places.

**Output Format**

| Function     | Return Type | Description                                                    |
| ------------ | ----------- | -------------------------------------------------------------- |
| getArea      | Number      | The area of a rectangle having sides _length_ and _width_.     |
| getParimeter | Number      | The permeter of a rectangle having sides _length_ and _width_. |

**Sample Input 0**

```
3
4.5
```

**Sample Output 0**

```
13.5
15
```

**Explanation 0**

The area of the rectangle is **_length × width = 3 × 4.5 = 13.5_**.
The perimeter of the rectangle is **_2 • (length + width) = 2 • (3 + 4.5) = 15_**.

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
