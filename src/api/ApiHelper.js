import $ from 'jquery';
import q from 'q';

class ApiHelper {
    static performAjax(request) {
        return q.when($.ajax(request));
    }

    static get(url, data) {
        return this.performAjax({ url: url, type: 'GET', data: data });
    }

    static put(url, data) {
        return this.performAjax({ url, type: 'PUT', data });
    }

    static post(url, data) {
        return this.performAjax({ url, type: 'POST', contentType: 'application/JSON', data });
    }
}

export default ApiHelper;