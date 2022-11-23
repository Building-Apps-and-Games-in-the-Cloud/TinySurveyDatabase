import mongoose from "mongoose";

var optionSchema = mongoose.Schema({

    text: {
        type: String,
        required: true
    },

    count: {
        type: Number,
        required: true
    }
});

var surveySchema = mongoose.Schema({
    topic: String,
    options: {
        type: [optionSchema],
        required: true
    }
});

let Survey = mongoose.model('Survey', surveySchema);
let Option = mongoose.model('Option', optionSchema);
    
export { Survey, Option };