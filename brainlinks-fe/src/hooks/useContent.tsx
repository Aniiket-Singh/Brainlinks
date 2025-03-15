import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
    const [contents, setContents] = useState([]);
    
    useEffect( ()=>{
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response.data.content);
            setContents(Array.isArray(response.data.content) ? response.data.content : ['ooga booga'])
        });
    }
    , []);

    return contents;
}