import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this project.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this project.'],
  },
  technologies: {
    type: [String],
    required: [true, 'Please provide technologies used in this project.'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL for this project.'],
  },
  githubUrl: {
    type: String,
    required: [true, 'Please provide a GitHub URL for this project.'],
  },
  liveUrl: {
    type: String,
    required: [true, 'Please provide a live URL for this project.'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for this project.'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema); 