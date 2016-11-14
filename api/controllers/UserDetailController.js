module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

generateExcel: function (req, res) {
          
    UserDetail
      .find({})
      .exec(function (err, response) {
        var excelData = [];
        var row = {};
        _.each(response, function (key) {
          console.log(key);
          row = {};
          row = {
            "AGE": key.age,
            "STORECODE": key.storeCode,
            "STORENAME": key.storeName,
            "TENTURE": key.tenture
            };
          excelData.push(row);
        });
        Config.generateExcel("UserDetail", excelData, res);
      });
  },




};
module.exports = _.assign(module.exports, controller);