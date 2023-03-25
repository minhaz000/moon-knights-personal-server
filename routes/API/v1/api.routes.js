const express = require('express');
const Middleware = require('../../../middleware/middleware')
const FlightController = require('../../../controllers/API/flight.controller');
const CategoryController = require('../../../controllers/API/category.controller');
const UserController = require('../../../controllers/API/user.controller');
const router = express.Router();

/**
 * @api {get} ['/'] /Get test response
 * @apiDescription Get test response
 * @apiPermission all users 
 *
 * @apiHeader {None} Authorization   User's access token
 *
 * @apiParam  {None{1-}}         ['none']     List page
 *
 * @apiSuccess {Object[]} get a string as response .
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 */
router.get('/categories',CategoryController.index)
router.post('/category',Middleware.verfyAdmin,CategoryController.create)
router.get('/category/:ID',CategoryController.getFlightsByCategory)
router.put('/category/:ID',Middleware.verfyAdmin,CategoryController.update)
router.delete('/category/:ID',Middleware.verfyAdmin,CategoryController.delete)

// Rooms Route 
router.get('/flights',FlightController.index)
router.post('/room',Middleware.verfyAdmin,FlightController.create)
router.get('/room/:ID',FlightController.getRoomByID)
router.put('/room/:ID',Middleware.verfyAdmin,FlightController.update)
router.delete('/room/:ID',Middleware.verfyAdmin,FlightController.delete)

// Booking Route 
router.get('/bookings',FlightController.index)
router.post('/booking',FlightController.create)
router.post('/booking/:ID',FlightController.delete)
// User Route 
router.post('/get-token',UserController.getToken)
router.get('/all-users',UserController.getUsers)

module.exports= router