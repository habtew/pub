const initialState = [];

const handleCart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDITEM':
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [...state, { ...action.payload, qty: 1 }];
            }
        case 'DELITEM':
            const itemExist = state.find((x) => x.id === action.payload.id);
            if (itemExist) {
                if (itemExist.qty === 1) {
                    return state.filter((x) => x.id !== itemExist.id);
                } else {
                    return state.map((x) =>
                        x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
                    );
                }
            }
            return state;
        default:
            return state;
    }
};

export default handleCart;