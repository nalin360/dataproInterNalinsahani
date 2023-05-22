# DAY 1

## Assignment

```javascript

import React from 'react'
const itemlist = [
    'item 1',
    'item 2 ',
    'item 3',
    'item 4',
    'item 5'
]
function Renderlist(prop) {

const listitems = itemlist.map((item,i) => {
    return <li key={i}>{prop.content} {item}</li>
});
    return (
    <div>
        <h1>Render list</h1>
        <ul> {listitems}</ul>
    </div>
  )
}

export default Renderlist;
```

## 1) map vs filter vs foreach

### map()

The map() method is used to transform the elements of an array.

a new data set is generated from an existing one on an element-by-element basis.

The `map()` method takes a function, which, given the same parameters as the filtering function—`value`, `index`, and `array`—returns a new element that will be included in the output data set.

### `filter`()

`Array.filter` does not allow you to transform the data into components

### forEach()

whereas the forEach() method is used to loop through the elements of an array.


# DAY 2


## Thinking about UI declaratively

You’ve seen how to implement a form imperatively above. To better understand how to think in React, you’ll walk through reimplementing this UI in React below:

1. **Identify** your component’s different visual states
2. **Determine** what triggers those state changes
3. **Represent** the state in memory using `useState`
4. **Remove** any non-essential state variables
5. **Connect** the event handlers to set the state

## types of state

There are four main types of state you need to properly manage in your React apps:

1. Local state
2. Global state
3. Server state
4. URL state

### Local state

Local state is data we manage in one or another component.

Local state is managed in isolation within the component without other components affecting it

It is private to the component and is responsible for governing its behavior throughout its life.

***`useReducer` is another option that can be used for either local or global state. It is similar in many ways to `useState` under the hood, although instead of just an initial state it accepts a reducer.***

***The benefit of `useReducer` is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than `useState`.***

### `useState`

`useState` is a React Hook that lets you add a [state variable](https://react.dev/learn/state-a-components-memory) to your component.

```javascript
const [state, setState] = useState(initialState);
```

#### state vs setState in react

state : it will render once

setState : will render again again 

***Can we update state without setState?***

if we update state with plain JavaScript and not setState , it will not trigger a re-render and React will not display those (invalid) changes in state to our user .


### Updating state based on the previous state

Suppose the `age` is `42`. This handler calls `setAge(age + 1)` three times:

```
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}
```

However, after one click, `age` will only be `43` rather than `45`! This is because calling the `set` function [does not update](https://react.dev/learn/state-as-a-snapshot) the `age` state variable in the already running code. 

So each `setAge(age + 1)` call becomes `setAge(43)`.

To solve this problem, **you may pass an *updater function*** to `setAge` instead of the next state:

```
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
```

Here, `a => a + 1` is your updater function. It takes the **pending state** (a) and calculates the **next state** (a+1) from it.

React puts your updater functions in a [queue.](https://react.dev/learn/queueing-a-series-of-state-updates) Then, during the next render, it will call them in the same order:


### Updating objects and arrays in state


You can put objects and arrays into state. In React, state is considered read-only,

 so  **you should *replace* it rather than *mutate* your existing objects** . 

For example, if you have a `form` object in state, don’t mutate it:

```
// 🚩 Don't mutate an object in state like this:
form.firstName = 'Taylor';
```

Instead, replace the whole object by creating a new one:

```
// ✅ Replace state with a new object
setForm({
  ...form,
  firstName: 'Taylor'
});
```
