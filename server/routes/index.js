import express from "express";
let appRoutes = express.Router();

import userRoutes from "./user";

appRoutes.use("/user", userRoutes);

export default appRoutes;
