import UserRepository from "../database/User.js";

const login = async (body, callback) => {
    UserRepository.login(body, (data, error) => {
        callback(data, error);
    });
};

const logout = async (callback) => {
    UserRepository.logout((data, error) => {
        callback(data, error);
    });
};

const getCurrentUser = (callback) => {
    UserRepository.getCurrentUser((data, error) => {
        callback(data, error);
    });
};

export default {
    login,
    logout,
    getCurrentUser,
};
