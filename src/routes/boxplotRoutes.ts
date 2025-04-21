import { Router } from "express";
import boxplotHandler from "../handlers/boxplotHandler";

const router = Router();
const handler = new boxplotHandler();


router.get("/boxplot", handler.getBoxplot.bind(handler));

export default router;