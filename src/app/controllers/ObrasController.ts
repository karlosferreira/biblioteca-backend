import { Request, Response } from "express";

class ObrasController{
    public home(req:Request, res:Response) {
        return res.json({
            response: 'Hello World'
        });
    }

    public createObra(req:Request, res:Response) {
        const pathDescription = '/obras => A rota deverá receber titulo, editora, foto, e autores dentro do corpo da requisição. Ao cadastrar um novo projeto, ele deverá ser armazenado dentro de um objeto no seguinte formato: { id: 1, titulo: "Harry Potter", editora: "Rocco",foto: "https://i.imgur.com/UH3IPXw.jpg", autores: ["JK Rowling", "..."]};';
        
        return res.json({
            response: pathDescription
        });
    }

    public getObra(req:Request, res:Response) {
        const pathDescription = '/obras/:id => A rota deverá buscar a obras cadastrada com o id em questão';

        return res.json({
            response: pathDescription
        });
    }

    public getAllObras(req:Request, res:Response) {
        const pathDescription = '/obras/ => A rota deverá listar todas as obras cadastradas';

        return res.json({
            response: pathDescription
        });
    }

    public updateObra(req:Request, res:Response) {
        const pathDescription = '/obras/:id => A rota deverá atualizar as informações de titulo, editora, foto e autores da obra com o id presente nos parâmetros da rota';

        return res.json({
            response: pathDescription
        });
    }

    public deleteObra(req:Request, res:Response) {
        const pathDescription = '/obras/:id => A rota deverá deletar a obra com o id presente nos parâmetros da rota';

        return res.json({
            response: pathDescription
        });
    }
    
}

export const obrasController = new ObrasController();
