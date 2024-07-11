
const express = require('express');
const router = express.Router();
const general = require('../controllers/GeneralController/Genral.controller');


router.get('/',  general)
router.post('/')

module.exports =router

