import Firebase from '../../firebase/config';

const addUser = async (uid, name, email, profileImg) => {
  try {
    return await Firebase.database()
      .ref('users/' + uid)
      .set({
        name: name,
        email: email,
        profileImg: profileImg,
      });
  } catch (error) {
    return error;
  }
};

export default addUser;
