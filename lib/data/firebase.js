const firebase = require('firebase/app')
require('firebase/firestore')
require('firebase/auth')
// require('firebase/analytics')

// const isClientSide = require('../isClientSide')

const firebaseConfig = {
  apiKey: 'AIzaSyA3cLPwUpoiHrep9-aunr6lPMb1Wsrl5K0',
  authDomain: 'onradar-butterops.firebaseapp.com',
  databaseURL: 'https://tom-development-boilerplate.firebaseio.com',
  projectId: 'onradar-butterops',
  storageBucket: 'onradar-butterops.appspot.com',
  messagingSenderId: '477468812652',
  appId: '1:477468812652:web:ef9e72a1be29c0decdff49',
  measurementId: "G-36ZBDD1MB2"
}

// Initialize Firebase
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const firebaseDB = firebaseApp.firestore()
// if (isClientSide()) firebase.analytics()

// Helpers
const docWithId = (doc) => ({ id: doc.id, ...doc.data() })

const getDocumentItem = async (docRef) => docWithId(await docRef.get())

const getCollectionItems = async (collectionRef) => {
  const collectionSnapshots = await collectionRef.get()
  const snapshots = []
  collectionSnapshots.forEach((snapshot) => {
    snapshots.push(docWithId(snapshot))
  })
  return snapshots
}

module.exports = {
  firebase,
  firebaseApp,
  firebaseDB,

  docWithId,
  getDocumentItem,
  getCollectionItems
}
