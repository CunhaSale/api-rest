const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('MEAN APP');
});

module.exports = router;