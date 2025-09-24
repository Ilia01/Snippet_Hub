export const snippets = [
  {
    "id": "js-async-await-allsettled",
    "title": "Awaiting with allSettled",
    "description": "Shows how to handle an array of promises where some may succeed and some may fail, without the entire operation being rejected.",
    "language": "javascript",
    "code": "async function handleBatchPromises() {\n  const promises = [\n    Promise.resolve('Success 1'),\n    Promise.reject('Error 1'),\n    new Promise(resolve => setTimeout(() => resolve('Success 2'), 500)),\n    Promise.reject('Error 2'),\n  ];\n\n  const results = await Promise.allSettled(promises);\n\n  console.log(results);\n  // Expected output:\n  // [\n  //   { status: 'fulfilled', value: 'Success 1' },\n  //   { status: 'rejected', reason: 'Error 1' },\n  //   { status: 'fulfilled', value: 'Success 2' },\n  //   { status: 'rejected', reason: 'Error 2' }\n  // ]\n}\n\nhandleBatchPromises();",
    "tags": [
      "javascript",
      "async",
      "await",
      "promises",
      "advanced"
    ],
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  },
  {
    "id": "js-async-await-timeout",
    "title": "async/await and setTimeout timing trap",
    "description": "Demonstrates the difference between synchronous setTimeout and asynchronous await, a classic source of confusion.",
    "language": "javascript",
    "code": "async function runWithAwait() {\n  console.log('Start');\n  const promise = new Promise((resolve) => {\n    setTimeout(() => resolve('Promise resolved!'), 100);\n  });\n  console.log('Before await');\n  const result = await promise;\n  console.log(result);\n  console.log('End');\n}\n\nfunction runWithoutAwait() {\n  console.log('Start');\n  setTimeout(() => console.log('Timeout finished!'), 100);\n  console.log('End');\n}\n\nrunWithAwait();\nrunWithoutAwait();\n\n// Expected output order:\n// \"Start\" (from runWithAwait)\n// \"Before await\"\n// \"Start\" (from runWithoutAwait)\n// \"End\" (from runWithoutAwait)\n// \"Promise resolved!\" (after 100ms)\n// \"End\" (from runWithAwait)\n// \"Timeout finished!\" (after 100ms)",
    "tags": [
      "javascript",
      "async",
      "await",
      "promises",
      "timing"
    ],
    "createdAt": "2025-01-02T00:00:00.000Z",
    "updatedAt": "2025-01-02T00:00:00.000Z"
  },
  {
    "id": "js-var-closure-loop",
    "title": "var in a setTimeout loop",
    "description": "A classic JavaScript interview question demonstrating why var does not create a new scope for each loop iteration.",
    "language": "javascript",
    "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 100);\n}\n\n// Expected output (after ~100ms):\n// 3\n// 3\n// 3\n//\n// Explanation: The setTimeout callback captures the *final* value of `i` after the loop finishes.",
    "tags": [
      "javascript",
      "var",
      "closure",
      "scope",
      "hoisting"
    ],
    "createdAt": "2025-01-03T00:00:00.000Z",
    "updatedAt": "2025-01-03T00:00:00.000Z"
  },
  {
    "id": "js-var-iife-fix",
    "title": "Fix var scope with an IIFE",
    "description": "Shows how an Immediately Invoked Function Expression (IIFE) can be used to capture the correct scope in a loop.",
    "language": "javascript",
    "code": "for (var i = 0; i < 3; i++) {\n  (function(j) {\n    setTimeout(() => {\n      console.log(j);\n    }, 100);\n  })(i);\n}\n\n// Expected output (after ~100ms):\n// 0\n// 1\n// 2\n//\n// Explanation: The IIFE creates a new scope for `j` on each iteration, capturing the current value of `i`.",
    "tags": [
      "javascript",
      "var",
      "iife",
      "scope"
    ],
    "createdAt": "2025-01-04T00:00:00.000Z",
    "updatedAt": "2025-01-04T00:00:00.000Z"
  },
  {
    "id": "js-let-const-loop",
    "title": "let and const in a loop",
    "description": "Demonstrates how let and const solve the scope problem automatically, making the IIFE pattern unnecessary.",
    "language": "javascript",
    "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 100);\n}\n\n// Expected output (after ~100ms):\n// 0\n// 1\n// 2\n//\n// Explanation: `let` is block-scoped, so a new `i` is created for each iteration.",
    "tags": [
      "javascript",
      "let",
      "const",
      "scope",
      "es6"
    ],
    "createdAt": "2025-01-05T00:00:00.000Z",
    "updatedAt": "2025-01-05T00:00:00.000Z"
  },
  {
    "id": "js-equality-comparisons",
    "title": "== vs === equality",
    "description": "Highlights the difference between loose and strict equality with surprising examples.",
    "language": "javascript",
    "code": "console.log(false == '0'); // true (type coercion)\nconsole.log(false === '0'); // false (types are different)\n\nconsole.log(null == undefined); // true\nconsole.log(null === undefined); // false\n\nconsole.log([] == ![]); // true (a famous JS quirk)\nconsole.log([] === ![]); // false\n\nconsole.log({} + []); // '[object Object]'\nconsole.log([] + {}); // '[object Object]'",
    "tags": [
      "javascript",
      "operators",
      "equality",
      "type coercion"
    ],
    "createdAt": "2025-01-06T00:00:00.000Z",
    "updatedAt": "2025-01-06T00:00:00.000Z"
  },
  {
    "id": "js-this-context",
    "title": "this keyword variations",
    "description": "Explores how the `this` keyword behaves differently depending on how a function is called.",
    "language": "javascript",
    "code": "const obj = {\n  name: 'John',\n  greet: function() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n};\n\nconst greetFunction = obj.greet;\n\nobj.greet(); // Expected: \"Hello, my name is John\"\ngreetFunction(); // Expected: \"Hello, my name is \" + undefined (global context)\n\nconst anotherObj = { name: 'Jane' };\nobj.greet.call(anotherObj); // Expected: \"Hello, my name is Jane\"",
    "tags": [
      "javascript",
      "this",
      "context",
      "functions"
    ],
    "createdAt": "2025-01-07T00:00:00.000Z",
    "updatedAt": "2025-01-07T00:00:00.000Z"
  },
  {
    "id": "js-hoisting",
    "title": "var and function hoisting",
    "description": "Shows how var and function declarations are hoisted to the top of their scope, but function expressions are not.",
    "language": "javascript",
    "code": "console.log(a); // undefined, but no ReferenceError\nvar a = 5;\n\n// function expression is not hoisted\ntry {\n  foo();\n} catch (e) {\n  console.error(e.message); // ReferenceError: Cannot access 'foo' before initialization\n}\n\nconst foo = () => {\n  console.log('Hello');\n};\n\n// function declaration is fully hoisted\nbar(); // \"World\"\n\nfunction bar() {\n  console.log('World');\n}",
    "tags": [
      "javascript",
      "hoisting",
      "var",
      "scope",
      "es6"
    ],
    "createdAt": "2025-01-08T00:00:00.000Z",
    "updatedAt": "2025-01-08T00:00:00.000Z"
  },
  {
    "id": "js-array-destructuring",
    "title": "Array destructuring tricks",
    "description": "Advanced array destructuring for swapping variables and handling rest elements.",
    "language": "javascript",
    "code": "// Swapping variables\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b); // 2, 1\n\n// Skipping elements\nconst arr = [10, 20, 30, 40];\nconst [x, , z] = arr;\nconsole.log(x, z); // 10, 30\n\n// Using rest syntax\nconst [first, ...rest] = arr;\nconsole.log(first); // 10\nconsole.log(rest); // [20, 30, 40]",
    "tags": [
      "javascript",
      "es6",
      "destructuring",
      "arrays"
    ],
    "createdAt": "2025-01-09T00:00:00.000Z",
    "updatedAt": "2025-01-09T00:00:00.000Z"
  },
  {
    "id": "js-debounce-function",
    "title": "Debounce function",
    "description": "A reusable debounce utility for limiting how often a function is called.",
    "language": "javascript",
    "code": "function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, delay);\n  };\n}\n\nconst logMessage = (msg) => console.log(msg);\nconst debouncedLog = debounce(logMessage, 500);\n\ndebouncedLog('First');\ndebouncedLog('Second');\ndebouncedLog('Third'); // Only 'Third' will be logged after 500ms.",
    "tags": [
      "javascript",
      "functions",
      "utilities",
      "debounce",
      "advanced"
    ],
    "createdAt": "2025-01-10T00:00:00.000Z",
    "updatedAt": "2025-01-10T00:00:00.000Z"
  },
  {
    "id": "js-object-properties",
    "title": "Dynamic object properties",
    "description": "Creating and accessing object properties dynamically.",
    "language": "javascript",
    "code": "const propName = 'name';\nconst propValue = 'Alice';\n\nconst user = {\n  [propName]: propValue,\n  ['age' + 'InYears']: 30\n};\n\nconsole.log(user); // { name: 'Alice', ageInYears: 30 }",
    "tags": [
      "javascript",
      "objects",
      "es6",
      "dynamic"
    ],
    "createdAt": "2025-01-11T00:00:00.000Z",
    "updatedAt": "2025-01-11T00:00:00.000Z"
  },
  {
    "id": "js-throttle-function",
    "title": "Throttle function",
    "description": "A reusable throttle utility for rate-limiting a function's execution.",
    "language": "javascript",
    "code": "function throttle(func, limit) {\n  let inThrottle;\n  return function() {\n    const args = arguments;\n    const context = this;\n    if (!inThrottle) {\n      func.apply(context, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n\nconst throttledScroll = throttle(() => {\n  console.log('Scroll event processed.');\n}, 1000);\n\n// This will only log 'Scroll event processed.' once per second, even if scrolled frequently.",
    "tags": [
      "javascript",
      "functions",
      "utilities",
      "throttle",
      "advanced"
    ],
    "createdAt": "2025-01-12T00:00:00.000Z",
    "updatedAt": "2025-01-12T00:00:00.000Z"
  },
  {
    "id": "imgur.js",
    "title": "imgur.js",
    "description": "Imported from GitHub Gist",
    "language": "javascript",
    "code": "const axios = require('axios');\n\nconst csbApi = async () => {\n  const base = await axios.get(\n    \"https://raw.githubusercontent.com/nazrul4x/Noobs/main/Apis.json\"\n  );\n  return base.data.csb;\n};\n\nmodule.exports = {\n    config: {\n        name: \"imgur\",\n        version: \"1.0.0\",\n        role: 0,\n        author: \"♡ Nazrul ♡\",\n        shortDescription: \"imgur upload\",\n        countDown: 0,\n        category: \"utility\",\n        guide: {\n            en: '[reply to image]'\n        }\n    },\n\n    onStart: async ({ api, event }) => {\n        let link2;\n\n        if (event.type === \"message_reply\" && event.messageReply.attachments.length > 0) {\n            link2 = event.messageReply.attachments[0].url;\n        } else if (event.attachments.length > 0) {\n            link2 = event.attachments[0].url;\n        } else {\n            return api.sendMessage('No attachment detected. Please reply to an image.', event.threadID, event.messageID);\n        }\n\n        try {\n            const res = await axios.get(`${await csbApi()}/nazrul/imgur?link=${encodeURIComponent(link2)}`);\n            const link = res.data.uploaded.image;\n            return api.sendMessage(`\\n\\n${link}`, event.threadID, event.messageID);\n        } catch (error) {\n            console.error(\"Error uploading image to Imgur:\", error);\n            return api.sendMessage(\"An error occurred while uploading the image to Imgur.\", event.threadID, event.messageID);\n        }\n    }\n};\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2025-09-24T09:40:47.008Z",
    "updatedAt": "2025-09-24T09:40:47.008Z"
  },
  {
    "id": "bca2f7d0c8b31205fa3c9f328d548c70-puppeteer-with-adblock.js",
    "title": "puppeteer-with-adblock.js",
    "description": "Imported from GitHub Gist",
    "language": "javascript",
    "code": "'use strict';\n\nconst puppeteer = require('puppeteer');\n\n(async () => {\n    /* PRECONDITION:\n    0. download ublock, I used https://github.com/gorhill/uBlock/releases/download/1.14.19b5/uBlock0.chromium.zip\n    1. run $PATH_TO_CHROME --user-data-dir=/some/empty/directory --load-extension=/location/of/ublock\n    2. enable block lists you want to use\n    */\n\n    const ext = '/Users/ckanich/Downloads/uBlock0.chromium';\n    const datadir = '/Users/ckanich/Downloads/profile/';\n    // Doesn't work with headless: false, my guess is that ublock \n    // (or every extension?) breaks if it can't show its menu button\n    const browser = await puppeteer.launch(\n        {\n            headless: false,\n            userDataDir: datadir,\n            args: [`--disable-extensions-except=${ext}`, `--load-extension=${ext}`]\n        });\n    const page = await browser.newPage();\n    // First load will show ads and I have no idea why:\n    await page.goto('https://www.bing.com/search?q=web+hosting');\n    // Give ublock time to load its settings or something?\n    // Without this wait next page ends up with ads too\n    await page.waitFor(2500);\n    // This page will not show ads:\n    await page.goto('https://www.nytimes.com');\n    // Wait for the page to actually render everything\n    await page.waitFor(5000);\n    await page.screenshot({ path: 'nyt-without-ads.png', fullPage: true });\n    await browser.close();\n\n})();",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2019-02-12T15:32:13.000Z",
    "updatedAt": "2024-12-20T14:18:03.000Z"
  },
  {
    "id": "71bd44af0022b56723281e76e9faf0aa-demo.js",
    "title": "demo.js",
    "description": "Simple promise-based script-loader",
    "language": "javascript",
    "code": "const loader = new loadScript();\nloader.load([\n    '//apis.google.com/js/client:platform.js?onload=startApp',\n    '//cdnjs.cloudflare.com/ajax/libs/dropbox.js/0.10.3/dropbox.min.js'\n]).then(({length}) => {\n    console.log(`${length} scripts loaded!`);\n});",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2020-10-09T20:12:09.000Z",
    "updatedAt": "2024-04-01T09:19:36.000Z"
  },
  {
    "id": "71bd44af0022b56723281e76e9faf0aa-loadScript.js",
    "title": "loadScript.js",
    "description": "Simple promise-based script-loader",
    "language": "javascript",
    "code": "window.loadScript = function () {\n  /**\n   *\n   * @param {string} url\n   * @param {object=} attr\n   * @returns {Promise}\n   */\n  const loader = (url, attr) => new Promise((resolve, reject) => {\n    const script = window.document.createElement('script');\n    script.src = url;\n    script.async = true;\n    script.crossOrigin = 'anonymous';\n    attr = attr || {};\n\n    for (const attrName in attr) {\n      script[attrName] = attr[attrName];\n    }\n\n    script.addEventListener('load', () => {\n      resolve(script);\n    }, false);\n\n    script.addEventListener('error', () => {\n      reject(script);\n    }, false);\n\n    window.document.body.appendChild(script);\n  });\n\n  /**\n   * Loads scripts asynchronously\n   * @param {string|string[]} urls\n   * @param {object=} attr Other script tag attributes\n   * @returns {Promise}\n   */\n  this.load = (urls, attr) => {\n    if (!Array.isArray(urls)) {\n      urls = [urls];\n    }\n\n    return Promise.all(urls.map(url => loader(url, attr)));\n  }\n\n  /**\n   * Loads scripts asynchronously. It supports multiple url arguments, so each one will be loaded right after the\n   * previous is loaded. This is a way of chaining dependency loading.\n   *\n   * @param {string|string[]} urls, ...\n   * @returns {Promise}\n   */\n  this.loadChain = function (urls) {\n    const args = Array.isArray(arguments) ? arguments : Array.prototype.slice.call(arguments);\n    const p = this.require(args.shift());\n    const self = this;\n    return args.length ? p.then(() => {\n      self.requireChain(...args);\n    }) : p;\n  }\n}",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2020-10-09T20:12:09.000Z",
    "updatedAt": "2024-04-01T09:19:36.000Z"
  },
  {
    "id": "554ba464e5d32b66620f55e583b2c0fd-custom-metrics.js",
    "title": "custom-metrics.js",
    "description": "custom-metrics.js",
    "language": "javascript",
    "code": "[lcp]\nconst po = new PerformanceObserver(() => {});\npo.observe({type: 'largest-contentful-paint', buffered: true});\nconst lastEntry = po.takeRecords().slice(-1)[0];\nreturn lastEntry.renderTime || lastEntry.loadTime;\n\n[cls]\nconst po = new PerformanceObserver(() => {});\npo.observe({type: 'layout-shift', buffered: true});\nreturn po.takeRecords().reduce((val, entry) => val + entry.value, 0);\n\n[fid]\nconst po = new PerformanceObserver(() => {});\npo.observe({type: 'first-input', buffered: true});\nconst lastEntry = po.takeRecords().slice(-1)[0];\nreturn lastEntry.processingStart - lastEntry.startTime;",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2020-04-03T16:49:33.000Z",
    "updatedAt": "2021-05-10T12:57:45.000Z"
  },
  {
    "id": "c053f68aead473d7585b45c9e8dce31e-lcp.js",
    "title": "lcp.js",
    "description": "Largest Contentful Paint - Puppeteer",
    "language": "javascript",
    "code": "const puppeteer = require('puppeteer');\n\nconst Good3G = {\n  'offline': false,\n  'downloadThroughput': 1.5 * 1024 * 1024 / 8,\n  'uploadThroughput': 750 * 1024 / 8,\n  'latency': 40\n};\n\nconst phone = puppeteer.KnownDevices['Nexus 5X'];\n\nfunction calcLCP() {\n  window.largestContentfulPaint = 0;\n\n  const observer = new PerformanceObserver((entryList) => {\n    const entries = entryList.getEntries();\n    const lastEntry = entries[entries.length - 1];\n    window.largestContentfulPaint = lastEntry.renderTime || lastEntry.loadTime;\n  });\n\n  observer.observe({ type: 'largest-contentful-paint', buffered: true });\n\n  document.addEventListener('visibilitychange', () => {\n    if (document.visibilityState === 'hidden') {\n      observer.takeRecords();\n      observer.disconnect();\n      console.log('LCP:', window.largestContentfulPaint);\n    }\n  });\n}\n\nasync function getLCP(url) {\n  const browser = await puppeteer.launch({\n    args: ['--no-sandbox'],\n    timeout: 10000\n  });\n\n  try {\n    const page = await browser.newPage();\n    const client = await page.createCDPSession();\n\n    await client.send('Network.enable');\n    await client.send('ServiceWorker.enable');\n    await client.send('Network.emulateNetworkConditions', Good3G);\n    await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });\n    await page.emulate(phone);\n\n    await page.evaluateOnNewDocument(calcLCP);\n    await page.goto(url, { waitUntil: 'load', timeout: 60000 });\n\n    let lcp = await page.evaluate(() => {\n      return window.largestContentfulPaint;\n    });\n\n    browser.close();\n    return lcp;\n\n  } catch (error) {\n    console.log(error);\n    browser.close();\n  }\n}\n\ngetLCP(\"https://remix-clone-hacker-news.flameddd1.workers.dev/\")\n  .then(lcp => console.log(\"LCP is: \" + lcp));",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2020-03-17T01:31:43.000Z",
    "updatedAt": "2024-03-26T00:09:25.000Z"
  },
  {
    "id": "ba8090ffc7e650a678ea8b42329c94b6-functional-utils.js",
    "title": "functional-utils.js",
    "description": "A set of pure ES2015 functions aimed to make functional JavaScript more idiomatic.",
    "language": "javascript",
    "code": "// Examples at https://gist.github.com/bendc/9b05735dfa6966859025#gistcomment-1370485\n\n\n// array utils\n// =================================================================================================\n\nconst combine = (...arrays) => [].concat(...arrays);\n\nconst compact = arr => arr.filter(Boolean);\n\nconst contains = (() => Array.prototype.includes\n  ? (arr, value) => arr.includes(value)\n  : (arr, value) => arr.some(el => el === value)\n)();\n\nconst difference = (arr, ...others) => {\n  var combined = [].concat(...others)\n  return arr.filter(el => !combined.some(exclude => el === exclude))\n};\n\nconst head = arr => arr[0];\n\nconst initial = arr => arr.slice(0, -1);\n\nconst intersection = (...arrays) =>\n  [...Set([].concat(...arrays))].filter(toFind =>\n    arrays.every(arr => arr.some(el => el === toFind))\n  );\n\nconst last = arr => arr.slice(-1)[0];\n\nconst sortedIndex = (arr, value) =>\n  [value].concat(arr).sort().indexOf(value);\n\nconst tail = arr => arr.slice(1);\n\nconst toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))();\n\nconst union = (...arrays) => [...Set([].concat(...arrays))];\n\nconst unique = arr => [...Set(arr)];\n\nconst without = (arr, ...values) =>\n  arr.filter(el => !values.some(exclude => el === exclude));\n\n\n// object utils\n// =================================================================================================\n\nconst getValues = obj => Object.keys(obj).map(key => obj[key]);\n\nconst merge = (() => {\n  const extend = Object.assign ? Object.assign : (target, ...sources) => {\n    sources.forEach(source =>\n      Object.keys(source).forEach(prop => target[prop] = source[prop])\n    );\n    return target;\n  };\n  return (...objects) => extend({}, ...objects);\n})();\n\nconst toMap = (() => {\n  const convert = obj => new Map(Object.keys(obj).map(key => [key, obj[key]]));\n  return obj => obj instanceof Map ? obj : convert(obj);\n})();\n\n\n// math\n// =================================================================================================\n\nconst min = arr => Math.min(...arr);\n\nconst max = arr => Math.max(...arr);\n\nconst sum = arr => arr.reduce((a, b) => a + b);\n\nconst product = arr => arr.reduce((a, b) => a * b);\n\n\n// function decorators\n// =================================================================================================\n\nconst not = fn => (...args) => !fn(...args);\n\nconst maybe = fn =>\n  (...args) => {\n    if (args.length < fn.length || args.some(arg => arg == null)) return;\n    return fn(...args);\n  };\n\nconst once = fn => {\n  var done = false;\n  return (...args) => {\n    if (done) return;\n    done = true;\n    fn(...args);\n  };\n};\n\nconst curry = fn => {\n  const arity = fn.length;\n  const curried = (...args) =>\n    args.length < arity ? (...more) => curried(...args, ...more) : fn(...args);\n  return curried;\n};\n\nconst pipeline = (...funcs) =>\n  value => funcs.reduce((a, b) => b(a), value);",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-01-07T20:32:44.000Z",
    "updatedAt": "2020-11-03T14:24:33.000Z"
  },
  {
    "id": "4bd8d89fa447dd38a02c92c022b6cbca-minify-detect.js",
    "title": "minify-detect.js",
    "description": "Detecting unminified code",
    "language": "javascript",
    "code": "// https://hg.mozilla.org/mozilla-central/rev/2f9043292e63\n// Used to detect minification for automatic pretty printing\nconst SAMPLE_SIZE = 30; // no of lines\nconst INDENT_COUNT_THRESHOLD = 20; // percentage\n\nfunction isMinified (str) {\n  let isMinified;\n  let lineEndIndex = 0;\n  let lineStartIndex = 0;\n  let lines = 0;\n  let indentCount = 0;\n\n  // Strip comments.\n  str = str.replace(/\\/\\*[\\S\\s]*?\\*\\/|\\/\\/(.+|\\n)/g, \"\");\n\n  while (lines++ < SAMPLE_SIZE) {\n    lineEndIndex = str.indexOf(\"\\n\", lineStartIndex);\n    if (lineEndIndex == -1) {\n       break;\n    }\n    if (/^\\s+/.test(str.slice(lineStartIndex, lineEndIndex))) {\n      indentCount++;\n    }\n    lineStartIndex = lineEndIndex + 1;\n  }\n  isMinified = ((indentCount / lines ) * 100) < INDENT_COUNT_THRESHOLD;\n\n  return isMinified;\n};\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2017-08-15T00:20:19.000Z",
    "updatedAt": "2021-12-09T10:57:05.000Z"
  },
  {
    "id": "9d6b8eddc7f5e647a054d7b333434ef6-01-[id].js",
    "title": "01-[id].js",
    "description": "Next.js SPA example with dynamic client-only routing and static hosting",
    "language": "javascript",
    "code": "// pages/stuff/[id].js\n\nimport { useRouter } from 'next/router';\nimport Link from 'next/link';\nimport useSWR from 'swr'\n\nexport default function Page() {\n  const router = useRouter();\n  const id = router.query.id  \n  if (id == null) {\n    // Static pre-generated HTML\n    return <h1>Loading...</h1>\n  }\n  return (\n    <>\n      <h1>Page for {id}</h1>\n      <ul>\n        <li>\n          <Link href=\"/stuff/1\">go to 1</Link>\n        </li>\n        <li>\n          <Link href=\"/stuff/2\">go to 2</Link>\n        </li>\n      </ul>\n      <hr />\n      <Content id={id} />\n    </>\n  )\n}\n\nconst fetcher = (...args) => fetch(...args).then((res) => res.json())\n\nfunction Content({ id }) {\n  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/' + id, fetcher)\n  if (error) return <h1>Failed to load</h1>\n  if (!data) return <h1>Loading...</h1>\n  return (\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n  );\n}",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2023-03-18T00:16:11.000Z",
    "updatedAt": "2025-08-04T03:02:00.000Z"
  },
  {
    "id": "9d6b8eddc7f5e647a054d7b333434ef6-02-index.js",
    "title": "02-index.js",
    "description": "Next.js SPA example with dynamic client-only routing and static hosting",
    "language": "javascript",
    "code": "// pages/index.js\n\nimport Link from 'next/link';\n\nexport default function Page() {\n  return (\n    <>\n      <h1>Index page</h1>\n      <hr />\n      <ul>\n        <li>\n          <Link href=\"/stuff/1\">go to 1</Link>\n        </li>\n        <li>\n          <Link href=\"/stuff/2\">go to 2</Link>\n        </li>\n      </ul>\n    </>\n  );\n}",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2023-03-18T00:16:11.000Z",
    "updatedAt": "2025-08-04T03:02:00.000Z"
  },
  {
    "id": "9d6b8eddc7f5e647a054d7b333434ef6-03-next.config.js",
    "title": "03-next.config.js",
    "description": "Next.js SPA example with dynamic client-only routing and static hosting",
    "language": "javascript",
    "code": "const nextConfig = {\n  output: 'export',\n}\n\nmodule.exports = nextConfig\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2023-03-18T00:16:11.000Z",
    "updatedAt": "2025-08-04T03:02:00.000Z"
  },
  {
    "id": "b543da43290b15c514493da86958d913-Wordle.js",
    "title": "Wordle.js",
    "description": "wordle v3 (tiny wordle clone i built during a stream) https://www.youtube.com/watch?v=Qxn4-bTOx0g",
    "language": "javascript",
    "code": "import { useState, useEffect, useRef, useMemo } from 'react'\n\nexport default function Wordle() {\n  let [currentAttempt, setCurrentAttempt] = useState('')\n  let [bestColors, setBestColors] = useState(() => new Map())\n  let [history, setHistory] = usePersistedHistory(h => {\n    waitForAnimation(h)\n  })\n\n  useEffect(() => {\n    window.addEventListener('keydown', handleKeyDown)\n    return () => window.removeEventListener('keydown', handleKeyDown)\n  })\n\n  function handleKeyDown(e) {\n    if (e.ctrlKey || e.metaKey || e.altKey) {\n      return\n    }\n    handleKey(e.key)\n  }\n\n  function handleKey(key) {\n    if (history.length === 6) {\n      return\n    }\n    if (animatingRef.current) {\n      return\n    }\n    let letter = key.toLowerCase()\n    if (letter === 'enter') {\n      if (currentAttempt.length < 5) {\n        return\n      }\n      if (!wordList.includes(currentAttempt)) {\n        alert('Not in my thesaurus')\n        return\n      }\n      if (\n        history.length === 5 &&\n        currentAttempt !== secret\n      ) {\n        alert(secret)\n      }\n      let newHistory = [\n        ...history,\n        currentAttempt\n      ]\n      setHistory(newHistory)\n      setCurrentAttempt('')\n      waitForAnimation(newHistory)\n    } else if (letter === 'backspace') {\n      setCurrentAttempt(\n        currentAttempt.slice(0, currentAttempt.length - 1)\n      )\n    } else if (/^[a-z]$/.test(letter)) {\n      if (currentAttempt.length < 5) {\n        setCurrentAttempt(currentAttempt + letter)\n      }\n    }\n  }\n\n  let animatingRef = useRef(false)\n  function waitForAnimation(nextHistory) {\n    if (animatingRef.current) {\n      throw Error('should never happen')\n    }\n    animatingRef.current = true\n    setTimeout(() => {\n      animatingRef.current = false\n      setBestColors(calculateBestColors(nextHistory))\n    }, 2000)\n  }\n\n  return (\n    <div id=\"screen\">\n      <h1>Wordle</h1>\n      <Grid\n        history={history}\n        currentAttempt={currentAttempt}\n      />\n      <Keyboard\n        bestColors={bestColors}\n        onKey={handleKey}\n      />\n    </div>\n  )\n}\n\nlet wordList = [\n  'patio',\n  'darts',\n  'piano',\n  'horse',\n  'hello',\n  'water',\n  'pizza',\n  'sushi',\n  'crabs'\n];\nlet secret = wordList[0]\n\nfunction Grid({\n  history,\n  currentAttempt\n}) {\n  let rows = []\n  for (let i = 0; i < 6; i++) {\n    if (i < history.length) {\n      rows.push(\n        <Attempt\n          key={i}\n          attempt={history[i]}\n          solved={true}\n        />\n      )\n    } else if (i === history.length) {\n      rows.push(\n        <Attempt\n          key={i}\n          attempt={currentAttempt}\n          solved={false}\n        />\n      )\n    } else {\n      rows.push(\n        <Attempt\n          key={i}\n          attempt=\"\"\n          solved={false}\n        />\n      )\n    }\n  }\n  return (\n    <div id=\"grid\">\n      {rows}\n    </div>\n  );\n}\n\nfunction Attempt({\n  attempt,\n  solved,\n}) {\n  let cells = []\n  for (let i = 0; i < 5; i++) {\n    cells.push(\n      <Cell\n        key={i}\n        index={i}\n        attempt={attempt}\n        solved={solved}\n      />\n    )\n  }\n  return <div>{cells}</div>\n}\n\nfunction Cell({\n  index,\n  attempt,\n  solved,\n}) {\n  let content\n  let hasLetter = attempt[index] !== undefined\n  let color = getBgColor(attempt, index)\n  if (hasLetter) {\n    content = attempt[index]\n  } else {\n    // lol\n    content = <div style={{opacity: 0}}>X</div>\n  }\n  return (\n    <div\n      className={\n        \"cell\" + (solved ? ' solved' : '')\n        + (hasLetter ? ' filled': '')\n      }\n    >\n      <div className=\"surface\" style={{\n        transitionDelay: (index * 300) + 'ms'\n      }}>\n        <div\n          className=\"front\"\n          style={{\n            backgroundColor: BLACK,\n            borderColor: hasLetter ? MIDDLEGREY : ''\n          }}\n        >\n          {content}\n        </div>\n        <div\n          className=\"back\"\n          style={{\n            backgroundColor: color,\n            borderColor: color\n          }}\n        >\n          {content}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nfunction Keyboard({ bestColors, onKey }) {\n  return (\n    <div id=\"keyboard\">\n      <KeyboardRow\n        bestColors={bestColors}\n        letters=\"qwertyuiop\"\n        onKey={onKey}\n        isLast={false}\n      />\n      <KeyboardRow\n        bestColors={bestColors}\n        letters=\"asdfghjkl\"\n        onKey={onKey}\n        isLast={false}\n      />\n      <KeyboardRow\n        bestColors={bestColors}\n        letters=\"zxcvbnm\"\n        onKey={onKey}\n        isLast={true}\n      />\n    </div>\n  )\n}\n\nfunction KeyboardRow({\n  bestColors,\n  letters,\n  isLast,\n  onKey\n}) {\n  let buttons = []\n  if (isLast) {\n    buttons.push(\n      <Button\n        onKey={onKey}\n        key=\"enter\"\n        buttonKey=\"Enter\"\n      >\n        Enter\n      </Button>\n    )\n  }\n  for (let letter of letters) {\n    buttons.push(\n      <Button\n        onKey={onKey}\n        color={bestColors.get(letter)}\n        key={letter}\n        buttonKey={letter}\n      >\n        {letter}\n      </Button>\n    )\n  }\n  if (isLast) {\n    buttons.push(\n      <Button\n        onKey={onKey}\n        key=\"backspace\"\n        buttonKey=\"Backspace\"\n      >\n        Backspace\n      </Button>\n    )\n  }\n  return (\n    <div>\n      {buttons}\n    </div>\n  )\n}\n\nfunction Button({\n  buttonKey,\n  children,\n  color = LIGHTGREY,\n  onKey,\n}) {\n  return (\n    <button\n      className=\"button\"\n      style={{\n        backgroundColor: color,\n        borderColor: color,\n      }}\n      onClick={() => {\n        onKey(buttonKey)\n      }}\n    >\n      {children}\n    </button>\n  )\n}\n\nfunction usePersistedHistory(onLoad) {\n  let [history, setHistory] = useState([])\n  let loadedRef = useRef(false)\n  useEffect(() => {\n    if (loadedRef.current) {\n      return\n    }\n    loadedRef.current = true\n    let savedHistory = loadHistory()\n    if (savedHistory) {\n      setHistory(savedHistory)\n      onLoad(savedHistory)\n    }\n  })\n  useEffect(() => {\n    saveHistory(history)\n  }, [history])\n  return [history, setHistory]\n}\n\nfunction getBgColor(attempt, i) {\n  let correctLetter = secret[i]\n  let attemptLetter = attempt[i]\n  if (\n    attemptLetter === undefined ||\n    secret.indexOf(attemptLetter) === -1\n  ) {\n    return GREY\n  }\n  if (correctLetter === attemptLetter) {\n    return GREEN\n  }\n  return YELLOW\n}\n\nfunction calculateBestColors(history) {\n  let map =  new Map()\n  for (let attempt of history) {\n    for (let i = 0; i < attempt.length; i++) {\n      let color = getBgColor(attempt, i)\n      let key = attempt[i]\n      let bestColor = map.get(key)\n      map.set(key, getBetterColor(color, bestColor))\n    }\n  }\n  return map\n}\n\nfunction getBetterColor(a, b) {\n  if (a === GREEN || b === GREEN) {\n    return GREEN\n  }\n  if (a === YELLOW || b === YELLOW) {\n    return YELLOW\n  }\n  return GREY\n}\n\nfunction loadHistory() {\n  let data\n  try {\n    data = JSON.parse(localStorage.getItem('data'))\n  } catch { }\n  if (data != null) {\n    if (data.secret === secret) {\n      return data.history\n    }\n  }\n}\n\nfunction saveHistory(history) {\n  let data = JSON.stringify({\n    secret,\n    history\n  })\n  try {\n    localStorage.setItem('data', data)\n  } catch { }\n}\n\nlet BLACK = '#111'\nlet GREY = '#212121'\nlet MIDDLEGREY = '#666'\nlet LIGHTGREY = '#888'\nlet GREEN = '#538d4e'\nlet YELLOW = '#b59f3b'\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2022-01-22T20:49:58.000Z",
    "updatedAt": "2025-09-02T06:28:23.000Z"
  },
  {
    "id": "b543da43290b15c514493da86958d913-index.js",
    "title": "index.js",
    "description": "wordle v3 (tiny wordle clone i built during a stream) https://www.youtube.com/watch?v=Qxn4-bTOx0g",
    "language": "javascript",
    "code": "import { createRoot } from 'react-dom'\nimport Wordle from './Wordle.js'\n\nlet root = createRoot(document.getElementById('root'))\nroot.render(\n  <Wordle />\n)\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2022-01-22T20:49:58.000Z",
    "updatedAt": "2025-09-02T06:28:23.000Z"
  },
  {
    "id": "deb61c3f10a9319c348987acc0435ff9-index.js",
    "title": "index.js",
    "description": "wordle v2 (tiny wordle clone i built during a stream) https://www.youtube.com/watch?v=xGyUyGbfOBo",
    "language": "javascript",
    "code": "'use strict'\n\nlet wordList = [\n  'patio',\n  'darts',\n  'piano',\n  'horse',\n  'hello',\n  'water',\n  'pizza',\n  'sushi',\n  'crabs'\n];\nlet secret = wordList[0]\n\nlet currentAttempt = ''\nlet history = []\n\nfunction handleKeyDown(e) {\n  if (e.ctrlKey || e.metaKey || e.altKey) {\n    return\n  }\n  handleKey(e.key)\n}\n\nfunction handleKey(key) {\n  if (history.length === 6) {\n    return\n  }\n  if (isAnimating) {\n    return\n  }\n  let letter = key.toLowerCase()\n  if (letter === 'enter') {\n    if (currentAttempt.length < 5) {\n      return\n    }\n    if (!wordList.includes(currentAttempt)) {\n      alert('Not in my thesaurus')\n      return\n    }\n    if (\n      history.length === 5 &&\n      currentAttempt !== secret\n    ) {\n      alert(secret)\n    }\n    history.push(currentAttempt)\n    currentAttempt = ''\n    updateKeyboard()\n    saveGame()\n    pauseInput()\n  } else if (letter === 'backspace') {\n    currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1)\n  } else if (/^[a-z]$/.test(letter)) {\n    if (currentAttempt.length < 5) {\n      currentAttempt += letter\n      animatePress(currentAttempt.length - 1)\n    }\n  }\n  updateGrid()\n}\n\nlet isAnimating = false\nfunction pauseInput() {\n  if (isAnimating) throw Error('should never happen')\n  isAnimating = true\n  setTimeout(() => {\n    isAnimating = false\n  }, 2000)\n}\n\nfunction buildGrid() {\n  for (let i = 0; i < 6; i++) {\n    let row = document.createElement('div')\n    for (let j = 0; j < 5; j++) {\n      let cell = document.createElement('div')\n      cell.className = 'cell'\n      let front = document.createElement('div')\n      front.className = 'front'\n      let back = document.createElement('div')\n      back.className = 'back'\n      let surface = document.createElement('div')\n      surface.className = 'surface'\n      surface.style.transitionDelay = (j * 300) + 'ms'\n      surface.appendChild(front)\n      surface.appendChild(back)\n      cell.appendChild(surface)\n      row.appendChild(cell)\n    }\n    grid.appendChild(row)\n  }\n}\n\nfunction updateGrid() {\n  for (let i = 0; i < 6; i++) {\n    let row = grid.children[i]\n    if (i < history.length) {\n      drawAttempt(row, history[i], true)\n    } else if (i === history.length) {\n      drawAttempt(row, currentAttempt, false)\n    } else {\n      drawAttempt(row, '', false)\n    }\n  }\n}\n\nfunction drawAttempt(row, attempt, solved) {\n  for (let i = 0; i < 5; i++) {\n    let cell = row.children[i]\n    let surface = cell.firstChild\n    let front = surface.children[0]\n    let back = surface.children[1]\n    if (attempt[i] !== undefined) {\n      front.textContent = attempt[i]\n      back.textContent = attempt[i]\n    } else {\n      // lol\n      front.innerHTML = '<div style=\"opacity: 0\">X</div>'\n      back.innerHTML = '<div style=\"opacity: 0\">X</div>'\n      clearAnimation(cell)\n    }\n    front.style.backgroundColor = BLACK\n    front.style.borderColor = ''\n    if (attempt[i] !== undefined) {\n      front.style.borderColor = MIDDLEGREY\n    }\n    back.style.backgroundColor = getBgColor(attempt, i)\n    back.style.borderColor = getBgColor(attempt, i)\n    if (solved) {\n      cell.classList.add('solved')\n    } else {\n      cell.classList.remove('solved')\n    }\n  }\n}\n\nlet BLACK = '#111'\nlet GREY = '#212121'\nlet MIDDLEGREY = '#666'\nlet LIGHTGREY = '#888'\nlet GREEN = '#538d4e'\nlet YELLOW = '#b59f3b'\n\nfunction getBgColor(attempt, i) {\n  let correctLetter = secret[i]\n  let attemptLetter = attempt[i]\n  if (\n    attemptLetter === undefined ||\n    secret.indexOf(attemptLetter) === -1\n  ) {\n    return GREY\n  }\n  if (correctLetter === attemptLetter) {\n    return GREEN\n  }\n  return YELLOW\n}\n\nfunction buildKeyboard() {\n  buildKeyboardRow('qwertyuiop', false)\n  buildKeyboardRow('asdfghjkl', false)\n  buildKeyboardRow('zxcvbnm', true)\n}\n\nfunction buildKeyboardRow(letters, isLastRow) {\n  let row = document.createElement('div')\n  if (isLastRow) {\n    let button = document.createElement('button')\n    button.className = 'button'\n    button.textContent = 'Enter'\n    button.style.backgroundColor = LIGHTGREY\n    button.onclick = () => {\n      handleKey('enter')\n    };\n    row.appendChild(button)\n  }\n  for (let letter of letters) {\n    let button = document.createElement('button')\n    button.className = 'button'\n    button.textContent = letter\n    button.style.backgroundColor = LIGHTGREY\n    button.onclick = () => {\n      handleKey(letter)\n    };\n    keyboardButtons.set(letter, button)\n    row.appendChild(button)\n  }\n  if (isLastRow) {\n    let button = document.createElement('button')\n    button.className = 'button'\n    button.textContent = 'Backspace'\n    button.style.backgroundColor = LIGHTGREY\n    button.onclick = () => {\n      handleKey('backspace')\n    };\n    row.appendChild(button)\n  }\n  keyboard.appendChild(row)\n}\n\nfunction getBetterColor(a, b) {\n  if (a === GREEN || b === GREEN) {\n    return GREEN\n  }\n  if (a === YELLOW || b === YELLOW) {\n    return YELLOW\n  }\n  return GREY\n}\n\nfunction updateKeyboard() {\n  let bestColors = new Map()\n  for (let attempt of history) {\n    for (let i = 0; i < attempt.length; i++) {\n      let color = getBgColor(attempt, i)\n      let key = attempt[i]\n      let bestColor = bestColors.get(key)\n      bestColors.set(key, getBetterColor(color, bestColor))\n    }\n  }\n  for (let [key, button] of keyboardButtons) {\n    button.style.backgroundColor = bestColors.get(key)\n    button.style.borderColor = bestColors.get(key)\n  }\n}\n\nfunction animatePress(index) {\n  let rowIndex = history.length\n  let row = grid.children[rowIndex]\n  let cell = row.children[index]\n  cell.style.animationName = 'press'\n  cell.style.animationDuration = '100ms'\n  cell.style.animationTimingFunction = 'ease-out'\n}\n\nfunction clearAnimation(cell) {\n  cell.style.animationName = ''\n  cell.style.animationDuration = ''\n  cell.style.animationTimingFunction = ''\n}\n\nfunction loadGame() {\n  let data\n  try {\n    data = JSON.parse(localStorage.getItem('data'))\n  } catch { }\n  if (data != null) {\n    if (data.secret === secret) {\n      history = data.history\n    }\n  }\n}\n\nfunction saveGame() {\n  let data = JSON.stringify({\n    secret,\n    history\n  })\n  try {\n    localStorage.setItem('data', data)\n  } catch { }\n}\n\nlet grid = document.getElementById('grid')\nlet keyboard = document.getElementById('keyboard')\nlet keyboardButtons = new Map()\nloadGame()\nbuildGrid()\nbuildKeyboard()\nupdateGrid()\nupdateKeyboard()\nwindow.addEventListener('keydown', handleKeyDown)\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2022-01-15T22:15:17.000Z",
    "updatedAt": "2022-08-03T19:06:41.000Z"
  },
  {
    "id": "3a654eedd887b3ff15167aa7bf29799d-index.js",
    "title": "index.js",
    "description": "tiny worldle clone i built during a stream https://www.youtube.com/watch?v=K77xThbu66A",
    "language": "javascript",
    "code": "'use strict'\n\nlet wordList = [\n  'patio',\n  'darts',\n  'piano',\n  'horse',\n  'hello',\n  'water',\n  'pizza',\n  'sushi',\n  'crabs'\n];\nlet randomIndex = Math.floor(Math.random() * wordList.length)\nlet secret = wordList[randomIndex]\n\nlet currentAttempt = ''\nlet history = []\n\nlet grid = document.getElementById('grid')\nbuildGrid()\nupdateGrid()\nwindow.addEventListener('keydown', handleKeyDown)\n\nfunction handleKeyDown(e) {\n  let letter = e.key.toLowerCase()\n  if (letter === 'enter') {\n    if (currentAttempt.length < 5) {\n      return\n    }\n    if (!wordList.includes(currentAttempt)) {\n      alert('Not in my thesaurus')\n      return\n    }\n    history.push(currentAttempt)\n    currentAttempt = ''\n  } else if (letter === 'backspace') {\n    currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1)\n  } else if (/[a-z]/.test(letter)) {\n    if (currentAttempt.length < 5) {\n      currentAttempt += letter\n    }\n  }\n  updateGrid()\n}\n\nfunction buildGrid() {\n  for (let i = 0; i < 6; i++) {\n    let row = document.createElement('div')\n    for (let j = 0; j < 5; j++) {\n      let cell = document.createElement('div')\n      cell.className = 'cell'\n      cell.textContent = ''\n      row.appendChild(cell)\n    }\n    grid.appendChild(row)\n  }\n}\n\n\nfunction updateGrid() {\n  let row = grid.firstChild\n  for (let attempt of history) {\n    drawAttempt(row, attempt, false)\n    row = row.nextSibling\n  }\n  drawAttempt(row, currentAttempt, true)\n}\n\nfunction drawAttempt(row, attempt, isCurrent) {\n  for (let i = 0; i < 5; i++) {\n    let cell = row.children[i]\n    if (attempt[i] !== undefined) {\n      cell.textContent = attempt[i]\n    } else {\n      // lol\n      cell.innerHTML = '<div style=\"opacity: 0\">X</div>'\n    }\n    if (isCurrent) {\n      cell.style.backgroundColor = '#111'\n    } else {\n      cell.style.backgroundColor = getBgColor(attempt, i)\n    }\n  }\n}\n\nfunction getBgColor(attempt, i) {\n  let correctLetter = secret[i]\n  let attemptLetter = attempt[i]\n  if (\n    attemptLetter === undefined ||\n    secret.indexOf(attemptLetter) === -1\n  ) {\n    return '#212121'\n  }\n  if (correctLetter === attemptLetter) {\n    return '#538d4e'\n  }\n  return '#b59f3b'\n}\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2022-01-15T03:26:12.000Z",
    "updatedAt": "2023-09-21T03:38:18.000Z"
  },
  {
    "id": "bad24360371fcb4fe0bddc6645f6b2c6-minesweeper.js",
    "title": "minesweeper.js",
    "description": "minesweeper (incomplete/simplfied). stream: https://www.youtube.com/watch?v=CL01_m50TYY",
    "language": "javascript",
    "code": "let ROWS = 9\nlet COLS = 9\nlet SIZE = 24\nlet canvas = document.getElementById('canvas')\nlet restartButton = document.getElementById('restart')\n\nlet cells\n\nlet failedBombKey\nlet revealedKeys\nlet flaggedKeys\nlet map\n\nfunction toKey(row, col) {\n  return row + '-' + col\n}\n\nfunction fromKey(key) {\n  return key.split('-').map(Number)\n}\n\nfunction createButtons() {\n  canvas.style.width = ROWS * SIZE + 'px'\n  canvas.style.height = COLS * SIZE + 'px'\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      let cell = document.createElement('button')\n      cell.style.float = 'left'\n      cell.style.width = SIZE + 'px'\n      cell.style.height = SIZE + 'px'\n      cell.oncontextmenu = (e) => {\n        if (failedBombKey !== null) {\n          return\n        }\n        e.preventDefault()\n        toggleFlag(key)\n        updateButtons();\n      }\n      cell.onclick = (e) => {\n        if (failedBombKey !== null) {\n          return\n        }\n        if (flaggedKeys.has(key)) {\n          return\n        }\n        revealCell(key)\n        updateButtons();\n      }\n      canvas.appendChild(cell)\n      let key = toKey(i, j)\n      cells.set(key, cell)\n    }\n  }\n  restartButton.onclick = startGame\n}\n\nfunction startGame() {\n  failedBombKey = null\n  revealedKeys = new Set()\n  flaggedKeys = new Set()\n  map = generateMap(generateBombs())\n  if (cells) {\n    updateButtons()\n  } else {\n    cells = new Map()\n    createButtons()\n  }\n}\n\nfunction updateButtons() {\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      let key = toKey(i, j)\n      let cell = cells.get(key)\n\n      cell.style.backgroundColor = ''\n      cell.style.color = 'black'\n      cell.textContent = ''\n      cell.disabled = false\n\n      let value = map.get(key)\n      if (failedBombKey !== null && value === 'bomb') {\n        cell.disabled = true\n        cell.textContent = '💣'\n        if (key === failedBombKey) {\n          cell.style.backgroundColor = 'red'\n        }\n      } else if (revealedKeys.has(key)) {\n        cell.disabled = true\n        if (value === undefined) {\n          // empty\n        } else if (value === 1) {\n          cell.textContent = '1'\n          cell.style.color = 'blue'\n        } else if (value === 2) {\n          cell.textContent = '2'\n          cell.style.color = 'green'\n        } else if (value >= 3) {\n          cell.textContent = value\n          cell.style.color = 'red'\n        } else {\n          throw Error('should never happen')\n        }\n      } else if (flaggedKeys.has(key)) {\n        cell.textContent = '🚩'\n      }\n    }\n  }\n  if (failedBombKey !== null) {\n    canvas.style.pointerEvents = 'none'\n    restartButton.style.display = 'block'\n  } else {\n    canvas.style.pointerEvents = ''\n    restartButton.style.display = ''   \n  }\n}\n\nfunction toggleFlag(key) {\n  if (flaggedKeys.has(key)) {\n    flaggedKeys.delete(key)\n  } else {\n    flaggedKeys.add(key)\n  }\n}\n\nfunction revealCell(key) {\n  if (map.get(key) === 'bomb') {\n    failedBombKey = key\n  } else {\n    propagateReveal(key, new Set())\n  }\n}\n\nfunction propagateReveal(key, visited) {\n  revealedKeys.add(key)\n  visited.add(key)\n\n  let isEmpty = !map.has(key)\n  if (isEmpty) {\n    for (let neighborKey of getNeighbors(key)) {\n      if (!visited.has(neighborKey)) {\n        propagateReveal(neighborKey, visited)\n      }\n    }\n  }\n}\n\nfunction isInBounds([row, col]) {\n  if (row < 0 || col < 0) {\n    return false\n  }\n  if (row >= ROWS || col >= COLS) {\n    return false\n  }\n  return true\n}\n\nfunction getNeighbors(key) {\n  let [row, col] = fromKey(key)\n  let neighborRowCols = [\n    [row - 1, col - 1],\n    [row - 1, col],\n    [row - 1, col + 1],\n    [row, col - 1],\n    [row, col + 1],\n    [row + 1, col - 1],\n    [row + 1, col],\n    [row + 1, col + 1],\n  ]\n  return neighborRowCols\n    .filter(isInBounds)\n    .map(([r, c]) => toKey(r, c))\n}\n\nfunction generateBombs() {\n  let count = Math.round(Math.sqrt(ROWS * COLS))\n  let bombs = []\n  let allKeys = []\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      allKeys.push(toKey(i, j))\n    }\n  }\n  allKeys.sort(() => {\n    let coinFlip = Math.random() > 0.5\n    return coinFlip ? 1 : -1\n  })\n  return allKeys.slice(0, count)\n}\n\nfunction generateMap(seedBombs) {\n  let map = new Map()\n  function incrementDanger(neighborKey) {\n    if (!map.has(neighborKey)) {\n      map.set(neighborKey, 1);\n    } else {\n      let oldVal = map.get(neighborKey)\n      if (oldVal !== 'bomb') {\n        map.set(neighborKey, oldVal + 1)\n      }\n    }\n  }\n  for (let key of seedBombs) {\n    map.set(key, 'bomb');\n    for (let neighborKey of getNeighbors(key)) {\n      incrementDanger(neighborKey)\n    }\n  }\n  return map\n}\n\nstartGame()\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2021-12-29T01:27:42.000Z",
    "updatedAt": "2024-12-24T13:16:23.000Z"
  },
  {
    "id": "9e86ea159e1aa17237522844fd98bb9b-snake.js",
    "title": "snake.js",
    "description": "Imported from GitHub Gist",
    "language": "javascript",
    "code": "let canvas = document.getElementById(\"canvas\");\n\nlet ROWS = 30;\nlet COLS = 50;\nlet PIXEL = 10;\nlet pixels = new Map();\nlet gameInterval = null;\nlet moveRight = ([t, l]) => [t, l + 1];\nlet moveLeft = ([t, l]) => [t, l - 1];\nlet moveUp = ([t, l]) => [t - 1, l];\nlet moveDown = ([t, l]) => [t + 1, l];\n\n// --- rendering ---\n\nfunction initializeCanvas() {\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      let pixel = document.createElement(\"div\");\n      pixel.style.position = \"absolute\";\n      pixel.style.border = \"1px solid #aaa\";\n      pixel.style.left = j * PIXEL + \"px\";\n      pixel.style.top = i * PIXEL + \"px\";\n      pixel.style.width = PIXEL + \"px\";\n      pixel.style.height = PIXEL + \"px\";\n      let key = toKey([i, j]);\n      canvas.appendChild(pixel);\n      pixels.set(key, pixel);\n    }\n  }\n}\n\ninitializeCanvas();\n\nfunction drawCanvas() {\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      let key = toKey([i, j]);\n      let pixel = pixels.get(key);\n      let background = \"white\";\n      if (key === currentFoodKey) {\n        background = \"purple\";\n      } else if (currentSnakeKeys.has(key)) {\n        background = \"black\";\n      }\n      pixel.style.background = background;\n    }\n  }\n}\n\n// --- game state ---\n\nlet currentSnake;\nlet currentSnakeKeys;\nlet currentVacantKeys;\nlet currentFoodKey;\nlet currentDirection;\nlet directionQueue;\n\nfunction step() {\n  let head = currentSnake[currentSnake.length - 1];\n  let nextDirection = currentDirection;\n  while (directionQueue.length > 0) {\n    let candidateDirection = directionQueue.shift();\n    if (!areOpposite(candidateDirection, currentDirection)) {\n      nextDirection = candidateDirection;\n      break;\n    }\n  }\n  currentDirection = nextDirection;\n  let nextHead = currentDirection(head);\n  if (!checkValidHead(currentSnakeKeys, nextHead)) {\n    stopGame(false);\n    return;\n  }\n  pushHead(nextHead);\n  if (toKey(nextHead) == currentFoodKey) {\n    let nextFoodKey = spawnFood();\n    if (nextFoodKey === null) {\n      stopGame(true);\n      return;\n    }\n    currentFoodKey = nextFoodKey;\n  } else {\n    popTail();\n  }\n  drawCanvas();\n  if (window.location.search === \"?debug\") {\n    checkIntegrity_SLOW();\n  }\n}\n\nfunction pushHead(nextHead) {\n  currentSnake.push(nextHead);\n  let key = toKey(nextHead);\n  currentVacantKeys.delete(key);\n  currentSnakeKeys.add(key);\n}\n\nfunction popTail() {\n  let tail = currentSnake.shift();\n  let key = toKey(tail);\n  currentVacantKeys.add(key);\n  currentSnakeKeys.delete(key);\n}\n\nfunction spawnFood() {\n  if (currentVacantKeys.size === 0) {\n    return null;\n  }\n  let choice = Math.floor(Math.random() * currentVacantKeys.size);\n  let i = 0;\n  for (let key of currentVacantKeys) {\n    if (i === choice) {\n      return key;\n    }\n    i++;\n  }\n  throw Error(\"should never get here\");\n}\n\n// --- interaction ---\n\nwindow.addEventListener(\"keydown\", (e) => {\n  if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) {\n    return;\n  }\n  e.preventDefault();\n  switch (e.key) {\n    case \"ArrowLeft\":\n    case \"A\":\n    case \"a\":\n      directionQueue.push(moveLeft);\n      break;\n    case \"ArrowRight\":\n    case \"D\":\n    case \"d\":\n      directionQueue.push(moveRight);\n      break;\n    case \"ArrowUp\":\n    case \"W\":\n    case \"w\":\n      directionQueue.push(moveUp);\n      break;\n    case \"ArrowDown\":\n    case \"S\":\n    case \"s\":\n      directionQueue.push(moveDown);\n      break;\n    case \"R\":\n    case \"r\":\n      stopGame(false);\n      startGame();\n      break;\n    case \" \":\n      step();\n      break;\n  }\n});\n\nfunction stopGame(success) {\n  canvas.style.borderColor = success ? \"green\" : \"red\";\n  clearInterval(gameInterval);\n}\n\nfunction startGame() {\n  directionQueue = [];\n  currentDirection = moveRight;\n  currentSnake = makeInitialSnake();\n  currentSnakeKeys = new Set();\n  currentVacantKeys = new Set();\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      currentVacantKeys.add(toKey([i, j]));\n    }\n  }\n  for (let cell of currentSnake) {\n    let key = toKey(cell);\n    currentVacantKeys.delete(key);\n    currentSnakeKeys.add(key);\n  }\n  currentFoodKey = spawnFood();\n  [snakeKeys, vacantKeys] = partitionCells(currentSnake);\n  currentSnakeKeys = snakeKeys;\n  currentVacantKeys = vacantKeys;\n\n  canvas.style.borderColor = \"\";\n  gameInterval = setInterval(step, 50);\n  drawCanvas();\n}\n\nstartGame();\n\n// --- utilities\n\nfunction areOpposite(dir1, dir2) {\n  if (dir1 === moveLeft && dir2 === moveRight) {\n    return true;\n  }\n  if (dir1 === moveRight && dir2 === moveLeft) {\n    return true;\n  }\n  if (dir1 === moveUp && dir2 === moveDown) {\n    return true;\n  }\n  if (dir1 === moveDown && dir2 === moveUp) {\n    return true;\n  }\n  return false;\n}\n\nfunction partitionCells(snake) {\n  let snakeKeys = new Set();\n  let vacantKeys = new Set();\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      vacantKeys.add(toKey([i, j]));\n    }\n  }\n  for (let cell of snake) {\n    let key = toKey(cell);\n    vacantKeys.delete(key);\n    snakeKeys.add(key);\n  }\n  return [snakeKeys, vacantKeys];\n}\n\nfunction checkValidHead(keys, cell) {\n  let [top, left] = cell;\n  if (top < 0 || left < 0) {\n    return false;\n  }\n  if (top >= ROWS || left >= COLS) {\n    return false;\n  }\n  if (keys.has(toKey(cell))) {\n    return false;\n  }\n  return true;\n}\n\nfunction makeInitialSnake() {\n  return [\n    [0, 0],\n    [0, 1],\n    [0, 2],\n    [0, 3],\n    [0, 4],\n  ];\n}\n\nfunction toKey([top, left]) {\n  return top + \"_\" + left;\n}\n\n// --- debugging ---\n\nfunction checkIntegrity_SLOW() {\n  let failedCheck = null;\n  let foodCount = 0;\n  let allKeys = new Set();\n  for (let i = 0; i < ROWS; i++) {\n    for (let j = 0; j < COLS; j++) {\n      let key = toKey([i, j]);\n      allKeys.add(key);\n      if (key === currentFoodKey) {\n        foodCount++;\n      }\n    }\n  }\n  if (foodCount !== 1) {\n    failedCheck = \"there cannot be two foods\";\n  }\n  let [snakeKeys, vacantKeys] = partitionCells(currentSnake);\n  if (!areSameSets_SLOW(snakeKeys, currentSnakeKeys)) {\n    failedCheck = \"snake keys don’t match\";\n  }\n  if (!areSameSets_SLOW(vacantKeys, currentVacantKeys)) {\n    failedCheck = \"vacant keys don’t match\";\n  }\n  if (currentSnakeKeys.has(currentFoodKey)) {\n    failedCheck = \"there’s food in the snake\";\n  }\n  if (currentSnake.length !== currentSnakeKeys.size) {\n    failedCheck = \"the snake intersects itself\";\n  }\n  if (\n    !areSameSets_SLOW(\n      new Set([...currentSnakeKeys, ...currentVacantKeys]),\n      allKeys\n    )\n  ) {\n    failedCheck = \"something is out of bounds\";\n  }\n  for (let i = 1 /* intentional */; i < currentSnake.length; i++) {\n    let cell = currentSnake[i];\n    let prevCell = currentSnake[i - 1];\n    let dy = cell[0] - prevCell[0];\n    let dx = cell[1] - prevCell[1];\n    let isOk =\n      (dy === 0 && Math.abs(dx) === 1) || (dx === 0 && Math.abs(dy) === 1);\n    if (!isOk) {\n      failedCheck = \"the snake has a break\";\n    }\n  }\n  if (failedCheck !== null) {\n    stopGame(false);\n    canvas.style.borderColor = \"purple\";\n    throw Error(failedCheck);\n  }\n}\n\nfunction areSameSets_SLOW(a, b) {\n  return JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());\n}\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2021-12-11T20:05:39.000Z",
    "updatedAt": "2025-02-11T03:34:14.000Z"
  },
  {
    "id": "8b516449acc73bc75ac977000f89efc1-CurvedArrow.js",
    "title": "CurvedArrow.js",
    "description": "Curved SVG arrow between two objects (rects or circles) https://twitter.com/dan_abramov/status/1362255543721672704",
    "language": "javascript",
    "code": "// from/to: { left, top, width, height, shape: 'circle' | 'rect' }\nfunction CurvedArrow({ from, to }) {\n  function curvedHorizontal(x1, y1, x2, y2) {\n    function pos(t) {\n      let mx = x1 + (x2 - x1) / 2;\n      let p1 = {x: x1, y: y1};\n      let p2 = {x: mx, y: y1};\n      let p3 = {x: mx, y: y2};\n      let p4 = {x: x2, y: y2};\n      return {\n        x: (\n          ((1 - t) ** 3) * p1.x +\n          3 * ((1 - t) ** 2) * t * p2.x +\n          3 * (1 - t) * (t ** 2) * p3.x +\n          (t ** 3) * p4.x\n        ),\n        y: (\n          ((1 - t) ** 3) * p1.y +\n          3 * ((1 - t) ** 2) * t * p2.y +\n          3 * (1 - t) * (t ** 2) * p3.y +\n          (t ** 3) * p4.y\n        )\n      };\n    }\n    function intersects(point, area) {\n      if (area.shape === 'rect') {\n        return (\n          point.x >= area.left &&\n          point.x <= (area.left + area.width)\n        ) && (\n          point.y >= area.top &&\n          point.y <= (area.top + area.height)\n        );\n      } else if (area.shape === 'circle') {\n        const center = {\n          x: area.left + (area.width / 2),\n          y: area.top + (area.height / 2)\n        }\n        return Math.sqrt(\n          (center.x - point.x) ** 2 +\n          (center.y - point.y) ** 2\n        ) <= area.width / 2;\n      }\n    }\n    let line = []\n    for (let t = 0; t < 1; t += 0.001) {\n      let p = pos(t)\n      if (!intersects(p, from) && !intersects(p, to)) {\n        line.push(p.x, p.y);\n      }\n    }\n    return line.length > 0 ? 'M ' + line.join(' ') : '';\n  }\n  return (\n    <path d={curvedHorizontal(\n      from.left + from.width / 2,\n      from.top + from.height / 2,\n      to.left + to.width / 2,\n      to.top + to.height / 2,\n    )}\n      stroke=\"black\"\n      strokeWidth={4}\n      fill=\"none\"\n      markerEnd=\"url(#arrowhead)\"\n    />\n  );\n}\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2021-02-18T04:35:22.000Z",
    "updatedAt": "2021-10-26T14:14:36.000Z"
  },
  {
    "id": "a25fd42a1e6b4cc24851978df0a36571-Classes.js",
    "title": "Classes.js",
    "description": "Beneath Classes: Prototypes",
    "language": "javascript",
    "code": "class Spiderman {\n  lookOut() {\n    alert('My Spider-Sense is tingling.');\n  }\n}\n\nlet miles = new Spiderman();\nmiles.lookOut();",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2020-05-27T17:38:03.000Z",
    "updatedAt": "2025-04-27T10:58:57.000Z"
  },
  {
    "id": "a25fd42a1e6b4cc24851978df0a36571-Prototypes.js",
    "title": "Prototypes.js",
    "description": "Beneath Classes: Prototypes",
    "language": "javascript",
    "code": "// class Spiderman {\nlet SpidermanPrototype = {\n  lookOut() {\n    alert('My Spider-Sense is tingling.');\n  }\n};\n\n// let miles = new Spiderman();\nlet miles = { __proto__: SpidermanPrototype };\nmiles.lookOut();",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2020-05-27T17:38:03.000Z",
    "updatedAt": "2025-04-27T10:58:57.000Z"
  },
  {
    "id": "4e61fc0a4d451fd36d908f8b8c36bbb5-node_hot_reload.js",
    "title": "node_hot_reload.js",
    "description": "Imported from GitHub Gist",
    "language": "javascript",
    "code": "const express = require('express');\nconst app = express();\n\n// Application\napp.get('/', function(req, res) {\n  if (process.env.NODE_ENV === 'development') {\n    for (var key in require.cache) {\n      delete require.cache[key];\n    }      \n  }\n  require('./handler')(req, res);\n});",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2019-11-08T20:15:50.000Z",
    "updatedAt": "2023-09-28T11:38:54.000Z"
  },
  {
    "id": "cb5add26336003ed8c0004c4ba820eae-MyResponsiveComponent.js",
    "title": "MyResponsiveComponent.js",
    "description": "Examples from \"Making Sense of React Hooks\"",
    "language": "javascript",
    "code": "function MyResponsiveComponent() {\n  const width = useWindowWidth(); // Our custom Hook\n  return (\n    <p>Window width is {width}</p>\n  );\n}",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-11-01T10:05:55.000Z",
    "updatedAt": "2024-04-29T08:44:13.000Z"
  },
  {
    "id": "cb5add26336003ed8c0004c4ba820eae-useWindowWidth.js",
    "title": "useWindowWidth.js",
    "description": "Examples from \"Making Sense of React Hooks\"",
    "language": "javascript",
    "code": "function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  \n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => {\n      window.removeEventListener('resize', handleResize);\n    };\n  });\n  \n  return width;\n}\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-11-01T10:05:55.000Z",
    "updatedAt": "2024-04-29T08:44:13.000Z"
  },
  {
    "id": "faa67b76a6c47adbab04f739cba7ceda-like_button.js",
    "title": "like_button.js",
    "description": "Multiple React components on a single HTML page",
    "language": "javascript",
    "code": "'use strict';\n\nconst e = React.createElement;\n\nclass LikeButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { liked: false };\n  }\n\n  render() {\n    if (this.state.liked) {\n      return 'You liked comment number ' + this.props.commentID;\n    }\n\n    return e(\n      'button',\n      { onClick: () => this.setState({ liked: true }) },\n      'Like'\n    );\n  }\n}\n\n// Find all DOM containers, and render Like buttons into them.\ndocument.querySelectorAll('.like_button_container')\n  .forEach(domContainer => {\n    // Read the comment ID from a data-* attribute.\n    const commentID = parseInt(domContainer.dataset.commentid, 10);\n    const root = ReactDOM.createRoot(domContainer);\n    root.render(\n      e(LikeButton, { commentID: commentID })\n    );\n  });\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-06-25T13:56:28.000Z",
    "updatedAt": "2025-08-03T17:43:29.000Z"
  },
  {
    "id": "c8e112dc74ac44aac4f673f2c39d19d1-like_button.js",
    "title": "like_button.js",
    "description": "JSX version of LikeButton",
    "language": "javascript",
    "code": "'use strict';\n\nclass LikeButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { liked: false };\n  }\n\n  render() {\n    if (this.state.liked) {\n      return 'You liked this.';\n    }\n\n    return (\n      <button onClick={() => this.setState({ liked: true }) }>\n        Like\n      </button>\n    );\n  }\n}\n\nlet domContainer = document.querySelector('#like_button_container');\nReactDOM.render(<LikeButton />, domContainer);",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-06-25T12:59:53.000Z",
    "updatedAt": "2020-11-19T06:02:25.000Z"
  },
  {
    "id": "6668a1f6986742109c00a581ce704605-like_button.js",
    "title": "like_button.js",
    "description": "Add React in One Minute",
    "language": "javascript",
    "code": "'use strict';\n\nconst e = React.createElement;\n\nclass LikeButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { liked: false };\n  }\n\n  render() {\n    if (this.state.liked) {\n      return 'You liked this.';\n    }\n\n    return e(\n      'button',\n      { onClick: () => this.setState({ liked: true }) },\n      'Like'\n    );\n  }\n}\n\nconst domContainer = document.querySelector('#like_button_container');\nconst root = ReactDOM.createRoot(domContainer);\nroot.render(e(LikeButton));",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-06-25T01:04:20.000Z",
    "updatedAt": "2025-08-03T17:43:22.000Z"
  },
  {
    "id": "0b180827c190fe4fd98b4c7f570ea4a8-LikeButton.js",
    "title": "LikeButton.js",
    "description": "Imported from GitHub Gist",
    "language": "javascript",
    "code": "'use strict';\n\nconst e = React.createElement;\n\nclass LikeButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { liked: false };\n  }\n\n  render() {\n    if (this.state.liked) {\n      return 'You liked this.';\n    }\n\n    return e(\n      'button',\n      { onClick: () => this.setState({ liked: true }) },\n      'Like'\n    );\n  }\n}\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-06-25T00:18:54.000Z",
    "updatedAt": "2022-07-31T17:22:32.000Z"
  },
  {
    "id": "88634d27abbc4feeb40a698f760f3264-16.3-blogpost-signatures.js",
    "title": "16.3-blogpost-signatures.js",
    "description": "Imported from GitHub Gist",
    "language": "javascript",
    "code": "class Example extends React.Component<\n  Props,\n  State,\n  Snapshot\n> {\n  static getDerivedStateFromProps(\n    nextProps: Props,\n    prevState: State\n  ): $Shape<State> | null {\n    // ...\n  }\n\n  getSnapshotBeforeUpdate(\n    prevProps: Props,\n    prevState: State\n  ): Snapshot {\n    // ...\n  }\n}",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2018-03-27T23:29:43.000Z",
    "updatedAt": "2024-01-31T17:59:14.000Z"
  },
  {
    "id": "6d1177995ab63f95c0be696ad0314967-hahah.js",
    "title": "hahah.js",
    "description": "Imported from GitHub Gist",
    "language": "javascript",
    "code": "/**\n * Copyright (c) 2015-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n//   /!\\ DO NOT MODIFY THIS FILE /!\\\n// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n//\n// create-react-app is installed globally on people's computers. This means\n// that it is extremely difficult to have them upgrade the version and\n// because there's only one global version installed, it is very prone to\n// breaking changes.\n//\n// The only job of create-react-app is to init the repository and then\n// forward all the commands to the local version of create-react-app.\n//\n// If you need to add a new command, please add it to the scripts/ folder.\n//\n// The only reason to modify this file is to add more warnings and\n// troubleshooting information for the `create-react-app` command.\n//\n// Do not make breaking changes! We absolutely don't want to have to\n// tell people to update their global version of create-react-app.\n//\n// Also be careful with new language features.\n// This file must work on Node 6+.\n//\n// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n//   /!\\ DO NOT MODIFY THIS FILE /!\\\n// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n'use strict';\n\nconst validateProjectName = require('validate-npm-package-name');\nconst chalk = require('chalk');\nconst commander = require('commander');\nconst fs = require('fs-extra');\nconst path = require('path');\nconst execSync = require('child_process').execSync;\nconst spawn = require('cross-spawn');\nconst semver = require('semver');\nconst dns = require('dns');\nconst tmp = require('tmp');\nconst unpack = require('tar-pack').unpack;\nconst url = require('url');\nconst hyperquest = require('hyperquest');\n\nconst packageJson = require('./package.json');\n\nlet projectName;\n\nconst program = new commander.Command(packageJson.name)\n  .version(packageJson.version)\n  .arguments('<project-directory>')\n  .usage(`${chalk.green('<project-directory>')} [options]`)\n  .action(name => {\n    projectName = name;\n  })\n  .option('--verbose', 'print additional logs')\n  .option(\n    '--scripts-version <alternative-package>',\n    'use a non-standard version of react-scripts'\n  )\n  .allowUnknownOption()\n  .on('--help', () => {\n    console.log(`    Only ${chalk.green('<project-directory>')} is required.`);\n    console.log();\n    console.log(\n      `    A custom ${chalk.cyan('--scripts-version')} can be one of:`\n    );\n    console.log(`      - a specific npm version: ${chalk.green('0.8.2')}`);\n    console.log(\n      `      - a custom fork published on npm: ${chalk.green(\n        'my-react-scripts'\n      )}`\n    );\n    console.log(\n      `      - a .tgz archive: ${chalk.green(\n        'https://mysite.com/my-react-scripts-0.8.2.tgz'\n      )}`\n    );\n    console.log(\n      `    It is not needed unless you specifically want to use a fork.`\n    );\n    console.log();\n    console.log(\n      `    If you have any problems, do not hesitate to file an issue:`\n    );\n    console.log(\n      `      ${chalk.cyan(\n        'https://github.com/facebookincubator/create-react-app/issues/new'\n      )}`\n    );\n    console.log();\n  })\n  .parse(process.argv);\n\nif (typeof projectName === 'undefined') {\n  console.error('Please specify the project directory:');\n  console.log(\n    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`\n  );\n  console.log();\n  console.log('For example:');\n  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-react-app')}`);\n  console.log();\n  console.log(\n    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`\n  );\n  process.exit(1);\n}\n\nfunction printValidationResults(results) {\n  if (typeof results !== 'undefined') {\n    results.forEach(error => {\n      console.error(chalk.red(`  *  ${error}`));\n    });\n  }\n}\n\nconst hiddenProgram = new commander.Command()\n  .option(\n    '--internal-testing-template <path-to-template>',\n    '(internal usage only, DO NOT RELY ON THIS) ' +\n      'use a non-standard application template'\n  )\n  .parse(process.argv);\n\ncreateApp(\n  projectName,\n  program.verbose,\n  program.scriptsVersion,\n  hiddenProgram.internalTestingTemplate\n);\n\nfunction createApp(name, verbose, version, template) {\n  const root = path.resolve(name);\n  const appName = path.basename(root);\n\n  checkAppName(appName);\n  fs.ensureDirSync(name);\n  if (!isSafeToCreateProjectIn(root, name)) {\n    process.exit(1);\n  }\n\n  console.log(`Creating a new React app in ${chalk.green(root)}.`);\n  console.log();\n\n  const packageJson = {\n    name: appName,\n    version: '0.1.0',\n    private: true,\n  };\n  fs.writeFileSync(\n    path.join(root, 'package.json'),\n    JSON.stringify(packageJson, null, 2)\n  );\n\n  const useYarn = shouldUseYarn();\n  const originalDirectory = process.cwd();\n  process.chdir(root);\n  if (!useYarn && !checkThatNpmCanReadCwd()) {\n    process.exit(1);\n  }\n\n  if (!semver.satisfies(process.version, '>=6.0.0')) {\n    console.log(\n      chalk.yellow(\n        `You are using Node ${process.version} so the project will be bootstrapped with an old unsupported version of tools.\\n\\n` +\n          `Please update to Node 6 or higher for a better, fully supported experience.\\n`\n      )\n    );\n    // Fall back to latest supported react-scripts on Node 4\n    version = 'react-scripts@0.9.x';\n  }\n\n  if (!useYarn) {\n    const npmInfo = checkNpmVersion();\n    if (!npmInfo.hasMinNpm) {\n      if (npmInfo.npmVersion) {\n        console.log(\n          chalk.yellow(\n            `You are using npm ${npmInfo.npmVersion} so the project will be boostrapped with an old unsupported version of tools.\\n\\n` +\n              `Please update to npm 3 or higher for a better, fully supported experience.\\n`\n          )\n        );\n      }\n      // Fall back to latest supported react-scripts for npm 3\n      version = 'react-scripts@0.9.x';\n    }\n  }\n  run(root, appName, version, verbose, originalDirectory, template, useYarn);\n}\n\nfunction shouldUseYarn() {\n  try {\n    execSync('yarnpkg --version', { stdio: 'ignore' });\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction install(root, useYarn, dependencies, verbose, isOnline) {\n  return new Promise((resolve, reject) => {\n    let command;\n    let args;\n    if (useYarn) {\n      command = 'yarnpkg';\n      args = ['add', '--exact'];\n      if (!isOnline) {\n        args.push('--offline');\n      }\n      [].push.apply(args, dependencies);\n\n      // Explicitly set cwd() to work around issues like\n      // https://github.com/facebookincubator/create-react-app/issues/3326.\n      // Unfortunately we can only do this for Yarn because npm support for\n      // equivalent --prefix flag doesn't help with this issue.\n      // This is why for npm, we run checkThatNpmCanReadCwd() early instead.\n      args.push('--cwd')\n      args.push(root);\n\n      if (!isOnline) {\n        console.log(chalk.yellow('You appear to be offline.'));\n        console.log(chalk.yellow('Falling back to the local Yarn cache.'));\n        console.log();\n      }\n    } else {\n      command = 'npm';\n      args = [\n        'install',\n        '--save',\n        '--save-exact',\n        '--loglevel',\n        'error',\n      ].concat(dependencies);\n    }\n\n    if (verbose) {\n      args.push('--verbose');\n    }\n\n    const child = spawn(command, args, { stdio: 'inherit' });\n    child.on('close', code => {\n      if (code !== 0) {\n        reject({\n          command: `${command} ${args.join(' ')}`,\n        });\n        return;\n      }\n      resolve();\n    });\n  });\n}\n\nfunction run(\n  root,\n  appName,\n  version,\n  verbose,\n  originalDirectory,\n  template,\n  useYarn\n) {\n  const packageToInstall = getInstallPackage(version);\n  const allDependencies = ['react', 'react-dom', packageToInstall];\n\n  console.log('Installing packages. This might take a couple of minutes.');\n  getPackageName(packageToInstall)\n    .then(packageName =>\n      checkIfOnline(useYarn).then(isOnline => ({\n        isOnline: isOnline,\n        packageName: packageName,\n      }))\n    )\n    .then(info => {\n      const isOnline = info.isOnline;\n      const packageName = info.packageName;\n      console.log(\n        `Installing ${chalk.cyan('react')}, ${chalk.cyan(\n          'react-dom'\n        )}, and ${chalk.cyan(packageName)}...`\n      );\n      console.log();\n\n      return install(root, useYarn, allDependencies, verbose, isOnline).then(\n        () => packageName\n      );\n    })\n    .then(packageName => {\n      checkNodeVersion(packageName);\n      setCaretRangeForRuntimeDeps(packageName);\n\n      const scriptsPath = path.resolve(\n        process.cwd(),\n        'node_modules',\n        packageName,\n        'scripts',\n        'init.js'\n      );\n      const init = require(scriptsPath);\n      init(root, appName, verbose, originalDirectory, template);\n\n      if (version === 'react-scripts@0.9.x') {\n        console.log(\n          chalk.yellow(\n            `\\nNote: the project was boostrapped with an old unsupported version of tools.\\n` +\n              `Please update to Node >=6 and npm >=3 to get supported tools in new projects.\\n`\n          )\n        );\n      }\n    })\n    .catch(reason => {\n      console.log();\n      console.log('Aborting installation.');\n      if (reason.command) {\n        console.log(`  ${chalk.cyan(reason.command)} has failed.`);\n      } else {\n        console.log(chalk.red('Unexpected error. Please report it as a bug:'));\n        console.log(reason);\n      }\n      console.log();\n\n      // On 'exit' we will delete these files from target directory.\n      const knownGeneratedFiles = [\n        'package.json',\n        'npm-debug.log',\n        'yarn-error.log',\n        'yarn-debug.log',\n        'node_modules',\n      ];\n      const currentFiles = fs.readdirSync(path.join(root));\n      currentFiles.forEach(file => {\n        knownGeneratedFiles.forEach(fileToMatch => {\n          // This will catch `(npm-debug|yarn-error|yarn-debug).log*` files\n          // and the rest of knownGeneratedFiles.\n          if (\n            (fileToMatch.match(/.log/g) && file.indexOf(fileToMatch) === 0) ||\n            file === fileToMatch\n          ) {\n            console.log(`Deleting generated file... ${chalk.cyan(file)}`);\n            fs.removeSync(path.join(root, file));\n          }\n        });\n      });\n      const remainingFiles = fs.readdirSync(path.join(root));\n      if (!remainingFiles.length) {\n        // Delete target folder if empty\n        console.log(\n          `Deleting ${chalk.cyan(`${appName} /`)} from ${chalk.cyan(\n            path.resolve(root, '..')\n          )}`\n        );\n        process.chdir(path.resolve(root, '..'));\n        fs.removeSync(path.join(root));\n      }\n      console.log('Done.');\n      process.exit(1);\n    });\n}\n\nfunction getInstallPackage(version) {\n  let packageToInstall = 'react-scripts';\n  const validSemver = semver.valid(version);\n  if (validSemver) {\n    packageToInstall += `@${validSemver}`;\n  } else if (version) {\n    // for tar.gz or alternative paths\n    packageToInstall = version;\n  }\n  return packageToInstall;\n}\n\nfunction getTemporaryDirectory() {\n  return new Promise((resolve, reject) => {\n    // Unsafe cleanup lets us recursively delete the directory if it contains\n    // contents; by default it only allows removal if it's empty\n    tmp.dir({ unsafeCleanup: true }, (err, tmpdir, callback) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve({\n          tmpdir: tmpdir,\n          cleanup: () => {\n            try {\n              callback();\n            } catch (ignored) {\n              // Callback might throw and fail, since it's a temp directory the\n              // OS will clean it up eventually...\n            }\n          },\n        });\n      }\n    });\n  });\n}\n\nfunction extractStream(stream, dest) {\n  return new Promise((resolve, reject) => {\n    stream.pipe(\n      unpack(dest, err => {\n        if (err) {\n          reject(err);\n        } else {\n          resolve(dest);\n        }\n      })\n    );\n  });\n}\n\n// Extract package name from tarball url or path.\nfunction getPackageName(installPackage) {\n  if (installPackage.indexOf('.tgz') > -1) {\n    return getTemporaryDirectory()\n      .then(obj => {\n        let stream;\n        if (/^http/.test(installPackage)) {\n          stream = hyperquest(installPackage);\n        } else {\n          stream = fs.createReadStream(installPackage);\n        }\n        return extractStream(stream, obj.tmpdir).then(() => obj);\n      })\n      .then(obj => {\n        const packageName = require(path.join(obj.tmpdir, 'package.json')).name;\n        obj.cleanup();\n        return packageName;\n      })\n      .catch(err => {\n        // The package name could be with or without semver version, e.g. react-scripts-0.2.0-alpha.1.tgz\n        // However, this function returns package name only without semver version.\n        console.log(\n          `Could not extract the package name from the archive: ${err.message}`\n        );\n        const assumedProjectName = installPackage.match(\n          /^.+\\/(.+?)(?:-\\d+.+)?\\.tgz$/\n        )[1];\n        console.log(\n          `Based on the filename, assuming it is \"${chalk.cyan(\n            assumedProjectName\n          )}\"`\n        );\n        return Promise.resolve(assumedProjectName);\n      });\n  } else if (installPackage.indexOf('git+') === 0) {\n    // Pull package name out of git urls e.g:\n    // git+https://github.com/mycompany/react-scripts.git\n    // git+ssh://github.com/mycompany/react-scripts.git#v1.2.3\n    return Promise.resolve(installPackage.match(/([^/]+)\\.git(#.*)?$/)[1]);\n  } else if (installPackage.match(/.+@/)) {\n    // Do not match @scope/ when stripping off @version or @tag\n    return Promise.resolve(\n      installPackage.charAt(0) + installPackage.substr(1).split('@')[0]\n    );\n  }\n  return Promise.resolve(installPackage);\n}\n\nfunction checkNpmVersion() {\n  let hasMinNpm = false;\n  let npmVersion = null;\n  try {\n    npmVersion = execSync('npm --version')\n      .toString()\n      .trim();\n    hasMinNpm = semver.gte(npmVersion, '3.0.0');\n  } catch (err) {\n    // ignore\n  }\n  return {\n    hasMinNpm: hasMinNpm,\n    npmVersion: npmVersion,\n  };\n}\n\nfunction checkNodeVersion(packageName) {\n  const packageJsonPath = path.resolve(\n    process.cwd(),\n    'node_modules',\n    packageName,\n    'package.json'\n  );\n  const packageJson = require(packageJsonPath);\n  if (!packageJson.engines || !packageJson.engines.node) {\n    return;\n  }\n\n  if (!semver.satisfies(process.version, packageJson.engines.node)) {\n    console.error(\n      chalk.red(\n        'You are running Node %s.\\n' +\n          'Create React App requires Node %s or higher. \\n' +\n          'Please update your version of Node.'\n      ),\n      process.version,\n      packageJson.engines.node\n    );\n    process.exit(1);\n  }\n}\n\nfunction checkAppName(appName) {\n  const validationResult = validateProjectName(appName);\n  if (!validationResult.validForNewPackages) {\n    console.error(\n      `Could not create a project called ${chalk.red(\n        `\"${appName}\"`\n      )} because of npm naming restrictions:`\n    );\n    printValidationResults(validationResult.errors);\n    printValidationResults(validationResult.warnings);\n    process.exit(1);\n  }\n\n  // TODO: there should be a single place that holds the dependencies\n  const dependencies = ['react', 'react-dom', 'react-scripts'].sort();\n  if (dependencies.indexOf(appName) >= 0) {\n    console.error(\n      chalk.red(\n        `We cannot create a project called ${chalk.green(\n          appName\n        )} because a dependency with the same name exists.\\n` +\n          `Due to the way npm works, the following names are not allowed:\\n\\n`\n      ) +\n        chalk.cyan(dependencies.map(depName => `  ${depName}`).join('\\n')) +\n        chalk.red('\\n\\nPlease choose a different project name.')\n    );\n    process.exit(1);\n  }\n}\n\nfunction makeCaretRange(dependencies, name) {\n  const version = dependencies[name];\n\n  if (typeof version === 'undefined') {\n    console.error(chalk.red(`Missing ${name} dependency in package.json`));\n    process.exit(1);\n  }\n\n  let patchedVersion = `^${version}`;\n\n  if (!semver.validRange(patchedVersion)) {\n    console.error(\n      `Unable to patch ${name} dependency version because version ${chalk.red(\n        version\n      )} will become invalid ${chalk.red(patchedVersion)}`\n    );\n    patchedVersion = version;\n  }\n\n  dependencies[name] = patchedVersion;\n}\n\nfunction setCaretRangeForRuntimeDeps(packageName) {\n  const packagePath = path.join(process.cwd(), 'package.json');\n  const packageJson = require(packagePath);\n\n  if (typeof packageJson.dependencies === 'undefined') {\n    console.error(chalk.red('Missing dependencies in package.json'));\n    process.exit(1);\n  }\n\n  const packageVersion = packageJson.dependencies[packageName];\n  if (typeof packageVersion === 'undefined') {\n    console.error(chalk.red(`Unable to find ${packageName} in package.json`));\n    process.exit(1);\n  }\n\n  makeCaretRange(packageJson.dependencies, 'react');\n  makeCaretRange(packageJson.dependencies, 'react-dom');\n\n  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));\n}\n\n// If project only contains files generated by GH, it’s safe.\n// We also special case IJ-based products .idea because it integrates with CRA:\n// https://github.com/facebookincubator/create-react-app/pull/368#issuecomment-243446094\nfunction isSafeToCreateProjectIn(root, name) {\n  const validFiles = [\n    '.DS_Store',\n    'Thumbs.db',\n    '.git',\n    '.gitignore',\n    '.idea',\n    'README.md',\n    'LICENSE',\n    'web.iml',\n    '.hg',\n    '.hgignore',\n    '.hgcheck',\n  ];\n  console.log();\n\n  const conflicts = fs\n    .readdirSync(root)\n    .filter(file => !validFiles.includes(file));\n  if (conflicts.length < 1) {\n    return true;\n  }\n\n  console.log(\n    `The directory ${chalk.green(name)} contains files that could conflict:`\n  );\n  console.log();\n  for (const file of conflicts) {\n    console.log(`  ${file}`);\n  }\n  console.log();\n  console.log(\n    'Either try using a new directory name, or remove the files listed above.'\n  );\n\n  return false;\n}\n\nfunction checkThatNpmCanReadCwd() {\n  const cwd = process.cwd();\n  let childOutput = null;\n  try {\n    // Note: intentionally using spawn over exec since\n    // the problem doesn't reproduce otherwise.\n    // `npm config list` is the only reliably way I could find\n    // to reproduce the wrong path. Just printing process.cwd()\n    // in a Node process was not enough.\n    childOutput = spawn.sync('npm', ['config', 'list']).output.join('');\n  } catch (err) {\n    // Something went wrong spawning node.\n    // Not great, but it means we can't do this check.\n    // We might fail later on, but let's continue.\n    return true;\n  }\n  if (typeof childOutput !== 'string') {\n    return true;\n  }\n  const lines = childOutput.split('\\n');\n  // `npm config list` output includes the following line:\n  // \"; cwd = C:\\path\\to\\current\\dir\" (unquoted)\n  // I couldn't find an easier way to get it.\n  const prefix = '; cwd = ';\n  const line = lines.find(line => line.indexOf(prefix) === 0);\n  if (typeof line !== 'string') {\n    // Fail gracefully. They could remove it.\n    return true;\n  }\n  const npmCWD = line.substring(prefix.length);\n  if (npmCWD === cwd) {\n    return true;\n  }\n  console.error(\n    chalk.red(\n      `Could not start an npm process in the right directory.\\n\\n` +\n      `The current directory is: ${chalk.bold(cwd)}\\n` +\n      `However, a newly started npm process runs in: ${chalk.bold(npmCWD)}\\n\\n` +\n      `This is probably caused by a miconfigured system terminal shell.`\n    )\n  );\n  if (process.platform === 'win32') {\n    console.error(\n      chalk.red(`On Windows, this can usually be fixed by running:\\n\\n`) +\n      `  ${chalk.cyan('reg')} delete \"HKCU\\\\Software\\\\Microsoft\\\\Command Processor\" /v AutoRun /f\\n` +\n      `  ${chalk.cyan('reg')} delete \"HKLM\\\\Software\\\\Microsoft\\\\Command Processor\" /v AutoRun /f\\n\\n` +\n      chalk.red(`Try to run the above two lines in the terminal.\\n`) +\n      chalk.red(`To learn more about this problem, read: https://blogs.msdn.microsoft.com/oldnewthing/20071121-00/?p=24433/`)\n    );\n  }\n  return false;\n}\n\nfunction checkIfOnline(useYarn) {\n  if (!useYarn) {\n    // Don't ping the Yarn registry.\n    // We'll just assume the best case.\n    return Promise.resolve(true);\n  }\n\n  return new Promise(resolve => {\n    dns.lookup('registry.yarnpkg.com', err => {\n      if (err != null && process.env.https_proxy) {\n        // If a proxy is defined, we likely can't resolve external hostnames.\n        // Try to resolve the proxy name as an indication of a connection.\n        dns.lookup(url.parse(process.env.https_proxy).hostname, proxyErr => {\n          resolve(proxyErr == null);\n        });\n      } else {\n        resolve(err == null);\n      }\n    });\n  });\n}\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2017-10-30T18:45:07.000Z",
    "updatedAt": "2019-02-14T06:55:44.000Z"
  },
  {
    "id": "d62e0b84a0df5bc393cd1d56777cebdc-Marble.js",
    "title": "Marble.js",
    "description": "Marble-style sequencer + sampler for https://github.com/FormidableLabs/react-music",
    "language": "javascript",
    "code": "/*\n  This replaces <Sequencer> + multiple <Sampler>s with a marble diagram sequencer.\n  You can use it like this:\n\n      <Marble\n        resolution={16}\n        samples={[\n          'samples/kick.wav',\n          'samples/snare.wav',\n        ]}\n        diagrams={[\n          'x-x- ---- x-x- ----',\n          '---- x--- ---- x---',\n        ]}\n      />\n  \n  Whitespace is ignored in the diagrams.\n\n  By default, \"x\" means play and \"-\" means skip.\n  However you can also define custom \"expansions\".\n  \n  Expansions are the letters that \"expand\" to the patterns you define.\n  They will be interpolated into the track according to the free space you left out from its resolution.\n\n  For example:\n\n      <Marble\n        resolution={16}\n        samples={[\n          'samples/kick.wav',\n          'samples/snare.wav',\n          'samples/snare.wav',\n        ]}\n        diagrams={[\n          'x-x- ---- x-x- ----',\n          '---- x--- ---- x---',\n          '---- ---- ---- o   ',\n        ]}\n        expansions={{\n          o: 'xxx',\n        }}\n      />\n  \n  Since we know the resolution is 16 but the third diagram only contains 12 \"resolved\" characters,\n  the 2 other beats are distributed between expansion characters. We only have one of them (\"o\")\n  at the very end, so it gets replaced with \"xxx\" which is spread over 2 free beats. Dubstep!\n  \n  Expansions can use other expansions, and time will be allocated recursively by the same algorithm.\n  For example:\n  \n      <Marble\n        resolution={16}\n        samples={[\n          'samples/kick.wav',\n          'samples/snare.wav',\n          'samples/snare.wav',\n        ]}\n        diagrams={[\n          'x-x- ---- x-x- ----',\n          '---- x--- ---- x---',\n          '---- ---- ---- o   ',\n        ]}\n        expansions={{\n          o: 'p-t',\n          p: 'x--',\n          t: 'xxx',\n        }}\n      />\n      \n  Be careful with expansions: if you have a loop between them, the stack will overflow.\n  Have fun!\n*/\n\nimport React from 'react';\nimport { Sampler, Sequencer } from 'react-music';\n\nconst parseBeats = (diagram, expansions) => {\n  const beats = diagram.replace(/\\s/g, '').split('');\n  for (let i = 0; i < beats.length; i++) {\n    const char = beats[i];\n    if (char === '-') {\n      beats[i] = false;\n    } else if (char === 'x') {\n      beats[i] = true;\n    } else {\n      beats[i] = parseBeats(expansions[char], expansions);\n    }\n  }\n  return beats;\n};\n\nconst getExpansionResolution = (beats, resolution) => {\n  const resolvedCount = beats.filter((c) => typeof c === 'boolean').length;\n  const spaceForExpansions = resolution - resolvedCount;\n  const expansionCount = beats.length - resolvedCount;\n  const spacePerExpansion = spaceForExpansions / expansionCount;\n  return spacePerExpansion;\n};\n\nconst convertBeatsToSteps = (beats, resolution) => {\n  const steps = [];\n  const expansionResolution = getExpansionResolution(beats, resolution);\n\n  for (let i = 0; i < beats.length; i++) {\n    const beat = beats[i];\n    if (beat === true) {\n      steps.push(i);\n    } else if (beat === false) {\n      continue;\n    } else {\n      const expansionSteps = convertBeatsToSteps(beat, expansionResolution);\n      const interpolatedSteps = expansionSteps.map((relativeStep) =>\n        i + relativeStep / expansionSteps.length * expansionResolution\n      );\n      steps.push(...interpolatedSteps);\n    }\n  }\n  return steps;\n};\n\nconst parseDiagram = (diagram, resolution, expansions) => {\n  const beats = parseBeats(diagram, expansions);\n  return convertBeatsToSteps(beats, resolution);\n};\n\nconst Marble = ({\n  children,\n  diagrams,\n  expansions,\n  resolution,\n  samples,\n}) => (\n  <Sequencer\n    resolution={resolution}\n    bars={1}\n  >\n    {diagrams.map((diagram, index) =>\n      <Sampler\n        key={index}\n        sample={samples[index]}\n        steps={parseDiagram(diagram, resolution, expansions)}\n      >\n        {children}\n      </Sampler>\n    )}\n  </Sequencer>\n);\n\nMarble.defaultProps = {\n  expansions: {},\n};\n\nMarble.propTypes = {\n  children: React.PropTypes.node,\n  diagrams: React.PropTypes.arrayOf(\n    React.PropTypes.string.isRequired\n  ).isRequired,\n  expansions: React.PropTypes.objectOf(\n    React.PropTypes.string.isRequired\n  ).isRequired,\n  resolution: React.PropTypes.number.isRequired,\n  samples: React.PropTypes.arrayOf(\n    React.PropTypes.string.isRequired\n  ).isRequired,\n};\n",
    "tags": [
      "gist",
      "javascript"
    ],
    "createdAt": "2016-08-27T22:16:12.000Z",
    "updatedAt": "2019-02-14T06:54:31.000Z"
  }
];