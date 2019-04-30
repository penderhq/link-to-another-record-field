import React from 'react'
import times from 'lodash/times'
import {css} from 'emotion'

const Record = ({name}) => (
    <div
        className={css`
            background-color: rgba(0,0,0,.1);
            color: #666;
            box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
            border-radius: 3px;
            padding-left: 4px;
            padding-right: 4px;
            flex: none;
            margin-right: 4px;
            align-items: center;
            max-width: 100%;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 1.5;
        `}
    >
        {name}
    </div>
)

export default class RecordGalleryCard extends React.Component {

    render() {

        const {recordCount, recordGetter, emptyRenderer} = this.props

        return (
            <div
                className={css`
                    position: relative;
                    font-size: 13px;
                    padding: 0;
                    margin: 0;
                    vertical-align: top;
                    color: #000;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                `}
            >
                <div
                    className={css`
                        position: relative;
                    `}
                >
                    <div
                        className={css`
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-flex: 1 1 auto;
                            -ms-flex: 1 1 auto;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                    >
                        {!recordCount ? emptyRenderer() : null}
                        {times(recordCount).map(index => {

                            const recordData = recordGetter({
                                index
                            })

                            return (
                                <Record
                                    key={index}
                                    name={recordData.name}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}