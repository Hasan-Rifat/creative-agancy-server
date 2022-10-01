const express = require("express");
const serviceController = require("../../controllers/services.controller");
const router = express.Router();
// url => https://creative-agancy-server.vercel.app/api/v1/services
// url => https://creative-agancy-server.vercel.app/api/v1/services/id
router
  .route("/")
  /**
   * @api {get} / services save a service
   * @apiDescription Get All the services
   * @apiPermission admin && users
   *
   * @apiError (Unauthorized 401) Unauthorized only authenticated users can access the data
   * @apiError(Forbidden 403) Forbidden only admin can access the data
   **/

  .get(serviceController.getAllService)
  /**
   * @api {post} / create a service
   * @apiDescription Get All the services
   * @apiPermission admin && users
   *
   *@apiSuccess{Object[]} create single servic
   *
   * @apiError (Unauthorized 401) Unauthorized only authenticated users can access the data
   * @apiError(Forbidden 403) Forbidden only admin can access the data
   **/
  .post(serviceController.postService);

router
  .route("/:id")
  /**
   * @api {get} / get a service
   * @apiDescription Get single service
   * @apiPermission admin && users
   *
   *@apiSuccess{Object[]} single service
   *
   * @apiError (Unauthorized 401) Unauthorized only authenticated users can access the data
   * @apiError(Forbidden 403) Forbidden only admin can access the data
   **/
  .get(serviceController.getSingleService)
  /**
   * @api {put} / update a service
   * @apiDescription Get single service
   * @apiPermission admin && users
   *
   *@apiSuccess{Object[]} update a single service
   *
   * @apiError (Unauthorized 401) Unauthorized only authenticated users can access the data
   * @apiError(Forbidden 403) Forbidden only admin can access the data
   **/
  .put(serviceController.putService)
  /**
   * @api {delete} / delete a service
   * @apiDescription Get single service
   * @apiPermission admin && users
   *
   *@apiSuccess{Object[]} delete a service
   *
   * @apiError (Unauthorized 401) Unauthorized only authenticated users can access the data
   * @apiError(Forbidden 403) Forbidden only admin can access the data
   **/
  .delete(serviceController.deletedService);

module.exports = router;
