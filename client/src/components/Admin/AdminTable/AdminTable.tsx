import React from 'react';
import { Order } from '../../../interfaces';
import { FormatCurrency } from '../../../utilities';

// Styles
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Tooltip,
} from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';

type AdminTableProps = {
  orders: Order | undefined;
};

export const AdminTable = ({ orders }: AdminTableProps) => {
  return (
    <>
      <h1>Orders</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => {
              return (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.user.userName}</TableCell>

                  {/* // Status logic */}
                  {order.delivered ? (
                    <TableCell>
                      <Tooltip
                        title="Delivered"
                        arrow
                        placement="bottom"
                      >
                        <GppGoodOutlinedIcon color="disabled" />
                      </Tooltip>
                    </TableCell>
                  ) : order.shipped ? (
                    <TableCell>
                      <Tooltip
                        title="Shipped"
                        arrow
                        placement="bottom"
                      >
                        <LocalShippingOutlinedIcon color="primary" />
                      </Tooltip>
                    </TableCell>
                  ) : (
                    <TableCell>
                      <Tooltip
                        title="Attention required"
                        arrow
                        placement="bottom"
                      >
                        <GppMaybeOutlinedIcon color="warning" />
                      </Tooltip>
                    </TableCell>
                  )}

                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>
                    {FormatCurrency(order.priceTotal)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
