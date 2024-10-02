import schemaModels from '../../database/schemas'
import { handleDevError } from 'utils/handleError'
import type {Types} from 'mongoose' 
import type jwt from 'jsonwebtoken'

export interface Product {
    name: string,
    description: string,
    value: number,
    shipment: number,
    sellerId: Types.ObjectId
}


async function GetProductById(id: string): Promise <Product[] | null > {
    try {
        const pesquisa: Product[] | null = await schemaModels.productModel.findById(id)
        if (!pesquisa) {
            console.warn("Id não encontrado")
            return null
        }

        return pesquisa
    } catch (err) {
        handleDevError(err)
        return null
    }
} 

async function GetAllProducts(): Promise <Product[] | null> {
    try {
        const pesquisa: Product[] = await schemaModels.productModel.find({})
        if (!pesquisa) {
            console.warn("Nenhum produto encontrado")
            return null
        }
        return pesquisa
    } catch (err) {
        handleDevError(err)
        return null
    }
}

async function RegisterProduct({name, description, value, shipment, sellerId}: Product): Promise <Product | null> {
    try {
        const newProduct = new schemaModels.productModel({
            name,
            description,
            value,
            shipment,
            sellerId
        })

        const res = await newProduct.save()
        if (!res) console.log("Produto não armazenado no banco")
        return res
    } catch (err) {
        handleDevError(err)
        return null
    }
}

async function DeleteProduct(id: Types.ObjectId) {
    try {
        const searchProduct = schemaModels.productModel.findById(id)
        if (!searchProduct) {console.warn("Nenhum produto encontrado!")}

        const res = await schemaModels.productModel.deleteOne({_id: id})
        console.log("Produto deletado com sucesso")
        return res
    } catch (err) {
        handleDevError(err)
    }
}

export const ProductModule = {
    GetProductById,
    GetAllProducts,
    RegisterProduct,
    DeleteProduct
}

