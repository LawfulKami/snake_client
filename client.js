const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log("Snek hassss connected...");
    conn.write("Name: LNY");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  return conn;
};

module.exports = connect;