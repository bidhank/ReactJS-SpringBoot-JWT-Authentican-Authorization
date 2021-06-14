import httpService from "./httpService";
import { apiBaseUrl } from "../config.json";

const apiAdminUrl=apiBaseUrl+"/api/admin"

export function getUnits(){
    return httpService.get(apiAdminUrl+"/units");
}

export async function getUsers(){
    return await httpService.get(apiAdminUrl+"/users")
}

export async function addUser(reqData) {

    return await httpService.post(apiAdminUrl+"/addUser",reqData);

}