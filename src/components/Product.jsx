import React from 'react';

const Product = ({ product, addToCart }) => {
  if (!product) {
    return <div>Produit non disponible</div>;
  }

  const { nom, img, description, prix } = product;

  return (
    <div className="product">
        <div className='img-article'>
            <img src={img} alt={nom} className="product-img" />
        </div>
        <h2 className='h2-article'>{nom}</h2>
        <p className='p-article'>{description}</p>
        <p className='p-article'>Prix: {prix}</p>
        <button onClick={addToCart} className='btn-panier'>
            Ajouter au panier
        </button>
    </div>
  );
};

export default Product;