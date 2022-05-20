import { Router } from "express";

import { testGet } from "../controllers/testController.js";

const testRouter = Router();

testRouter.get("/", testGet);

export default testRouter;