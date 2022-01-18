import axios from "axios";

export const getAllLists = () =>
    axios.get("/lists").then(response => response.data)

export const saveNewList = listName =>
    axios.post("/lists",listName).then(response => response.data)
