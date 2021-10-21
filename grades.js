'use-strict';

const fs = require('fs');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const filename = process.argv[2];
try {
    const data = fs.readFileSync(filename, 'utf8').toString();
    console.log(data);
} catch(e) {
    console.log('Error:', e.stack);
}