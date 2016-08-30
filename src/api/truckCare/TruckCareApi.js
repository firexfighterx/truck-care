import $ from 'jquery';
import ApiHelper from '../ApiHelper';
import EnvironmentUrls from '../EnvironmentUrls';
import TruckCareApiHandlers from './TruckCareApiHandlers';

class TruckCareApi {
    static getAllTrucks() {
        //return new Promise((resolve, reject) => {
        // $.ajax({
        //     url: 'http://localhost:3000/api/trucks/all',
        //     success: (data) => {
        //         resolve(Object.assign([], data));
        //     },
        //     error: (error) => {
        //         reject(error);
        //     }
        // });
        //});
        let url = `${EnvironmentUrls.baseUrl}/api/trucks/all`;
        let getTrucks = ApiHelper.get(url, {}, TruckCareApiHandlers.handleGetTrucksSuccess, TruckCareApiHandlers.handleGetTrucksFailure);

        return ApiHelper.promisify(getTrucks);
    }
}

export default TruckCareApi;
