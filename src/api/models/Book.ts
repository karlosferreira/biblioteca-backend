import { createSchema, typedModel } from "ts-mongoose";

export const BookSchema = createSchema({
    title: { type: String, required: true },
    publisher: { type: String, required: true },
    imageCover: String,
    authors: { type: String, required: true }
}, { timestamps: true })

export const Book = typedModel("Book", BookSchema);
