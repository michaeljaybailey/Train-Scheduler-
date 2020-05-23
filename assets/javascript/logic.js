$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyAdyu6pLlB_Vz2RxRaxauaB6kyxRgkOddU",
        authDomain: "train-scheduler-d727a.firebaseapp.com",
        databaseURL: "https://train-scheduler-d727a.firebaseio.com",
        projectId: "train-scheduler-d727a",
        storageBucket: "train-scheduler-d727a.appspot.com",
        messagingSenderId: "1031356229404",
        appId: "1:1031356229404:web:3a34b74fc0a41ff97fbcd9",
        measurementId: "G-NBQ4MBRYWE"
      };
      firebase.initializeApp(config);

      var database = firebase.database();

      $("#add-train").on("click", function (event){
          event.preventDefault();

          var trainname = $("#train-name").val().trim();
          var destinationname = $("#destination-name").val().trim();
          var firsttrain = $("#first-train").val().trim();
          var frequencyinput = $("#frequency-input").val().trim();

          database.ref().push({
              trainname: trainname,
              destinationname: destinationname,
              firsttrain: firsttrain,
              frequencyinput: frequencyinput
          });
      
        });

    database.ref().on("child_added", function(childSnapshot){

        var newTrain = childSnapshot.val().trainname;
        var newDestination = childSnapshot.val().destinationname;
        var newFirstTrain = childSnapshot.val().firsttrain;
        var newFrequency = childSnapshot.val().frequencyinput;
    })


})