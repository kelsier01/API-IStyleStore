"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPregunta = exports.postPreguntas = exports.getPreguntas = void 0;
const pregunta_1 = __importDefault(require("../models/pregunta"));
const getPreguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const preguntas = yield pregunta_1.default.findAll();
    res.json({ preguntas });
});
exports.getPreguntas = getPreguntas;
const postPreguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const nuevaPregunta = yield pregunta_1.default.create(body);
    res.json({ nuevaPregunta });
});
exports.postPreguntas = postPreguntas;
const putPregunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const editPregunta = yield pregunta_1.default.findByPk(id);
        if (!editPregunta) {
            return res.status(404).json({
                msg: "No existe una pregunta con el id " + id,
            });
        }
        yield editPregunta.update(body);
        res.json(pregunta_1.default);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putPregunta = putPregunta;
//# sourceMappingURL=preguntas.js.map