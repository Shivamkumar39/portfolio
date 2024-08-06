import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  description: String,
  gitRepoLink: String,
  projectLink: String,
  technologies: String,
  image:{
    
  }
});

export const Project = mongoose.model("Project", projectSchema);
