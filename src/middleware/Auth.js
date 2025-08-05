import { supabase } from "../database/connect.js"

export const requireAuth = async (req, res, next) => {
    const { data, error } = await supabase.auth.getSession()

    if (data.session && !error) {
        next()
    } else {
        res.status(401).send("You're not authorized")
    }
}