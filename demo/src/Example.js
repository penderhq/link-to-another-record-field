import React from 'react'
import {css} from 'emotion'
import uniqueId from 'lodash/uniqueId'
import sample from 'lodash/sample'
import {connect} from 'react-redux'
import LinkToAnotherRecordField from '../../src'
import UnlinkButton from '../../src/UnlinkButton'
import ForeignRecordSelectorDialog from './ForeignRecordSelectorDialog'

import {List} from 'immutable'
import RecordListItem from '@pndr/record-list-item'
import fieldRenderer from './fieldRenderer'

const ConnectedRecordListItem = connect((state, props) => {

    const visibleFieldOrder = List(['fld2'])

    const fields = visibleFieldOrder.map(id => {
        return state.getIn(['fieldsById', id])
    })

    return {
        name: state.getIn(['recordsById', props.data.id, 'cells', 'fld1', 'text']) || 'Untitled',
        visibleFieldOrder: visibleFieldOrder.toJS(),
        fields: fields.toJS()
    }
})(RecordListItem)

const cellGetter = ({id, data}) => data.cells[id]

class Example extends React.Component {

    static defaultProps = {
        linkMultiple: true
    }

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
                    enableLinkButton={this.props.records.isEmpty() || this.props.linkMultiple}
                    recordCount={this.props.records.count()}
                    recordGetter={this.recordGetter}
                    recordRenderer={this.recordRenderer}
                    onRecordClick={({recordId}) => alert('clicked record: ' + recordId)}
                    onSelect={this.handleSelectStart}
                    onRecordUnlink={this.handleUnlink}
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

    recordRenderer = ({onClick, onUnlink, recordData, roleId}) => (
        <div
            className={css`
                position: relative;
            `}
        >

            <ConnectedRecordListItem
                id={recordData.id}
                data={recordData}
                fieldRenderer={fieldRenderer}
                cellDataGetter={cellGetter}
                onClick={onClick}
            />
            {roleId === 'editor' ? (
                <UnlinkButton
                    onClick={() => onUnlink({id: recordData.id})}
                />
            ) : null}
        </div>
    )

    recordGetter = ({index}) => {

        const id = this.props.records.get(index)

        return {
            id,
            name: this.props.recordsById.getIn([id, 'cells', 'fld1', 'text']) || 'Untitled',
            cells: this.props.recordsById.getIn([id, 'cells']).toJS()
        }
    }

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

    handleUnlink = ({recordId}) => {

        this.props.dispatch({
            type: 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_UNLINKING_RECORD',
            payload: {
                recordId
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