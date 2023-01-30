import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { noteValidator } from '../validators/note.validator';

const router = express.Router();

//route to get all notes
router.get('', noteController.getAllNotes);

//route to create a new note
router.post('/create',noteValidator,userAuth,noteController.createNote);

//route to update a note by its id
router.put('/:_id', userAuth, noteController.updateNote);

//routes to get a note by id
router.get('/:_id', userAuth, noteController.getById)

//route to delete a single user by their user id
router.delete('/:_id', userAuth, noteController.deleteNote);

export default router;