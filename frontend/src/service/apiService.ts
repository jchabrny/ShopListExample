import axios from "axios";
import {NewListDto} from "../model/NewListDto";

export const getAllLists = (token?: string) =>
    axios.get("/api/lists", token?{headers:{"Authorization": "Bearer " + token}}:{}).then(response => response.data)

export const saveNewList = (listName: NewListDto, token?: string) =>
    axios.post("/api/lists", listName, token?{headers:{"Authorization": "Bearer " + token}}:{}).then(response => response.data)

export const getListByName = (listName: string | undefined, token?: string) =>
    axios.get(`/api/lists/${listName}`, token?{headers:{"Authorization": "Bearer " + token}}:{}).then(response => response.data)
