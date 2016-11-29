colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function ($scope, DataFactory) {
  console.log("settings controller running");
  var self = this;

  // refer to original color array
  self.colors = DataFactory.colors;

  // refer to new array of all css colors
  self.cssColors = DataFactory.cssColors;
  self.newColor = '';

  self.addColor = function () {
    console.log(self.newColor);

    // add selected color from drop down to original array
    DataFactory.colors.push(self.newColor);
  };
},
]);
