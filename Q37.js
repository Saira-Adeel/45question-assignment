/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.*/
function makeShirt(size = "large", message = "I love TypeScript!") {
    console.log(`I would like a ${size.toUpperCase()} T-shirt with '${message}' printed on it.`);
}
// Large shirt with default message
makeShirt();
// Medium shirt with default message
makeShirt("medium");
// Small shirt with custom message
makeShirt("small", "Typescript is pretty cool too!");
export {};
