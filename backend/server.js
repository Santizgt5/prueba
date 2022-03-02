const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
})

const filepath = path.join(__dirname, './config.env');
if(fs.existsSync(filepath)) {
    dotenv.config({path:filepath})
}
const port = process.env.PORT ?? 3000;

require('./src/database/database');

const app = require('./src/app');
const server = app.listen(port, () => {
    console.log(` Server started on port ${port}`);
  });
  
  server.on('close', () => {
    console.log(`Server stopped.`);
  });

process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
})