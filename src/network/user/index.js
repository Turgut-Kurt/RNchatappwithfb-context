import Firebase from '../../firebase/config';

const addUser = async (name, email, uid, profileImg) => {
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
