import httpService from "../httpService";
import { apiBaseUrl } from "../../config.json";

const apiCommonUrl=apiBaseUrl+"/api/common";

export async function getUserProfile() {
    return httpService.get(apiCommonUrl+"/userProfile");
}


export async function updateUserProfile(reqData) {

    return await httpService.put(apiCommonUrl+"/updateUserProfile",reqData);

}
