module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

exportEnquiryExcel: function (req, res) {
    Enquiry
      .find({})
      .exec(function (err, response) {
        var excelData = [];
        var row = {};
        _.each(response, function (key) {
          console.log(key);
          row = {};
          row = {
            "NAME": key.name,
            "EMAIL": key.email,
            "MOBILE": key.mobile,
            "COMMENT": key.comment
          };
          excelData.push(row);
        });
        Config.generateExcel("PartyEnquiries", excelData, res);
      });
  },




};
module.exports = _.assign(module.exports, controller);