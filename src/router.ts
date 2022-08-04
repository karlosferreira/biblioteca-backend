import { Router } from "express";
import { createBook, deleteBook } from "./api/controllers/books/books";

const router: Router = Router()

// Books Controller
router.post("/obras", createBook);
router.delete("/obra/:id", deleteBook);

export { router };
