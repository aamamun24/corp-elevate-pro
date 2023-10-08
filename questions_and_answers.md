###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

  

```javascript

let  greeting;

greetign = {};

console.log(greetign);

```

  

- A: `{}`

- B: `ReferenceError: greetign is not defined`

- C: `undefined`

  

<details><summary><b>Answer</b></summary>

<p>

  

#### Answer: A: `{}`

  

<i>At first, declare a variable without value and next time set the value.</i>

  

</p>

</details>

  

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

  

```javascript

function  sum(a, b) {

return  a + b;

}

  

sum(1, "2");

```

  

- A: `NaN`

- B: `TypeError`

- C: `"12"`

- D: `3`

  

<details><summary><b>Answer</b></summary>

<p>

  

#### Answer: C: `"12"`

  

<i>Call the function with a number and a string, for this reason, it is a string. </i>

  

</p>

</details>

  

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

  

```javascript

const  food = ["🍕", "🍫", "🥑", "🍔"];

const  info = { favoriteFood:  food[0] };

  

info.favoriteFood = "🍝";

  

console.log(food);

```

  

- A: `['🍕', '🍫', '🥑', '🍔']`

- B: `['🍝', '🍫', '🥑', '🍔']`

- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`

- D: `ReferenceError`

  

<details><summary><b>Answer</b></summary>

<p>

  

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

  

<i>Declare a variable named 'food' and console food. So output is variable values.</i>

  

</p>

</details>

  

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

  

```javascript

function  sayHi(name) {

return  `Hi there, ${name}`;

}

  

console.log(sayHi());

```

  

- A: `Hi there,`

- B: `Hi there, undefined`

- C: `Hi there, null`

- D: `ReferenceError`

  

<details><summary><b>Answer</b></summary>

<p>

  

#### Answer: B: `Hi there, undefined`

  

<i>function has one parameter but the function call without a parameter.</i>

  

</p>

</details>

  

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

  

```javascript

let  count = 0;

const  nums = [0, 1, 2, 3];

  

nums.forEach((num) => {

if (num) count += 1;

});

  

console.log(count);

```

  

- A: 1

- B: 2

- C: 3

- D: 4

  

<details><summary><b>Answer</b></summary>

<p>

  

#### Answer: C: 3

  

<i>In the nums array, there are three truthy numbers, so the output is 3.</i>

  

</p>

</details>