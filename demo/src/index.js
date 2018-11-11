import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import LinkToAnotherRecordField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}


class Demo extends Component {
    render() {
        return <div>
            <h1>LinkToAnotherRecord Demo</h1>
            <p>Used for linking to a foreign record.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for displaying linked records in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                    `}
                >
                    <LinkToAnotherRecordField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        records={[{
                            id: 'rec1',
                            name: 'Luke Skywalker'
                        }, {
                            id: 'rec2',
                            name: 'Leia Organa'
                        }, {
                            id: 'rec3',
                            name: 'Han Solo'
                        }, {
                            id: 'rec4',
                            name: 'Jar Jar Binks'
                        }]}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
