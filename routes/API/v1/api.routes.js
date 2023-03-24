const express = require('express');
const Middleware = require('../../../middleware/middleware')
const RoomController = require('../../../controllers/API/room.controller');
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
router.get('/category/:ID',CategoryController.getRoomsByCategory)
router.put('/category/:ID',Middleware.verfyAdmin,CategoryController.update)
router.delete('/category/:ID',Middleware.verfyAdmin,CategoryController.delete)

// Rooms Route 
router.get('/rooms',RoomController.index)
router.post('/room',Middleware.verfyAdmin,RoomController.create)
router.get('/room/:ID',RoomController.getRoomByID)
router.put('/room/:ID',Middleware.verfyAdmin,RoomController.update)
router.delete('/room/:ID',Middleware.verfyAdmin,RoomController.delete)
// User Route 
router.post('/get-token',UserController.getToken)

module.exports= router