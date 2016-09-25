let createError = (message) => {
    return {type: 'danger', message};
};

class MessageFactory {
    static createGetTrucksFailure() {
        return createError('Failed to retreive Truck List');
    }

    static createGetActiveGroupFailure() {
        return createError('Failed to get Truck-Care Group');
    }
}

export default MessageFactory;
