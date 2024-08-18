// controllers/CardController.js

const Card = require('../model/card');

// @desc   Get all cards
// @route  GET /api/v1/card
const getcards = async (req, res) => {
    try {
        const { query } = req.query;
        let cards = [];
        if (!query) {
            cards = await Card.find();
        }
        cards = await Card.find({
            title: { $regex: query, $options: "i" }
        });

        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Create a new card
// @route  POST /api/v1/card
const createCard = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newCard = new Card({
            title,
            description
        });

        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Fetch single card by ID
// @route  GET /api/v1/:id
const getCardById = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return res.status(404).json({ message: 'card not found' });
        }

        res.json(card);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid card ID' });
        }
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {
    getcards,
    createCard,
    getCardById
};
