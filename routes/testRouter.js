import { Router } from "express";

import { testGet } from "../controllers/testController";

const testRouter = Router();

testRouter.get("/sign-up", testGet);

export default testRouter;