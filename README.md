# ![LinkToAnotherRecordField](https://user-images.githubusercontent.com/44801418/48109947-2a66c380-e27c-11e8-864a-c77e7502d98a.png) LinkToAnotherRecordField

[![npm package][npm-badge]][npm]

Used for linking to a foreign record.	

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| linkMultiple | Boolean | ✓ | Whether it should allow linking more than one record |
| fields | Array | ✓ | List of the fields that need to be displayed alongside the linked records. |
| records | Array | ✓ | List of all the linked records |
| onSearch | Function | ✓ | Callback invoked whenever a user searches for a record to link: `({id: string, query: string}): Promise<Record[]>` |
| onLink | Function |  | Callback invoked whenever a record get's added to the selection: `({id: string, recordId: string}): void` |
| onUnlink | Function |  | Callback invoked whenever a record get's removed from the selection: `({id: string, recordId: string}): void` |
| onClear | Function |  | Callback invoked whenever all records get cleared from the selection: `({id: string}): void` |
| onSort | Function |  | Callback invoked whenever one of the selected records get's sorted: `({id: string, recordId: string, targetIndex: number}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/link-to-another-record-field.svg
[npm]: https://www.npmjs.org/package/@cmds/link-to-another-record-field
