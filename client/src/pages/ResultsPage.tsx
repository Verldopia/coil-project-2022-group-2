import React from 'react';
import { useParams } from 'react-router-dom';
import { Popular, ProductCard } from '../components';
import { Lowercase, useFetchProducts } from '../utilities';

export interface IResultsProps {}

const ResultsPage: React.FC<IResultsProps> = () => {
  const { title } = useParams();
  // Fetch products
  const data = useFetchProducts();

  const result = data?.Items.filter(
    (item) =>
      (item.approved &&
        Lowercase(item.title).includes(title ?? '')) ||
      Lowercase(item.type).includes(title ?? '')
  );

  return (
    <div className="container">
      <ul className="product-container">
        {result?.[0] && (
          <p className="product__total">
            {result.length} products found.
          </p>
        )}
        {result?.[0] ? (
          result.map((item, i) => (
            <ProductCard key={item.id} item={item} i={i} />
          ))
        ) : (
          <div className="form-container">
            <p>
              There seem to be no results for '
              <strong className="bold">{title}</strong>'.
            </p>
            <p>You can search for products by their title or type.</p>
            <Popular />
          </div>
        )}
      </ul>
    </div>
  );
};

export default ResultsPage;
