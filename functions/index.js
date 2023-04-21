// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.createRandomTime = functions.pubsub.schedule('0-59/5 * * * 1-5')
  .timeZone('Europe/Madrid') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
    let max = 30;
    let min = 0;
    admin.database().ref('next_time').set(Math.floor(Math.random() * (max - min) + min)) // Funciona :)
});

exports.sendNotification = functions.database.ref('next_time').onUpdate((snapshot) => {
  const payload = {
    notification: {
      title: "☕ Hora d'esmorzar!!",
      body: "Tens 2 minuts per a ser al bar i fer-hi una foto!!",
    },
    token: 'ExponentPushToken[GwNUdPP-SzakoHOWa_X78w]'
  };

  try {
    admin.messaging().send(payload);
    console.log("Notification successfull!");
  } catch (err) {
    console.error("ERROR: ", err);
  }
})