const express = require('express');
const User = require('../models/User');

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).setHeader("Content-type", "application/json").json(user);
      } catch (err) {
        res.status(404).send(`Can't get user data, ${err.message}`);
        next(err);
    }
}

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user);
    } catch (err) {
        console.log('Error creating user');
        next(err);
    }
}

const updateOneUser = async (req, res, next) => {
    try {
      const userUpdate = await User.findByIdAndUpdate(
        req.params.userId,
        { $set: req.body },
        { new: true, runValidators: true }
      );
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(oneUpdate);
    } catch (err) {
      res.status(404).send(`Can't update user data, ${err.message}`);
      next(err);
    }
  };
  
  const deleteOneUser = async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200).setHeader("Content-Type", "application/json").json();
    } catch {
      res.status(404).send(`Can't delete user data, ${err.message}`);
      next(err);
    }
  };
  
  module.exports = {
    getUser,
    createUser,
    updateOneUser,
    deleteOneUser
  }