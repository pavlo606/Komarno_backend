import { supabase } from "./connect.js";

const getAllNewEvents = async (callback) => {
    const { data, error } = await supabase.from("new_events").select().order("date");
    callback(data, error);
};

const getCountNewEvents = async (count, callback) => {
    const { data, error } = await supabase
        .from("new_events")
        .select()
        .limit(count);
    callback(data, error);
};

const getOneNewEvent = async (id, callback) => {
    const { data, error } = await supabase
        .from("new_events")
        .select()
        .eq("id", id);
    callback(data, error);
};

const createNewEvent = async (body, callback) => {
    const { error } = await supabase.from("new_events").insert(body);
    callback(null, error);
};

const updateNewEvent = async (id, body, callback) => {
    const { error } = await supabase
        .from("new_events")
        .update(body)
        .eq("id", id);
    callback(null, error);
};

const deleteNewEvent = async (id, callback) => {
    const { error } = await supabase
        .from("new_events")
        .delete()
        .eq("id", id);
    callback(null, error);
};

export default {
    getAllNewEvents,
    getCountNewEvents,
    getOneNewEvent,
    createNewEvent,
    updateNewEvent,
    deleteNewEvent,
};
