import React from 'react'
import times from 'lodash/times'
import {css} from 'emotion'
import Button from '@cmds/button'
import icons from '../../icons'

export default class LinkToAnotherRecordField extends React.Component {

    render() {

        const {recordCount, recordGetter, recordRenderer, roleId, enableLinkButton} = this.props

        return (
            <div>
                {enableLinkButton && roleId === 'editor' ? (
                    <div
                        className={css`
                            margin-bottom: 24px;
                        `}
                    >
                        <Button
                            icon={icons.plus}
                            onClick={this.handleSelect}
                        >
                            Link to a record
                        </Button>
                    </div>
                ) : null}
                {recordCount ? (
                    <div>
                        {times(recordCount).map(index => (
                            recordRenderer({
                                key: index,
                                index,
                                recordData: recordGetter({index}),
                                roleId,
                                onClick: this.handleClick,
                                onUnlink: this.handleUnlink
                            })
                        ))}
                    </div>
                ) : (
                    <div
                        className={css`
                            opacity: 0.7;
                        `}
                    >
                        No linked records
                    </div>
                )}
            </div>
        )
    }

    handleClick = ({id}) => {

        if (this.props.onRecordClick) {

            this.props.onRecordClick({
                id: this.props.id,
                recordId: id
            })
        }
    }

    handleUnlink = ({id}) => {

        if (this.props.onRecordUnlink) {

            this.props.onRecordUnlink({
                id: this.props.id,
                recordId: id
            })
        }
    }

    handleSelect = () => {

        if (this.props.onSelect) {

            this.props.onSelect({
                id: this.props.id
            })
        }
    }
}