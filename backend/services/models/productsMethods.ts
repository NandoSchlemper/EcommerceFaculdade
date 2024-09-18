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

async function RegisterProduct(name: string, description: string, value: number, shipment: number, sellerId: string) {
    try {
        const newUser = new schemaModels.productModel({
            name: name,
            description: description,
            value: value,
            shipment: shipment,
            sellerId: sellerId
        })

        const res = await newUser.save()
        console.log("Usuário cadastrado com sucesso!")
        console.log(res)
    } catch (err) {
        console.error(err.message)
    }
}

export const ProductModule = {
    GetProductById,
    GetAllProducts,
    RegisterProduct
}

