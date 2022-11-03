import React from 'react';
import { AdminTable } from '../../components/Admin/AdminTable/AdminTable';
import { useFetchOrders } from '../../utilities';

const AdminOrdersPage: React.FC = (props) => {
  const orderData = useFetchOrders();

  return (
    <>
      <AdminTable orders={orderData?.getOrders} />
    </>
  );
};

export default AdminOrdersPage;
