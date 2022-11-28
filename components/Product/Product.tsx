import { FC } from "react";
import Link from "next/link";
import Card from "../Card";

import "swiper/css";
import "swiper/css/navigation";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy, Navigation } from "swiper";

const Product: FC = () => {
	// for swiper slieder
	const pagination = {
		clickable: true,

		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<div className="my-20">
			<h1 className="my-32 text-center font-bold text-black text-5xl uppercase">
				Our latest product
			</h1>

			{/* select category */}
			<div className="flex justify-end">
				<select className="w-[194px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option selected>Choose a country</option>
					<option value="US">United States</option>
					<option value="CA">Canada</option>
					<option value="FR">France</option>
					<option value="DE">Germany</option>
				</select>
			</div>

			{/* <Link href="/">
				<Card />
			</Link> */}

			<Swiper
				className="product-swiper"
				slidesPerView={3}
				spaceBetween={30}
				slidesPerGroup={3}
				navigation={true}
				pagination={pagination}
				lazy={true}
				modules={[
					Pagination,
					Navigation,
					// Autoplay,
					Lazy,
				]}
				breakpoints={{
					0: { slidesPerView: 1 },
					350: { slidesPerView: 2 },
					// 600: { slidesPerView: 2 },
					900: { slidesPerView: 3 },
					1200: { slidesPerView: 4 },
				}}
				// autoplay={{
				// 	delay: 5000,
				// 	disableOnInteraction: false,
				// }}
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
