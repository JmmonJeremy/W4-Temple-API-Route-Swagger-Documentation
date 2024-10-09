const routes = require('express').Router();
const temple = require('./temple');
const swagger = require('./swagger');

routes.get('/', (req, res) => {
  /* #swagger.description = "Welcome to the LDS Temple API" */
  /* #swagger.responses[200] = { 
        description: "Success", 
        '@schema': { 
             "type": "object",
            "properties": {
              "documentationURL": {
                "type": "string",
                "example": "https://jmmonjeremy.github.io/Jeremy-s--API-Docs/"
                } 
              } 
            } 
          } 
        }    
  */ 
  console.log("GET / route handler is being hit");
  const docData = {
    documentationURL: 'https://jmmonjeremy.github.io/Jeremy-s--API-Docs/',
  };
  res.send(docData);
});

routes.use('/', swagger);
routes.use('/temples', temple);


module.exports = routes;
