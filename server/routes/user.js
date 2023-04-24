import express from "express";
import controller from "../controller";
let userRoutes = express.Router();

userRoutes.get("/", controller.userController.getAll).get("/:ID", controller.userController.getByID).post("/", controller.userController.create).put("/", controller.userController.update).delete("/:ID", controller.userController._delete);

export default userRoutes;
