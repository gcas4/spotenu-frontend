import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../utils/baseUrl';

export const useRequestPost = () => {
    const history = useHistory();
    const [role, setRole] = useState("");

    const makeRequest = async (url, body, path) => {
        try {
            const result = await axios.post(`${baseUrl}${url}`, body, {
                headers: { "Authorization": localStorage.getItem("token") }
            })
            if (path === "login") {
                localStorage.clear();
                localStorage.setItem("token", result.data.token)
                setRole(result.data.role);
            } else {
                history.push(path);
            }
        } catch (e) {
            if (e.response.data.error === "jwt expired" || e.response.data.error === "jwt malformed") {
                localStorage.clear();
                history.push("/");
            }
            window.alert(e.response.data.error)
        }
    }
    return { makeRequest, role }
}