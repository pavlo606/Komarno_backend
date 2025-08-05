import { supabase } from "./connect.js";

const login = async (body, callback) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password
    });
    callback(data, error)
}

const logout = async (callback) => {
    const { data, error } = await supabase.auth.signOut()
    callback(data, error)
}

export default {
    login,
    logout,
}