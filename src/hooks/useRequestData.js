import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../utils/baseUrl';

export const useRequestData = (url, initialState) => {
  const history = useHistory();
  const [data, setData] = useState(initialState);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [url, history])

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