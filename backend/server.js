




import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
//import { Content } from './schema/schema.js';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { body, validationResult } from 'express-validator'
import User from './schema/User.js'
import Content from './schema/schema.js'
import multer from 'multer';
import path from 'path'
import fs from 'fs'
import { Route } from 'react-router-dom';
//const fetchUser = require('./middleweare');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the uploads folder
app.use('/uploads', express.static('uploads'));








// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // File renaming logic
  },
});


// File filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter, dest: 'uploads/' });


// Endpoint to upload an image
app.post('/uploads', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Please upload an image' });
  }
  res.json({ img: `http://localhost:3000/uploads/${req.file.filename}` });
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
