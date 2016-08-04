# flowify
The easiest way to introduce flow type annotation through browserify

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

Please note `v2.0.x` does not validate any type, it simply allows you to put flowtype annotations in your code and have it cleaned before other transforms.

Starting from version `v2.1.x` also `typecheck` and `syntax-flow` are used before stripping types out.