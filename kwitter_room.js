var firebaseConfig = {
      apiKey: "AIzaSyC6gEVCy4oQAAahl-0F-GpT7aMQ7DwMIyo",
      authDomain: "kwitter-5de41.firebaseapp.com",
      databaseURL: "https://kwitter-5de41-default-rtdb.firebaseio.com",
      projectId: "kwitter-5de41",
      storageBucket: "kwitter-5de41.appspot.com",
      messagingSenderId: "400806321414",
      appId: "1:400806321414:web:738f1533862cecad065287"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
