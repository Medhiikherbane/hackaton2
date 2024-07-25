import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Panier() {
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    const articlesPanier = JSON.parse(localStorage.getItem("panier")) || [];
    setPanier(articlesPanier);
  }, []);

  const augmenterQuantite = (id) => {
    const panierMisAJour = panier.map((article) => {
      if (article.id === id) {
        const quantite = article.quantite + 1;
        return { ...article, quantite: quantite };
      }
      return article;
    });

    setPanier(panierMisAJour);
    localStorage.setItem("panier", JSON.stringify(panierMisAJour));
  };

  const diminuerQuantite = (id) => {
    const panierMisAJour = panier
      .map((article) => {
        if (article.id === id) {
          const quantite = article.quantite - 1;
          if (quantite > 0) {
            return { ...article, quantite: quantite };
          }
        }
        return article;
      })
      .filter((article) => article.quantite > 0);

    setPanier(panierMisAJour);
    localStorage.setItem("panier", JSON.stringify(panierMisAJour));
  };

  const viderPanier = () => {
    setPanier([]);
    localStorage.removeItem("panier");
  };

  // Fonction pour calculer le total du panier
  const calculerTotal = () => {
    return panier.reduce((total, article) => {
      const prixNumerique = parseFloat(article.prix.replace(' deniers', ''));
      return total + prixNumerique * article.quantite;
    }, 0);
  };

  const total = calculerTotal();

  return (
    <div className="panier-contenu">
      <h1 className="titre-panier">Mon Panier</h1>
      <Link to="/Magasin" type="button">
        <button type="button" className="btn-panier">
          Continuez mes achats
        </button>
      </Link>

      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="article-liste">
          <ul>
            {panier.map((article) => (
              <li key={article.id} className="li-panier">
                {article.nom} - Quantité: {article.quantite} - Prix unitaire: {article.prix}
                <button
                  type="button"
                  onClick={() => augmenterQuantite(article.id)}
                  className="btn-plus-moins"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => diminuerQuantite(article.id)}
                  className="btn-plus-moins"
                >
                  -
                </button>
              </li>
            ))}
          </ul>
          <div>
            <p>Total: {total} deniers</p>
            <button type="button" onClick={viderPanier} className="btn-panier">
              Vider le panier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panier;