// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.scheduleTest = functions.pubsub.schedule('40 9 * * 1-5')
  .timeZone('Europe/Madrid') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
    let max = 30;
    let min = 0;
    admin.database().ref('next_time').set(Math.random() * (max - min) + min) // Funciona :)
});