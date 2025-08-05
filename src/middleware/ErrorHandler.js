export const ErrorHandler = (_, res, next) => {
    try {
        next()
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
}