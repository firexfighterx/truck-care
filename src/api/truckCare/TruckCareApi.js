import $ from 'jquery';
import ApiHelper from '../ApiHelper';
import EnvironmentUrls from '../EnvironmentUrls';
import TruckCareApiHandlers from './TruckCareHandlers';

class TruckCareApi extends ApiHelper {
    static getAllTrucks() {
        let url = `http://${EnvironmentUrls.baseUrl}/api/trucks/all`;

        return this.get(url, {});
    }
}

export default TruckCareApi;
