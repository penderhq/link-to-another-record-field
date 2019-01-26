import React from 'react'
import {connect} from 'react-redux'
import ForeignRecordSelector from '@cmds/foreign-record-selector'
import recordRenderer from './recordRenderer'
import Portal from './Portal'
import Fader from './Fader'

class ForeignRecordSelectorDialog extends React.Component {

    state = {
        records: [
            1,
            2,
            3,
            4
        ],
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
                        recordRenderer={recordRenderer}
                    />
                </Fader>
            </Portal>
        )
    }

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