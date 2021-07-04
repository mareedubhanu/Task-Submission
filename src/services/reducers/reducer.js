import { ADD_DATA, REMOVE_DATA, UPDATE_DATA } from "./constant";
const taskActions = (state = [], action) => {
    switch (action.type) {
        case ADD_DATA:
            return [
                ...state,
                {
                    key: action.payload.key,
                    name: action.payload.name,
                    task: action.payload.task,
                }
            ]
        case REMOVE_DATA:
            return state.filter(item => item.key !== action.payload.key)

        case UPDATE_DATA:
            let target = state.find(item => item.key === action.payload.key);
            if (target) {
                target[action.payload.name] = action.payload.value;
                return state;
            }
        default:
            return state;
    }
}
export default taskActions;