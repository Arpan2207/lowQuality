var express = require('express');
var router = express.Router();

/* GET post video page. */
router.get('/postvideo', function(req, res, next) {
    res.render('postvideo', { 
        title: 'Post Video', 
        homeUrl: "/index", 
        loginUrl: "/login",
        registerUrl: "/register",
        viewpostUrl: "/viewpost",
        policyUrl: "/policy",
        footerText: "Arpan R Savani &copy; 2023"
    });
});

module.exports = router;
