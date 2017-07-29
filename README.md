This is a repro repo.

## Steps to repro

1. `npm install`
2. `npm test`

## Expected results

    > rollup-readable-stream@1.0.0 pretest /home/corin/Projects/GitHub/rollup/rollup-readable-stream
    > rollup -c

    ⚠️   'default' is imported from external module 'events' but never used


    > rollup-readable-stream@1.0.0 test /home/corin/Projects/GitHub/rollup/rollup-readable-stream
    > node bundle
    ok

## Actual results

    > rollup-readable-stream@1.0.0 pretest /home/corin/Projects/GitHub/rollup/rollup-readable-stream
    > rollup -c

    ⚠️   'default' is imported from external module 'events' but never used


    > rollup-readable-stream@1.0.0 test /home/corin/Projects/GitHub/rollup/rollup-readable-stream
    > node bundle

    util.js:961
        throw new TypeError('The super constructor to "inherits" must not ' +
        ^

    TypeError: The super constructor to "inherits" must not be null or undefined
        at Object.exports.inherits (util.js:961:11)
        at Object.<anonymous> (/home/corin/Projects/GitHub/rollup/rollup-readable-stream/bundle.js:1105:8)
        at Module._compile (module.js:570:32)
        at Object.Module._extensions..js (module.js:579:10)
        at Module.load (module.js:487:32)
        at tryModuleLoad (module.js:446:12)
        at Function.Module._load (module.js:438:3)
        at Module.runMain (module.js:604:10)
        at run (bootstrap_node.js:394:7)
        at startup (bootstrap_node.js:149:9)
    npm ERR! Test failed.  See above for more details.

