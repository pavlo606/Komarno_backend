import { supabase } from "./connect.js";

const getImageURL = async (path, callback) => {
    const { data, error } = supabase.storage.from("images").getPublicUrl(path);
    console.log(data)
    callback(data, error);
};

export default {
    getImageURL
}