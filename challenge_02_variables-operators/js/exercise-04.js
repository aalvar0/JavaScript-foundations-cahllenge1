/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

// Line 1: This line checks if the condition before && is true.
true && console.log("moo"); // Output: "moo"
// Since the condition is true, it executes the statement after &&.

// Line 2: This line checks if the condition before && is true.
false && console.log("moo moo?"); // Output: None
// Since the condition is false, the statement after && is not executed.

// Line 3: This line checks if the condition before || is true.
true || console.log("hello friend"); // Output: None
// Since the condition is true, the statement after || is not executed.

// Line 4: This line checks if the condition before || is true.
false || console.log("bye friend"); // Output: "bye friend"
// Since the condition is false, it executes the statement after ||.



//This happens because with the && operator, both parts must be true for the second part to be executed.
//This happens because with the || operator, only one of the parts needs to be true for the second part to be executed.
