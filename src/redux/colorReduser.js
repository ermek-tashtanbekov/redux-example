const initialState = {
    color: '#0fff00',
}
const colorReduser = (state = initialState, action) => {
   const newState = {...state}
    switch(action.type){
          case 'color':

          newState.color = action.color
        return newState
        }
    
    return state;
}
 
export default colorReduser;
// const colorReduser = (state = initialState, action) => {
//     const newState = { ...state };
//     switch (action.type) {
        
//         case "color":
//             newState.color = action.color;
//             return newState;
//     }
    
//     return state;
// }

// export default colorReduser;