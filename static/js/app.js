'use strict"'

var app = angular.module('App', []);

app.controller('AppController', function($scope, $http){

  $scope.projects = [
    {
      "RTN": "820820",
      "projectname": "VLPS",
      "programname": "Loyalty and Marketing",
      "datecreated": "09/16/2016",
      "status": "Waiting for Analyst Selection"
    },
    {
      "RTN": "820820",
      "projectname": "Rewards Redemption",
      "programname": "Loyalty and Marketing",
      "datecreated": "09/16/2016",
      "status": "Waiting for Analyst Assessment"
    }
  ];

  $scope.teams = [  {"code": "R", "name": "Risk and Authetication"},
                    {"code": "D", "name": "Data Platform"},
                    {"code": "BI","name": "Business Intelligence"},
                    {"code": "C", "name": "Commercial"},
                    {"code": "L", "name": "Loyalty and Marketing"}
  ];

  $scope.programs = [  {"code": "R", "name": "Account Level Management (ALM)"},
                    {"code": "D", "name": "Data Product Development Efficiencies"},
                    {"code": "BI","name": "BFraud Management"},
                    {"code": "C", "name": "Global Analytics"},
                    {"code": "L", "name": "North America Prepaid Products"}
  ];

// New Request Form
  $scope.submitrequest = function(){

    console.log($scope.currentproject);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.currentproject);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                  });



    $('#modalNewRequest').modal('hide');

  };

// Assign Analyst

   $scope.submitrequest = function(){

    console.log($scope.currentproject);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.currentproject);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                  });



    $('#modalNewRequest').modal('hide');

  };


});

