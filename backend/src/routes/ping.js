const express = require('express');
const router = express.Router();

router.get('/ping',(req,res) => {
    res.json({msg:'Server is connected',time: new Date().toISOString() });
});

module.exports = router;

