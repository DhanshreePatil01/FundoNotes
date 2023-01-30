import Note from '../models/note.model';
import jwt from 'jsonwebtoken';

//get all notes
export const getAllNotes= async () => {
    const data = await Note.find();
    return data;
  };

//create new note
export const createNote = async (body) => {
    const data = await Note.create(body);
    return data;
  };

//update single note by id 
export const updateNote = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

//get single Note  
export const getById = async (_id) => {
    const data = await Note.findById(_id);
    return data;
  };

//delete single note
export const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id);
  return '';
};  