
var myApp = angular.module("myApp",[]);

myApp.controller('OrderFormController', function ($scope){




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
          active: true
        },
        {
          name: "Indonesian",
          price: 25,
          active: true
        },
        {
          name: "Peru",
          price: 17,
          active: false
        }
    ]

    $scope.toggleActive = function(){// I think this needs more code to work correctly //
        s.active = !s.active;
      };


      $scope.total = function() {
            var total = 0;
            angular.forEach($scope.coffee, function(s) {
              if(s.active){
                total += s.price;
              }
              // if(!s.active){
              //   total -= s.price;
              // }
              // else
              //   (!s.active){}
              //   total -= s.price;
              // }
            })

            return total;
        };

            // $scope.reset{};

            // var buyer = angular.copy($scope.buyer)
            // $scope.resetForm = function(){// want to clear total //

              // $scope.buyer = angular.copy(buyer);
              // $scope.resetForm = $setPrestine();
            // };
            // $scope.isbuyerChanged = function(){

            // }
            // return !angular.equals($scope.person, buyer);



        // }
      // $scope.total = function(){
      //
      //   var total = 0;
      //
      //   angular.forEach($scope.coffee, function(s){
      //     if (s.active){
      //       total+= s.price;
      //     }
      //
      //   });

      // return total;

      // };
      });
