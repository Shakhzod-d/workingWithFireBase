

export const getInfoFromLC = (obj) => {
    const name = localStorage.getItem(obj.name);
    const email = localStorage.getItem(obj.email);
    const profilePic = localStorage.getItem(obj.profilePic);

    return {name, email, profilePic};
}
