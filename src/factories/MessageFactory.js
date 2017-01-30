let createError = (message) => {
    return { type: 'danger', message };
};

let createSuccess = (message) => {
    return { type: 'success', message };
};

class MessageFactory {
    static createGetTrucksFailure() {
        return createError('Failed to retreive Truck List');
    }

    static createGetActiveGroupFailure() {
        return createError('Failed to get Truck-Care Group');
    }

    static createFailedToUpdateMemberStatus() {
        return createError('Failed to update Truck-Care Group member\'s status');
    }

    static createGetCategoryDetailsFailure(truckNumber) {
        return createError(`Failed to get category details for ${truckNumber}`);
    }

    static createPerformTruckCareSuccess() {
        return createSuccess('Successfully performed Truck Care');
    }

    static createPerformTruckCareFailure() {
        return createError('Failed to perform Truck Care');
    }
}

export default MessageFactory;
