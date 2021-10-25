import { Server } from "./server";
const { networkInterfaces } = require("os");
const nets = networkInterfaces();
const server = new Server();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
    if (net.family === "IPv4" && !net.internal) {
      if (!results[name]) {
        results[name] = [];
      }
      results[name].push(net.address);
    }
  }
}
console.log(results);
server.listen((port) => {
  console.log(`Server is listening on http://localhost:${port}`);
});
