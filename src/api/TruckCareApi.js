import $ from 'jquery';

class TruckCareApi {
    static getAllTrucks() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://localhost:3000/api/trucks/all',
                success: (data) => {
                    resolve(Object.assign([], data));
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    }
}

export default TruckCareApi;
