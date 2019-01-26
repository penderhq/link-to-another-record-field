import {fromJS} from 'immutable'

export default (state, action) => {

    switch (action.type) {

        case 'CREATE_RECORD': {

            const record = action.payload
            const {id, tableId} = record

            return state
                .updateIn(['tablesById', tableId, 'records'], records => {
                    return records.push(id)
                })
                .setIn(['recordsById', id], fromJS(record))
        }

        case 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_LINKING_RECORD': {

            const {recordId} = action.payload

            return state.update('records', records => {
                return records.push(recordId)
            })
        }

        case 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_UNLINKING_RECORD': {

            const {recordId} = action.payload

            return state.update('records', records => {
                return records.filter(id => {
                    return id !== recordId
                })
            })
        }

        default: {
            return state
        }
    }
}