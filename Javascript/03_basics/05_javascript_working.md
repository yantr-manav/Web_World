## How Javacript works

 -  Javascript Execution Context
    - { } --> Global Execution Context for `eg.this`
    - Function Execution Context
    - Eval Execution Context
 -  Memory Creation Phase
  -  Execution Phase

### Consider this code:
  ```javascript
  let val1 = 10;
  let val2 = 5;
  function addNum(num1,num2){
    let total = num1 + num2
    return total
  }
  let result1 = addNum(val1,val2);
  let result2 = addNum(7,22);
  ```
### How it will work:

 1. Global Execution Phase --> `this`
 2. Memory Creation Phase
    - `val1` and `val2` assigned as `undefined`
    - `addNum` assigned it's definition
    - `result1` and `result2` assgined as `undefined`

3. Execution Phase
    - val1 becomes `10`
    - val2 becomes `5`
    - addNum  function
        1. `New Variable Env + Execution Thread `
        2. Memory Phase
            - val1, val2 and total assigned as undefined
        3. Execution Phase
            - num1 = `10`
            - num2 = `5`
            - total = 15, it returns to global execution context
        4. This thread gets deleted after its execution
---

    NOTE:  This creation of new thread and it's deletion after its work, continous as per code.
    (Here: for both the functions that are called in result1 and result2 will be executed so two more threads are to be created and their value is returned to global execution context  )
    
---

## CallStack
- It follows the LIFO method for execution purpose
- So whenever functions or nested functions are called, >they goes into a callstack for its execution
- Consider this code:
```javascript 
    function one(){
        console.log("one")
        two()
    }
    function two(){
        console.log("two")
        three()
    }
    function three(){
        console.log("three")
    }

```

- this goes like : `one =>  two => three`
- so function three executes first and goes out of the callstack and similarly two followed by one 

