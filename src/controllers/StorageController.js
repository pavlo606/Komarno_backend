import { supabase } from "../database/connect.js";

const downloadImage = async (req, res) => {
    const bucketName = "images";
    const imagePath = req.params.imagePath + (req.params[0] || "");

    try {
        const { data, error } = await supabase.storage
            .from(bucketName)
            .download(imagePath);

        if (error) {
            console.error("Error downloading image:", error);
            return res
                .status(500)
                .send(`Error downloading image: ${error.message}`);
        }

        if (!data) {
            return res.status(404).send("Image not found.");
        }

        // Convert Blob to Buffer and send as response
        res.setHeader("Content-Type", data.type);
        res.setHeader(
            "Content-Disposition",
            `attachment; filename="${imagePath.split("/").pop()}"`
        );
        res.send(Buffer.from(await data.arrayBuffer()));
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

export default {
    downloadImage
}