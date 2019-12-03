const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------- AUTH -------------------------- //
router.post('/login', ctrl.auth.createSession)
router.delete('/logout', ctrl.auth.deleteSession)
router.post('/signup', ctrl.auth.createUser)

module.exports = router;