import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

//Controller to get all notes
export const getAllNotes = async (req, res, next) => {
    try {
      const data = await NoteService.getAllNotes();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

//Controller to create a new note  
export const createNote = async (req, res, next) => {
    try {
      const data = await NoteService.createNote(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data:data,
        message: 'Note Created successfully'
      });
    } catch (error) {
      next(error);
    }
  };

//Controller to update a note  
export const updateNote = async (req, res, next) => {
    try {
        const data = await NoteService.updateNote(req.params._id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Note updated successfully'
        });
    } catch (error) {
        next(error);
    }
};

//Controller to get a note by id
export const getById = async (req, res, next) => {
  try {
      const data = await NoteService.getById(req.params._id);
      res.status(HttpStatus.ACCEPTED).json({
          code: HttpStatus.ACCEPTED,
          data: data,
          message: 'Note fetched successfully'
      });
  } catch (error) {
      next(error);
  }
};

//Controller to delete a note
export const deleteNote = async (req, res, next) => {
  try {
    await NoteService.deleteNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Note deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};