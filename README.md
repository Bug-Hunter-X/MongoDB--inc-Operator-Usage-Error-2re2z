# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field by a specified value. However, if the field does not exist, or if it is not numeric, the update operation can fail silently or produce unexpected results.

The `bug.js` file shows the incorrect usage, while `bugSolution.js` provides the corrected implementation.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` against a MongoDB instance.
3. Observe the outcome.  Compare with the results from `bugSolution.js`.

## Solution
The solution involves checking for the existence of the field and handling non-numeric values appropriately.  The updated code uses the `$setOnInsert` operator to create a new field if one doesn't exist.