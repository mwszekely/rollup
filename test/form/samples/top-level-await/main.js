import { bar as cbar, foo as cfoo } from "./circular";
import { foo as dependency1 } from "./dep-async";
import { bar as dependency2 } from "./dep-sync";

console.log(dependency1, dependency2, cfoo, cbar);