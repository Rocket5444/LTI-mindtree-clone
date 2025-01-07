import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Charts from "./Pages/Charts/Charts";

export default function App() {
	return (
		<Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/charts" element={<Charts />} />
    </Routes>
	);
}