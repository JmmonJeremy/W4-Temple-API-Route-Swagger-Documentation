const routes = require('express').Router();
const temple = require('./temple');

routes.use('/', require('./swagger'));
routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://jmmonjeremy.github.io/Jeremy-s--API-Docs/',
    };
    res.send(docData);
  })
);

module.exports = routes;
