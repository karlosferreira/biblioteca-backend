import { Router } from "express";
import { servicesController } from "./api/controllers/ServicesController";
import { booksController } from "./api/controllers/BooksController";

const router: Router = Router()

// Service Controller
router.get("/", servicesController.status);

// Books Controller
router.get("/obras", booksController.createBook);
router.get("/obras/", booksController.getAllBooks);
router.get("/obras/:id", booksController.getBook);
router.get("/obras/:id", booksController.updateBook);
router.get("/obras/:id", booksController.deleteBook);

export { router };
