import { FC, useState } from "react";
import Link from "next/link";
import Card from "../Card";

import "swiper/css";
import "swiper/css/navigation";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy, Navigation } from "swiper";

const Product: FC = () => {
	const [category, setCategory] = useState("Casual");

	// for swiper slieder
	const pagination = {
		clickable: true,

		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<div className="my-20 container">
			<h1 className="my-20 text-center font-bold text-black text-2xl md:text-3xl lg:text-5xl uppercase">
				Our latest product
			</h1>

			{/* select category */}
			<div className="flex justify-end mb-10">
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className="w-[194px] shadow-lg bg-white border-2 border-primary text-primary text-base rounded-2xl focus:ring-blue-500 focus:border-primary active:border-primary font-bold text-center block py-2.5 px-3"
				>
					<option
						className="font-bold text-[#000] text-sm  bg-[#D9D9D9] py-2]"
						value="Casual"
					>
						Casual
					</option>
					<option
						className="font-bold text-[#000] text-sm bg-[#EFECEC] py-2"
						value="Formal"
					>
						Formal
					</option>
					<option
						className="font-bold text-[#000] text-sm bg-[#D9D9D9] py-2]"
						value="Sports"
					>
						Sports
					</option>
					<option
						className="font-bold text-[#000] text-sm bg-[#EFECEC] py-2"
						value="Costumes"
					>
						Costumes
					</option>
					<option
						className="font-bold text-[#000] text-sm bg-[#D9D9D9] py-2]"
						value="Adventure"
					>
						Adventure
					</option>
					<option
						className="font-bold text-[#000] text-sm bg-[#EFECEC] py-2"
						value="Under Wear"
					>
						Under Wear
					</option>
				</select>
			</div>
			<Swiper
				className="product-swiper"
				slidesPerView={3}
				spaceBetween={30}
				slidesPerGroup={3}
				navigation={true}
				pagination={pagination}
				lazy={true}
				modules={[Pagination, Navigation, Lazy]}
				breakpoints={{
					0: { slidesPerView: 1 },
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
			>
				<SwiperSlide>
					<Link href="/">
						<Card />
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="/">
						<Card />
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="/">
						<Card />
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="/">
						<Card />
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="/">
						<Card />
					</Link>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Product;
