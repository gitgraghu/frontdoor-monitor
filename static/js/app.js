'use strict"'

var app = angular.module('App', []);

app.controller('AppController', function($scope, $http){

// MY REQUEST PAGE

              $scope.projects = [
                {
                  "id" : "jkasfkha",
                  "projectRTN": "820820",
                  "projectname": "VLPS",
                  "programname": "Loyalty and Marketing",
                  "datecreated": "09/16/2016",
                  "requesttype": "OOM",
                  "status": "Waiting for Analyst Selection"
                },
                {
                  "id": "kashjfhakjdl",
                  "RTN": "820820",
                  "projectname": "Rewards Redemption",
                  "programname": "Loyalty and Marketing",
                  "datecreated": "09/16/2016",
                  "requesttype": "OOM",
                  "status": "Waiting for Analyst Assessment"
                }
              ];

              $scope.teams = [  {"code": "R", "name": "Risk and Authetication"},
                                {"code": "D", "name": "Data Platform"},
                                {"code": "BI","name": "Business Intelligence"},
                                {"code": "C", "name": "Commercial"},
                                {"code": "L", "name": "Loyalty and Marketing"}
              ];

              $scope.programs = [{"code": "ALM", "name": "Account Level Management (ALM)"},
                                {"code": "DPDE", "name": "Data Product Development Efficiencies"},
                                {"code": "FM","name": "Fraud Management"},
                                {"code": "GA", "name": "Global Analytics"},
                                {"code": "NAPP", "name": "North America Prepaid Products"}
              ];


// PENDING PAGE
              $scope.pendingproject = {
                  "id" : "jkasfkha",
                  "RTN": "820820",
                  "projectname": "VLPS",
                  //True and False for ng-if conditions (From flow)
                  //AssignAnalyst: True/False,
                  //AssignPM: True/False,
                  //AnalystAssessment: True/False,
                  //SubmitCA: True/False
                  "dateassigned": "09/10/2016",
                  "datedue": "09/16/2016",
                  "assignedBy": "PM Name", //Should be requester name if waiting PM Assignment - This will come from Login in future {For now say N/A where applicable}
                  "status": "Waiting PM Assignment"
              };

               // For PENDING PAGE MODALS
               //Assign Analyst Form
               $scope.analyst = {
               "id": "",
               "RTN": "820820",
               "projectname": "VLPS"
               };

               //I don not require code, but trying to keep the syntax similar to above
               $scope.analysts =[
                                {"code": "G", "name": "Govind, Raghu"},
                                {"code": "Y","name": "Youming, Ye"},
                                {"code": "S","name": "Priya, Saloni"}
               ];


               //Assign PM Form
               $scope.pm ={
               "id": "",
               "RTN": "820820",
               "projectname": "VLPS"
               };

               $scope.pms =[
                                {"code": "S", "name": "Solomon, Taylor"},
                                {"code": "R", "name": "Ravichandran, Rathi"}
               ];

               //Analayst Assessment
               $scope.assessment ={
               "id": "",
               "RTN": "820820",
               "projectname": "VLPS",
               "task": "jjkhfkhkf" //Field entered by PM in Assign Analyst
               };
               //Have a radio button impact/ No impact field

                //Submit CA
               $scope.submitCA ={
               "id": "",
               "RTN": "820820",
               "projectname": "VLPS",
               "impactType": "No Impact"
               //Need to fetch documents which are to be displayed in front end
               };



//SEARCH PAGE
$scope.searchprojects = [
    {
      "RTN": "820820",
      "projectname": "VLPS",
      "datecreated": "09/16/2016",
      "status": "Waiting for Analyst Selection"
    }
  ];




//Summary PAGE
$scope.summary = {
        "RTN": "820820",
        "projectname": "VLPS",
        "programanme": "Loyalty and Marketing",
        "requestType" : "OOM",
        "requeststatus" : "Pending Analyst approval",
        "artifacts": "",//These will be doc files attached
        "datecreated": "09/16/2016",
        "impact": "",//show status if waiting for analyst assessment,
        "pmassigned": ""//Say NA if pending PM Assignment
    };





// New Request Form
  $scope.submitrequest = function(){

    console.log($scope.currentproject);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.currentproject);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                    $scope.projects.push(response)
                    console.log($scope.projects)
                  });



    $('#modalNewRequest').modal('hide');

  };



// Opening Modal

   $scope.openModal = function(){ //Arguments passes: Modal to open, ID & objType(analyst,pm,assessment,submitCA)

    console.log($scope.objectType);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.objectType);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                  });



    // $().modal('show'); //#modaltoshow

  };



// Assign Analyst +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// On click of Submit in Assign analyst Modal

   $scope.submitassignanalyst = function(){ //ID Passed as argument

    console.log($scope.currentproject);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.currentproject);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                  });



    $('#modalAssignAnalyst').modal('hide');

  };

// Assign Analyst END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Assign PM  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// On click of Submit in Assign PM Modal

   $scope.submitassignpm = function(){//ID Passed as argument

    console.log($scope.currentproject);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.currentproject);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                  });



    $('#modalAssignPM').modal('hide');

  };



// Analyst Assessment ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// On click of Submit in Analyst Assessment Modal

   $scope.submitassessment = function(){//ID Passed as argument

    console.log($scope.currentproject);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.currentproject);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                  });



    $('#AnalystAssessment').modal('hide');

  };

// Assign Assessment END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Analyst Submit CA ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// On click of Submit in Analyst Assessment Modal

   $scope.submitCAModel = function(){//ID Passed as argument

    console.log($scope.currentproject);
    var url = "http://localhost:5000/api/project"
    var payload = JSON.stringify($scope.currentproject);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                  });



    $('#SubmitCA').modal('hide');

  };


  $scope.initProjects = function(){
    var url = "http://localhost:5000/api/project"

    $http.get(url)
         .success(function(response){
                    console.log(response);
                   }
    );


  }

// Analyst Submit CA END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});

