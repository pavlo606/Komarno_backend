import ImageRepository from "../database/Images.js"

const getImageURL = async (path, callback) => {
    ImageRepository.getImageURL(path, (data, error) => {
        callback(data.publicUrl, error)
    })
}

export default {
    getImageURL
}