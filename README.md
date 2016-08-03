# flowify
The easiest way to introduce flow type annotation through browserify

Please note this does not validate any type, at least not in its first release.

This simply allows you to put flowtype annotations in your code and clean it up before other transforms.

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
