import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { border } from '@material-ui/system';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: "14.27%"
  },
  body: {
    fontSize: 14,
    borderRight: "1px solid rgb(212, 212, 212)",
    cursor: "pointer",
    width: "14.27%",

  },

}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },


  },
}))(TableRow);

function createData(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

const rows = [

  createData('08:00', '08:00', '08:00', '08:00', '08:00', '08:00', '08:00'),
  createData('09:00', '09:00', '09:00', '09:00', '09:00', '09:00', '09:00'),
  createData('10:00', '10:00', '10:00', '10:00', '10:00', '10:00', '10:00'),
  createData('11:00', '11:00', '11:00', '11:00', '11:00', '11:00', '11:00'),
  createData('12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00'),
  createData('13:00', '13:00', '13:00', '13:00', '13:00', '13:00', '13:00'),
  createData('14:00', '14:00', '14:00', '14:00', '14:00', '14:00', '14:00'),
  createData('15:00', '15:00', '15:00', '15:00', '15:00', '15:00', '15:00'),
  createData('16:00', '16:00', '16:00', '16:00', '16:00', '16:00', '16:00'),
  createData('17:00', '17:00', '17:00', '17:00', '17:00', '17:00', '17:00'),
  createData('18:00', '18:00', '18:00', '18:00', '18:00', '18:00', '18:00'),
  createData('19:00', '19:00', '19:00', '19:00', '19:00', '19:00', '19:00'),
  createData('20:00', '20:00', '20:00', '20:00', '20:00', '20:00', '20:00'),
  createData('21:00', '21:00', '21:00', '21:00', '21:00', '21:00', '21:00'),
  createData('22:00', '22:00', '22:00', '22:00', '22:00', '22:00', '22:00'),
  createData('23:00', '23:00', '23:00', '23:00', '23:00', '23:00', '23:00'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  function handleClick(e, data) {
    console.log(data.foo);
  }

  return (

    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="middle">Понедельник</StyledTableCell>
          <StyledTableCell align="middle">Вторник</StyledTableCell>
          <StyledTableCell align="middle">Среда</StyledTableCell>
          <StyledTableCell align="middle">Четверг</StyledTableCell>
          <StyledTableCell align="middle">Пятница</StyledTableCell>
          <StyledTableCell align="middle">Суббота</StyledTableCell>
          <StyledTableCell align="middle">Воскресенье</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <StyledTableRow key={row.name}>

            {/* NOTICE: id must be unique for EVERY instance */}
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.monday}</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.tuesday}</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.wednesday}</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.thursday}</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.friday}</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.saturday}</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.sunday}</ContextMenuTrigger>
            </StyledTableCell>

          </StyledTableRow>
        ))}
      </TableBody>
      <ContextMenu id="some_unique_identifier">
        <MenuItem className="head-text" data={{ foo: 'bar' }} onClick={handleClick}>
          Урок
        </MenuItem>
        <MenuItem className="body-text" data={{ foo: 'bar' }} onClick={handleClick}>
          Заблокувати
        </MenuItem>
        <MenuItem divider />
        <MenuItem className="body-text" data={{ foo: 'bar' }} onClick={handleClick}>
          Заблокувати на коден день
        </MenuItem>
      </ContextMenu>
    </Table>


  );
}