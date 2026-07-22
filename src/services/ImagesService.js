import ImageRepository from "../database/Images.js";
import { optimizeImage } from "../utils/tinify.js";

const getImageURL = async (folder, path, callback) => {
    ImageRepository.getImageURL(folder, path, (data, error) => {
        callback(data.publicUrl, error);
    });
};

const getAllImagesURL = async (folder, callback) => {
    ImageRepository.getAllImagesURL(folder, (data, error) => {
        callback(data, error);
    });
};

const uploadImage = async (folder, file, callback) => {
    optimizeImage(file.buffer, (err, resultData, ext) => {
        file.buffer = resultData
        if (ext) file.mimetype = `image/${ext}`
        else ext = file.originalname.split(".").at(-1)

        ImageRepository.uploadImage(folder, file, ext, (data, error) => {
            callback(data, error);
        });
    });
};

export default {
    getImageURL,
    getAllImagesURL,
    uploadImage,
};
