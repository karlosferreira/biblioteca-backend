import { Router } from "express";
import { createBook, deleteBook } from "./api/controllers/books/books";

const router: Router = Router()

// Books Controller
router.post("/obras", createBook);
// router.get("/obras", getAllBooks);
// router.put("/obra/:id", updateBook);
router.delete("/obra/:id", deleteBook);

export { router };
