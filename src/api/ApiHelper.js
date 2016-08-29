import $ from 'jquery';

class ApiHelper {
    performAjax(request) {
        $.ajax(request);
    }
}

export default new ApiHelper();
