import { supabase } from "../database/connect.js";

const getAllNewEvents = async (req, res) => {
    try {
        const { data, error } = await supabase.from("new_events").select();

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

const getOneNewEvent = async (req, res) => {
    const {
        params: { newEventId },
    } = req;

    try {
        const { data, error } = await supabase
            .from("new_events")
            .select()
            .eq("id", newEventId);

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

const createNewEvent = async (req, res) => {
    const { body } = req;

    try {
        const { error } = await supabase
            .from("new_events")
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

const updateNewEvent = async (req, res) => {
    const {
        body,
        params: { newEventId },
    } = req;

    try {
        const { error } = await supabase
            .from("new_events")
            .update(body)
            .eq("id", newEventId)

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

const deleteNewEvent = async (req, res) => {
    const {
        params: { newEventId },
    } = req;

    try {
        const { error } = await supabase
            .from("new_events")
            .delete()
            .eq("id", newEventId)

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
    getAllNewEvents,
    getOneNewEvent,
    createNewEvent,
    updateNewEvent,
    deleteNewEvent,
};
