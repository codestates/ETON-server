const { boards } = require('../../models');

const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports = {
  getAllBoard : async (req,res) => {
    console.log("hihi GET ALL BOARD!");
  },

  createNewBoard : async (req,res) => {

  }
}
