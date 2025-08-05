import NewEventsService from "../services/NewEventsService.js";

const getAllNewEvents = async (_, res) => {
    try {
        NewEventsService.getAllNewEvents((data, error) => {
            if (error) {
                console.error("Error: ", error);
                return res.status(500).send(`Error: ${error.message}`);
            }

            if (!data) {
                return res.status(404).send("Events not found.");
            }

            return res.send(data);
        });
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

const getCountNewEvents = async (req, res) => {
    const {
        params: { newEventCount },
    } = req;

    try {
        NewEventsService.getCountNewEvents(newEventCount, (data, error) => {
            if (error) {
                console.error("Error: ", error);
                return res.status(500).send(`Error: ${error.message}`);
            }

            if (!data) {
                return res.status(404).send("Events not found.");
            }

            return res.send(data);
        });
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
        NewEventsService.getOneNewEvent(newEventId, (data, error) => {
            if (error) {
                console.error("Error: ", error);
                return res.status(500).send(`Error: ${error.message}`);
            }

            if (!data) {
                return res.status(404).send("Event not found.");
            }

            return res.send(data);
        });
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

const createNewEvent = async (req, res) => {
    const { body } = req;

    try {
        NewEventsService.createNewEvent(body, (_, error) => {
            if (error) {
                console.error("Error: ", error);
                return res.status(500).send(`Error: ${error.message}`);
            }

            return res.status(201).send("Successfuly created");
        });
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
        NewEventsService.updateNewEvent(newEventId, body, (_, error) => {
            if (error) {
                console.error("Error: ", error);
                return res.status(500).send(`Error: ${error.message}`);
            }

            return res.status(201).send("Successfuly updated");
        });
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
        NewEventsService.deleteNewEvent(newEventId, (data, error) => {
            if (error) {
                console.error("Error: ", error);
                return res.status(500).send(`Error: ${error.message}`);
            }

            return res.status(201).send("Successfuly deleted");
        });
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).send("An unexpected error occurred.");
    }
};

export default {
    getAllNewEvents,
    getCountNewEvents,
    getOneNewEvent,
    createNewEvent,
    updateNewEvent,
    deleteNewEvent,
};
