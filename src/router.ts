import { Router } from "express";
import { servicesController } from "./api/controllers/ServicesController";
import { booksController } from "./api/controllers/BooksController";

const router: Router = Router()

// Service Controller
router.get("/", servicesController.status);

// Books Controller
router.post("/obras", booksController.createBook);
router.delete("/obra/:id", booksController.deleteBook);

export { router };
