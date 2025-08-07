import { supabase } from "./connect.js";

const getImageURL = async (folder, path, callback) => {
    const { data, error } = supabase.storage.from("images").getPublicUrl(`${folder}/${path}`);
    callback(data, error);
};

const getAllImagesURL = async (folder, callback) => {
    const { data, error } = await supabase.storage.from("images").list(folder, {
        limit: 100,
    });

    if (!data) return callback(data, error);

    let imageURLs = [];

    data.forEach((image) => {
        if (image.metadata.mimetype.includes("image"))
            imageURLs = [ ...imageURLs, supabase.storage.from("images").getPublicUrl(`${folder}/${image.name}`).data.publicUrl ];
    });
    callback(imageURLs, error);
};

export default {
    getImageURL,
    getAllImagesURL,
};
