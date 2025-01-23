////////////////////////////
//// Require Statement /////
////////////////////////////
const express = require('express');
const router = express.Router();

const accounts = require('../Data/accounts');

////////////////////////////
////// Middleware //////////
////////////////////////////



////////////////////////////
///////// Routes ///////////
////////////////////////////

router.route('/:id').get((req, res) => {
    res.json(accounts);
})

.post((req, res) => {
  if(req.body.name && req.body.username && req.body.password) {
    if(accounts.find(account => account.username === req.body.username)){
        return res.send('Username already exists');
    }
    const account = {
        id : accounts.length + 1,
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
    };
    
    accounts.push(account);
    res.send('Account created successfully');
    }else{
        res.send('Missing required fields');
    }

});



////////////////////////////
///////// Exports //////////
////////////////////////////

module.exports = router;