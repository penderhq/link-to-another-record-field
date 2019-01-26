import React from 'react'
import times from 'lodash/times'
import {css} from 'emotion'

const Record = ({name}) => (
    <div
        className={css`
            background-color: #000;
            color: #fff;
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

        const {recordCount, recordGetter} = this.props

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
                        overflow: hidden;
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
                            overflow: hidden;
                        `}
                    >
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