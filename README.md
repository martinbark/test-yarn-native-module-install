# Test [yarn](https://yarnpkg.com/) native module installs

> Verify that all the modules are built and installed correctly that use native addons ([node-gyp](https://github.com/nodejs/node-gyp)).

## Running

To run the test type `make`.  This will yarn install inside the `e` directory and run the unit test

## Directory structure

The directories `a`, `b`, `c`, and `d` represent 4 different modules that all depend on the same module that needs building using node-gyp ([nan-hello-world](https://github.com/martinbark/nan-hello-world)).  `a` and `b` both use v1.0.0 of nan-hello-world. `c` and `d` both use v2.0.0 of nan-hello-world.

The directory `e` represents a modules that depends on `a`, `b`, `c`, and `d`

The directory `e/node_modules` will have the following directory structure once yarn has installed

```
├─ a@1.0.0
│  └─ nan-hello-world@^1.0.0
├─ b@1.0.0
│  └─ nan-hello-world@^1.0.0
├─ bindings@1.3.0
├─ c@1.0.0
│  ├─ nan-hello-world@^2.0.0
│  └─ nan-hello-world@2.0.0
│     ├─ bindings@^1.3.0
│     └─ nan@^2.8.0
├─ d@1.0.0
│  ├─ nan-hello-world@^2.0.0
│  └─ nan-hello-world@2.0.0
│     ├─ bindings@^1.3.0
│     └─ nan@^2.8.0
├─ nan-hello-world@1.0.0
│  ├─ bindings@^1.3.0
│  └─ nan@^2.8.0
└─ nan@2.8.0
```

## The test

Verify `nan-hello-world/build`, `c/node_modules/nan-hello-world/build` and `d/node_modules/nan-hello-world/build` all exist.

yarn v1.3.2 fails this test.

## License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
