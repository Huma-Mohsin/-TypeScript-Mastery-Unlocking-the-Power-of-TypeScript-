/* Chalk is a  library specifically Node.js package, that provides a set of functions to give visual effects of node.js tool at terminals like bold, coloring, highlightning data etc. */

import chalk from "chalk";
import { input } from "@inquirer/prompts";

const answer = await input ({
  message: "Enter your name",
  
  
});

console.log(`${chalk.green ('Name')}: ${chalk.red(answer)}`);









