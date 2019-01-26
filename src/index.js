import React from 'react'
import PropTypes from 'prop-types'
import RecordDetail from './contexts/recordDetail'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class LinkToAnotherRecordField extends React.Component {

    static propTypes = {
        // id: PropTypes.string.isRequired,
        // contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        // roleId: PropTypes.oneOf(['editor', 'readOnly']),
        // records: PropTypes.arrayOf(
        //     PropTypes.shape({
        //         id: PropTypes.string.isRequired,
        //         name: PropTypes.string
        //     })
        // ),
        // fields: PropTypes.arrayOf(
        //     PropTypes.shape({
        //         id: PropTypes.string.isRequired,
        //         name: PropTypes.string.isRequired
        //     })
        // ),
        // visibleFieldOrder: PropTypes.arrayOf(
        //     PropTypes.string.isRequired
        // ),
        // fieldRenderer: PropTypes.func,
        // onRecordClick: PropTypes.func,
        // onLink: PropTypes.func,
        // onUnlink: PropTypes.func,
        // onClear: PropTypes.func,
        // onSort: PropTypes.func
    }

    render() {

        const {contextId, roleId} = this.props

        if (contextId === 'recordDetail') {

            return (
                <RecordDetail
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordListItem' && roleId === 'readOnly') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}