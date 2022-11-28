import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

interface State {
	email: string;
	password: string;
}

const AboutUs: NextPage = () => {
	const [values, setValues] = useState<State>({ email: "", password: "" });

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login page of react-commerce" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="flex items-center justify-center h-screen w-screen app-bg">
					{/* Login form */}
					<div className="p-10 login-form max-w-xl w-full rounded-[20px] ">
						<h2 className="text-3xl font-bold text-black text-center">Login</h2>

						<div className="py-5">
							<form onSubmit={handleSubmit}>
								<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-gray-500">
										Email
									</label>
									<input
										onChange={handleChange("email")}
										type="email"
										id="email"
										className="bg-white input-shadow text-gray-900 text-sm rounded-full block w-full p-2.5"
										required
									/>
								</div>
								<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-gray-500">
										Email
									</label>
									<input
										onChange={handleChange("password")}
										type="password"
										id="password"
										className="bg-white input-shadow text-gray-900 text-sm rounded-full block w-full p-2.5"
										required
									/>
								</div>

								<button
									type="submit"
									className=" mt-3 text-white bg-[#0ABDE3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-md  w-[150px]  px-2 py-2 text-center"
								>
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default AboutUs;
