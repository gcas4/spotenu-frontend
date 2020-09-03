import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export const baseUrl = "https://2l8702f2m0.execute-api.us-east-1.amazonaws.com/dev/";

export const useRequestData = (url, initialState) => {
  const history = useHistory();
  const [data, setData] = useState(initialState);

  useEffect(() => {
    getData();
  }, [url])

  const getData = async () => {
    try {
      const result = await axios
        .get(`${baseUrl}${url}`, {
          headers: { "Authorization": localStorage.getItem("token") }
        })

      setData(result.data);
    } catch (e) {

      if (e.response.data.error === "jwt expired" || e.response.data.error === "jwt malformed") {
        localStorage.clear();
        history.push("/");
      }

      window.alert(e.response.data.error)
    }
  }

  return { data, setData, getData };
}

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

        if (e.response.data.error === "jwt expired" || e.response.data.error === "jwt malformed") {
            localStorage.clear();
        }

        window.alert(e.response.data.error)
    }
}