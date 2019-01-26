# ![LinkToAnotherRecordField](https://user-images.githubusercontent.com/44801418/48109947-2a66c380-e27c-11e8-864a-c77e7502d98a.png) LinkToAnotherRecordField

[![npm package][npm-badge]][npm]

Used for linking to a foreign record.	

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| recordCount | Number | ✓ | Number of records linked |
| recordGetter | Function | ✓ | Callback responsible for returning a data row given an index. `({index: int})` |
| recordRenderer | Function | ✓ | Responsible for rendering a linked record. `({key: int, onClick: fn, onUnlink: fn, recordData: any, roleId: string}): jsx`|
| onRecordClick | Function |  | Callback invoked whenever a linked record get's clicked: `({id: string, recordId: string}): void` |
| onRecordUnlink | Function |  | Callback invoked whenever the unlink button is clicked for a linked record.: `({id: string, recordId: string}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/link-to-another-record-field.svg
[npm]: https://www.npmjs.org/package/@cmds/link-to-another-record-field
