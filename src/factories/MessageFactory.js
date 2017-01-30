let createError = (message) => {
    return { type: 'danger', message };
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

    static createPerformTruckCareSuccess() { }

    static createPerformTruckCareFailure() { }
}

export default MessageFactory;
