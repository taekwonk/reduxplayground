import { IAppState } from './IAppState';
import { UPDATE_LIST, RELOAD_LIST } from './actions';


const filedList = [
];

const initialState: IAppState = {
    filedList
};

function updateList(state, action) {
    return Object.assign({}, state, {filedList: action.payload});
}

function reloadList(state, action) {
    return Object.assign({}, {filedList: action.payload});
}

export function reducer(state=initialState, action) {

    switch(action.type) {
        case UPDATE_LIST:
            return updateList(state, action);
        case RELOAD_LIST:
            return reloadList(state, action);
        default:
            return state;
    }

}