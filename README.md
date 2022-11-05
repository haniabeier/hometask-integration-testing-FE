# hometask-integration-testing-fe
QA Automation Bootcamp - Hometask Integration testing on FE

#### Step 1: Check the project structure

Check the project structure and the set up:
- package.json file with dependencies
- js folder with "rectangle.js" file
- .gitignore file
- tests folder with "rectangle.test.js" file

#### Step 2: Build the project locally

First of all you need to open the terminal and navigate to the project root.
Once the path is correct, run the `yarn` command in order to set up all project dependencies

#### Step 3: Check the jest installation

Check your "./package.json" file. As a dependency you're supposed to see "jest":

```json
  "devDependencies": {
    "jest": "^29.2.2"
  },
```

#### Step 4: Run tests

Run the command `yarn jest`

The result should be similar to this: 
```text
 PASS  tests/rectangle.test.js
  √ should properly count the rectangle's perimeter (3 ms)
  √ should properly count the rectangle's area (1 ms)
  √ should return 0 if one of the dimensions is 0
  √ should generate a proper description (37 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.721 s, estimated 1 s
Ran all test suites.
Done in 2.16s.
```