var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET cool page :)))
router.get('/cool', (req, res, next) => {
  res.send("you've reached the cool page :)))")
})

module.exports = router;
