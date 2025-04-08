import axios from "axios";

const API_URL = "https://api.github.com"
const TOKEN = "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"

// Abstraction of All API calls
const github = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "application/vnd.github+json",
        Authorization: `${TOKEN}`
    }
});

// Making sure to catch all possible errors in try catch
const handleError = (error) => {
    // Handling unexpected errors
    if (!axios.isAxiosError(error)) 
        return Promise.reject("Unexpected Error");

    // Handling a failed status error : 400, 500
    if (error.response) return (
        Promise.reject(error.response.data?.messsage || `Error status ${error.response.status}`)
    );

    // Handling 204 status
    else if (error.request) return Promise.reject("No response received");
        
    // Other  errors
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