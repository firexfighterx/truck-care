import $ from 'jquery';
import ApiHelper from './ApiHelper';
import EnvironmentUrls from './EnvironmentUrls';

class TruckCareApi extends ApiHelper {
    static getAllTrucks() {
        return this.get(`http://${EnvironmentUrls.baseUrl}/api/trucks/all`, {});
    }

    static getTruckCareGroup() {
        return this.get(`http://${EnvironmentUrls.baseUrl}/api/group/active`, {});
    }

    static updateTruckCareGroupMemberToActive(id) {
        return this.put(`http://${EnvironmentUrls.baseUrl}/api/group/member/${id}/activate`, {});
    }
}

export default TruckCareApi;
