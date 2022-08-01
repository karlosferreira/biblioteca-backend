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

  public async deleteBook(req: Request, res: Response) {
    
    await connect();

    const book = await Book.findOneAndDelete({
      _id: req.params.id
    }).catch((error) => {
      throw new Error(error);
    });

    if (!book) {
      return res.json({"Error":`The book ${req.params.id} not found or previous deleted`})
    }

    return res.json({...req.params, "deleted": true});

  }

}

export const booksController = new BooksController();
