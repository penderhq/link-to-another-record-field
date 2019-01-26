import React from 'react'
import {css} from 'emotion'
import icons from '../../icons'

export default class LinkToAnotherRecordField extends React.Component {

    render() {

        return (
            <div>
                {this.props.roleId === 'editor' ? (
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
                {this.props.records && this.props.records.length ? (
                    <div>
                        {this.props.records.map(id => (
                            <div
                                key={id}
                                className={css`
                                    position: relative;
                                    margin-bottom: 8px;
                                `}
                            >
                                {this.props.recordRenderer({
                                    id: id
                                })}
                                {this.props.roleId === 'editor' ? (
                                    <button
                                        type="button"
                                        className={css`
                                        position: absolute;
                                        top: 8px;
                                        right: 8px;
                                        width: 25px;
                                        height: 25px;
                                        border-radius: 50%;
                                        background-color: rgba(0,0,0,0.1);
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        cursor: pointer;
                                        border: none;
                                        padding: 0;
                                        &:active {
                                            background-color: rgba(0,0,0,0.2);
                                        }
                                    `}
                                        onClick={() => this.handleUnlink({id})}
                                    >
                                        {icons.unlink({
                                            width: 15
                                        })}
                                    </button>
                                ) : null}
                            </div>
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

    handleUnlink = ({id}) => {

        if (this.props.onUnlink) {

            this.props.onUnlink({
                id
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