import mongoose, { Types } from "mongoose";

const skillSchema = new mongoose.Schema({
  Skill_Name:{
    type: String,
    require: true,
  },
  Skill_Description:{
    type: String,
  }

});

export const Skill = mongoose.model("Skill", skillSchema);
