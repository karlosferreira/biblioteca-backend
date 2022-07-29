"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obrasController = void 0;
var ObrasController = /** @class */ (function () {
    function ObrasController() {
    }
    ObrasController.prototype.home = function (req, res) {
        return res.json({
            response: 'Hello World'
        });
    };
    ObrasController.prototype.createObra = function (req, res) {
        var pathDescription = '/obras => A rota deverá receber titulo, editora, foto, e autores dentro do corpo da requisição. Ao cadastrar um novo projeto, ele deverá ser armazenado dentro de um objeto no seguinte formato: { id: 1, titulo: "Harry Potter", editora: "Rocco",foto: "https://i.imgur.com/UH3IPXw.jpg", autores: ["JK Rowling", "..."]};';
        return res.json({
            response: pathDescription
        });
    };
    ObrasController.prototype.getObra = function (req, res) {
        var pathDescription = '/obras/:id => A rota deverá buscar a obras cadastrada com o id em questão';
        return res.json({
            response: pathDescription
        });
    };
    ObrasController.prototype.getAllObras = function (req, res) {
        var pathDescription = '/obras/ => A rota deverá listar todas as obras cadastradas';
        return res.json({
            response: pathDescription
        });
    };
    ObrasController.prototype.updateObra = function (req, res) {
        var pathDescription = '/obras/:id => A rota deverá atualizar as informações de titulo, editora, foto e autores da obra com o id presente nos parâmetros da rota';
        return res.json({
            response: pathDescription
        });
    };
    ObrasController.prototype.deleteObra = function (req, res) {
        var pathDescription = '/obras/:id => A rota deverá deletar a obra com o id presente nos parâmetros da rota';
        return res.json({
            response: pathDescription
        });
    };
    return ObrasController;
}());
exports.obrasController = new ObrasController();
