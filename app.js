console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var addresult=notes.addfun(2,3);
console.log(addresult);


// var res=notes.addnote();
// console.log(res);

// var user = os.userInfo();
// console.log(user);  

//fs.appendFileSync('greetings.txt', 'hello ' + user.username + ' your dir is ' + user.homedir );           
//another way to append
// fs.appendFileSync('greetings.txt',`hello ${user.username} your age is  ${notes.age}`);  
