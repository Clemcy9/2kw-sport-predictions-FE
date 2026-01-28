import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function BestPredictionCard() {
	const [prediction, setPrediction] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// const token = localStorage.getItem("authToken");

	// const card = [{ title: "SurePredict", id: 400 },]

	useEffect(() => {
		// if(!token) return;

		fetch(
			"https://api.2kw.net/api/v1/admin/predictions/odds?fixture=400&bet=400&market_name=SurePredict",
			{
				headers: {
					// Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			},
		)
			.then((res) => res.json())
			.then((data) => {
				const setData = data?.data?.at(-1) || null;
				setPrediction(setData ? [setData] : []);
				// console.log("best prediction", setData);
				// console.log("prediction", data.message)
				setLoading(false);
			})
			.catch((err) => {
				// console.error("error loading best predictions:", err);
				setError("Unable To Get Best Prediction");
				setLoading(false);
			});
	});

	return (
		<div className='relative border-none sm:mt-14 md:mt-0 mt-26 lg:mt-5 lg:h-[210px] h-auto min-h-[160px] rounded-[0.6rem] lg:mb-0 px-2 bg-[#1a365d] lg:max-w-full w-full flex items-center flex-col hover:-translate-y-1 hover:shadow-xl lg:space-y-0 shadow-sm transition-all'>
			<h2 className='text-center text-lg lg:text-xl font-semibold text-white lg:py-2 pb-2'>
				Best Prediction of the Day
			</h2>

			{loading ? (
				<div className='text-center text-[#fff] flex justify-center items-center'>
					<span>
						<FaSpinner className='animate-spin' />{" "}
					</span>{" "}
					Loading Best-Prediction...
				</div>
			) : error ? (
				<div className='text-center justify-center items-center flex  text-red-500 py-20  w-full rounded-xl'>
					{" "}
					{error}{" "}
					<FaTriangleExclamation className='text-red-600 animate-pulse' />
				</div>
			) : prediction.length === 0 ? (
				<div className='text-center text-[#fff]  flex justify-center items-center'>
					No Best-Prediction Available{" "}
					<FaTriangleExclamation className='text-red-600 animate-pulse' />
					...
				</div>
			) : (
				prediction.map((item) => (
					<>
						<motion.div
							key={item}
							className='max-w-lg w-full bg-[#1A365D] text-white flex flex-col items-center justify-between'
							transition={{ duration: 0.7, ease: "easeOut" }}>
							<div className='text-center flex justify-between items-start w-full lg:space-y-9 space-y-5'>
								<p className='text-white text-[1rem] flex items-center '>
									<img
										src={item.fixture.league.logo}
										alt={item.fixture.league.name}
										className='lg:w-10 lg:h-10 w-6 h-6 object-center  bg-white'
									/>
									{item.fixture.league.name}
								</p>

								<p className='lg:text-[1.1rem] text-[1rem] max-[267]:flex  text-white'>
									<span>🗓️</span>
									{new Date(item.fixture.fixture.date).toLocaleDateString([], {
										day: "2-digit",
										month: "2-digit",
									})}
								</p>
							</div>

							<div className='flex justify-between w-full items-center font-sans lg:space-y-3 space-y-1 text-white/80'>
								<div className='flex flex-col items-center space-y-1'>
									<img
										className='w-4 h-4 object-cover'
										src={item.fixture.teams.home.logo}
										alt={item.fixture.teams.home.name}></img>
									{item.fixture.teams.home.name}
								</div>

								<div className='flex flex-col text-sm justify-center items-center'>
									<span className='text-white'>vs</span>
									<p className='text- mt-1'>
										<span className='text-[1rem'>🕒</span>
										{new Date(item.fixture.fixture.date).toLocaleTimeString(
											[],
											{
												hour: "2-digit",
												minute: "2-digit",
											},
										)}
									</p>
								</div>

								<div className='flex flex-col items-center space-y-1'>
									<img
										className='w-4 h-4'
										src={item.fixture.teams.away.logo}
										alt={item.fixture.teams.away.name}></img>
									{item.fixture.teams.away.name}
								</div>
							</div>

							{/* Odds Section */}
						</motion.div>

						<div className='border-1 border-b-0 border-x-0 border-t-white/20 w-full flex items-center justify-center'>
							<div
								className='
    grid grid-cols-3 
    sm:flex sm:justify-between 
    items-center 
    gap-1 
    text-xs sm:text-sm 
    text-white/80 
    w-full 
    mt-1
  '>
								{/* Home */}
								<div className='flex items-center justify-center gap-1 min-w-0'>
									<p className='truncate'>Home</p>
									<p className='font-bold text-white bg-[#D6AE3E] rounded-sm px-2 py-0.5 whitespace-nowrap'>
										{item.bets[0].values[0].odd}
									</p>
								</div>

								{/* Draw */}
								<div className='flex items-center justify-center gap-1 min-w-0'>
									<p className='truncate'>Draw</p>
									<p className='font-bold text-white bg-[#D6AE3E] rounded-sm px-2 py-0.5 whitespace-nowrap'>
										{item.bets[0].values[0].value}
									</p>
								</div>

								{/* Away */}
								<div className='flex items-center justify-center gap-1 min-w-0'>
									<p className='truncate'>Away</p>
									<p className='font-bold text-white bg-[#D6AE3E] rounded-sm px-2 py-0.5 whitespace-nowrap'>
										{item.bets[0].values[0].percentage}
									</p>
								</div>
							</div>
						</div>
					</>
				))
			)}
		</div>
	);
}
