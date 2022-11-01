import React from 'react';
import { DescriptionBox, ProductCard } from '../../components';
import { useFetchProducts } from '../../utilities';

const AdminContentApprovalPage: React.FC = () => {
  // Fetch products
  const data = useFetchProducts();

  // Search for unapproved products
  const unapprovedProduct = data?.Items.filter(
    (prod) => !prod.approved
  );

  return (
    <>
      <h2>Content approval</h2>
      <ul className="product-container">
        <DescriptionBox
          text={
            "Approve the submitted product to display it in the webstore. It's possible to view the product details by clicking on the product. The product is not visible in the webstore until it is approved."
          }
        />
        {unapprovedProduct?.map((item, i) => (
          <ProductCard key={i} item={item} i={i} />
        ))}
      </ul>
    </>
  );
};

export default AdminContentApprovalPage;
