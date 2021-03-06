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

    static updateTruckCareGroupMemberToInactive(id) {
        return this.put(`http://${EnvironmentUrls.baseUrl}/api/group/member/${id}/deactivate`, {});
    }

    static getCategoryDetails(truckNumber) {
        return this.get(`http://${EnvironmentUrls.baseUrl}/api/truck/${truckNumber}/category/details`, {});
    }

    static performTruckCare(args) { 
        return this.post('http://localhost:3000/api/perform/truckcare', JSON.stringify(args));
    }
}

export default TruckCareApi;
