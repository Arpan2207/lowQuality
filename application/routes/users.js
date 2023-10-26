var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
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
      
      var hashedPassword = await bcrypt.hash(password, 5);

      // insert into db
      var [insertResult, _] = await db.execute(
        `INSERT INTO users (username, email, password) VALUE (?,?,?);`, [username, email, hashedPassword]
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

router.post('/login', async function (req, res, next) {
  var { username, password } = req.body;
  try {
    var [results, _] = await db.execute(
      `select id, username, email, password from users where username=?`,
      [username]
    );
    const user = results[0];
    if(!user){
      return res.redirect("/login")
    }

    var passwordsMatch = await bcrypt.compare(password, user.password);
    if (passwordsMatch) {
      req.session.user = {
          userId: user.id,
          username: user.username,
          email: user.email,
      }
      return res.redirect('/');
    } else {
      return res.redirect('/login');
    }
  } catch (err) {
    next(err);
  }
});

router.post('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
        if (err) next(err);
        return res.redirect("/");
    });
});

module.exports = router;
