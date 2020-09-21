import Firebase from '../../firebase/config';

const Login = async (email, password) => {
  try {
    return await Firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
};

export default Login;
