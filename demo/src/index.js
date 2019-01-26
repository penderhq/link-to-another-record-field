import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {css, injectGlobal} from 'emotion'
import Example from './Example'

import initialState1 from './services/initialState1'
import initialState2 from './services/initialState2'
import createStore from './services/createStore'

const store1 = createStore(initialState1)
const store3 = createStore(initialState1)
const store2 = createStore(initialState2)

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

class Demo extends React.Component {

    render() {

        return (
            <div>
                <h1>
                    LinkToAnotherRecordField Demo
                </h1>
                <h2>With linked records</h2>
                <Context contextId={'recordDetail'} roleId={'editor'}/>
                <Provider store={store2}>
                    <Example
                        contextId={'recordDetail'}
                        roleId={'editor'}
                    />
                </Provider>
                <Context contextId={'recordDetail'} roleId={'readOnly'}/>
                <Provider store={store2}>
                    <Example
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                    />
                </Provider>
                <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
                <Provider store={store2}>
                    <Example
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                    />
                </Provider>
                <Context contextId={'recordListItem'} roleId={'readOnly'}/>
                <Provider store={store2}>
                    <Example
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                    />
                </Provider>
                <h2>Max amount of linked records</h2>
                <Context contextId={'recordDetail'} roleId={'editor'}/>
                <Provider store={store3}>
                    <Example
                        linkMultiple={false}
                        contextId={'recordDetail'}
                        roleId={'editor'}
                    />
                </Provider>
                <h2>No linked records</h2>
                <Context contextId={'recordDetail'} roleId={'editor'}/>
                <Provider store={store1}>
                    <Example
                        contextId={'recordDetail'}
                        roleId={'editor'}
                    />
                </Provider>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
