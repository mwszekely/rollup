import { foo } from "./dep-async";
import { bar } from "./dep-sync";
const quux = foo + bar;
export { bar, foo, quux };

