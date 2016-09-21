'use strict"'

var app = angular.module('App', []);

app.controller('AppController', function($scope, $http){


              $scope.projects = [];

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

              $scope.analysts =[
                                // {"code": "G", "name": "Govind, Raghu"},
                                // {"code": "Y","name": "Youming, Ye"},
                                // {"code": "S","name": "Priya, Saloni"}
               ];

               $scope.pms =[
                                // {"code": "S", "name": "Solomon, Taylor"},
                                // {"code": "R", "name": "Ravichandran, Rathi"}
               ];


              $scope.pendingprojects = [
                {"id" : "jkasfkha",
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
              }];

               // For PENDING PAGE MODALS
               //Assign Analyst Form
               $scope.analyst = {
               "id": "",
               "RTN": "820820",
               "projectname": "VLPS"
               };

               //I don not require code, but trying to keep the syntax similar to above


               //Assign PM Form
               $scope.pm ={
               "id": "",
               "RTN": "820820",
               "projectname": "VLPS"
               };


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
    // {
    //   "RTN": "820820",
    //   "projectname": "VLPS",
    //   "datecreated": "09/16/2016",
    //   "status": "Waiting for Analyst Selection"
    // }
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

  $scope.findByRTN = function(RTN){

    var RTNreq = {"RTN": RTN};
    var url = "http://localhost:5000/api/findbyRTN";
    var payload = JSON.stringify(RTNreq);

    $http.post(url, payload)
         .success(function(response){
                    console.log(response);
                    for(var flow in response){
                        $scope.searchprojects.push(JSON.parse(response[flow]));
                    }
                    console.log($scope.searchprojects)
                  });

  };



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


  $scope.initProjects = function(){
    var url = "http://localhost:5000/api/project";

    $http.get(url)
         .success(function(response){
                console.log(response)
                for(var workflow in response){
                    $scope.projects.push(JSON.parse(response[workflow]));
                }
           console.log($scope.projects);
                }
    );
  }

  $scope.initAnalysts = function(){
    var url = "http://localhost:5000/api/getanalysts";

    $http.get(url)
         .success(function(response){
                console.log(response)
                for(var analyst in response){
                    $scope.analysts.push(JSON.parse(response[analyst]));
                }
           console.log($scope.analysts);
                }
    );
  }

  $scope.initPMs = function(){
    var url = "http://localhost:5000/api/getpms";

    $http.get(url)
         .success(function(response){
                console.log(response)
                for(var pm in response){
                    $scope.pms.push(JSON.parse(response[pm]));
                }
           console.log($scope.pms);
                }
    );
  }

  $scope.init = function(){
    $scope.initProjects();
    $scope.initAnalysts();
    $scope.initPMs();
  };

  $scope.init()

});

