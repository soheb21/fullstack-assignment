// routes/userRoutes.js

const express = require('express');
const { getcards, createCard, getCardById } = require('../controller/cardCtrl');

const router = express.Router();

router.get('/', getcards);
router.get('/:id', getCardById);
router.post('/', createCard);

module.exports = router;
