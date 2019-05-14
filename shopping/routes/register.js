var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('./account/registration');
});

/*
// Require controller modules.
var account_controller = require('../controllers/accountController');

/// ACCOUNT ROUTES ///

// GET account home page.
router.get('/', account_controller.index);

// GET request for creating a account. NOTE This must come before routes that display account (uses id).
router.get('/account/create', account_controller.account_create_get);

// POST request for creating account.
router.post('/account/create', account_controller.account_create_post);

// GET request to delete account.
router.get('/account/:id/delete', account_controller.account_delete_get);

// POST request to delete account.
router.post('/account/:id/delete', account_controller.account_delete_post);

// GET request to update account.
router.get('/account/:id/update', account_controller.account_update_get);

// POST request to update account.
router.post('/account/:id/update', account_controller.account_update_post);

// GET request for one account.
router.get('/account/:id', account_controller.account_detail);

// GET request for list of all account items.
router.get('/accounts', account_controller.account_list);


 */

module.exports = router;