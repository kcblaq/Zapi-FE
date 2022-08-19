import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination } from '@mui/material';
import React, { useState } from 'react';
import{ TABLEHADING, ROWS } from '../testdata'

const DataTable: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>{TABLEHADING.map((heading) => (
                <TableCell className="tableCell">{heading}</TableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell className="tableCell">{row.time}</TableCell>
                <TableCell className="tableCell">{row.version}</TableCell>
                <TableCell className="tableCell">{row.endpoint}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">{row.location}</TableCell>
                <TableCell className="tableCell">{row.status}</TableCell>
                <TableCell className="tableCell">{row.latency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={ROWS.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default DataTable