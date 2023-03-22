export const getInfoFromLC = (obj) => {
  const {
    name: _name = "",
    email: _email = "",
    profilePic: _profilePic = "",
  } = obj;

  const name = localStorage.getItem(_name);
  const email = localStorage.getItem(_email);
  const profilePic = localStorage.getItem(_profilePic);

  return { name, email, profilePic };
};
