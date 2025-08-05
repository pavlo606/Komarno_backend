import PastEventsRepository from "../database/PastEvents.js";

const getAllPastEvents = async (callback) => {
    PastEventsRepository.getAllPastEvents((data, error) => {
        callback(data, error)
    })
}

const getCountPastEvents = async (count, callback) => {
    PastEventsRepository.getCountPastEvents(count, (data, error) => {
        callback(data, error)
    })
}

const getOnePastEvent = async (id, callback) => {
    PastEventsRepository.getOnePastEvent(id, (data, error) => {
        callback(data, error)
    })
}

const createPastEvent = async (body, callback) => {
    PastEventsRepository.createPastEvent(body, (data, error) => {
        callback(data, error)
    })
}

const updatePastEvent = async (id, body, callback) => {
    PastEventsRepository.updatePastEvent(id, body, (data, error) => {
        callback(data, error)
    })
}

const deletePastEvent = async (id, callback) => {
    PastEventsRepository.deletePastEvent(id, (data, error) => {
        callback(data, error)
    })
}

export default {
    getAllPastEvents,
    getCountPastEvents,
    getOnePastEvent,
    createPastEvent,
    updatePastEvent,
    deletePastEvent,
}