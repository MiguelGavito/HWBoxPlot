import {Request, Response, NextFunction} from "express";
import boxplotController from "../controllers/boxplotController";

const BoxplotController = new boxplotController();

class boxplotHandler {
  async getBoxplot(request: Request, response: Response, next: NextFunction) {
    try {
      const result = await BoxplotController.getBoxplot();
      response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default boxplotHandler;