import { Request, Response } from "express";

class BooksController{
  public createBook(req:Request, res:Response) {
    const description = 'A rota deverá receber titulo, editora, foto, e autores dentro do corpo da requisição. Ao cadastrar um novo projeto, ele deverá ser armazenado dentro de um objeto no seguinte formato: { id: 1, titulo: "Harry Potter", editora: "Rocco",foto: "https://i.imgur.com/UH3IPXw.jpg", autores: ["JK Rowling", "..."]};';

    return res.json({
      "description": description
    });
  }

  public getAllBooks(req:Request, res:Response) {
    const description = 'A rota deverá listar todas as obras cadastradas';

    return res.json({
      "description": description
    });
  }

  public getBook(req:Request, res:Response) {
    const description = 'A rota deverá listar uma obra cadastrada';
    
    return res.json({
      "description": description
    });
  }
  
  public updateBook(req:Request, res:Response) {
    const description = 'A rota deverá atualizar as informações de titulo, editora, foto e autores da obra com o id presente nos parâmetros da rota';

    return res.json({
      "description": description
    });
  }

  public deleteBook(req:Request, res:Response) {
    const description = 'A rota deverá deletar a obra com o id presente nos parâmetros da rota';

    return res.json({
      "description": description
    });
  }
}

export const booksController = new BooksController();
