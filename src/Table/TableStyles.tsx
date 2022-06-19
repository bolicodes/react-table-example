import { Checkbox, styled } from '@material-ui/core'
import MuiTableCell from '@material-ui/core/TableCell'
import { TableCellProps } from '@material-ui/core/TableCell/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'
import { TableRowTypeMap } from '@material-ui/core/TableRow/TableRow'

import React, { CSSProperties } from 'react'

import { cx, css } from '@emotion/css'

const tableTable = css`
  border-spacing: 0,
  border: 1px solid rgba(224, 224, 224, 1),
  width: 100%;
`;

const tableHeadRow = css`
  background-color: white;
  color: black;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  &:hover $resizeHandle{
    opacity: 1;
  }
`;

const tableHeadCell = css`
  padding: 16px 1px 16px 16px;
  font-size: 0.875rem;
  text-align: left;
  vertical-align: inherit;
  color: black;
  font-weight: 500;
  line-height: 1.5rem;
  border-right: 1px solid rgba(224, 224, 224, 1);
  &:last-child{
    border-right: none;
  }
`;

const tableRow = css`
  color: inherit;
  outline: 0;
  vertical-align: middle;
  &:hover{
    background-color: rgba(0, 0, 0, 0.07);
  }
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  &:last-child{
    border-bottom: none;
  }
  &.rowSelected{
    background-color: rgba(0, 0, 0, 0.04);
    &:hover{
      background-color: rgba(0, 0, 0, 0.07);
    }
  }
  &:active{
    cursor: pointer;
  }
`
const tableLabel = css``;
const tableCell = css`
  padding: 8px 16px;
  font-size: 0.875rem;
  text-align: left;
  font-weight: 300;
  line-height: 1.3;
  vertical-align: inherit;
  color: black;
  border-right: 1px solid rgba(224, 224, 224, 1);
  &:last-child{
    border-right: none;
  }
`;

// context menu styling
export const contextMenuStyle = css`
  padding: 10px;
  border: solid thin;
  background-color: #fff;
  border-radius: 2px;
  padding-left: 0;
  margin: 0;
  position: absolute;
  list-style: none;
  li {
    padding: 0.2em 1em;
    color: #000;
    cursor: pointer;
    &:hover {
      background-color: #f2f2f2;
    }
  }
`;


const areEqual = (prevProps: any, nextProps: any) =>
  prevProps.checked === nextProps.checked && prevProps.indeterminate === nextProps.indeterminate

type CN = { className?: string; style?: CSSProperties }

export const TableLabel: React.FC<CN> = ({ children, className, ...rest }) => {
  return (
    <div className={cx(className, tableLabel)} {...rest}>
      {children}
    </div>
  )
}

export const HeaderCheckbox = React.memo(
  styled(Checkbox)({
    fontSize: '1rem',
    margin: '-8px 0 -8px -15px',
    padding: '8px 9px',
    '& svg': {
      width: '24px',
      height: '24px',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),
  areEqual
)

export const RowCheckbox = React.memo(
  styled(Checkbox)({
    fontSize: '14px',
    margin: '-9px 0 -8px -15px',
    padding: '5px 9px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& svg': {
      width: 24,
      height: 24,
    },
  }),
  areEqual
)
