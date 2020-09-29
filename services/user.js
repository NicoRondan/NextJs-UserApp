import axios from 'axios';



function deleteUserById(uid) {
    return axios.delete(`http://localhost:3000/api/user/${uid}`)
}

function updateUserById(uid, user) {
    return axios.put(`http://localhost:3000/api/user/${uid}`, user)
}

function getUserById(uid) {
    return axios.get(`http://localhost:3000/api/user/${uid}`);
}

function addUser(user) {
    return axios.post("http://localhost:3000/api/user/user", user);
}

function getUsers() {
    return axios.get("http://localhost:3000/api/users");
}

export { deleteUserById, updateUserById, getUserById, addUser, getUsers }