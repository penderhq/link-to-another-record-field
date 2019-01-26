import React from 'react'
import {connect} from 'react-redux'
import ForeignRecordSelector from '@cmds/foreign-record-selector'
import Portal from './Portal'
import Fader from './Fader'
import fieldRenderer from "./fieldRenderer";
import {List} from 'immutable'
import RecordListItem from '@cmds/record-list-item'

const ConnectedRecordListItem = connect((state, props) => {

    const visibleFieldOrder = List(['fld2'])

    const fields = visibleFieldOrder.map(id => {
        return state.getIn(['fieldsById', id])
    })

    return {
        name: state.getIn(['recordsById', props.id, 'cells', 'fld1', 'text']) || 'Untitled',
        data: state.getIn(['recordsById', props.id]).toJS(),
        visibleFieldOrder: visibleFieldOrder.toJS(),
        fields: fields.toJS()
    }
})(RecordListItem)

const cellGetter = ({id, data}) => data.cells[id]

class ForeignRecordSelectorDialog extends React.Component {

    state = {
        query: ''
    }

    render() {

        return (
            <Portal>
                <Fader>
                    <ForeignRecordSelector
                        id={'frs1'}
                        records={this.props.records.toJS()}
                        query={this.state.query}
                        loading={false}
                        noResults={this.props.records.isEmpty()}
                        createRecordName={this.state.query}
                        onQueryChange={this.handleQueryChange}
                        onCreateRecordClick={this.handleCreateRecord}
                        onCloseClick={this.props.onClose}
                        onSelect={this.props.onSelect}
                        recordRenderer={this.recordRenderer}
                    />
                </Fader>
            </Portal>
        )
    }

    recordRenderer = ({id, onClick}) => (
        <ConnectedRecordListItem
            id={id}
            fieldRenderer={fieldRenderer}
            cellDataGetter={cellGetter}
            onClick={onClick}
        />
    )

    handleCreateRecord = () => {

        this.props.onCreateRecord({
            name: this.state.query
        })
    }

    handleQueryChange = ({query}) => {

        this.setState({query})
    }
}

export default connect((state, props) => {

    return {
        records: state.getIn(['tablesById', 'tbl1', 'records']).filter(id => {
            return state.get('records').includes(id) === false
        })
    }
})(ForeignRecordSelectorDialog)