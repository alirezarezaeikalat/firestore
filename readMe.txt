1. First you have to build firebase porject

2. then you have to go to database section and make database,
  you can choose security rules

3. after making database you can make collections, and add documents
  to that collections

4. Then you have to add firebase to your projects, you have to go
 to porject overview and there is option to add to firebase to
 your web project, and copy it and paste it in html,

 [ATTENTION]
 this script tags are for development, and you can change them:

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>
    <!-- TODO: Add SDKs for Firebase products that you want to use-->
    <script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-firestore.js"></script>

    and add this in the end of body tag:
    var firebaseConfig = {
      apiKey: "AIzaSyBU7le-FS6MCNHjESIC7i_tRL3SFLcci94",
      authDomain: "firestore-tut-3e32e.firebaseapp.com",
      databaseURL: "https://firestore-tut-3e32e.firebaseio.com",
      projectId: "firestore-tut-3e32e",
      storageBucket: "firestore-tut-3e32e.appspot.com",
      messagingSenderId: "429541855882",
      appId: "1:429541855882:web:0706fde1bafbc39af2d373"
    };