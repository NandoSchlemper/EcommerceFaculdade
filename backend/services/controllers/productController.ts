// biome-ignore lint/style/useImportType: <explanation>
import { Request, Response } from "express";
import { ProductModule } from "services/models/productsMethods";

export async function getProducts(req: Request, res: Response) {
    try{
        const parametros = req.params
        const solicitação = () => {
            if (parametros) {
                return ProductModule.GetProductById(parametros.id)
            } if (!parametros || undefined) {
                return ProductModule.GetAllProducts()
            }
        }
        
        const resultado = solicitação()
        res.status(200).json(resultado)
    } catch (err) {
        res.status(404).send("Erro ao requisitar produto/os")
    }
}

export async function createProduct(req: Request, res: Response) {}
export async function deleteProductById(req: Request, res: Response) {}
export async function updateProduct(req: Request, res: Response) {}
export async function getSellerOfProduct(req: Request, res: Response) {}