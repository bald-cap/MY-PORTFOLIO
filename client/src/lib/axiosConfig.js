import axios from "axios";

const API_URL = "https://api.github.com/users/bald-cap/"
const TOKEN = "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"

const github = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${TOKEN}`
    }
});

const handleError = (error) => {
    if (axios.isAxiosError(error)) {
        if (error.response) return (
            Promise.reject(error.response.data?.messsage || `Error status ${error.response.status}`)
        );
        else if (error.request) return Promise.reject("No reponse received");
        else return Promise.reject(error.messsage);
    } 
    
    return Promise.reject("Unexpected Error");
}

const gitGet = async (endpoint, config = {}) => {
    try {
        const data = await github.get(endpoint, config);
        return data.data
    } catch (error) {
        return handleError(error)
    }
}

export default gitGet;