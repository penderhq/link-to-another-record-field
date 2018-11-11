import React from 'react'
import PropTypes from 'prop-types'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class LinkToAnotherRecordField extends React.Component {

    static propTypes = {
        records: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string
            })
        )
    }

    render() {

        const {contextId} = this.props

        if (contextId === 'recordGalleryCard') {

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