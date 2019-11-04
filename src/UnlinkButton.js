import React from 'react'
import { css } from 'emotion'
import Button from '@pndr/button'
import icons from './icons'

export default ({ onClick }) => (
    <div
        className={css`
            position: absolute;
            top: 8px;
            right: 8px;
        `}
    >
        <Button
            size={'sm'}
            icon={icons.unlink}
            onClick={onClick}
        />
    </div>
)