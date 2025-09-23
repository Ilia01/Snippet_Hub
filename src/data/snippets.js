export const snippets = [
  {
    "id": "js-async-await-allsettled",
    "title": "Awaiting with allSettled",
    "description": "Shows how to handle an array of promises where some may succeed and some may fail, without the entire operation being rejected.",
    "language": "javascript",
    "code": "async function handleBatchPromises() {\n  const promises = [\n    Promise.resolve('Success 1'),\n    Promise.reject('Error 1'),\n    new Promise(resolve => setTimeout(() => resolve('Success 2'), 500)),\n    Promise.reject('Error 2'),\n  ];\n\n  const results = await Promise.allSettled(promises);\n\n  console.log(results);\n  // Expected output:\n  // [\n  //   { status: 'fulfilled', value: 'Success 1' },\n  //   { status: 'rejected', reason: 'Error 1' },\n  //   { status: 'fulfilled', value: 'Success 2' },\n  //   { status: 'rejected', reason: 'Error 2' }\n  // ]\n}\n\nhandleBatchPromises();",
    "tags": ["javascript", "async", "await", "promises", "advanced"],
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  },
  {
    "id": "js-async-await-timeout",
    "title": "async/await and setTimeout timing trap",
    "description": "Demonstrates the difference between synchronous setTimeout and asynchronous await, a classic source of confusion.",
    "language": "javascript",
    "code": "async function runWithAwait() {\n  console.log('Start');\n  const promise = new Promise((resolve) => {\n    setTimeout(() => resolve('Promise resolved!'), 100);\n  });\n  console.log('Before await');\n  const result = await promise;\n  console.log(result);\n  console.log('End');\n}\n\nfunction runWithoutAwait() {\n  console.log('Start');\n  setTimeout(() => console.log('Timeout finished!'), 100);\n  console.log('End');\n}\n\nrunWithAwait();\nrunWithoutAwait();\n\n// Expected output order:\n// \"Start\" (from runWithAwait)\n// \"Before await\"\n// \"Start\" (from runWithoutAwait)\n// \"End\" (from runWithoutAwait)\n// \"Promise resolved!\" (after 100ms)\n// \"End\" (from runWithAwait)\n// \"Timeout finished!\" (after 100ms)",
    "tags": ["javascript", "async", "await", "promises", "timing"],
    "createdAt": "2025-01-02T00:00:00.000Z",
    "updatedAt": "2025-01-02T00:00:00.000Z"
  },
  {
    "id": "js-var-closure-loop",
    "title": "var in a setTimeout loop",
    "description": "A classic JavaScript interview question demonstrating why var does not create a new scope for each loop iteration.",
    "language": "javascript",
    "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 100);\n}\n\n// Expected output (after ~100ms):\n// 3\n// 3\n// 3\n//\n// Explanation: The setTimeout callback captures the *final* value of `i` after the loop finishes.",
    "tags": ["javascript", "var", "closure", "scope", "hoisting"],
    "createdAt": "2025-01-03T00:00:00.000Z",
    "updatedAt": "2025-01-03T00:00:00.000Z"
  },
  {
    "id": "js-var-iife-fix",
    "title": "Fix var scope with an IIFE",
    "description": "Shows how an Immediately Invoked Function Expression (IIFE) can be used to capture the correct scope in a loop.",
    "language": "javascript",
    "code": "for (var i = 0; i < 3; i++) {\n  (function(j) {\n    setTimeout(() => {\n      console.log(j);\n    }, 100);\n  })(i);\n}\n\n// Expected output (after ~100ms):\n// 0\n// 1\n// 2\n//\n// Explanation: The IIFE creates a new scope for `j` on each iteration, capturing the current value of `i`.",
    "tags": ["javascript", "var", "iife", "scope"],
    "createdAt": "2025-01-04T00:00:00.000Z",
    "updatedAt": "2025-01-04T00:00:00.000Z"
  },
  {
    "id": "js-let-const-loop",
    "title": "let and const in a loop",
    "description": "Demonstrates how let and const solve the scope problem automatically, making the IIFE pattern unnecessary.",
    "language": "javascript",
    "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 100);\n}\n\n// Expected output (after ~100ms):\n// 0\n// 1\n// 2\n//\n// Explanation: `let` is block-scoped, so a new `i` is created for each iteration.",
    "tags": ["javascript", "let", "const", "scope", "es6"],
    "createdAt": "2025-01-05T00:00:00.000Z",
    "updatedAt": "2025-01-05T00:00:00.000Z"
  },
  {
    "id": "js-equality-comparisons",
    "title": "== vs === equality",
    "description": "Highlights the difference between loose and strict equality with surprising examples.",
    "language": "javascript",
    "code": "console.log(false == '0'); // true (type coercion)\nconsole.log(false === '0'); // false (types are different)\n\nconsole.log(null == undefined); // true\nconsole.log(null === undefined); // false\n\nconsole.log([] == ![]); // true (a famous JS quirk)\nconsole.log([] === ![]); // false\n\nconsole.log({} + []); // '[object Object]'\nconsole.log([] + {}); // '[object Object]'",
    "tags": ["javascript", "operators", "equality", "type coercion"],
    "createdAt": "2025-01-06T00:00:00.000Z",
    "updatedAt": "2025-01-06T00:00:00.000Z"
  },
  {
    "id": "js-this-context",
    "title": "this keyword variations",
    "description": "Explores how the `this` keyword behaves differently depending on how a function is called.",
    "language": "javascript",
    "code": "const obj = {\n  name: 'John',\n  greet: function() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n};\n\nconst greetFunction = obj.greet;\n\nobj.greet(); // Expected: \"Hello, my name is John\"\ngreetFunction(); // Expected: \"Hello, my name is \" + undefined (global context)\n\nconst anotherObj = { name: 'Jane' };\nobj.greet.call(anotherObj); // Expected: \"Hello, my name is Jane\"",
    "tags": ["javascript", "this", "context", "functions"],
    "createdAt": "2025-01-07T00:00:00.000Z",
    "updatedAt": "2025-01-07T00:00:00.000Z"
  },
  {
    "id": "js-hoisting",
    "title": "var and function hoisting",
    "description": "Shows how var and function declarations are hoisted to the top of their scope, but function expressions are not.",
    "language": "javascript",
    "code": "console.log(a); // undefined, but no ReferenceError\nvar a = 5;\n\n// function expression is not hoisted\ntry {\n  foo();\n} catch (e) {\n  console.error(e.message); // ReferenceError: Cannot access 'foo' before initialization\n}\n\nconst foo = () => {\n  console.log('Hello');\n};\n\n// function declaration is fully hoisted\nbar(); // \"World\"\n\nfunction bar() {\n  console.log('World');\n}",
    "tags": ["javascript", "hoisting", "var", "scope", "es6"],
    "createdAt": "2025-01-08T00:00:00.000Z",
    "updatedAt": "2025-01-08T00:00:00.000Z"
  },
  {
    "id": "js-array-destructuring",
    "title": "Array destructuring tricks",
    "description": "Advanced array destructuring for swapping variables and handling rest elements.",
    "language": "javascript",
    "code": "// Swapping variables\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b); // 2, 1\n\n// Skipping elements\nconst arr = [10, 20, 30, 40];\nconst [x, , z] = arr;\nconsole.log(x, z); // 10, 30\n\n// Using rest syntax\nconst [first, ...rest] = arr;\nconsole.log(first); // 10\nconsole.log(rest); // [20, 30, 40]",
    "tags": ["javascript", "es6", "destructuring", "arrays"],
    "createdAt": "2025-01-09T00:00:00.000Z",
    "updatedAt": "2025-01-09T00:00:00.000Z"
  },
  {
    "id": "js-debounce-function",
    "title": "Debounce function",
    "description": "A reusable debounce utility for limiting how often a function is called.",
    "language": "javascript",
    "code": "function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, delay);\n  };\n}\n\nconst logMessage = (msg) => console.log(msg);\nconst debouncedLog = debounce(logMessage, 500);\n\ndebouncedLog('First');\ndebouncedLog('Second');\ndebouncedLog('Third'); // Only 'Third' will be logged after 500ms.",
    "tags": ["javascript", "functions", "utilities", "debounce", "advanced"],
    "createdAt": "2025-01-10T00:00:00.000Z",
    "updatedAt": "2025-01-10T00:00:00.000Z"
  },
  {
    "id": "js-object-properties",
    "title": "Dynamic object properties",
    "description": "Creating and accessing object properties dynamically.",
    "language": "javascript",
    "code": "const propName = 'name';\nconst propValue = 'Alice';\n\nconst user = {\n  [propName]: propValue,\n  ['age' + 'InYears']: 30\n};\n\nconsole.log(user); // { name: 'Alice', ageInYears: 30 }",
    "tags": ["javascript", "objects", "es6", "dynamic"],
    "createdAt": "2025-01-11T00:00:00.000Z",
    "updatedAt": "2025-01-11T00:00:00.000Z"
  },
  {
    "id": "js-throttle-function",
    "title": "Throttle function",
    "description": "A reusable throttle utility for rate-limiting a function's execution.",
    "language": "javascript",
    "code": "function throttle(func, limit) {\n  let inThrottle;\n  return function() {\n    const args = arguments;\n    const context = this;\n    if (!inThrottle) {\n      func.apply(context, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n\nconst throttledScroll = throttle(() => {\n  console.log('Scroll event processed.');\n}, 1000);\n\n// This will only log 'Scroll event processed.' once per second, even if scrolled frequently.",
    "tags": ["javascript", "functions", "utilities", "throttle", "advanced"],
    "createdAt": "2025-01-12T00:00:00.000Z",
    "updatedAt": "2025-01-12T00:00:00.000Z"
  }
]
