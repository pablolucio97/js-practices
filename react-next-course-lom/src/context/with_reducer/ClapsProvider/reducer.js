import * as types from './types'

export const reducer = (state, action) => {

    switch(action.type){
        case types.RENDER_CLAPS:
        return {...state, claps: state.claps }
        default:
        }

    return {...state}
}
