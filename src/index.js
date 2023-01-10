const firebaseInstance = require('./firebase');
var config = require("./serviceAccount.json");
const { convertCSV } = require('./convertingCSV');

const run = async (collectionName) => {
  await firebaseInstance.initialFirebaseApp(config);
  const fireStoreData = await firebaseInstance.getAllData(collectionName);

  convertCSV(fireStoreData)
}

run();