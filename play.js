const connect = require("./client");


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) =>{
  if (key === '\u0003') {
    process.exit();
  }
};

handleUserInput(setupInput);

connect().on("data" , (data) => {
  console.log(data);
});

console.log('Connecting ...');