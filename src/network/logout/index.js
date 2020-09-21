import Firebase from '../../firebase/config';

const Logout = async () => {
  try {
    return await Firebase.auth().signOut();
  } catch (error) {
    return error;
  }
};

export default Logout;
