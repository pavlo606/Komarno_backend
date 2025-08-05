import PastEventsService from "../services/PastEventsService.js";

const getAllPastEvents = async (_, res) => {
    try {
        PastEventsService.getAllPastEvents((data, error) => {
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

const getCountPastEvents = async (req, res) => {
    const {
        params: { pastEventCount },
    } = req;

    try {
        PastEventsService.getCountPastEvents(pastEventCount, (data, error) => {
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

const getOnePastEvent = async (req, res) => {
    const {
        params: { pastEventId },
    } = req;

    try {
        PastEventsService.getOnePastEvent(pastEventId, (data, error) => {
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

const createPastEvent = async (req, res) => {
    const { body } = req;

    try {
        PastEventsService.createPastEvent(body, (data, error) => {
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

const updatePastEvent = async (req, res) => {
    const {
        body,
        params: { pastEventId },
    } = req;

    try {
        PastEventsService.updatePastEvent(pastEventId, body, (data, error) => {
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

const deletePastEvent = async (req, res) => {
    const {
        params: { pastEventId },
    } = req;

    try {
        PastEventsService.deletePastEvent(pastEventId, (data, error) => {
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
    getAllPastEvents,
    getCountPastEvents,
    getOnePastEvent,
    createPastEvent,
    updatePastEvent,
    deletePastEvent,
};
