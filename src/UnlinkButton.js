import React from 'react'
import {css} from 'emotion'
import icons from './icons'

export default ({onClick}) => (
    <button
        type="button"
        className={css`
            position: absolute;
            top: 8px;
            right: 8px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: none;
            padding: 0;
            &:active {
                background-color: rgba(0,0,0,0.2);
            }
        `}
        onClick={onClick}
    >
        {icons.unlink({
            width: 15
        })}
    </button>
)