import axios from "axios";

export const getAllLists = () =>{
    axios.get("endpunkturl").then(response => response.data)
}