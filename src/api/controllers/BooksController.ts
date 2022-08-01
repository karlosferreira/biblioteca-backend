import { Request, Response } from "express";
import { connect } from "../../utils/mongo";
import { Book } from "../models/Book";

class BooksController {
  public async createBook(req: Request, res: Response) {
    await connect();
    const book = await Book.create(req.body).catch((error) => {
      throw new Error(error);
    });
    return res.json(book.toJSON());
  }
}

export const booksController = new BooksController();
