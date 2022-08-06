import { connect, disconnect } from "../../../services/mongo";
import { Book } from "../../models/Book";
import { IBody, IResponse } from "../../../utils/interface";
import { BookInterface, DeletedBook } from "../../controllers/books/books.interface";


export const createBook = async (
  req: IBody<BookInterface>,
  res: IResponse<BookInterface>
) => {

  await connect();

  const book = await Book.create(req.body).catch((error) => {
    throw new Error(error);
  });

  await disconnect();

  return res.status(200).json(book);

};

// export const getAllBooks = async (res: Express.Response) => {

//   await connect();

//   const books: Array<IAllBooks> = await Book.find({}).catch((error) => {
//     throw new Error(error);
//   });

//   return res.status(200).json(books);
// };

// export const updateBook = async (
//   req: IBody<BookInterface>,
//   res: IResponse<BookInterface>
// ) => {

//   await connect();

//   const book = await Book.findOneAndUpdate({_id: req.params._id}, {
//     title: req.body.title,
//     publisher: req.body.publisher,
//     authors: req.body.authors,
//     imageCover: req.body.imageCover
//   },{ overwrite: true }).catch((error) => {
//     throw new Error(error);
//   });

//   return res.status(200).json(book);
// };

export const deleteBook = async (
  req: IBody<{ _id: String }>, 
  res: IResponse<DeletedBook>
) => {
  
  const _id = req.params.id;

  await connect();

  const book = await Book.findOneAndDelete({
    _id,
  }).catch((error) => {
    throw new Error(error);
  });

  await disconnect();

  if (!book) {
    return res.status(404).json({
      deleted: false,
      error: `The book ${_id} not found or previous deleted`,
    });
  }

  return res.status(200).json({ ...req.params, deleted: true });
};
