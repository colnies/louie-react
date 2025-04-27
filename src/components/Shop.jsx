import React, { useState, useEffect } from 'react';
   import '../App.css'; // Import global styles
   import './Shop.css'; // Import shop-specific styles


   const Shop = () => {
       const products = [
           { id: 1, name: 'Tote Bag', price: 40.00, image: '../public/tote-bag.png' },
           { id: 2, name: 'T-Shirt', price: 30.00, image: '../public/tshirt.png' },
           { id: 3, name: 'Metal Cup', price: 15.00, image: '../public/metal-cup.png', sale: true },
           { id: 4, name: 'Cap', price: 15.00, image: '../public/cap.png' },
           { id: 5, name: 'Pin', price: 7.00, image: '../public/pin.png' },
           { id: 6, name: 'Notebook', price: 9.00, image: '../public/notebook.png' },
           { id: 7, name: 'Pillow Cover', price: 13.00, image: '../public/pillow-cover.png' },
       ];

       // Memory Game Logic (Copied and adapted from your game.js)
       const [gameBoard, setGameBoard] = useState([]);
       const [flippedCards, setFlippedCards] = useState([]);
       const [matchedCards, setMatchedCards] = useState([]);
       const [message, setMessage] = useState('');

       const images = [
           '../public/max.png',
           '../public/louie-resting.png',
           '../public/the-boss.png',
           '../public/bella1.jpg',
           '../public/buddy1.jpg',
           '../public/max1.jpg'
       ];

       useEffect(() => {
           startNewGame();
       }, []);

       const startNewGame = () => {
           const cardValues = [...images, ...images].sort(() => 0.5 - Math.random()); // Duplicate images
           const initialBoard = cardValues.map((value, index) => ({
               id: index,
               value: value,
               isFlipped: false,
               isMatched: false
           }));
           setGameBoard(initialBoard);
           setFlippedCards([]);
           setMatchedCards([]);
           setMessage('');
       };

       const handleCardClick = (card) => {
           if (flippedCards.length === 2 || card.isFlipped || card.isMatched) {
               return; // Ignore clicks on flipped or matched cards, or if two cards are already flipped
           }

           const updatedBoard = gameBoard.map(c =>
               c.id === card.id ? { ...c, isFlipped: true } : c
           );
           setGameBoard(updatedBoard);

           const newFlippedCards = [...flippedCards, card];
           setFlippedCards(newFlippedCards);


           if (newFlippedCards.length === 2) {
               setTimeout(() => {
                   checkForMatch(newFlippedCards[0], newFlippedCards[1]);
               }, 1000); // Delay to show the cards briefly
           }
       };

       const checkForMatch = (card1, card2) => {
           if (card1.value === card2.value) {
               setMatchedCards([...matchedCards, card1.id, card2.id]);
               setMessage('It\'s a match!');

               const updatedBoard = gameBoard.map(card =>
                   card.id === card1.id || card.id === card2.id ? { ...card, isMatched: true } : card
               );
               setGameBoard(updatedBoard);
           } else {
               setMessage('Try again!');
               const updatedBoard = gameBoard.map(card =>
                   card.id === card1.id || card.id === card2.id ? { ...card, isFlipped: false } : card
               );
               setGameBoard(updatedBoard);
           }
           setFlippedCards([]);

           if (matchedCards.length === gameBoard.length - 2) {
               setMessage('Congratulations! You won!');
           }
       };


       return (
           <div>
               <section>
                   <h2 className="shop-heading">Shop Our Merch</h2>
                   <div className="shop-container">
                       {products.map(product => (
                           <div className="product-card" key={product.id}>
                               <img src={product.image} alt={product.name} className="product-image" />
                               <h3 className="product-title">{product.name}</h3>
                               {product.sale ? (
                                   <p className="sale-price">${product.price.toFixed(2)}</p>
                               ) : (
                                   <p className="product-price">${product.price.toFixed(2)}</p>
                               )}
                               <button>+</button>
                           </div>
                       ))}
                   </div>
               </section>

               {/* Game Section */}
               <section className="game-section">
                   <div className="game-content">
                       <p className="section-left-label">Game</p>
                       <h2 className="section-left-title">Louie's Game</h2>
                       <p className="game-description">
                           Do you know Louie's friends names? Try to match them together<br />
                           Learn about some of them with our memory game!
                       </p>
                   </div>

                   <div className="game-container">
                       <div id="game-board">
                           {gameBoard.map(card => (
                               <div
                                   className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                                   key={card.id}
                                   onClick={() => handleCardClick(card)}
                               >
                                   {card.isFlipped || card.isMatched ? (
                                       <img src={card.value} alt="Card" />
                                   ) : null}
                               </div>
                           ))}
                       </div>
                       <p id="message">{message}</p>
                       <button id="restart-button" onClick={startNewGame}>Restart Game</button>
                   </div>
               </section>
           </div>
       );
   };

   export default Shop;
