
//ADD YOUR FIREBASE LINKS
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIea64AYxiTqBgz1pNHb-rQBtZ6riWvpU",
  authDomain: "tic-tac-toe-7bb5c.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-7bb5c.firebaseio.com",
  projectId: "tic-tac-toe-7bb5c",
  storageBucket: "tic-tac-toe-7bb5c.appspot.com",
  messagingSenderId: "316086681850",
  appId: "1:316086681850:web:ff3eaa164bc04b71728943",
  measurementId: "G-FQSV5LZ7KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
