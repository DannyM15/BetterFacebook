const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;


// Calling the api routes and assigning the corresponding routes.
// Exporting the routes to be used in the root index.js file