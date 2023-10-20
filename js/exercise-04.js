/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

true && console.log("moo");
false && console.log("moo moo?")
true || console.log("hello friend");
false || console.log("bye friend");


//This happens because with the && operator, both parts must be true for the second part to be executed.
//This happens because with the || operator, only one of the parts needs to be true for the second part to be executed.