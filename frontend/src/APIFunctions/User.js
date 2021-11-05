import axios from 'axios'

// GET
export async function getUsers() {
  let data;
  await axios
    .get('/user/getUsers')
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
    );
  return data;
}

export async function findUserByToken(token) {
  let data;
  const userToken = {
    token: token
  };
  await axios
    .post('/user/findUserByToken', userToken)
    .then(res => {
      data = res.data;
    })
    .catch(err => {
      return err;
    }
    );
  return data;
}

// ADD
export async function addUser(user) {
  let data;
  const userToAdd = {
    // Whatever attributes you need to pass in, example below
    // attr1: user.attr1
  };
  await axios
    .post('/user/addUser', userToAdd)
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
    );
  return data;
}

// EDIT
export async function editUser(user) {
  let data;
  const userToEdit = {
    username: user.username,
    token: user.token
  };
  await axios
    .post('/user/editUser', userToEdit)
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
    );
  return data;
}

export async function logoutUser(user) {
  let data;
  const userToEdit = {
    username: user.username,
  };
  await axios
    .post('/user/logout', userToEdit)
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
    );
  return data;
}

// DELETE
export async function deleteUser(user) {
  let data;
  const userToDelete = {
    // Whatever attributes you need to pass in
    // Only need the _id to find and delete the blogPost
    _id: user._id
  };
  await axios
    .post('/user/deleteUser', userToDelete)
    .then(res => {
      //console.log(res data received: ', res.data
      data = res.data;
    })
    .catch(err => {
      return err;
    }
    );
  return data;
}
