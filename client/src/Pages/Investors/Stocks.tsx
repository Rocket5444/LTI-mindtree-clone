
import './StockCard.css';

const Stock= () => {
  return (
    <div className="card1">
      <h3>STOCK WATCH</h3>
      <p>As on 07/06/2024 04:01:00 PM</p>
      <p>Current</p>
      <p style={{ color: 'green', fontSize: '24px' }}>4,975.55 INR</p>
      <p>%Change</p>
      <p style={{ color: 'blue', fontSize: '20px' }}>3.59%</p>
      <p>Market Cap.(Rs. Billion)</p>
      <p style={{ color: 'blue', fontSize: '20px' }}>1473.58</p>
      <a href="#">BSE NSE</a>
    </div>
  );
};

export default Stock;