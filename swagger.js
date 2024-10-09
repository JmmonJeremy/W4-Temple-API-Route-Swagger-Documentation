const swaggerAutogen = require('swagger-autogen')();

// Check the environment and set the host and scheme accordingly
const isProduction = process.env.NODE_ENV === 'production';

const doc = {
  info: {
    title: 'temple-api',
    description: 'LDS Temple API for BYU-Idaho CSE341 team project'
  },
  host: isProduction
    ? 'w4-temple-api-route-swagger-documentation.onrender.com'
    : 'localhost:8080',
  schemes: isProduction ? ['https'] : ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// USE #1 OR #2 NOT BOTH!!!
// #1 Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// #2 Run server file after it gets generated (like running npm start with it)
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// })