
import Card from './Card';
import './CardPage.css';

const cardTitles = [
  "Notices",
  "Investor Services",
  "Financial Results",
  "Annual Report",
  "Corporate Governance",
  "Events",
  "Mindtree Investors Archive",
  "Dividend",
  "Share Related Information"
];

const CardPage = () => {
  return (
    <div className="background">
      <div className="cards-container">
        {cardTitles.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
