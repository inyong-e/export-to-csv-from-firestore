const firebaseInstance = require('./firebase');
const config = require('./firebase/config');

const run = async () => {
  await firebaseInstance.initialFirebaseApp(config);

  const datas = await firebaseInstance.getAllData();

  console.log('result:', datas);
}

run();