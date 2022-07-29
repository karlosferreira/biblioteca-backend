import { Router } from "express";
import { obrasController } from "../app/controllers/ObrasController";

const routes: Router = Router()

routes.post("/obras", obrasController.createObra);

routes.get("/obras/:id", obrasController.getObra);

routes.get("/obras/", obrasController.getAllObras);

routes.put("/", obrasController.updateObra);

routes.delete("/", obrasController.deleteObra);

export { routes };
