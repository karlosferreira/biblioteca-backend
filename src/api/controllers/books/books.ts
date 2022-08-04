import { Request, Response } from "express";
import { connect } from "../../../services/mongo";
import { Book } from "../../models/Book";

export const createBook = async ( req: Request, res: Response ): Promise<Response> => {
  await connect();

  const book = await Book.create(req.body).catch((error) => {
    throw new Error(error);
  });

  return res.status(200).json(book.toJSON());
};

export const deleteBook = async ( req: Request, res: Response ): Promise<Response> => {
  await connect();

  const book = await Book.findOneAndDelete({
    _id: req.params.id,
  }).catch((error) => {
    throw new Error(error);
  });

  if (!book) {
    return res.json({
      Error: `The book ${req.params.id} not found or previous deleted`,
    });
  }

  return res.status(200).json({ ...req.params, deleted: true });
};
