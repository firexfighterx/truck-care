class MessageFactory {
    createGetTrucksFailure() {
        return {type: 'danger', message: 'Failed to retreive Truck List'};
    }

    createGetActiveGroupFailure() {}
}

export default new MessageFactory();
