# Repro steps

1. run "npm install"
2. run "npm run build"
3. see that the build compiles without errors
4. run "npm run lint"
5. see that it fails with error
```log
file.ts
  7:3  error  Member '_name' is never reassigned; mark it as `readonly`  @typescript-eslint/prefer-readonly

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

```
6. run "npm run fix-lint"
7. see that it prefixed "_name" in "file.ts" with readonly
8. run "npm run build"
9. see that the build fails with error
```log
file.ts(10,9): error TS2540: Cannot assign to '_name' because it is a read-only property.
```
