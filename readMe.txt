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
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };

    then you have to initialize firebase and get reference to firestore:
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

5. remember we can use firebase and firestore because we add thoes
scripts at the top, and we can use db reference in app.js.
  to get data: 

  db.collection('cafes').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  });
});

6. saving data to firestore:

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formChildren = form.children;
      db.collection('cafes').add({
        name: formChildren[0].value, 
        city: formChildren[1].value
      }).then(doc => {
        formChildren[0].value = '';
        formChildren[1].value = '';
        console.log(doc);
      })
    });

7. delete data from firestore:

    cross.addEventListener('click', e => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      db.collection('cafes').doc(id).delete().then(() => {
        console.log('documnet has deleted');
      }).catch(error => {
        console.log('there was a error', error);
      });
    });

8. adding condition to get data:

    db.collection('cafes')
      .where('city', '==', 'mario land').get()
        .then(snapshot => {

        });

9. order data when retrieving them:

    db.collection('cafes').where('city', '==', 'mashad')
      .orderBy('name').get()
        .then(snapshot => {

        });

It is possible to require the index, check the console for more 
  information

10. Real time feature of firestore we use onSnapshot:

    db.collection('cafes').orderBy('city').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if(change.type == 'added'){
          renderCafe(change.doc);
        }
        else if(change.type == 'removed') {
          let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
          console.log(li);
          cafeList.removeChild(li);
        }
      });
    });

11. to update data in firestore:

db.collection('cafes').doc(id).update({
  name: 'wario world'
}).then(() => {

});

12. set function completely override the document, for example
  if you don't pass name, the name field will be empty:

    db.collection('cafes').doc(id).update({
      city: 'ghasem shahr'
    }).then(() => {
