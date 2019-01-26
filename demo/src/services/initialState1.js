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
        }
    },
    tablesById: {
        'tbl1': {
            id: 'tbl1',
            name: 'Tasks',
            records: [
                'rec1',
                'rec2',
                'rec3'
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
    ]
})