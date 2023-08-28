import { quux } from "./circular";
await operation();

if (false) await treeshakenOperation();
else await retainedOperation();

const usedAsync = 5;
const unexportedAsync = 6;
const unimportedAsync = 7;
export { usedAsync as foo, quux, unimportedAsync };

