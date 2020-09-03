import axios from 'axios';

export const baseUrl = "https://2l8702f2m0.execute-api.us-east-1.amazonaws.com/dev/";

export const requestPost = async (url, body) => {
    try {
        const result = await axios.post(`${baseUrl}${url}`, body, {
            headers: { "Authorization": localStorage.getItem("token") }
        })

        const token = localStorage.getItem("token")
        if (!token) {
            localStorage.setItem("token", result.data.token)
        }
        return { res: result.data.message, message: "ok" }

    } catch (e) {
        
        window.alert(e.response.data.error)
        return { res: e.response.data.error, message: "error" }
    }
}

export const requestGet = async (url) => {
    try {
        const result = await axios.get(`${baseUrl}${url}`, {
            headers: { "Authorization": localStorage.getItem("token") }
        })

        return { res: result.data.bands, message: "ok" }

    } catch (e) {
        
        if (e.response.data.error === "jwt expired") {
            localStorage.clear();
        }
        window.alert(e.response.data.error) || window.alert(e)

        return e.response.data.error ?
            { res: e.response.data.error, message: "error" }
            : e
    }
}