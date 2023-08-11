var express = require('express');
var router = express.Router();
const db = require('../confg/database');

/* localhost: 3000/user/register */
router.post('/register', async function(req, res, next) {
  var {username, email, password} = req.body;
  // server sidde validation
  // ---> rules check 

  try {
      // ---> uniqueness checks
      var [results, _] = await db.execute(`select id from users where username=?`, [username]);
      if (results && results.length > 0) {
        console.log(`${username} already exists`);
        return res.redirect("/register");
      }
      var [results, _] = await db.execute(`select id from users where email=?`, [email]);
      if (results && results.length > 0) {
        console.log(`${email} already exists`);
        return res.redirect("/register");
      }

      // insert into db
      var [insertResult, _] = await db.execute(
        `INSERT INTO users (username, email, password) VALUE (?,?,?);`, [username, email, password]
      );
      
      // respond
      if(insertResult && insertResult.affectedRows == 1) {
          return res.redirect('/login')
      }else{
        return res.redirect('/register');
      }

    } catch (err) { 
      next(err);
    } 
});



module.exports = router;
