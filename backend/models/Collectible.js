const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectibleSchema = new Schema(
  {
    // collectible_id: {
    //   unique: true,
    //   type: String
    // },
    // owner_id: {
    //   unique: true,
    //   type: String
    // },
    name: {
      // unique: true,
      type: String
    },
    // collectible_type: {
    //   type: String
    // },
    price: {
      // type: Number
      type: String
    },
    description: {
      type: String
    },
    selectedFile: {
      type: String
    },
    list_date: {
      type: String,
      default: Date.now()
    },
    // blockchain_info: {
    //   contract_addr: {
    //     unique: true,
    //     type: String
    //   },
    //   token_id: {
    //     unique: true,
    //     type: String
    //   }
    // },
    // total_inventory: {
    //   type: Number
    // }
  },
  { collection: 'Collectible' }
);

module.exports = mongoose.model('Collectible', CollectibleSchema);
