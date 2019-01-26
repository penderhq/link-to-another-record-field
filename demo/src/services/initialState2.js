import {fromJS} from 'immutable'

export default fromJS({
    recordsById: {
        'rec1': {
            id: 'rec1',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'Luke Skywalker'
                },
                'fld2': {
                    id: 'fld2',
                    checked: true
                }
            }
        },
        'rec2': {
            id: 'rec2',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'Leia Organa'
                },
                'fld2': {
                    id: 'fld2',
                    checked: false
                }
            }
        },
        'rec3': {
            id: 'rec3',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'Darth Vader'
                },
                'fld2': {
                    id: 'fld2',
                    checked: true
                }
            }
        },
        'rec4': {
            id: 'rec4',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'R2-D2'
                },
                'fld2': {
                    id: 'fld2',
                    checked: false
                }
            }
        },
        'rec5': {
            id: 'rec5',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'Owen Lars'
                },
                'fld2': {
                    id: 'fld2',
                    checked: true
                }
            }
        },
        'rec6': {
            id: 'rec6',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'Obi-Wan Kenobi'
                },
                'fld2': {
                    id: 'fld2',
                    checked: true
                }
            }
        },
        'rec7': {
            id: 'rec7',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'Beru Whitesun lars'
                },
                'fld2': {
                    id: 'fld2',
                    checked: true
                }
            }
        },
        'rec8': {
            id: 'rec8',
            cells: {
                'fld1': {
                    id: 'fld1',
                    text: 'Biggs Darklighter'
                },
                'fld2': {
                    id: 'fld2',
                    checked: true
                }
            }
        },
    },
    tablesById: {
        'tbl1': {
            id: 'tbl1',
            name: 'Tasks',
            records: [
                'rec1',
                'rec2',
                'rec3',
                'rec4',
                'rec5',
                'rec6',
                'rec7',
                'rec8',
            ]
        }
    },
    fieldsById: {
        'fld1': {
            id: 'fld1',
            name: 'Name',
            typeId: 'singleLineText'
        },
        'fld2': {
            id: 'fld2',
            name: 'Checkbox',
            typeId: 'checkbox'
        }
    },
    tables: [],
    records: [
        'rec1',
        'rec2',
        'rec3'
    ]
})