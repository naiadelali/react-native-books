import axios from "axios";
export const api = axios.create({
    baseURL: "https://gutendex.com", // remove the extra single quote
});
