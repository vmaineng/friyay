const mongoose = require('mongoose');

const Schema = mongoose.Schema

const entertainmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Integer,
    },
    posterPath: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        unique: false,
        enum: [
            "Anime",
            "Documentaries",
            "International"
        ]
    },
    
}, {timestamps: true})

module.exports = mongoose.model('Entertainment', entertainmentSchema)