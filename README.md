# flowify
The easiest way to introduce flow type annotation through browserify.

```sh
npm install --save-dev \
    flowify \
    babel-plugin-typecheck \
    babel-plugin-syntax-flow \
    babel-plugin-transform-flow-strip-types

```

```js
// basic grunt example
grunt.initConfig({
    browserify: {
        options: {
            transform: ['flowify', 'hintify', 'babelify']
        }
    }
});
```
