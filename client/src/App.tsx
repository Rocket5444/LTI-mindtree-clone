import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/About'
import Contact from './Pages/Contact/Contact'
import ContactPop from './Components/PopOver/Contact/ContactPop'
import Investors from './Pages/Investors/Investors'
import ErrorPage from './error-page';

export default function App() {
  return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/investors" element={<Investors />} />
				{/* Errors */}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<ContactPop />
		</>
	);
}
