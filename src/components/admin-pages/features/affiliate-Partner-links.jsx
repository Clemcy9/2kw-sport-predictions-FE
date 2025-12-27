import { useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Affiliate_Partner_Links() {
	const [affiliateLinks, setAffiliateLinks] = useState([]);
	const [modal, setModal] = useState(null);
	const [animation, setAnimation] = useState(null);

	const token = localStorage.getItem("authToken");

	const handle_delete = async (id) => {
		try {
			const res = await fetch(
				`https://twokw-backend.onrender.com/api/v1/affiliatelinks/${id}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				}
			);
			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || "Failed to delete prediction");
			}

			setModal(null);
			setAnimation(id);

			setTimeout(() => {
				setPrediction((prev) => prev.filter((item) => item._id !== id));
				setAnimation(null);
			}, 1000);
		} catch (err) {
			console.error("error while deleting a prediction", err);
		}
	};

	useEffect(() => {
		fetch("https://twokw-backend.onrender.com/api/v1/affiliatelinks", {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAffiliateLinks(data.data);
			});
	}, [token]);

	// const handle_delete = (id) => {
	//     setItems(del => del.filter(item => item.id !== id));
	// };

	return (
		<main className='p-4 lg:px-5 lg:min-h-screen flex flex-col w-full'>
			<div className='flex justify-start font-semibold font-sans text-2xl w-full  lg:my-6'>
				<h1 className='lg:font-semibold font-bold font-[Inria Sans] mb-4 text-center w-full lg:text-left'>
					Affiliate/Partner Links
				</h1>
			</div>

			<section>
				<table className=' w-full border-collapse'>
					<thead className='hidden lg:table-header-group'>
						<tr className='font-bold text-left text-lg'>
							<th className='py-4 px-2 hidden lg:block'>ID</th>

							<th className='py-4 px-2'>Type</th>
							<th className='py-4 px-2'>Label</th>
							<th className='py-4 px-2'>URL</th>

							<th className='py-4 px-2'> Status</th>
							<th className='py-4 px-2'> Action</th>
						</tr>
					</thead>
					{affiliateLinks?.map((items, index) => (
						<tbody className='w-full'>
							<tr
								key={items.id}
								className='relative lg:table-row block'>
								
								<td className='hidden lg:table-cell py-5 px-2'>{index + 1}</td>
								<td className='hidden lg:table-cell py-5 px-2'>
									{items.link_type}
								</td>
								<td className='hidden lg:table-cell py-5 px-2'>
									{items.label}
								</td>
								<td className='hidden lg:table-cell py-5 px-2'>{items.url}</td>
								<td className='hidden lg:table-cell py-5 px-2'>
									{items.status}
								</td>
								<td className='hidden lg:table-cell py-5 px-2'>
									<h1 className='hidden font-semibold p-0 lg:py-3'> Action</h1>
									<p className=' flex justify-center gap-6 items-center'>
										<Link
											to={"/admin/edit-affiliate"}
											className='text-amber-400'>
											<FaEdit />
										</Link>
										<button
											onClick={() => setModal(items._id)}
											className='text-rose-600'>
											<FaTrash />
										</button>
									</p>
								</td>

								<section className='border-b-[#00000066] lg:hidden  border-b w-full  flex  flex-col gap-2'>
									<div className="w-full flex justify-between items-center">
										<td className='py-5 px-2'>
											<h3>TYPE</h3>
											{items.link_type}
										</td>
										<td className='py-5 px-2'>
											<h3>LABEL</h3>
											{items.label}
										</td>
									</div>
									<td className=' py-3 px-2'>
										<h3>URL</h3>
										{items.url}
									</td>
									<div className="w-full flex justify-between items-center">
										
										<td className=' py-5 px-2'>
                                            <h3>STATUS</h3>
                                            {items.status}</td>
										<td className=' py-5 px-2'>
											<h3>ACTION</h3>
											<p className=' flex justify-center text-2xl gap-6 items-center'>
												<Link
													to={"/admin/edit-affiliate"}
													className='text-amber-400'>
													<FaEdit />
												</Link>
												<button
													onClick={() => setModal(items._id)}
													className='text-rose-600'>
													<FaTrash />
												</button>
											</p>
										</td>
									</div>
								</section>
							</tr>
						</tbody>
					))}
				</table>

				{modal && (
					<section
						onClick={() => setModal(null)}
						className='fixed  inset-0 z-50 flex items-center justify-center bg-[#1A365D]/40'>
						<div
							onClick={(e) => e.stopPropagation()}
							className=' w-[90%] max-w-sm flex justify-center items-center flex-col bg-white shadow-xl px-4 py-3 '>
							<h3 className='text-[#1a365d] font-semibold'>
								Delete Prediction
							</h3>
							<p className='text-[#1a365d] font-normal py-5'>
								This Action Cannot Be Undone !
							</p>
							<div className='flex gap-3 justify-center items-center'>
								<button
									onClick={() => handle_delete(modal)}
									className='bg-red-600 px-4 py-2 text-white'>
									Delete
								</button>
								<button
									onClick={() => setModal(null)}
									className='text-[#1A365D] px-4 py-2 bg-white border border-[#1A365D] rounded-xs'>
									Cancel
								</button>
							</div>
						</div>
					</section>
				)}

				{animation && (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.35, ease: "easeOut" }}
						className='fixed  inset-0 z-50 flex items-center justify-center bg-[#1A365D]/40'>
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{
								scale: [0, 1.2, 1],
								opacity: [0, 1, 1],
								transition: { duration: 0.6, ease: "easeOut" },
							}}
							className='flex items-center justify-center'>
							<AiOutlineCheckCircle className='w-20 h-20 rounded-full bg-[#059D3F] text-white drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]' />
						</motion.div>
					</motion.div>
				)}
			</section>
		</main>
	);
}
