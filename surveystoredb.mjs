import mongoose from 'mongoose';

import {Survey} from "./models/survey.mjs";

class SurveyDBOldie {
  constructor(newValue) {
    this.topic = newValue.topic;
    this.options = [];
    newValue.options.forEach(optionValues => {
      let newOption = new Option(optionValues);
      this.options.push(newOption);
    });
  }

  incrementCount(text) {
    let option = this.options.find(
      item => item.text == text);
    if (option != undefined) {
      option.incrementCount();
    }
  }

  getCounts() {
    let options = [];
    this.options.forEach(option => {
      let countInfo = { text: option.text, count: option.getCount() };
      options.push(countInfo);
    });
    let result = { topic: this.topic, options: options };
    return result;
  }

  getOptions() {
    let options = [];
    this.options.forEach(option => {
      let optionInfo = { text: option.text };
      options.push(optionInfo);
    });
    let result = { topic: this.topic, options: options };
    return result;
  }
}

class SurveysDB {
  constructor() {
  }

  async init(){
    // need to connect to the database here
    await mongoose.connect('mongodb://localhost/tiny_survey_db');
  }

  async saveSurvey(newValue){
    return null;
  }

  async getCounts(topic){
    return null;
  }

  async getOptions(topic){
    return null;
  }

  async incrementCount(incrementDetails){
    return null;
  }
}

export { SurveysDB as Surveys};
