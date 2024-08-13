import express from "express";
const router=express.Router();
import { create, loginUser } from "../Controller/userController.js";
import { fetch,update } from "../Controller/userController.js";

router.post("/create",create);
router.get("/fetch",fetch);
router.put("/update/:id",update);
router.post('/login', loginUser);

export default router;