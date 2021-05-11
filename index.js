const page = require('./src/pageTemplate');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const dougManager = new Manager('Doug', 1, 'doug@test.com', 1);
console.log(dougManager);

let htmlArray = [page.generateHeader(), page.generateManager('test','test','test','test'), page.generateEngineer('test','test','test','test'), page.generateIntern('test','test','test','test'), page.generateFooter()]

function compileHtml(arr) {
    return arr.join('');
}


fs.writeFile('./dist/team.html', compileHtml(htmlArray), function (err) {
    if (err) throw err;
    console.log('success')
});
