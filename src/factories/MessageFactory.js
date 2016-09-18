class MessageFactory {
    createGetTrucksFailure() {
        return {type: 'danger', message: 'Error: Failed to retreive Truck List Items'};
    }
}

export default new MessageFactory();
