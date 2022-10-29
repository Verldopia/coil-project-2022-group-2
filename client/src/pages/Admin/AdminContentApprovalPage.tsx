import { useQuery } from '@apollo/client';
import React from 'react';
import { ProductCard } from '../../components';
import { GET_ALL_PRODUCTS } from '../../graphql/products';
import { ProductsData } from '../../interfaces';

const AdminContentApprovalPage: React.FC = () => {
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There are no products</p>;

  // Search for unapproved products
  const unapprovedProduct = data?.Items.filter(
    (prod) => !prod.approved
  );

  return (
    <>
      <h2 className="form-title">Content approval</h2>
      <ul className="product-container">
        {unapprovedProduct?.map((item, i) => (
          <ProductCard key={i} item={item} i={i} />
        ))}
      </ul>
    </>
  );
};

export default AdminContentApprovalPage;
