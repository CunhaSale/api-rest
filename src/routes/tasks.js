const router = require('express').Router();

router.get('/tasks', (req, res, next) => {
    res.send('Router Task');
});

module.exports = router;