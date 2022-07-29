import { Router } from "express";
import { obrasController } from "../app/controllers/ObrasController";

const routes: Router = Router()

routes.get("/", obrasController.home);

routes.post("/obras/", obrasController.createObra);

routes.get("/obra/:id", obrasController.getObra);

routes.get("/obras/", obrasController.getAllObras);

routes.put("/obra/", obrasController.updateObra);

routes.delete("/obra/:id", obrasController.deleteObra);

export { routes };
