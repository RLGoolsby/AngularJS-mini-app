
var myApp = angular.module("myApp", []);

myApp.controller('OrderFormController', function($scope){




// function OrderFormController($scope){


    $scope.coffee= [

        {
          name: "Columbian",
          price: 15,
          active: true
        },
        {
          name: "African",
          price: 20,
          active: false
        },
        {
          name: "Indonesian",
          price: 25,
          active: false
        },
        {
          name: "Peru",
          price: 17,
          active: false
        }
    ]
});
    $scope.toggleActive = function(s){
    		s.active = !s.active;
    	};

      $scope.total = function(){

        var total = 0;

        angular.forEach($scope.coffee, function(s){
          if (s.active){
            total+= s.price;
          }
        });

      return total;

      };
    
