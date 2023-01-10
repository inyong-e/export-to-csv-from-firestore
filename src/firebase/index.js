let app = null;



exports.initialFirebaseApp = async (config) => {
  const admin = require('firebase-admin');

  app = admin.initializeApp({
    credential: admin.credential.cert(config)
  });  
  
}

exports.getAllData = async (collectionName) => {

  const data = await app.firestore().collection(collectionName).get();
  const result = data.docs.map((doc) => doc.data());
  return result;
}
