import ImagesService from "../services/ImagesService.js";

const getImageURL = async (req, res) => {
    const {
        params: { path },
    } = req;

    ImagesService.getImageURL(path, (data, error) => {
        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        if (!data) {
            return res.status(404).send("Events not found.");
        }

        return res.send(data);
    });
};

export default {
    getImageURL
}