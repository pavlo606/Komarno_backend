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

const getCurrentUser = (_, res) => {
    UserService.getCurrentUser((data, error) => {
        if (!data) {
            return res.status(500).send("No user")
        }

        if (error) {
            console.error("Error: ", error);
            return res.status(500).send(`Error: ${error.message}`);
        }

        return res.status(200).send(data);
    })
}

export default {
    login,
    logout,
    getCurrentUser,
};
