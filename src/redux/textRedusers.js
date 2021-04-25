const initialState = {
    texxt : ""
};


const textRedusers = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'set_text':
        newState.texxt = action.texxt
        return newState

    }

    return newState;
}

export default textRedusers;