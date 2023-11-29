const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

// Route to get all Users
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to create a new User
router.post('/', async (req, res) => {
  const { name, age } = req.body;

  try {
    // Validate that age is an integer
    if (!Number.isInteger(age)) {
      return res.status(400).json({ message: 'Age must be an integer' });
    }

    const newUser = new UserModel({ name, age });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get a specific User by ID
router.get('/:id', async (req, res) => {
  const userID = req.params.id;

  try {
    const user = await UserModel.findById(userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to update a specific User by ID
router.put('/:id', async (req, res) => {
  const userID = req.params.id;
  const { name, age } = req.body;

  try {
    // Validate that age is an integer
    if (age && !Number.isInteger(age)) {
      return res.status(400).json({ message: 'Age must be an integer' });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userID,
      { name, age },
      { new: true } // Return the modified document rather than the original
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to delete a specific User by ID
router.delete('/:id', async (req, res) => {
  const userID = req.params.id;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(userID);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
