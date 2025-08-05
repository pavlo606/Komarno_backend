import NewEventsRepository from "../database/NewEvents.js";

const getAllNewEvents = async (callback) => {
    NewEventsRepository.getAllNewEvents((data, error) => {
        callback(data, error)
    })
}

const getCountNewEvents = async (count, callback) => {
    NewEventsRepository.getCountNewEvents(count, (data, error) => {
        callback(data, error)
    })
}

const getOneNewEvent = async (id, callback) => {
    NewEventsRepository.getOneNewEvent(id, (data, error) => {
        callback(data, error)
    })
}

const createNewEvent = async (body, callback) => {
    NewEventsRepository.createNewEvent(body, (data, error) => {
        callback(data, error)
    })
}

const updateNewEvent = async (id, body, callback) => {
    NewEventsRepository.updateNewEvent(id, body, (data, error) => {
        callback(data, error)
    })
}

const deleteNewEvent = async (id, callback) => {
    NewEventsRepository.deleteNewEvent(id, (data, error) => {
        callback(data, error)
    })
}

export default {
    getAllNewEvents,
    getCountNewEvents,
    getOneNewEvent,
    createNewEvent,
    updateNewEvent,
    deleteNewEvent,
}