var objectid = require("mongodb").ObjectId;
var schema = new Schema({
    age: {
        type: String,
        enum: ["Below 25", "25 to 30 years", "31 to 35 years", "36 years and above"],
        required: true
    },
    tenture: {
        type: String,
        enum: ["Less than 3 months", "3 months to 1 year", "1 to 3 years", "3 to 5 years", "5 years and above"],
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },

    zone: {
        type: String,
        enum: ["North", "South", "East", "West"],
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    storeCode: {
        type: String
    },

    userAnswers: [{
        question: {
            type: Schema.Types.ObjectId,
            ref: "Question",
            index: true
        },
        answer: {
            type: Schema.Types.ObjectId,
            ref: 'Answer',
            index: true
        },
        questionString: String,
        answerString: String
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

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, 'userAnswers.question userAnswers.answer', 'userAnswers.question userAnswers.answer'));
var model = {

    generateExcel: function (res) {
        var Model = this;

        var aggText = [];

        Model.find().exec(function (err, data) {
            var excelData = [];
            _.each(data, function (n) {
                var obj = {};
                obj.storeName = n.storeName;
                obj.age = n.age;
                obj.tenture = n.tenture;
                obj.gender = n.gender;
                obj.zone = n.zone;
                _.each(n.userAnswers, function (m) {
                    var newObj = _.clone(obj);
                    newObj.question = m.questionString;
                    newObj.answer = m.answerString;
                    excelData.push(newObj);
                });
                excelData.push(obj);
            });
            Config.generateExcel("FeedbackExport", excelData, res);

        });
    }


};
module.exports = _.assign(module.exports, exports, model);