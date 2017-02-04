import * as Actions from './Actions';

export function setTruckId(truckId) {
    return { type: Actions.SET_TRUCK_ID, truckId };
}