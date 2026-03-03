import 'dotenv/config';
import connectDB from '../lib/mongodb';
import Project from '../models/Project';
import Contact from '../models/Contact';

const projects = [
  {
    title: 'Brain Tumor Detection using Deep Learning',
    description: 'Trained and developed a convolutional neural network model on 7000+ MRI images, achieving 94% accuracy in tumour detection. Implemented using TensorFlow, OpenCV, and various deep learning frameworks.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Deep Learning'],
    imageUrl: '/images/brain-tumor-detection.jpg',
    githubUrl: 'https://github.com/yourusername/brain-tumor-detection',
    liveUrl: 'https://brain-tumor-detection-demo.com',
    featured: true,
    category: 'Machine Learning'
  },
  {
    title: 'Breast Cancer Detection using SVM',
    description: 'Engineered an SVM classifier using Fine Needle Aspiration (FNA) datasets, achieving 93% accuracy and 18% improvement in detection precision. Implemented using Scikit-learn and advanced data preprocessing techniques.',
    technologies: ['Python', 'SVM', 'Scikit-learn', 'Data Preprocessing', 'Machine Learning'],
    imageUrl: '/images/breast-cancer-detection.jpg',
    githubUrl: 'https://github.com/yourusername/breast-cancer-detection',
    liveUrl: 'https://breast-cancer-detection-demo.com',
    featured: true,
    category: 'Data Science'
  },
  {
    title: 'Multi-Cancer Detection using CNN',
    description: 'Developed a comprehensive CNN model trained on 103,000+ medical images for multi-cancer detection, achieving 96% accuracy. Implemented advanced image processing and deep learning techniques.',
    technologies: ['Python', 'CNN', 'Neural Networks', 'TensorFlow', 'Image Processing'],
    imageUrl: '/images/multi-cancer-detection.jpg',
    githubUrl: 'https://github.com/yourusername/multi-cancer-detection',
    liveUrl: 'https://multi-cancer-detection-demo.com',
    featured: true,
    category: 'Machine Learning'
  }
];

const contacts = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'I would like to discuss a potential collaboration on a machine learning project.',
    status: 'pending'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Your portfolio is impressive! I have a project that might interest you.',
    status: 'read'
  }
];

async function seedData() {
  try {
    await connectDB();
    
    // Clear existing data
    await Project.deleteMany({});
    await Contact.deleteMany({});
    
    // Insert new data
    const insertedProjects = await Project.insertMany(projects);
    const insertedContacts = await Contact.insertMany(contacts);
    
    console.log('Successfully seeded database:');
    console.log('- Projects:', insertedProjects.length);
    console.log('- Contacts:', insertedContacts.length);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedData(); 