'use strict';

angular.module('Cours')
  .controller('MainCtrl', function ($scope, Frameworks) {
    var modal = $('.modal');

    $scope.hello = "List des presentations";

    $scope.frameworks = Frameworks.query();

    $scope.edit = function(framework) {
      $scope.framework = framework;
      if(framework.$get) {
        framework.$get();
      }
      modal.modal('show');
    }

    $scope.clear = function() {
      $scope.framework={};
    }

    $scope.save = function() {
      $scope.framework.id="-";
      if($scope.framework.$save) {
        $scope.framework.$save();
      } else {
        $scope.frameworks.push(Frameworks.save($scope.framework));
      }
      modal.modal('hide');
    }

    $scope.delete = function(framework, $index, $event) {
      $event.stopPropagation();
      $scope.frameworks.splice($index, 1);
      framework.$delete();
    }
  });
