const swaggerAutogen = require('swagger-autogen')();

// Check if NODE_ENV is correctly set
console.log('Environment:', process.env.NODE_ENV);

// Check the environment and set the host and scheme accordingly
const isProduction = process.env.NODE_ENV === 'production';
console.log('Is Production:', isProduction); // Check if it's true or false

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

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// USE #1 OR #2 NOT BOTH!!!
// #1 Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger file generated successfully:', outputFile);
}).catch((err) => {
  console.error('Error generating swagger file:', err);
});

// #2 Run server file after it gets generated (like running npm start with it)
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// })