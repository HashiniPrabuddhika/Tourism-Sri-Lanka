const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    days: {
        type: Number,
        required: true,
    },
    passengers: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: String,
    activities: [String],
    accommodation: String,
    mealPlan: String,
    travelTime: String,
    transferMode: String, 
});

module.exports = mongoose.model("Package", packageSchema);
