import React from 'react'
import times from 'lodash/times'
import {css} from 'emotion'
import icons from '../../icons'

export default class LinkToAnotherRecordField extends React.Component {

    render() {

        const {recordCount, recordGetter, recordRenderer, roleId, enableLinkButton} = this.props

        return (
            <div>
                {enableLinkButton && roleId === 'editor' ? (
                    <button
                        type={'button'}
                        className={css`
                        background: rgba(0, 0, 0, 0.1);
                        padding: 8px 16px;
                        font-weight: 700;
                        border: none;
                        cursor: pointer;
                        border-radius: 4px;
                        margin-bottom: 8px;
                        &:active {
                            background-color: rgba(0,0,0,0.2);
                        }
                    `}
                        onClick={this.handleSelect}
                    >
                        <div
                            className={css`
                            display: flex;
                            align-items: center;
                        `}
                        >
                            {icons.plus({
                                height: 12,
                                className: css`margin-right: 8px;`
                            })}
                            Link to a record
                        </div>
                    </button>
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
                    <div>
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