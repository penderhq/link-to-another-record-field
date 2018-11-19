import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'

export default class RecordListItem extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        fields: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        visibleFieldOrder: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        fieldRenderer: PropTypes.func,
        onClick: PropTypes.func
    }

    static defaultProps = {
        visibleFieldOrder: [],
        fields: []
    }

    render() {

        const {
            id,
            name,
            fieldRenderer,
            visibleFieldOrder,
            recordId,
            onClick
        } = this.props

        const fieldsById = this.props.fields.reduce((result, field) => {
            result[field.id] = field
            return result
        }, {})

        const fields = visibleFieldOrder.map(id => {
            return fieldsById[id]
        })

        return (
            <div
                className={cx(
                    css`
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        cursor: pointer;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        background-color: #fff;
                        border-radius: 6px;
                        box-shadow: 0 0 0 1px rgba(114,121,133,.3);
                    `,
                    onClick ? css`
                        &:hover {
                            box-shadow: 0 0 0 1px rgba(114,121,133,.5);
                        }
                    ` : null
                )}
                onClick={e => {

                    if (onClick) {
                        onClick({
                            e,
                            id
                        })
                    }
                }}
            >
                <div
                    className={css`
                        -webkit-flex: 1 1 auto;
                        -ms-flex: 1 1 auto;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        padding: 16px;
                        width: 100%;
                    `}
                >
                    <div
                        className={css`
                            display: -webkit-inline-box;
                            display: -webkit-inline-flex;
                            display: -ms-inline-flexbox;
                            display: inline-flex;
                            width: 100%;
                        `}
                    >
                        <div
                            className={cx(
                                css`
                                    width: 100%;
                                    font-size: 16px;
                                    max-width: 100%;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    font-weight: 600;
                                `,
                                fields.length ? css`margin-bottom: 8px` : null
                            )}
                        >
                            {name}
                        </div>
                    </div>
                    {fields.length ? (
                        <div
                            className={css`
                            overflow: hidden;
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                        `}
                        >
                            {fields.map((field, index) => (
                                <div
                                    key={field.id}
                                    className={css`
                                    -webkit-flex: none;
                                    -ms-flex: none;
                                    flex: none;
                                    width: 126px;
                                    overflow: hidden;
                                    padding-right: 8px;
                                `}
                                >
                                    <div
                                        className={css`
                                        font-size: 12px;
                                        max-width: 100%;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        line-height: 1.5;
                                        margin-bottom: 2px;
                                        font-weight: 600;
                                    `}
                                    >
                                        {field.name}
                                    </div>
                                    <div
                                        className={css`
                                        width: 100%;
                                        max-width: 100%;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        line-height: 1.5;
                                        -webkit-align-items: center;
                                        -webkit-box-align: center;
                                        -ms-flex-align: center;
                                        align-items: center;
                                        display: -webkit-inline-box;
                                        display: -webkit-inline-flex;
                                        display: -ms-inline-flexbox;
                                        display: inline-flex;
                                        cursor: pointer;
                                        height: 24px;
                                    `}
                                    >
                                        {fieldRenderer({
                                            index,
                                            id,
                                            field,
                                            props: {
                                                id: field.id,
                                                contextId: 'recordListItem',
                                                roleId: 'readOnly'
                                            }
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}