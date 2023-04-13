import apisauce from "apisauce";
import IApiServices from "./ApiServicesInterfaces";

const create = (baseURL = "https://jsonplaceholder.typicode.com"): IApiServices => {

    // const loggedInUser = getLocalStorageItem(constants.loggedInUser);
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
            "Content-Type": "application/json",
            "Authorization": 'gfdgfdgf',
        },
        timeout: 10000
    })

    // api.addMonitor((response) => {
    //     if (response.status === 401) {
    //         localStorage.clear()
    //         window.location.href = routesNames.LOGIN
    //     }
    // });

    // const setAuthorization = () => {
    //     const loggedInUser = getLocalStorageItem(constants.loggedInUser);
    //     api.headers["Authorization"] = `${loggedInUser?.token}`
    // }


    const login = async (data: any) => {
        return (
            api.post(`/todos`, data)

        )

    }
    return {
        login,
    }

}

export default {
    create,
}