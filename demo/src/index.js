import React, { Component } from 'react'
import { Canvas, Heading, Paragraph, Box } from '@pndr/demo-utils'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'emotion'
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
        margin: 0;
    }
`

class Demo extends React.Component {

    render() {

        return (
            <Canvas>
                <Heading>Record Detail Context</Heading>
                <Paragraph>
                    With linked records and editor role
                </Paragraph>
                <Box>
                    <Provider store={store2}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'editor'}
                        />
                    </Provider>
                </Box>
                <Paragraph>
                    With linked records and read only role
                </Paragraph>
                <Box>
                    <Provider store={store2}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Paragraph>
                    With no linked records and read only role
                </Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Paragraph>Max amount of linked records</Paragraph>
                <Box>
                    <Provider store={store3}>
                        <Example
                            linkMultiple={false}
                            contextId={'recordDetail'}
                            roleId={'editor'}
                        />
                    </Provider>
                </Box>
                <Paragraph>No linked records</Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'editor'}
                        />
                    </Provider>
                </Box>
                <Heading>Record Gallery Card Context</Heading>
                <Paragraph>With linked records and read only role</Paragraph>
                <Box>
                    <Provider store={store2}>
                        <Example
                            contextId={'recordGalleryCard'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Paragraph>With no linked records and read only role</Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordGalleryCard'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Heading>Record List Item Context</Heading>
                <Paragraph>With linked records and read only role</Paragraph>
                <Box>
                    <Provider store={store2}>
                        <Example
                            contextId={'recordListItem'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Paragraph>With no linked records and read only role</Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordListItem'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
            </Canvas>
        )
    }
}

render(<Demo />, document.querySelector('#demo'))
