import React from 'react';
import { AdminContentInputForm } from '../../components';
import { useFetchCategories } from '../../utilities';

const AdminContentPage: React.FC = () => {
  // Fetch categories
  const data = useFetchCategories();

  return (
    <>
      <AdminContentInputForm catData={data} />
    </>
  );
};

export default AdminContentPage;
