This is a repro repo for [rollup/rollup#1507](https://github.com/rollup/rollup/issues/1507).

## Steps to repro

1. `npm install`
2. `npm test`

## Expected results

    > rollup-readable-stream@1.0.0 pretest /home/corin/Projects/GitHub/rollup/rollup-readable-stream
    > rollup -c

    ??   'default' is imported from external module 'events' but never used


    > rollup-readable-stream@1.0.0 test /home/corin/Projects/GitHub/rollup/rollup-readable-stream
    > node bundle
    ok

## Actual results

With rollup-plugin-commonjs:

```
> rollup-readable-stream@1.0.0 pretest D:\Dev\rollup-readable-stream
> rollup -c

(!) Some options have been renamed
https://gist.github.com/Rich-Harris/d472c50732dab03efeb37472b08a3f32
entry is now input
targets is now output
targets.dest is now output.file

index.js → bundle.js...
(!) Circular dependency: node_modules\readable-stream\lib\_stream_readable.js -> node_modules\readable-stream\lib\_stream_duplex.js -> node_modules\readable-stream\lib\_stream_readable.js
(!) Circular dependency: node_modules\readable-stream\lib\_stream_duplex.js -> node_modules\readable-stream\lib\_stream_writable.js -> node_modules\readable-stream\lib\_stream_duplex.js
(!) Circular dependency: node_modules\readable-stream\lib\_stream_duplex.js -> node_modules\readable-stream\lib\_stream_writable.js ->  commonjs-proxy:D:\Dev\rollup-readable-stream\node_modules\readable-stream\lib\_stream_duplex.js -> node_modules\readable-stream\lib\_stream_duplex.js
(!) Circular dependency: node_modules\readable-stream\lib\_stream_readable.js -> node_modules\readable-stream\lib\_stream_duplex.js ->  commonjs-proxy:D:\Dev\rollup-readable-stream\node_modules\readable-stream\lib\_stream_readable.js -> node_modules\readable-stream\lib\_stream_readable.js
created bundle.js in 560ms

> rollup-readable-stream@1.0.0 test D:\Dev\rollup-readable-stream
> node bundle

util.js:947
    throw new errors.TypeError('ERR_INVALID_ARG_TYPE', 'superCtor', 'Function');
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "superCtor" argument must be of type Function
    at Object.inherits (util.js:947:11)
    at Object.<anonymous> (D:\Dev\rollup-readable-stream\bundle.js:1101:6)
    at Module._compile (module.js:662:30)
    at Object.Module._extensions..js (module.js:673:10)
    at Module.load (module.js:575:32)
    at tryModuleLoad (module.js:515:12)
    at Function.Module._load (module.js:507:3)
    at Function.Module.runMain (module.js:703:10)
    at startup (bootstrap_node.js:193:16)
    at bootstrap_node.js:660:3
npm ERR! Test failed.  See above for more details.
```

With rollup-plugin-cjs-es:

```
> rollup-readable-stream@1.0.0 pretest D:\Dev\rollup-readable-stream
> rollup -c

(!) Some options have been renamed
https://gist.github.com/Rich-Harris/d472c50732dab03efeb37472b08a3f32
entry is now input
targets is now output
targets.dest is now output.file

index.js → bundle.js...
(!) Circular dependency: node_modules\readable-stream\lib\_stream_readable.js -> node_modules\readable-stream\lib\_stream_duplex.js -> node_modules\readable-stream\lib\_stream_readable.js
(!) Circular dependency: node_modules\readable-stream\lib\_stream_duplex.js -> node_modules\readable-stream\lib\_stream_writable.js -> node_modules\readable-stream\lib\_stream_duplex.js
created bundle.js in 716ms

> rollup-readable-stream@1.0.0 test D:\Dev\rollup-readable-stream
> node bundle

ok
```
