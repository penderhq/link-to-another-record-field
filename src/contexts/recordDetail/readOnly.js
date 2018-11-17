import React from 'react'
import {css} from 'emotion'
import RecordListItem from './../../RecordListItem'

export default class LinkToAnotherRecordField extends React.Component {

    render() {

        const {records, visibleFieldOrder, fields, fieldRenderer} = this.props

        return (
            <div
                className={css`
                `}
            >
                {records.map(record => (
                    <div
                        className={css`
                            margin-bottom: 8px;
                        `}
                    >
                        <RecordListItem
                            recordId={record.id}
                            name={record.name}
                            visibleFieldOrder={visibleFieldOrder}
                            fields={fields}
                            fieldRenderer={fieldRenderer}
                        />
                    </div>
                ))}
            </div>
        )
    }
}