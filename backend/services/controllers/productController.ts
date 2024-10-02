// biome-ignore lint/style/useImportType: <explanation>
import { Request, Response } from "express";
import { ProductModule, type Product } from "services/models/productsMethods";
import { handleWebError } from "utils/handleError";
import jwt from "jsonwebtoken"
import { Types } from "mongoose";

export async function getProducts(req: Request, res: Response) {
    try{
        const decodeJwt = jwt.decode(req.signedCookies.token)
        console.log(decodeJwt)
        
        const {id} = req.params
        let resultado: Product | Product[] | null;

        if (id) {
            resultado = await ProductModule.GetProductById(id);
            if (!resultado) return res.status(404).json({message: "Produto não encontrado"})
        } else {
            resultado = await ProductModule.GetAllProducts();
        }

        res.status(200).json(resultado)
    } catch (err) {
        handleWebError(err, res)
    }
}

export async function onlyForToken(req:Request, res: Response) {
    try {
    console.log("Cookie:", req.signedCookies)
    } catch (err) {
        handleWebError(err, res)
    }
}

// Resolver essas paradinha aqui
export async function createProduct(req: Request, res: Response) {
    try {
        const LoggedUser = req.user
        if (!LoggedUser) return res.status(400).json({message: "Usuário não está logado"})
        const LoggerUserId = LoggedUser.id.toString()

        const {name, description, value, shipment} = req.body
        const newProduct = await ProductModule.RegisterProduct({
            name,
            description, 
            value, shipment, 
            sellerId: new Types.ObjectId(LoggerUserId)})
            
        res.status(201).json({newProduct})
    } catch (err) {
        res.status(500).json({error: 'Erro ao registrar o produto'})
    }
}
export async function deleteProductById(req: Request, res: Response) {}
export async function updateProduct(req: Request, res: Response) {}
export async function getSellerOfProduct(req: Request, res: Response) {}
