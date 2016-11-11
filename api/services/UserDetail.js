var objectid = require("mongodb").ObjectId;
var schema = new Schema({
  age: {
      type: String,
      enum:["Below 25","25 to 30 years","31 to 35 years","36 years and above"]
  },
   tenture: {
      type: String,
      enum:["Less than 3 months","3 months to 1 year","1 to 3 years","3 to 5 years","5 years and above"]
  },
  gender: {
      type: String,
      enum:["Male","Female"]
  },

  storeName:String,
  storeCode:String,

  userAnswers:[{
      question:{
    type: Schema.Types.ObjectId,
     ref: 'Question',
     index: true
      },
      answer:{
    type: Schema.Types.ObjectId,
     ref: 'Answer',
     index: true
      }
  }]
 
});

schema.plugin(deepPopulate, {
    // populate:{
    //     'userAnswers.question':{
    //         select:'question'
    //     }
    // }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('UserDetail', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema,'userAnswers.question userAnswers.answer','userAnswers.question userAnswers.answer'));
var model = {};
module.exports = _.assign(module.exports, exports, model);
