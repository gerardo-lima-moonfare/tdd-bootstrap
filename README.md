# tdd-bootstrap
bootstrap for TDD workshop

This workshop intends to implement a library package with one single function

## setup
1. Assess Node version is at least 22.6:
    ```sh
    nvm install 22.6
    ```
2. Create an ENV variable `NODE_OPTIONS`:
    ```sh
    export NODE_OPTIONS='--no-warnings=ExperimentalWarning --experimental-strip-types'
    ```

## npm scripts

|                           |
| ------------------------- |
| `npm run test`            |
| `npm run test:watch`      |
| `npm run typecheck`       |
| `npm run typecheck:watch` |
