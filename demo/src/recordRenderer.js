import React from 'react'
import {connect} from 'react-redux'
import {List} from 'immutable'
import RecordListItem from '@cmds/record-list-item'
import fieldRenderer from './fieldRenderer'

const ConnectedRecordListItem = connect((state, props) => {

    const visibleFieldOrder = List(['fld2'])

    const fields = visibleFieldOrder.map(id => {
        return state.getIn(['fieldsById', id])
    })

    return {
        name: state.getIn(['recordsById', props.id, 'cells', 'fld1', 'text']) || 'Untitled',
        visibleFieldOrder: visibleFieldOrder.toJS(),
        fields: fields.toJS(),
        data: state.getIn(['recordsById', props.id]).toJS()
    }
})(RecordListItem)

const cellDataGetter = ({id, data}) => {
    return data.cells[id]
}

export default ({id, onClick}) => (
    <ConnectedRecordListItem
        id={id}
        fieldRenderer={fieldRenderer}
        cellDataGetter={cellDataGetter}
        onClick={onClick}
    />
)