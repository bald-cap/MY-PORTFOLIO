import axios from "axios";

const API_URL = "https://api.github.com"
const TOKEN = "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"

const github = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${TOKEN}`
    }
});

const handleError = (error) => {
    if (!axios.isAxiosError(error)) 
        return Promise.reject("Unexpected Error");

    if (error.response) return (
        Promise.reject(error.response.data?.messsage || `Error status ${error.response.status}`)
    );
    else if (error.request) return Promise.reject("No reponse received");
    else return Promise.reject(error.messsage);
}

const get = async (endpoint) => {
    try {
        const data = await github.get(endpoint);
        return data.data
    } catch (error) {
        return handleError(error)
    }
}

export default get;