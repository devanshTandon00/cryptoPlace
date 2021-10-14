import axios from 'axios'

// GET
export async function getCollectibles() {
  let data;
  await axios
    .get('/api/getCollectibles')
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

// ADD
export async function addCollectible(collectible) {
  let data;
  const collectibleToAdd = {
    // Whatever attributes you need to pass in, example below
    name: collectible.name,
    description: collectible.description,
    price: collectible.price,
    list_date: collectible.list_date
  };
  await axios
    .post('/api/addCollectible', collectibleToAdd)
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
export async function editCollectible(collectible) {
  let data;
  const collectibleToEdit = {
    // Whatever attributes you need to pass in, example below
    // attr1: collectible.attr1
    // Will need at least the _id to find and edit the blogPost
    _id: collectible._id,
    name: collectible.name,
    description: collectible.description,
    price: collectible.price,
    list_date: collectible.list_date
  };
  await axios
    .post('/api/editCollectible', collectibleToEdit)
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
export async function deleteCollectible(collectible) {
  let data;
  const collectibleToDelete = {
    // Whatever attributes you need to pass in
    // Only need the _id to find and delete the blogPost
    _id: collectible._id
  };
  await axios
    .post('/api/deleteCollectible', collectibleToDelete)
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
