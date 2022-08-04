import { Schema, model } from "mongoose"
import { BookInterface } from "../controllers/books/books.interface"

const book = new Schema<BookInterface>({
    title: { type: String, required: true },
    publisher: { type: String, required: true },
    authors: { type: String, required: true },
    imageCover: { String }
}, { timestamps: true });

export const Book = model<BookInterface>('Book', book);
