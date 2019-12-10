const bcrypt = require('bcryptjs');
const db = require('../models');

// Login
const createSession = (req, res) => {
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(500).json ({
            status: 500,
            error: [{ message: 'Something went wrong. Please try again' }]
        })
  
        if (!foundUser) return res.status(400).json({
            status: 400,
            error: [{ message: 'Username or password is incorrect'}],
        })
  
        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json ({
                status: 500,
                error: [{ message: 'Something went wrong. Please try again 2' }]
            })
  
            if (isMatch) {
                req.session.currentUser = foundUser._id
                req.session.currentName = foundUser.name
                req.session.currentUserPhoto = foundUser.photo
                return res.status(201).json({
                    status: 201,
                    data: { id: foundUser._id, name: foundUser.name, slug: foundUser.slug, photo: foundUser.photo},
                });
            } else {
                return res.status(400).json({
                    status: 400,
                    error: [{ message: 'Username or password is incorrect'}],
                });
            };
        });
    });
};

// Log out
const deleteSession = (req, res) => {
    req.session.destroy(err => {
      if (err) return res.status(500).json({
        status: 500,
        errors: [{message: 'Something went wrong. Please try again'}]});

      res.status(200).json({
        status: 200,
        message: 'Success',
      });
    });
}

// Sign Up
const createUser = (req, res) => {
  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
      if (err) return res.status(500).json ({
          status: 500,
          error: [{ message: 'Something went wrong. Please try again test 1' }]
      });

      if (foundUser) {
          return res.status(400).json({
              status: 400,
              error: [ { message: 'Invalid request. Please try again' }]
          });
      };

      bcrypt.genSalt(10, (err, salt) => {
          if (err) return res.status(500).json ({
              status: 500,
              error: [{ message: 'Something went wrong. Please try again test 2' }]
          });

          bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (err) return res.status(500).json ({
                  status: 500,
                  error: [{ message: 'Something went wrong. Please try again test 3' }]
              });

              const newUser = { ...req.body, password: hash }

              db.User.create(newUser, (err, createUser) => {
                if (err) return res.status(500).json ({
                    status: 500,
                    error: [{ message: 'Something went wrong. Please try again test 4' }]
                });
                
                res.status(201).json({
                    status: 201,
                    data: { id: createUser._id}
                });
              });
          });
      });
  });
};

module.exports = {
  createUser,
  deleteSession,
  createSession,
};