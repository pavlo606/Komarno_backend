import UserService from "../services/UserService.js";

const login = async (req, res) => {
    const { body } = req;

    UserService.login(body, (data, error) => {
        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        return res.status(201).send(data);
    });
};

const logout = async (_, res) => {
    UserService.logout((_, error) => {
        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        return res.status(201).send("Logout successful");
    });
};

export default {
    login,
    logout,
};
