let admin

if (process.server) {
  admin = require('firebase-admin')
  if (!admin.apps.length) {
    const serviceAccount = require('/utils/hoge/serviceAccountKey.json')
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://good-bad-1f1f3.firebaseio.com'
    })
  }
}

export default admin