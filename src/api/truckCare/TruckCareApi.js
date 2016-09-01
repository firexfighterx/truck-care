import $ from 'jquery';
import ApiHelper from '../ApiHelper';
import EnvironmentUrls from '../EnvironmentUrls';
import TruckCareApiHandlers from './TruckCareApiHandlers';

class TruckCareApi extends ApiHelper {
    static getAllTrucks() {
        let url = `http://${EnvironmentUrls.baseUrl}/api/trucks/all`;

        return new Promise((resolve, reject) => this.get(url, {}, TruckCareApiHandlers.handleGetTrucksSuccess.bind(TruckCareApiHandlers, resolve), TruckCareApiHandlers.handleGetTrucksFailure.bind(TruckCareApiHandlers, reject)));
    }
}

export default TruckCareApi;
