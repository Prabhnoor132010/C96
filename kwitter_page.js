var firebaseConfig = {
      apiKey: "AIzaSyDbXpGPWk7XLurmvLE8T7WCeIk_144foMs",
      authDomain: "kwitter-322f4.firebaseapp.com",
      databaseURL:"https://kwitter-322f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-322f4",
      storageBucket: "kwitter-322f4.appspot.com",
      messagingSenderId: "238277127172",
      appId: "1:238277127172:web:615f3d6d915bfda7f95951"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");

 function send() {
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
     document.getElementById("msg").value="  ";
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
