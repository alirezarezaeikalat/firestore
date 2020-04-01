import db from './firestore.js';

const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

function renderCafe(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('div');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = 'x';

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);
  cafeList.appendChild(li);

  // deleting data
  cross.addEventListener('click', e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('cafes').doc(id).delete().then(() => {
      console.log('documnet has deleted');
    }).catch(error => {
      console.log('there was a error', error);
    });
  })
}

//  Getting data
// db.collection('cafes').orderBy('name').get().then(snapshot => {
//   snapshot.docs.forEach(doc => {
//     renderCafe(doc);
//   });
// });


// Saving data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formChildren = form.children;
  db.collection('cafes').add({
    name: formChildren[0].value, 
    city: formChildren[1].value
  }).then(doc => {
    formChildren[0].value = '';
    formChildren[1].value = '';
  })
});

// Real time listener

db.collection('cafes').orderBy('city').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    console.log(change);
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