class MessageFactory {
    createGetTrucksFailure() {
        return {type: 'danger', message: 'Failed to retreive Truck List'};
    }
}

export default new MessageFactory();
