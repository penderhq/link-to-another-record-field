import React, {Component} from 'react'
import {render} from 'react-dom'
import sample from 'lodash/sample'
import {css, injectGlobal} from 'emotion'

import CheckboxField from '@cmds/checkbox-field'
import AttachmentField from '@cmds/attachment-field'
import LongTextField from '@cmds/long-text-field'
import SingleLineTextField from '@cmds/single-line-text-field'
import SingleSelectField from '@cmds/single-select-field'
import MultipleSelectField from '@cmds/multiple-select-field'
import NumberField from '@cmds/number-field'
import LinkToAnotherRecordField from '../../src'

const fieldRenderer = ({id, field, props, cellData: cell}) => {

    const renderers = {
        singleLineText: ({props, cell}) => (
            <SingleLineTextField
                {...props}
                text={cell.text}
            />
        ),
        longText: ({props, cell}) => (
            <LongTextField
                {...props}
                longText={cell.longText}
            />
        ),
        checkbox: ({props, cell}) => (
            <CheckboxField
                {...props}
                checked={cell.checked}
            />
        ),
        attachment: ({props, cell}) => (
            <AttachmentField
                {...props}
                attachments={cell.attachments}
            />
        ),
        linkToAnotherRecord: ({props, cell}) => (
            <LinkToAnotherRecordField
                {...props}
                records={cell.records}
            />
        ),
        multipleSelect: ({props, field, cell}) => (
            <MultipleSelectField
                {...props}
                optionIds={cell.optionIds}
                options={field.options.options}
                optionOrder={field.options.optionOrder}
                coloredOptions={field.options.coloredOptions}
            />
        ),
        singleSelect: ({props, field, cell}) => (
            <SingleSelectField
                {...props}
                optionId={cell.optionId}
                options={field.options.options}
                optionOrder={field.options.optionOrder}
                coloredOptions={field.options.coloredOptions}
            />
        ),
        number: ({props, field, cell}) => (
            <NumberField
                {...props}
                number={cell.number}
                allowNegativeNumbers={field.options.allowNegativeNumbers}
                numberFormatId={field.options.numberFormatId}
                precisionId={field.options.precisionId}
            />
        )
    }

    const renderer = renderers[field.typeId]

    if (!renderer) {
        throw new Error(`Renderer for typeId '${field.typeId}' not found`)
    }

    return renderer({
        id,
        field,
        props,
        cell
    })
}

export default fieldRenderer