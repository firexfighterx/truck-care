import $ from 'jquery';

class ApiHelper {
    static performAjax(request) {
        $.ajax(request);
    }

    static get(url, data, successCallback, failureCallback) {
        this.performAjax({
            url: url,
            type: 'GET',
            data: data,
            success: successCallback,
            failure: failureCallback
        });
    }

    static promisify(functionCallback) {}
}

export default ApiHelper;
