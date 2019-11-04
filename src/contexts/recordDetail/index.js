import React from 'react'
import times from 'lodash/times'
import { css } from 'emotion'
import Button from '@pndr/button'
import icons from '../../icons'

const EmptyState = ({ children }) => (
    <div
        className={css`
            background: #f9f9f9;
            border-radius: 6px;
            padding: 30px;
            text-align: center;
            @media (min-width: 720px) {
                padding-top: 50px;
                padding-bottom: 50px;
            }
        `}
    >
        <div
            className={css`
                color: #000;
                font-size: 16px;
            `}
        >
            {children}
        </div>
    </div>
)

export default class LinkToAnotherRecordField extends React.Component {

    render() {

        const { recordCount, recordGetter, recordRenderer, roleId, enableLinkButton } = this.props

        return (
            <div>
                {enableLinkButton && roleId === 'editor' ? (
                    <div
                        className={css`
                            margin-bottom: 24px;
                        `}
                    >
                        <Button
                            size={'sm'}
                            icon={icons.plus}
                            onClick={this.handleSelect}
                        >
                            {this.props.linkButtonLabel}
                        </Button>
                    </div>
                ) : null}
                {recordCount ? (
                    <div>
                        {times(recordCount).map(index => (
                            <div
                                key={index}
                                className={css`
                                    margin-bottom: 24px;
                                    &:last-of-type {
                                        margin-bottom: 0;
                                    }
                                `}
                            >
                                {recordRenderer({
                                    index,
                                    recordData: recordGetter({ index }),
                                    roleId,
                                    onClick: this.handleClick,
                                    onUnlink: this.handleUnlink
                                })}
                            </div>
                        ))}
                    </div>
                ) : this.props.roleId === 'editor' ? (
                    <EmptyState>
                        {this.props.linkedRecordsEmptyMessage}
                    </EmptyState>
                ) : this.props.emptyRenderer()}
            </div>
        )
    }

    handleClick = ({ id }) => {

        if (this.props.onRecordClick) {

            this.props.onRecordClick({
                id: this.props.id,
                recordId: id
            })
        }
    }

    handleUnlink = ({ id }) => {

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