const mongoose = require('mongoose');
const { default: ModelManager } = require('sequelize/types/model-manager');
var Schema = mongoose.Schema;

// type Paragraph = Sentence[]

// interface Sentence = {
// 	type: "overview" | "describe" | "compare" | "trend" | null,
// 	phrases: phrase[],
// }

// interface phrase = {
// 	type: "key" | "series" | "value" | null,
// 	source: string,
// 	target: string
// } 

var Sentence = new Schema({
    type: {type: String, enum: ['overview', 'describe', 'compare', 'trend', null]},
    phrases : {type: String, Referece: 'Phrases'}
});

var Phrase = new Schema({
    type: {type: String, enum: ['key', 'series', 'value', null]},
    source: String,
    target: String
});

module.exports = {
    Sentence: mongoose.model('Sentence', Sentence),
    Phrase: mongoose.model('Phrase', Phrase)
}