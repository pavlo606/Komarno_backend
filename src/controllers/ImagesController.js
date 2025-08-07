import ImagesService from "../services/ImagesService.js";

const getImageURL = async (req, res) => {
    const {
        params: { path, folder },
    } = req;

    ImagesService.getImageURL(folder, path, (data, error) => {
        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        if (!data) {
            return res.status(404).send("Image not found.");
        }

        return res.send(data);
    });
};

const getAllImagesURL = async (req, res) => {
    const {
        params: { folder },
    } = req;

    ImagesService.getAllImagesURL(folder, (data, error) => {
        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        if (!data) {
            return res.status(404).send("Images not found.");
        }

        return res.send(data);
    });
};

export default {
    getImageURL,
    getAllImagesURL,
}