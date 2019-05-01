const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let annoucementEntry =  new Schema({
    name:{type: String, required: true, max: 30},
    title:{type: String, required: true, max: 50},
    hood:{type: String, required: true, max: 50},
    aMsg:{type: String, required: true, max: 300}
});

module.exports = mongoose.model('indexData', annoucementEntry);
