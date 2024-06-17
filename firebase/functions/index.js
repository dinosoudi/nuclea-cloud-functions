const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const firestore = admin.firestore();

// Función existente que hace Hola Mundo
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello World");
});

// Nueva función para crear un documento en Firestore
exports.createHelloWorldDocument = functions.https.onRequest(async (request, response) => {
  try {
    const docRef = await firestore.collection('messages').add({
      message: 'Hello World'
    });
    response.send(`Document created with ID: ${docRef.id}`);
  } catch (error) {
    console.error('Error creating document:', error);
    response.status(500).send('Error creating document: ' + error.message);
  }
});

