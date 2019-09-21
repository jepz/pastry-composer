import axios from "axios";

export default class Api {
    constructor() {
        this.axiosInstance = axios.create();
        this.axiosInstance.CancelToken = axios.CancelToken;
        this.axiosInstance.isCancel = axios.isCancel;
        this.cancelToken = this.axiosInstance.CancelToken.source();

        this.send = this.send.bind(this);
        this.getToken = this.getToken.bind(this);
    }

    async send(endpoint, payload) {
        const preppedData = JSON.stringify(payload);
        const response = await this.axiosInstance.request({
            url: `${BACKEND_URL}/Value/${endpoint}`,
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            responseType: 'json',
            data: `=${encodeURIComponent(preppedData)}`,
            cancelToken: this.cancelToken.token
        });

        console.group('API request ' + endpoint);
        console.table(payload);
        console.table(response.data);
        console.groupEnd();

        const {
            data: { ret, m: message },
            data,
            status
        } = response;

        if (status === 200 || status === 204) {
            const success = ret === 200 || ret === 204;
            const errors = success ? null : { message, ret };

            return {
                success,
                errors,
                ret,
                data
            };
        }

        return console.error(
            new Error(`Error from responses first layer ${response.ret}`)
        );
    }

    getToken() {
        return this.cancelToken;
    }
}