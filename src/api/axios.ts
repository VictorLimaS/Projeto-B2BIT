import axios from "axios";
const axiosConfig = {
    baseURL: "https://api.homologation.cliqdrive.com.br",
};

export const api = axios.create(axiosConfig);