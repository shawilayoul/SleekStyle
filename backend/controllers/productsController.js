
const getAllProducts = async (req,res)=>{
 res.status(200).json('hellol from gat all router')
}
const getAProduct = async (req,res)=>{
    res.status(200).json('hellol from gat all router')
}
const createProduct = async (req,res)=>{
    res.status(200).json('hellol from gat all router')
}
const updateProducts = async (req,res)=>{
    res.status(200).json('hellol from gat all router') 
}
const deleteProducts = async (req,res)=>{
    res.status(200).json('hellol from gat all router')   
}

module.exports = {
    getAllProducts,
    getAProduct,
    createProduct,
    updateProducts,
    deleteProducts
}