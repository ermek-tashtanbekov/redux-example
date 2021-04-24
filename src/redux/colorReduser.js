const initialState = {
    color: `rgb(0,0,0)`,
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