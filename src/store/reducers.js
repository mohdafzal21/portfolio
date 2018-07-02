import constants from '../constants'

const reducer1 = (state, action) => {

    switch (action.type) {

        case constants.FUNC_1:
            return 'Something'

        default:
            return state
    }
}