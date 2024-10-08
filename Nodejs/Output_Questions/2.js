import fs from 'fs-promise';

async function printFiles() {
  const files = await getFilePaths(); // Assume this works fine
  
  for (const file of files) {
    const contents = await fs.readFile(file, 'utf8');
    console.log(contents);
  }
}

printFiles();

/*you can use for...of instead of forEach to ensure each file is processed sequentially:
Array.prototype.forEach does not properly handle asynchronous operations
*/

//fixed
import fs from 'fs-promise';

async function printFiles() {
  const files = await getFilePaths(); // Assume this works fine
  
  for (const file of files) {
    const contents = await fs.readFile(file, 'utf8');
    console.log(contents);
  }
}

printFiles();
