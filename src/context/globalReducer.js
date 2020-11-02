export default (state , action) => {
    switch (action.type) {
        case 'ADD_Transection':
            return {
                ...state,
                transections:[...state.transections,action.payload]
            }
        case 'Del_Transection':
            return {
                ...state,
                transections:state.transections.filter(e=>e.id!==action.payload)
            }
        default:
            return state;
    }
};