import { useState } from "react";
import { FaMinus, FaPlus, FaPlusSquare } from "react-icons/fa";
import { ChevronDown, ChevronUp, X } from "lucide-react";
// import { Calendar } from "lucide-react";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";
import { userToken } from "../../auth-system/auth";
// import { filter } from "framer-motion/client";

// sub-component that holds the odds amd propabilities dropdown
const OddsDropdown = ({
	value,
	label,
	setValue,
	open,
	toggleOpen,
	odds,
	loadingOdds,
}) => {
	return (
		<div className='flex flex-col relative'>
			<div className='relative'>
				<label>{label}</label>
				<div className='relative'>
					<input
						type='text'
						placeholder='Select'
						className='w-full border border-[#737373]  px-1 py-2 rounded-sm  text-[10px]  text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white'
						readOnly
						value={
							value?.value
								? // displaying the values of the clicked row as the new value of the input
								  `| ${value.value} | Odd: ${value.odd} | Prob: ${value.percentage}`
								: ""
						}
						// onChange={(e) => setValue(e.target.value)}
						onClick={toggleOpen}
					/>
					<button
						type='button'
						onClick={toggleOpen}
						className='absolute right-2 top-1/2 -translate-y-1/2'>
						{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
					</button>
				</div>

				{open && (
					<div className='absolute top-full mt-1 lg:min-w-52 max-h-[200px] rounded-sm overflow-y-auto border  bg-white w-full z-50'>
						<table className='w-full text-left'>
							<thead>
								<tr>
									<th className='px-1 text-sm lg:text-xl'>Market</th>
									<th className='px-1 text-sm lg:text-xl'>Odds</th>
									<th className='px-1 text-sm lg:text-xl'>Prob%</th>
								</tr>
							</thead>
							<tbody>
								{loadingOdds && (
									<tr>
										<td
											colSpan='3'
											className='px-1 py-1 text-center'>
											Loading odds...
										</td>
									</tr>
								)}
								{!loadingOdds && odds.length === 0 && (
									<tr>
										<td
											colSpan='3'
											className='px-1 py-1 text-center'>
											No odds Available...
										</td>
									</tr>
								)}
								{!loadingOdds &&
									odds.flatMap((bet) =>
										bet.values.map((val, i) => (
											<tr
												key={`${bet.id}-${i}`}
												onClick={() => {
													// getting the values of the clicked row
													setValue({
														value: val.value,
														odd: val.odd,
														percentage: val.percentage,
													});
													toggleOpen();
												}}
												className='odd:bg-white even:bg-[#bdc2cb69] cursor-pointer'>
												<td className='px-2 text-[10px] lg:text-sm py-1'>
													{val.value}
												</td>
												<td className='px-2 text-[10px] lg:text-sm py-1'>
													{val.odd}
												</td>
												<td className='px-2 text-[10px] lg:text-sm py-1'>
													{val.percentage}
												</td>
											</tr>
										))
									)}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default function MakePredictions() {
	const [byName, setByName] = useState("");
	const [byDate, setByDate] = useState("");
	const [byLeague, setByLeague] = useState("");

	const [modal, setModal] = useState(false);
	const [action, setAction] = useState(null);

	const [openDropdown, setOpenDropdown] = useState(null);

	const [prediction, setPrediction] = useState([]);
	const [loading, setLoading] = useState(true);
	const [messages, setMessages] = useState("");
	const [error, setError] = useState(null);

	const [odds, setOdds] = useState([]);
	const [loadingOdds, setLoadingOdds] = useState(false);

	const [freeTip, setFreeTip] = useState({
		value: "",
		odd: "",
		percentage: "",
	});
	const [freeOdds, setFreeOdds] = useState({
		value: "",
		odd: "",
		percentage: "",
	});
	const [surePredict, setSurePredict] = useState({
		value: "",
		odd: "",
		percentage: "",
	});
	const [superSingleTip, setSuperSingleTip] = useState({
		value: "",
		odd: "",
		percentage: "",
	});

	//   this maps the structure of the payload dynamically for all the fields and make all fields appear independent without manually structuring
	const new_payload = (betType, betTypeId, selection) => {
		if (!selection?.value) return null; //avoid uneccessary errors if some fields are empty

		return {
			fixture_id: action?.fixture?.id,
			bet_type: betType,
			bet_type_id: betTypeId,
			bets: [
				{
					name: "Match Winner",
					values: [selection],
				},
			],
		};
	};

	// console.log("Payload to backend:", payload);

	const token = userToken();

	// makes the main page not-scrollable when modal is open
	useEffect(() => {
		if (modal) {
			const y = window.scrollY;
			document.body.style.cssText = `position:fixed; top:-${y}px; left:0; right:0;`;
		} else {
			const y = parseInt(document.body.style.top || "0") * -1;
			document.body.style.cssText = "";
			window.scrollTo(0, y);
		}
	}, [modal]);

	// enpoint to send predictions data to backend

	const reset_predictions = () => {
		setFreeTip({ value: "", odd: "", percentage: "" });
		setFreeOdds({ value: "", odd: "", percentage: "" });
		setSurePredict({ value: "", odd: "", percentage: "" });
		setSuperSingleTip({ value: "", odd: "", percentage: "" });
		setOpenDropdown(null);
		// setMessages(false);
	};

	const send_data = async (e) => {
		e.preventDefault();
		setMessages("");

		// this reders the values, ids and selected feilds dynamically
		const payload = [
			new_payload("freeTip", 100, freeTip),
			new_payload("superSingleTip", 200, superSingleTip),
			new_payload("freeOdds", 300, freeOdds),
			new_payload("surePredict", 400, surePredict),
		].filter(Boolean); //.filter(boolean) will automaticlly remove empty values and not send them

		setTimeout(() => {
			setMessages(null);
		}, 2500);

		if (payload.length == 0)
			return setMessages("Select at least one prediction before saving");

		try {
			const res = await fetch(
				"https://twokw-backend.onrender.com/api/v1/admin/predictions",
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);
			const data = await res.json();

			if (!res.ok) {
				setMessages(data?.message || "Failed To Save Prediction ");
				return;
			}

			// if (res.ok){
			setMessages("Prediction Created successful ");
			reset_predictions();

			console.log("Backend Response", data);

			console.log("FINAL PAYLOAD:", payload);
		} catch (err) {
			console.error("not sent:", err);
			setMessages("Networkk error, pleae try again");
		}
	};

	// call to endpoint to get all the matches and fixtures
	useEffect(() => {
		fetch(
			`https://twokw-backend.onrender.com/api/v1/football/fixtures?date=${byDate}`
		)
			.then((res) => res.json())
			.then((data) => {
				setPrediction(data.data.response || []);
				// console.log("Updated prediction:",prediction);
				console.log("API DATA", prediction);

				console.log("fetched predictions:", data);
				setLoading(false);
			});
	}, [byDate]);

	//   call to enpoint to get all odds and markets

	const all_odds = async (fixture_id) => {
		try {
			setLoadingOdds(true);
			const res = await fetch(
				`https://twokw-backend.onrender.com/api/v1/admin/predictions/odds?fixture=${fixture_id}`
			);
			const json = await res.json();
			// setOdds(data?.data.response || []);
			setOdds(json.data?.[0]?.bets || []);
			console.log("fixture id", json);
		} catch (err) {
			console.error("cannot fetch form this endpoint", err);
		} finally {
			setLoadingOdds(false);
		}
	};

	//   implementing search logic
	const all_predictions = prediction.filter((item) => {
		const name = byName.toLowerCase();
		const league = byLeague.toLowerCase();

		const use_name =
			item.teams.away.name.toLowerCase().includes(name) ||
			item.teams.home.name.toLowerCase().includes(name);

		const use_league = item.league.name.toLowerCase().includes(league);

		const use_date = byDate ? item.fixture.date.startsWith(byDate) : true;

		return use_name && use_league && use_date;
	});

	//   loading UI
	// if (loading)
	//   return (
	//     <div className="text-center h-52 overflow-y-hidden text-[#1A365D] py-2 flex justify-center items-center">
	//       <span>
	//         <FaSpinner className="animate-spin" />{" "}
	//       </span>{" "}
	//       Loading Fixtures...
	//     </div>
	//   );

	return (
		<div className='p-4 lg:px-5 lg:min-h-screen flex flex-col w-full'>
			<div className='flex justify-start font-semibold font-sans text-2xl w-full  lg:my-6'>
				<h2 className='lg:font-semibold font-bold font-[Inria Sans] mb-4 text-center w-full lg:text-left'>
					Fetch Football Fixtures
				</h2>
			</div>

			<div className='w-full flex flex-col lg:flex-row lg:justify-between lg:my-4  gap-7 lg:gap-5'>
				<div className='relative lg:max-w-[33%]  w-full flex justify-between items-center'>
					<input
						value={byName}
						onKeyDown={(e) =>
							e.key === "Enter" && console.log("Enter pressed for name")
						}
						onChange={(e) => setByName(e.target.value)}
						type='text'
						placeholder='Search By Name'
						className='w-full appearance-none border border-[#737373] rounded-[0.9em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white'
					/>
					<Search
						size={18}
						className='absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none'
					/>
				</div>
				<h3 className='lg:hidden font-sans font-normal text-sm'>Filter By:</h3>
				<div className='w-full  lg:max-w-[66%] flex lg:gap-4 gap-7'>
					<div className='relative w-full flex justify-between items-center'>
						<input
							value={byLeague}
							onKeyDown={(e) =>
								e.key === "Enter" && console.log("Enter pressed for league")
							}
							onChange={(e) => setByLeague(e.target.value)}
							type='text'
							placeholder='Select League'
							className='w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white'
						/>
						<button>
							<ChevronUp
								size={18}
								className='absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none'
							/>
						</button>
					</div>
					<div className='relative w-full  flex justify-between items-center'>
						<input
							value={byDate}
							onKeyDown={(e) =>
								e.key === "Enter key" && console.log("Enter pressed for date")
							}
							onChange={(e) => setByDate(e.target.value)}
							type='date'
							placeholder='11/04/2025'
							className='w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white'
						/>
					</div>
				</div>
			</div>

			<table className=' w-full border-collapse'>
				<thead className='hidden lg:table-header-group'>
					<tr className='font-bold text-left text-lg'>
						<th className='py-4 px-2'>No.</th>
						<th className='py-4 px-2'>League</th>
						<th className='py-4 px-2'>Fixtures</th>
						<th className='py-4 px-2'>Date</th>
						<th className='py-4 px-2'>Time</th>
						<th className='py-4 px-2 text-center'>Action</th>
					</tr>
				</thead>

				{loading && (
					<tr>
						<td
							colSpan={8}
							className='text-center py-10 text-[#1A365D]'>
							<FaSpinner className='animate-spin mr-2 inline' /> Loading
							predictions...
						</td>
					</tr>
				)}
				{error && (
					<tr>
						<td
							colSpan={8}
							className='text-center py-10 text-red-600'>
							{error}
						</td>
					</tr>
				)}
				{!loading && !error && all_predictions.length === 0 && (
					<tr>
						<td
							colSpan={8}
							className='text-center py-10 text-[#1A365D]'>
							No predictions found for selected filters.
						</td>
					</tr>
				)}

				<tbody>
					{all_predictions.map((item, index) => (
						<tr
							key={item.fixture.id}
							className='relative lg:table-row block'
							onClick={() => {
								setAction(item);
								setModal(true);
								all_odds(item.fixture.id);
							}}>
							
							<td className='hidden lg:table-cell py-5 px-2'>{index + 1}</td>
							<td className='hidden lg:flex-row lg:flex py-2 px-2 items-center gap-2 '>
								<img
									className='w-8 h-8 object-cover'
									src={item.league.logo}
									alt={item.league.name}
								/>
								{item?.league?.name || ""}
							</td>

							<td className='hidden lg:table-cell py-2 px-2 items-center gap-2 '>
								<div className='flex items-center gap-4'>
									<span className='flex'>
										<img
											className='w-4 h-4 object-cover'
											src={item.teams.away.logo}
											alt={item.teams.away.name}
										/>{" "}
										{item?.teams?.away.name || ""}
									</span>{" "}
									<span className='px-2 font-semibold'>vs</span>{" "}
									<span className='flex'>
										<img
											className='w-4 h-4 object-center'
											src={item.teams.home.logo}
											alt={item.teams.home.name}
										/>{" "}
										{item.teams.home.name || ""}
									</span>
								</div>
							</td>
							<td className='hidden lg:table-cell py-5 px-2'>
								{new Date(item.fixture.date).toLocaleDateString()}
							</td>
							<td className='hidden lg:table-cell py-5 px-2'>
								{new Date(item.fixture.date).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</td>
							<td
								onClick={() => {
									setAction(item);
									setModal(true);
									all_odds(item.fixture.id);
								}}
								className='cursor-pointer hidden lg:table-cell py-5 px-2'>
								<div className='text-[#04BA4A] transition'>
									<FaPlusSquare size={18} />
								</div>
							</td>

							<section className='lg:hidden w-full justify-between flex flex-row border p-3 rounded-xl my-4 active:border-[#1A365D] active:scale-105 active:shadow-xl border-[#1A365D99] '>
								<div className='flex flex-col'>
									<td className='flex py-2 px-2 items-center gap-2 '>
										{item?.league?.name || ""}
									</td>

									<td className='lg:hidden py-2 items-center gap-2 '>
										<div className='flex flex-col items-start'>
											<span className='flex'>
												<img
													className='w-4 h-4 object-cover'
													src={item.teams.away.logo}
													alt={item.teams.away.name}
												/>
												{item?.teams?.away.name || ""}
											</span>
											<span className='px-2 font-semibold'>vs</span>
											<span className='flex'>
												<img
													className='w-4 h-4 object-center'
													src={item.teams.home.logo}
													alt={item.teams.home.name}
												/>
												{item.teams.home.name || ""}
											</span>
										</div>
									</td>
								</div>
								<div className='flex flex-col items-end '>
									<td className='py-2'>
										{new Date(item.fixture.date).toLocaleDateString()}
									</td>
									<td className='py-2'>
										{new Date(item.fixture.date).toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit",
										})}
									</td>
									<td
										onClick={() => {
											setAction(item);
											setModal(true);
											all_odds(item.fixture.id);
										}}
										className='cursor-pointer py-2'>
										<div className='text-[#04BA4A] transition'>
											<FaPlusSquare size={18} />
										</div>
									</td>
								</div>
							</section>
						</tr>
					))}
				</tbody>
			</table>

			{/* the modal */}
			{modal && action && (
				<main
					onClick={() => {
						setModal(false);
						setMessages(null);
						setOpenDropdown(false);
					}}
					className='fixed  inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
					<div
						onClick={(e) => e.stopPropagation()}
						className='overflow-y-auto max-h-[90vh] w-full lg:w-auto lg:min-h-auto pt-4 bg-white lg:rounded-xl px-2 py-4 flex-col flex'>
						<div className='flex justify-between w-full'>
							<div className='lg:py-5 lg:flex lg:items-start lg:justify-start font-semibold flex-col lg:col-span-4 lg:w-full justify-center items-center lg:max-w-auto lg:flex-row p-3'>
								<h2>Make Predictions For </h2>
								<h2 className='flex px-1'>
									{(action?.teams?.away.name || "").slice(0, 20).trim()}{" "}
									<span className='px-2 font-semibold'>vs</span>{" "}
									{(action.teams.home.name || "").slice(0, 20).trim()}
								</h2>
							</div>
							<button
								onClick={() => {
									setModal(false);
									setMessages(null);
									setOpenDropdown(false);
								}}
								className='flex p-3'>
								<X size={20} />
							</button>
						</div>

						<div className='flex-col flex lg:flex-row gap-4'>
							<form
								onSubmit={send_data}
								className=' '>
								<section className='bg-[#EEF0F3] rounded-xl px-2 py-4'>
									<div className='flex justify-between items-center py-3'>
										<p className='flex justify-center items-center'>
											<span className='flex flex-col'>
												<img
													className='w-10 h-10'
													src={action.teams.away.logo}
													alt={action.teams.away.name}
												/>{" "}
												{(action?.teams?.away.name || "").slice(0, 16).trim()}
											</span>
										</p>
										<span>VS</span>
										<p className='flex justify-center items-center'>
											{" "}
											<span className='flex flex-col'>
												<img
													className='w-10 h-10'
													src={action.teams.home.logo}
													alt={action.teams.home.name}
												/>{" "}
												{(action.teams.home.name || "").slice(0, 16).trim()}
											</span>
										</p>
									</div>
									<div className='bg-[#D6AE3E] rounded-t-xl text-black flex items-center justify-between p-2'>
										<h3>Predictions</h3>
										<div
											onClick={() => setClose(!close)}
											className='w-6 h-6 flex items-center justify-center'>
											{close ? <FaPlus /> : <FaMinus />}
										</div>
									</div>

									<div className='p-3 grid grid-cols-2  flex-wrap rounded-b-xl bg-white gap-6 flex-shrink-0 min-w-full'>
										<OddsDropdown
											label='Free Tips'
											value={freeTip}
											setValue={setFreeTip}
											open={openDropdown === "freeTip"}
											toggleOpen={() =>
												setOpenDropdown(
													openDropdown === "freeTip" ? null : "freeTip"
												)
											}
											odds={odds}
											loadingOdds={loadingOdds}
										/>
										<OddsDropdown
											label='Super Single Tip'
											value={superSingleTip}
											setValue={setSuperSingleTip}
											open={openDropdown === "superSingleTip"}
											toggleOpen={() =>
												setOpenDropdown(
													openDropdown === "superSingleTip"
														? null
														: "superSingleTip"
												)
											}
											odds={odds}
											loadingOdds={loadingOdds}
										/>
										<OddsDropdown
											label='Free Odds'
											value={freeOdds}
											setValue={setFreeOdds}
											open={openDropdown === "freeOdds"}
											toggleOpen={() =>
												setOpenDropdown(
													openDropdown === "freeOdds" ? null : "freeOdds"
												)
											}
											odds={odds}
											loadingOdds={loadingOdds}
										/>
										<OddsDropdown
											label='Sure Predict'
											value={surePredict}
											setValue={setSurePredict}
											open={openDropdown === "surePredict"}
											toggleOpen={() =>
												setOpenDropdown(
													openDropdown === "surePredict" ? null : "surePredict"
												)
											}
											odds={odds}
											loadingOdds={loadingOdds}
										/>
									</div>
								</section>
								<section className='py-4 lg:py-6 flex justify-center items-center gap-4 max-w-96'>
									<button
										type='submit'
										className='rounded-xl bg-[#1A365D] px-3 py-2 text-white w-full'>
										Save Prediction
									</button>
									<button
										type='button'
										onClick={() => {
											reset_predictions();
											setOpenDropdown(false);
											setMessages(null);
										}}
										className='rounded-xl bg-white border border-[#1A365D] text-[#1A365D] px-3 py-2 w-full'>
										Cancel
									</button>
								</section>
								{messages && (
									<p className='rounded-xl bg-white border shadow-xl border-[#1A365D] text-[#1A365D] px-3 py-2 w-fit'>
										{messages}
									</p>
								)}
							</form>

							<div>
								<h3 className='text-[#1A365D] pb-3 px-6 font-semibold'>
									Odds & Probabilities
								</h3>

								{/* {dropdown &&( */}
								<div className='max-h-[300px] overflow-y-auto'>
									<table className='w-full px-4 '>
										<thead>
											<tr>
												<th className='text-left px-6'>Market</th>
												<th className='text-left px-6'>Odds</th>
												<th className='text-left px-6'>Prob%</th>
											</tr>
										</thead>
										<tbody>
											{loadingOdds && (
												<tr>
													<td
														colSpan='3'
														className='px-7 py-4 text-center'>
														Loading odds...
													</td>
												</tr>
											)}

											{!loadingOdds &&
												odds.length > 0 &&
												odds.flatMap((bet) =>
													bet.values.map((val, i) => (
														<tr
															key={`${bet.id}-${i}`}
															className='odd:bg-white even:bg-[#bdc2cb69]'>
															<td className='px-7 py-2'>{val.value}</td>
															<td className='px-7 py-2'>{val.odd}</td>
															<td className='px-7 py-2'>{val.percentage}</td>
														</tr>
													))
												)}
											{!loadingOdds && odds.length === 0 && (
												<tr>
													<td
														colSpan='3'
														className='px-7 py-4 text-center'>
														No odds Available...
													</td>
												</tr>
											)}
										</tbody>
									</table>
								</div>
								{/* )} */}
							</div>
						</div>
					</div>
				</main>
			)}
		</div>
	);
}
