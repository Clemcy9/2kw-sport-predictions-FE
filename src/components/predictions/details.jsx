import { motion } from "framer-motion";
import Navbar from "../shared/Navbar";
import { TypeAnimation } from "react-type-animation";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFutbol, FaSpinner, FaTelegramPlane } from "react-icons/fa";
import detailsBg from "../../assets/Hero-images/details-bg.jpg"
import { useEffect, useState } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import Scroll_To_Top from "../animations/scroll-arrow";

export default function PredictionDetails() {
	const { state } = useLocation();
	const [h2h, setH2h] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const today = new Date(state.timing_date);
	const recentDay = {
		dayName: `${days[today.getDay()]} ${today.getDate()} , ${
			months[today.getMonth()]
		} , ${today.getFullYear()}  `,
	};

	const { teamA_Id, teamB_Id, homeTeam, awayTeam } = state || {};

	useEffect(() => {
		if (!teamA_Id || !teamB_Id) return;

		const CACHE_KEY = `h2h_${teamA_Id}_${teamB_Id}`;
		const CACHE_TIME = 60 * 1000; // 1 minute

		const cached = sessionStorage.getItem(CACHE_KEY);

		if (cached) {
			const parsed = JSON.parse(cached);
			setLoading(false);

			
			setH2h(parsed.data);

			// If cache is still fresh, skip fetch
			if (Date.now() - parsed.timestamp < CACHE_TIME) return;
		}

		
		const fetch_H2H = async () => {
			try {
				const res = await fetch(
					`https://twokw-backend.onrender.com/api/v1/head2head?teamA_id=${teamA_Id}&teamB_id=${teamB_Id}`
				);
				if (!res.ok) throw new Error("Failed to fetch Head-To-Head");

				const data = await res.json();
				const latestH2H = data.data.response;

				setH2h(latestH2H);
				setLoading(false);

				sessionStorage.setItem(
					CACHE_KEY,
					JSON.stringify({
						data: latestH2H,
						timestamp: Date.now(),
					})
				);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetch_H2H();
	}, [teamA_Id, teamB_Id]);
	console.log(h2h);

	return (
		<main>
			<>
				<Navbar />
				<section
					className='font-sans relative h-[344px] mt-[22px] md:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white'
					style={{ backgroundImage: `url(${detailsBg})` }}>
					<div className='absolute inset-0 bg-[#1A365D]/40'></div>{" "}
					{/* overlay */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, ease: "easeOut" }}
						className='leading-[1.1] '>
						<div className='relative z-10 max-w-6xl px-3'>
							<TypeAnimation
								sequence={[`${state.homeTeam} VS ${state.awayTeam}`, 2000]}
								wrapper='h1'
								speed={50}
								repeat={0}
								cursor={false}
								className=' sm:text-[48px] text-3xl md:text-6xl font-bold mb-4 text-shadow-lg md:pb-6'
							/>
							<p className='text-lg md:text-xl mb-6 text-shadow-lg'>
								Your winning journey starts here
							</p>

							<div className='flex justify-center items-center gap-4 md:gap-10 transition-all'>
								<a
									href=''
									target='blank'
									rel='noopener noreferrer'
									className='flex justify-center md:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 md:py-4 shadow-lg rounded-[0.4rem] md:text-[1.2em] md:px-0 md:w-65 hover:scale-95 hover:shadow-lg transition-all'>
									Join Telegram <FaTelegramPlane />
								</a>
								<Link
									to='/live-score'
									className='flex md:items-center justify-center gap-1 md:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 md:py-3  shadow-lg rounded-[0.4rem] md:text-[1.5rem] md:px-0 hover:scale-95 hover:shadow-lg transition-all'>
									Live Scores <FaFutbol className='animate-bounce' />
								</Link>
							</div>
						</div>
					</motion.div>
				</section>
				<Scroll_To_Top />
				<section className='lg:p-14'>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						className='lg:p-4 p-2'>
						<div className=' shadow-sm space-y-2 max-h-screen bg-[#F9FBFF] transition-all flex justify-between items-center w-full flex-col lg:p-14 p-2'>
							<div className='flex  lg:px-2 lg:mx-3 w-full justify-between items-center'>
								<p className='font-sans font-semibold text-lg text-[#1A365D] flex justify-center gap-1.5 items-center'>
									<img
										src={state.leagueLogo}
										alt='league name'
										className='w-12 h-12'
									/>{" "}
									{state.leagueTitile}
								</p>
								<span className='font-sans font-normal text-sm text-[#D6AE3E]'>
									{recentDay.dayName} {state.timing}
								</span>
							</div>
							{/* <div className="w-full px-6">    */}
							<section className='flex justify-between items-start min-w-[130px] space-x-10 px-2 lg:gap-4 lg:space-x-0 lg:p-6 w-full border rounded-lg bg-white shadow-lg py-4 border-[#1A365D]'>
								<div className='flex justify-center items-center flex-col space-y-1 lg:space-y-3 '>
									<p className='px-3 font-bold font-sans text-[#1A365D]'>
										Odds
									</p>
									<p className='font-normal  rounded-sm border border-[#1A365D]  text-[#1A365D] px-1 text-[15px] py-1 min-w-16 transition-colors duration-300 w-auto text-center '>
										{state.odd.Odds}
									</p>
								</div>
								<div className='flex justify-center items-center flex-col space-y-1 lg:space-y-3'>
									<p className='px-3 font-bold font-sans text-[#1A365D]'>
										Tips
									</p>
									<p className='font-normal  rounded-sm border  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-16 w-auto transition-colors duration-300 text-center'>
										{state.odd.Tips}
									</p>
								</div>
								<div className='flex justify-center items-center flex-col space-y-1 lg:space-y-3'>
									<p className='px-3 font-bold font-sans text-[#1A365D]'>
										Prop%
									</p>
									<p className='font-normal  rounded-sm border  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-16 transition-colors duration-300 w-auto text-center'>
										{state.odd.Prop}
									</p>
								</div>
							</section>
							{/* </div> */}

							<div className='text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full py-8 space-y-2'>
								<section className='flex justify-center items-center min-w-[130px] space-x-10 px-1 lg:gap-44 lg:space-x-0  space-y-2 lg:p-6 w-full'>
									<div className='flex flex-col  justify-center items-center space-y-1'>
										<img
											src={state.homeLogo}
											alt={state.homeTeam}
											className='w-12 h-12 m-2 rounded-full shadow-inner'
										/>
										<span className='font-sans text-xs font-normal'>
											{state.homeTeam}
										</span>
									</div>

									<div className='flex justify-center items-center flex-col'>
										<span className='font-sans font-normal text-sm bg-[#1A365D] text-white p-1.5 rounded-xl'>
											{state.timing}
										</span>

										<p className='text-2xl'>VS</p>
									</div>

									<div className='flex flex-col  justify-center items-center space-y-1'>
										<img
											src={state.awayLogo}
											alt={state.awayTeam}
											className='w-12 h-12 m-2 rounded-full shadow-inner'
										/>
										<span className='font-sans text-xs font-normal'>
											{state.awayTeam}
										</span>
									</div>
								</section>
							</div>

							{/* Odds Section */}

							<section className='flex justify-center w-full items-center flex-col'>
								<h3 className='text-[#1A365D] py-4'>Match Odds</h3>
								<div className='flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-6 w-full'>
									<div className='flex justify-center items-center border-[#1a365d1f] bg-white border w-full p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3 '>
										<p className='px-3 font-normal font-sans text-[#1A365D]'>
											Home
										</p>
										<p className='font-normal border-t border-[#1A365D]  text-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center '>
											{state.odd.Odds}
										</p>
									</div>
									<div className='flex w-full justify-center items-center border-[#1a365d1f] bg-white border p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3'>
										<p className='px-3 font-normal font-sans text-[#1A365D]'>
											Draw
										</p>
										<p className='font-normal border-t  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center'>
											{state.odd.Tips}
										</p>
									</div>
									<div className='flex w-full justify-center items-center border-[#1a365d1f] bg-white border p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3'>
										<p className='px-3 font-normal font-sans text-[#1A365D]'>
											Away
										</p>
										<p className='font-normal border-t  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center'>
											{state.odd.Prop}
										</p>
									</div>
								</div>
							</section>
						</div>

						<section className='mt-10'>
							<div className='bg-[#1A365D] rounded-t-xl'>
								<h3 className='text-white p-4'>HEAD TO HEAD HISTORY</h3>
							</div>
							{loading ? (
								<div className=' hover:shadow-lg text-[#1a365d] py-20 hover:bg-[#FFF7E0] group transition-all flex justify-center items-center w-full rounded-[0.6rem] p-2'>
									<span>
										<FaSpinner className='animate-spin' />{" "}
									</span>{" "}
									Loading History...
								</div>
							) : error ? (
								<div className='text-center justify-center items-center flex flex-col text-red-500 py-20  w-full rounded-xl'>
									{" "}
									{error}{" "}
									<FaTriangleExclamation className='text-red-600 animate-pulse' />
								</div>
							) : h2h.length == 0 ? (
								<div className='text-center text-[#1a365d] py-20 flex justify-center items-center'>
									{" "}
									No History Available{" "}
									<FaTriangleExclamation className='text-red-600 animate-pulse' />
									...
								</div>
							) : (
								h2h.map((item, index) => (
									<>
										<div key={index}>
											<section className='w-full'>
												
													<div className=' hover:bg-[#D6AE3E]/60 grid grid-cols-15 gap-4 lg:text-lg text-sm items-center w-full lg:p-3 py-2'>
														<div className='flex col-span-4 justify-center gap-2 items-center text-[#4B5563]'>
															<img
																src={item.league.logo}
																alt={item.league.name}
																className='w-6 h-6  rounded-full shadow-inner'
															/>

															{new Date(item.fixture.date).toLocaleDateString()}
														</div>
														<div className='flex col-span-4 gap-2 justify-center font-semibold items-center'>
															<img
																src={item.teams.away.logo}
																alt={item.teams.away.name}
																className='w-6 h-6  rounded-full shadow-inner'
															/>
															{item.teams.away.name.slice(0, 18)}
														</div>
														<div className='bg-[#D6AE3E] col-span-3  w-full flex justify-between items-center text-white px-3 py-2 rounded-xl'>
															<span>{item.score.fulltime.away}</span>:
															<span>{item.score.fulltime.home}</span>
														</div>
														<div className='flex gap-2 col-span-4 justify-center text-[#4B5563] items-center'>
															<img
																src={item.teams.home.logo}
																alt={item.teams.home.name}
																className='w-6 h-6  rounded-full shadow-inner'
															/>
															{item.teams.home.name.slice(0, 18)}
														</div>
													</div>
												
											</section>
										</div>
									</>
								))
							)}
							<div className='bg-[#1A365D] rounded-t-xl'>
								<h3 className='text-white p-4 uppercase'>
									{state.homeTeam} LAST 5 MATCHES
								</h3>
							</div>

							<div className='bg-[#1A365D] rounded-t-xl mt-4'>
								<h3 className='text-white p-4 uppercase'>
									{state.awayTeam} LAST 5 MATCHES
								</h3>
							</div>
						</section>
					</motion.div>
				</section>
			</>
		</main>
	);
}
