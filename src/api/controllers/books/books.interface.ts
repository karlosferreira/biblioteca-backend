export interface BookInterface {
    title: String,
    publisher: String,
    authors: String,
    imageCover?: String
}

export type IAllBooks = Omit<BookInterface, "__v" | "_id" | "createdAt" | "updatedAt">;

export interface DeletedBook {
    deleted: Boolean,
    error?: String
}
