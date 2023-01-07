const Firestore = require('firebase-admin/firestore');

let app = null;
let db = null;

exports.initialFirebaseApp = async (config) => {
  const { initializeApp } = require('firebase/app');
  const { getFirestore } = require('firebase-admin/firestore');

  app = initializeApp(config);
  db = getFirestore(app);
}

exports.getAllData = async () => {
  if(!db) return;

  const { query, addDoc, collection, where, getDocs } =
  await import('firebase-admin/firestore');

  console.log('--->', db)
  const q = await query(
    collection(db, 'tvcEvent'),
    where('phoneNumber', '==', '01055208319')
  );

  const querySnapshot = await getDocs(q);

  const datas = [];
  querySnapshot.forEach((qs) => datas.push(qs.data()));

  return datas;

}
