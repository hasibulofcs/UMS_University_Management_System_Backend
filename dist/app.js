"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Allows JSON parser
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Your serve is working just fine!",
    });
});
app.listen(5000, () => {
    console.log(`Your server is running at port ${5000}`);
});
