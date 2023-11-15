# Template Strings #
This is a es6 template string. What should be assigned to `x` such that the two conditions are `true`?


```js
let x = ‽‽‽;

`${x}` !=  '' + x // true

`${x}` !== '' + x // true
// Didn't find any solution for this
// I've try: escaping string interpolation, Date.now(), set a timeout, recursion, closures and unicorns. Nothing works
```
# Syntax #

(found in a popular library)

``` js
…
const isAThing = typeof y === 'function' && 'something' || 'another thing';
```

## Applicant response 

```js
const isAThing = typeof y === 'function' ? 'something' : 'another thing'; // ternary solution
```

Can you use a more straightforward construct to express similar semantics?
