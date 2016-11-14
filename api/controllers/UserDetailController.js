module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
  generateExcel: function (req, res) {
    UserDetail.generateExcel(res);
  }
};
module.exports = _.assign(module.exports, controller);