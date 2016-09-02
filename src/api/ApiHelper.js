import $ from 'jquery';

class ApiHelper {
    static performAjax(request) {
        $.ajax(request);
    }

    static get(url, data) {
        this.performAjax({
            url: url,
            type: 'GET',
            data: data
        });
    }
}

export default ApiHelper;
