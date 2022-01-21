import axios from "axios";
import {NewListDto} from "../model/NewListDto";

export const getAllLists = () =>
    axios.get("/api/lists").then(response => response.data)

export const saveNewList = (listName: NewListDto) =>
    axios.post("/api/lists", listName).then(response => response.data)

export const getListByName = (listName: string | undefined) =>
    axios.get(`/api/${listName}`).then(response => response.data)