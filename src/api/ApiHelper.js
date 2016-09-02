import $ from 'jquery';
import q from 'q';

class ApiHelper {
    static performAjax(request) {
        return q.when($.ajax(request));
    }

    static get(url, data) {
        return this.performAjax({
            url: url,
            type: 'GET',
            data: data
        });
    }
}

export default ApiHelper;
