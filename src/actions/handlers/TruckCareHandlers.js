class TruckCareHandlers {
    static handleGetTrucksSuccess(resolve, trucks) {
        resolve(Object.assign([], trucks));
    }
    static handleGetTrucksFailure(reject, ajaxResponse) {
        reject(ajaxResponse);
    }
}

export default TruckCareHandlers;
