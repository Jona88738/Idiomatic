import React, { useState, useEffect } from 'react';

const memoramaData = [
  { id: 1, src: 'image1.png', matched: false },
  { id: 2, src: 'image2.png', matched: false },
  { id: 3, src: 'image3.png', matched: false },
  { id: 4, src: 'image4.png', matched: false },
  { id: 5, src: 'image1.png', matched: false },
  { id: 6, src: 'image2.png', matched: false },
  { id: 7, src: 'image3.png', matched: false },
  { id: 8, src: 'image4.png', matched: false },
];

function Memorama() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  // Barajar las cartas al iniciar el juego
  useEffect(() => {
    const shuffledCards = [...memoramaData].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  // Función para manejar cuando una carta es clickeada
  const handleCardClick = (card, index) => {
    if (flippedCards.length === 2) return; // Evita girar más de dos cartas al mismo tiempo
    if (flippedCards.includes(index) || card.matched) return; // Evita girar cartas ya giradas o emparejadas

    setFlippedCards((prevFlipped) => [...prevFlipped, index]);

    // Comprobar si las cartas seleccionadas son iguales
    if (flippedCards.length === 1) {
      const firstCardIndex = flippedCards[0];
      if (cards[firstCardIndex].src === card.src) {
        setCards((prevCards) =>
          prevCards.map((item, i) =>
            i === firstCardIndex || i === index ? { ...item, matched: true } : item
          )
        );
        setMoves(moves + 1);
      } else {
        setTimeout(() => {
          setFlippedCards([]); // Si no coinciden, se vuelven a voltear
        }, 1000);
      }
    }
  };

  // Comprobar si el juego ha terminado
  const isGameOver = cards.every(card => card.matched);

  return (
    <div>
      <h1>Memorama</h1>
      <h2>Movimientos: {moves}</h2>
      {isGameOver && <h2>¡Ganaste!</h2>}
      <div style={styles.grid}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => handleCardClick(card, index)}
          >
            <div style={styles.cardContent}>
              {flippedCards.includes(index) || card.matched ? (
                <img src={card.src} alt="card" style={styles.cardImage} />
              ) : (
                <div style={styles.cardBack}>?</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 100px)',
    gridGap: '10px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  card: {
    width: '100px',
    height: '100px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cardContent: {
    width: '90%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardBack: {
    width: '100%',
    height: '100%',
    backgroundColor: '#46467a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '30px',
  },
};

export default Memorama;
