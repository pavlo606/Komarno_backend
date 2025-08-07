import ImageRepository from "../database/Images.js"

const getImageURL = async (folder, path, callback) => {
    ImageRepository.getImageURL(folder, path, (data, error) => {
        callback(data.publicUrl, error)
    })
}

const getAllImagesURL = async (folder, callback) => {
    ImageRepository.getAllImagesURL(folder, (data, error) => {
        callback(data, error)
    })
}

export default {
    getImageURL,
    getAllImagesURL,
}