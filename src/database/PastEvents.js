import { supabase } from "./connect.js";

const getAllPastEvents = async (callback) => {
    const { data, error } = await supabase.from("past_events").select();
    callback(data, error);
};

const getCountPastEvents = async (count, callback) => {
    const { data, error } = await supabase
        .from("past_events")
        .select()
        .limit(count);
    callback(data, error);
};

const getOnePastEvent = async (id, callback) => {
    const { data, error } = await supabase
        .from("past_events")
        .select()
        .eq("id", id);
    callback(data, error);
};

const createPastEvent = async (body, callback) => {
    const { error } = await supabase.from("past_events").insert(body);
    callback(null, error);
};

const updatePastEvent = async (id, body, callback) => {
    const { error } = await supabase
        .from("past_events")
        .update(body)
        .eq("id", id);
    callback(null, error);
};

const deletePastEvent = async (id, callback) => {
    const { data: pastEvent } = await supabase
        .from("past_events")
        .select()
        .eq("id", id);
    const { error } = await supabase
        .from("past_events")
        .delete()
        .eq("id", id);
    if (error) {
        callback(null, error);
        return
    }

    const { data, err } = await supabase
        .storage
        .from('images')
        .remove(pastEvent[0].images_path)
    callback(data, err);
};

export default {
    getAllPastEvents,
    getCountPastEvents,
    getOnePastEvent,
    createPastEvent,
    updatePastEvent,
    deletePastEvent,
};
