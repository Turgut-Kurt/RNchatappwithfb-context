import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAaYEY_HMFgJWXbOFh1ZlKtjdB_bMABlnc',
  databaseURL: 'https://fir-chatapp-660a6.firebaseio.com/',
  projectId: 'fir-chatapp-660a6',
  appId: '1:574880392916:android:f84d9527592610dbc73d41',
};

export default Firebase.initializeApp(firebaseConfig);
