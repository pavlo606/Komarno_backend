import { supabase } from "../database/connect.js";

const getAllPastEvents = async (req, res) => {
    try {
        const { data, error } = await supabase.from("past_events").select();

        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        if (!data) {
            return res.status(404).send("Events not found.");
        }

        return res.send(data);
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

const getOnePastEvent = async (req, res) => {
    const {
        params: { pastEventId },
    } = req;

    try {
        const { data, error } = await supabase
            .from("past_events")
            .select()
            .eq("id", pastEventId);

        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        if (!data) {
            return res.status(404).send("Event not found.");
        }

        return res.send(data);
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

const createPastEvent = async (req, res) => {
    const { body } = req;

    try {
        const { error } = await supabase
            .from("past_events")
            .insert(body)

        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        return res.status(201).send("Successfuly created");
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

const updatePastEvent = async (req, res) => {
    const {
        body,
        params: { pastEventId },
    } = req;

    try {
        const { error } = await supabase
            .from("past_events")
            .update(body)
            .eq("id", pastEventId)

        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        return res.status(201).send("Successfuly updated");
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

const deletePastEvent = async (req, res) => {
    const {
        params: { pastEventId },
    } = req;

    try {
        const { error } = await supabase
            .from("past_events")
            .delete()
            .eq("id", pastEventId)

        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        return res.status(201).send("Successfuly deleted");
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

export default {
    getAllPastEvents,
    getOnePastEvent,
    createPastEvent,
    updatePastEvent,
    deletePastEvent,
};
