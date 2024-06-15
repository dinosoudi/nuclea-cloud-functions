const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addHelloWorld = functions.https.onRequest(async (req, res) => {
    const firestore = admin.firestore();
    try {
        await firestore.collection('messages').add({
            message: 'Hello world',
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        });
        res.status(200).send('Document added successfully');
    } catch (error) {
        console.error("Error adding document: ", error);
        res.status(500).send('Error adding document');
    }
});


