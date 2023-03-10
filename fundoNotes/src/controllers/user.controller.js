import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

//Controller to create a new User
export const userRegistration = async (req, res, next) => {
  try {
    const data = await UserService.userRegistration(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data:data,
      message: 'User Registered successfully'
    });
  } catch (error) {
    next(error);
  }
};

//Controller to login
export const login =async(req,res,next) => {
  try
  {
    const data = await UserService.login(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      token:data,
      message: 'Login successfully'
    });
  } catch (error) {
    next(error);
  }
};

