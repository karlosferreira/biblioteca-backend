// Entender porquê a linha a seguir não funcionou no método getAllBooks:
export type IAllBooks = Omit<BookInterface, "__v" | "_id" | "createdAt" | "updatedAt">;

export interface BookInterface {
    title: String,
    publisher: String,
    authors: String,
    imageCover?: String
}

export interface DeletedBook {
    deleted: Boolean,
    error?: String
}
