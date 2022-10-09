var firebaseConfig = {
    apiKey: "AIzaSyAEKcaW4LOv_RLt7e7By8WJRwwtBfMLpZI",
    authDomain: "gaming-app-51bb7.firebaseapp.com",
    databaseURL: "https://gaming-app-51bb7-default-rtdb.firebaseio.com",
    projectId: "gaming-app-51bb7",
    storageBucket: "gaming-app-51bb7.appspot.com",
    messagingSenderId: "620037281091",
    appId: "1:620037281091:web:ba3080dd80964ebe564bf6"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   function addRoom(){
    room_name = document.getElementById("room_input").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name" , room_name);
    window.location = "gaming_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
          console.log("display room name " + Room_names);
          row = "<div class = 'room_name' id = " + Room_names +"onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location =  "gaming_page.html";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "gaming.html";
  }