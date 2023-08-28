import { quux } from "./circular";
const usedSync = 5;
const unexportedSync = 6;
const unimportedSync = 7;
export { usedSync as bar, quux, unimportedSync };

