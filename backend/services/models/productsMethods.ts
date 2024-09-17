import schemaModels from '../../database/schemas'

async function GetProductById(id: string) {
    try {
        const pesquisa = await schemaModels.productModel.findById({_id: id})
        if (!pesquisa) console.log("ID não encontrado!")
        return pesquisa
    } catch (err) {
        console.error(err.message)
    }
} 

async function GetAllProducts() {
    try {
        const pesquisa = await schemaModels.productModel.find({})
        if (!pesquisa) console.log("Nenhum produto encontrado")
        return pesquisa
    } catch (err) {
        console.error(err.message)
    }
}

export const ProductModule = {
    GetProductById,
    GetAllProducts
}
