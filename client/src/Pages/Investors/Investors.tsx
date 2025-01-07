import HomeLayout from "../../Layouts/HomeLayout/HomeLayout"
import { Link } from 'react-scroll';
//import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import bgImg from "../../assets/Images/bg.jpg";
import CardPage from '../../Components/InvestorCards/CardPage';
import Address from './Address';
import Form from './Form';
import Stocks from './Stocks';
import './Card3Container.css';

const PageLayout = () => {
  const containerStyle = {
    display: 'flex',
    color:'#00008B',
    padding: '30px'

  };

  const leftContentStyle = {
    flex: 1,
    padding: '20px',
    fontSize: '50px',
  };

  const rightContentStyle = {
    flex: 1,
    padding: '20px',
    fontSize: '21px',

  };

  return (
    <div style={containerStyle}>
      <div style={leftContentStyle}>
        <h2>Investors</h2>

      </div>
      <div style={rightContentStyle}>
        <h2>We are a global technology consulting and digital solutions company that enables enterprises across industries to reimagine business models, accelerate innovation, and maximize growth by harnessing digital technologies.</h2>

      </div>
    </div>
  );
};

export default function Investors() {
  return (
    <div>
      <HomeLayout>
        <div style={{ backgroundColor: 'white' }}>
          <img src={bgImg} alt="Background" style={{ width: '100vw', height: '75vh' }} />  
                        <div style={{height:'20px'}}></div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div className="arrow-animation" >
                <Link 
                  to="breadcrumb" 
                  smooth={true} 
                  duration={1500}
                >
                  <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '48px', color: 'blue' }} />
                </Link>
              </div>

            </div>

          </div>
          <PageLayout />
        </div>
        <div id="breadcrumb" >
          <CardPage />
        </div>
         <div className='card-container' style={{backgroundColor:'white'}}>
        <Address/>
        <Form />
        <Stocks />
    </div>  

      </HomeLayout>
    </div>
  );
}