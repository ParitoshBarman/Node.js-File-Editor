const path = require("path");
const fs = require('fs');


const operation = process.argv[2];
const file = process.argv[3] || '';
const content = process.argv[4];

let filePath = path.join(process.cwd(), file);  // getting the exact file path

if (!fs.existsSync(filePath) && operation != 'create') {  // checking inputed file is exist or not  and when its not create operation, Because new file will not exist before the creation.
  console.log(`"${file}" file is not found!`)
  return;
}


let data;

switch (operation) {
  // complete the fillowing function.
  case 'read':
    data = fs.readFileSync(filePath, 'utf-8');    // Reading file syncrosnasly
    console.log(`The contents of the file "${file}" is: ${data}`);
    break;

  case 'append':
    fs.appendFileSync(filePath, "\n" + content);     // Appending input content to the file syncrosnasly
    console.log(`Content appended to the file "${file}"`);
    break;

  case 'delete':
    fs.unlinkSync(filePath);     // Deleting the file
    console.log(`File "${file}" deleted`);
    break;

  case 'create':
    fs.writeFileSync(filePath, content ? content : '');     // creating the file using write method from fs module and write the content if user provide else keeping blank ('')
    console.log(`File "${file}" created`);
    break;

  case 'rename':                        //  For renaming the file
    data = fs.readFileSync(filePath, 'utf-8');          //  1st reading the data and storing into a variable
    fs.writeFileSync(content, data);                    //  2nd write or creating a new file with the user provided name and store the old data
    fs.unlinkSync(filePath);                            //  3rd delete the old file
    console.log(`File "${file}" renamed to "${content}"`);
    break;

  case 'list':
    data = fs.readdirSync(process.cwd());   // getting the all file and directory of the current working directory (process.cwd()  // return current working directory)
    console.log('List of File/Dir');
    data.forEach((itm, indx) => {
      console.log(`${indx + 1}. ${itm}`)
    })
    break;



  default:
    console.log(`Invalid operation '${operation}'`);
}
