import React from 'react';
import { GET_ALL_CATEGORIES } from '../../graphql/categories';
import { CategoryData } from '../../interfaces';
import { useQuery } from '@apollo/client';
import { AdminContentInputForm } from '../../components';

const AdminContentPage: React.FC = () => {
  // Fetch categories
  const { loading, error, data } = useQuery<CategoryData>(
    GET_ALL_CATEGORIES,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There are no categories</p>;

  return (
    <>
      <AdminContentInputForm catData={data} />
    </>
  );
};

export default AdminContentPage;
