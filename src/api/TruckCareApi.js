import $ from 'jquery';
import ApiHelper from './ApiHelper';
import EnvironmentUrls from './EnvironmentUrls';

class TruckCareApi extends ApiHelper {
    static getAllTrucks() {
        return this.get(`http://${EnvironmentUrls.baseUrl}/api/trucks/all`, {});
    }

    static getTruckCareGroup() {}
}

export default TruckCareApi;
