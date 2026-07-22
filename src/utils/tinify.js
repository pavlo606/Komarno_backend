import tinify from "tinify";
import env from "dotenv";
env.config();

tinify.key = process.env.TINIFY_KEY;

export const optimizeImage = (buffer, callback) => {
    console.log("tinify.compressionCount:", tinify.compressionCount)
    // if (tinify.compressionCount <= 448) {
    if (false) {
        const source = tinify.fromBuffer(buffer);
        const converted = source.convert({ type: ["image/webp"] });
        const extension = converted.result().extension();
        extension.then((ext) => {
            converted.toBuffer((err, resultData) => {
                callback(err, resultData, ext);
            });
        });
    } else {
        callback(undefined, buffer, undefined);
    }
};
