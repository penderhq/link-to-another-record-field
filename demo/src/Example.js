import React from 'react'
import uniqueId from 'lodash/uniqueId'
import sample from 'lodash/sample'
import {connect} from 'react-redux'
import LinkToAnotherRecordField from '../../src'
import ForeignRecordSelectorDialog from './ForeignRecordSelectorDialog'
import recordRenderer from './recordRenderer'

class Example extends React.Component {

    state = {
        selectOpen: false
    }

    render() {

        return (
            <div>
                <LinkToAnotherRecordField
                    id={'fld1'}
                    contextId={this.props.contextId}
                    roleId={this.props.roleId}
                    records={this.props.records.toJS()}
                    recordDataGetter={this.recordDataGetter}
                    recordRenderer={recordRenderer}
                    onSelect={this.handleSelectStart}
                    onUnlink={this.handleUnlink}
                />
                {this.state.selectOpen ? (
                    <ForeignRecordSelectorDialog
                        onSelect={this.handleSelectRecord}
                        onCreateRecord={this.handleCreateRecord}
                        onClose={() => this.setState({selectOpen: false})}
                    />
                ) : null}
            </div>
        )
    }

    recordDataGetter = ({id}) => ({
        id,
        name: this.props.recordsById.getIn([id, 'cells', 'fld1', 'text']) || 'Untitled'
    })

    handleCreateRecord = ({name}) => {

        this.setState({
            selectOpen: false
        })

        const id = uniqueId('rec000')

        this.props.dispatch({
            type: 'CREATE_RECORD',
            payload: {
                id,
                tableId: 'tbl1',
                cells: {
                    'fld1': {
                        text: name
                    },
                    'fld2': {
                        checked: sample([true, false])
                    }
                }
            }
        })

        this.props.dispatch({
            type: 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_LINKING_RECORD',
            payload: {
                recordId: id
            }
        })
    }

    handleUnlink = ({id}) => {

        this.props.dispatch({
            type: 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_UNLINKING_RECORD',
            payload: {
                recordId: id
            }
        })
    }

    handleSelectRecord = ({id}) => {

        this.setState({
            selectOpen: false
        })

        this.props.dispatch({
            type: 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_LINKING_RECORD',
            payload: {
                recordId: id
            }
        })
    }

    handleSelectStart = () => {

        this.setState({
            selectOpen: true
        })
    }
}

export default connect((state, props) => {
    return {
        records: state.get('records'),
        recordsById: state.get('recordsById')
    }
})(Example)