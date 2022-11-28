import { FC } from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";

const Hero: FC = () => {
	return (
		<div className="h-screen w-screen app-bg">
			<Navbar />
			<Banner />
		</div>
	);
};

export default Hero;
