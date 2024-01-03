const Tutor = require('../models/tutor');

async function getAllTutors() {
  try {
    const tutors = await Tutor.find();
    return tutors;
  } catch (error) {
    console.error('Error fetching tutors:', error);
    throw error;
  }
}
async function getTutorByName(name) {
  try {
    const tutor = await Tutor.findOne({ name: name });
    console.log(tutor);
    return tutor;
  } catch (error) {
    console.error('Error fetching tutor:', error);
    throw error;
  }
}
module.exports = {
  getAllTutors,
  getTutorByName,
};
