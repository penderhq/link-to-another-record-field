import React from 'react'
import PropTypes from 'prop-types'
import RecordDetail from './contexts/recordDetail'
import RecordGalleryCard from './contexts/recordGalleryCard'
import defaultEmptyRenderer from './defaultEmptyRenderer'

export default class LinkToAnotherRecordField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        recordCount: PropTypes.number,
        recordGetter: PropTypes.func.isRequired,
        recordRenderer: PropTypes.func.isRequired,
        onRecordClick: PropTypes.func,
        onRecordUnlink: PropTypes.func
    }

    static defaultProps = {
        recordCount: 0
    }

    render() {

        const {contextId, roleId} = this.props
        const emptyRenderer = this.props.emptyRenderer || defaultEmptyRenderer

        if (contextId === 'recordDetail') {

            return (
                <RecordDetail
                    {...this.props}
                    emptyRenderer={emptyRenderer}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                    emptyRenderer={emptyRenderer}
                />
            )
        }

        if (contextId === 'recordListItem' && roleId === 'readOnly') {

            return (
                <RecordGalleryCard
                    {...this.props}
                    emptyRenderer={emptyRenderer}
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