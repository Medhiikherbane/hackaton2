import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import './Magasin.css';


const Magasin = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch('/produits.json')
      .then(response => response.json())
      .then(data => {
        console.log('Données récupérées:', data);
        setProduits(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  const ajouterAuPanier = (id) => {
    console.log(`Produit avec l'id ${id} ajouté au panier`);
    
    const produit = produits.find(p => p.id === id);
    if (!produit) return;

    const savedArticles = localStorage.getItem('panier');
    let articles = savedArticles ? JSON.parse(savedArticles) : [];

    const articleIndex = articles.findIndex(article => article.id === id);
    if (articleIndex > -1) {
      articles[articleIndex].quantite += 1;
    } else {
      articles.push({ ...produit, quantite: 1 });
    }

    localStorage.setItem('panier', JSON.stringify(articles));
  };

  return (
    <div className="magasin">
      <Navbar />
        <div className='header'>
            <h1>Pigeon Shop</h1>
            <Link to="/Panier" type="button">
                <button type="button" className="go-panier">
                Voir mon panier
                </button>
            </Link>
        </div>
      <div className="produits-container">
        {produits.map((produit) => (
          <Product
            key={produit.id}
            product={produit}
            addToCart={() => ajouterAuPanier(produit.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Magasin;