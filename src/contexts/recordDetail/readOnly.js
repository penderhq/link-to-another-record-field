import React from 'react'
import {css} from 'emotion'
import RecordListItem from './../../RecordListItem'

export default class LinkToAnotherRecordField extends React.Component {

    render() {

        const {
            records,
            visibleFieldOrder,
            fields,
            fieldRenderer,
            onRecordClick
        } = this.props

        if (!records || !records.length) {
            return null
        }

        return (
            <div>
                {records.map(record => (
                    <div
                        key={record.id}
                        className={css`
                            margin-bottom: 8px;
                        `}
                    >
                        <RecordListItem
                            id={record.id}
                            name={record.name}
                            visibleFieldOrder={visibleFieldOrder}
                            fields={fields}
                            fieldRenderer={fieldRenderer}
                            onClick={onRecordClick}
                        />
                    </div>
                ))}
            </div>
        )
    }
}