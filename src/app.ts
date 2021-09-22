import * as fs from 'fs';
import EOL from 'os';
import NameGenerator from "./NameGenerator";
import ConsoleArgsHelper from "./ConsoleArgsHelper";

const allowedArgs = ['-h', '-l', '-n'];
const args = ConsoleArgsHelper.parse();

for (let arg in args) {
    if (!args.hasOwnProperty(arg)) continue;
    if (allowedArgs.indexOf(arg) === -1) {
        console.log("Unknown property: "+arg);
        process.exit(0);
    }
}

const revMax = args.hasOwnProperty('-h') ? 1000 : 10
const lines = args['-n'] || 1000;

const file = fs.createWriteStream('out.csv');
file.write('id,customerid,product,revenue');

for (let i = 0; i < lines; i++) {
    const id = i + 1;
    const customerid = ((Math.random() * 249) + 1).toFixed(0);
    const product = NameGenerator.generateNew();
    const revenue = (Math.random() * revMax).toFixed(0);
    file.write(EOL.EOL + [id, customerid, product, revenue].join(','));
}

file.end();
