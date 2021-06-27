# Day 0: Hello, World!

**Objective**

In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.

**Task**

A greeting function is provided for you in the editor below. It has one parameter, **_parameterVariable_**. Perform the following tasks to complete this challenge:

Use `console.log()` to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
Use `console.log()` to print the contents of **_parameterVariable_** (i.e., the argument passed to main).
You've got this!

**Input Format**

| Data Type | Parameter               | Description                                                         |
| --------- | ----------------------- | ------------------------------------------------------------------- |
| string    | **_parameterVariable_** | A single line of text containing one or more space-separated words. |

**Output Format**

Print the following two lines of output:

1. On the first line, print `Hello, World!` (this is provided for you in the editor).
2. On the second line, print the contents of **_parameterVariable_**.

**Sample Input 0**

```
Welcome to 10 Days of JavaScript!
```

**Sample Output 0**

```
Hello, World!
Welcome to 10 Days of JavaScript!
```

**Explanation 0**

We printed two lines of output:

We printed the literal string `Hello, World!` using the code provided in the editor.
The value of **_parameterVariable_** passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of **_parameterVariable_**.

### My Solution

```javascript
function greeting(parameterVariable) {
  // This line prints 'Hello, World!' to the console:;
  console.log("Hello, World!");
  console.log(parameterVariable);
  // Write a line of code that prints parameterVariable to stdout using console.log:
}
```
