import { Request, Response } from "express";

class ServicesController{
  public status(req:Request, res:Response) {
    return res.json({
      "service_status": process.env.STATUS
    });
  }

}

export const servicesController = new ServicesController();
