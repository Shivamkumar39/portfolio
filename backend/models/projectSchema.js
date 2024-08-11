import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  description:{
    type:String,
  },
  gitRepoLink:{
    type:String,
  },
  projectLink:{
    type:String,
  },
  technologies: String,
  image:{
    
  }
});

export const Project = mongoose.model("Project", projectSchema);
