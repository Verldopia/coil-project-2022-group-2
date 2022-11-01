import React from 'react';
import { useQuery } from '@apollo/client';
import { Discount } from '../../interfaces';
import { GET_DISCOUNTS } from '../../graphql/discount';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { FormatCurrency } from '../../utilities';

const AdminDiscountPage: React.FC = (props) => {
  const { loading, error, data } = useQuery<Discount>(GET_DISCOUNTS, {
    fetchPolicy: 'cache-first',
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Can't load discounts.</p>;
  console.log('🚀 - data', data);
  const discounts = data?.getAllDiscounts;

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Code</StyledTableCell>
            <StyledTableCell align="left">
              Description
            </StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">
              Times used
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {discounts &&
            discounts.map((row) => (
              <StyledTableRow key={row.code}>
                <StyledTableCell component="th" scope="row">
                  {row.code}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.discountPrice > 0
                    ? FormatCurrency(row.discountPrice)
                    : `-${row.discountPercentage}%` ?? '-'}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.timesUsed}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminDiscountPage;
