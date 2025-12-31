import { useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { userToken } from "../../hooks/useAuth";
import DeleteModal from "../../store/delete-modal";
import AnimationModal from "../../store/animation-modal";

export default function Affiliate_Partner_Links() {
	const [affiliateLinks, setAffiliateLinks] = useState([]);
	const [modal, setModal] = useState(null);
	const [animation, setAnimation] = useState(null);

	const token = userToken();

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
					<DeleteModal title="Delete Affilite/Partner Links" onClose={() => setModal(null)} onDelete={() => handle_delete(modal)} />
				)}

				{animation && (
					<AnimationModal />
				)}
			</section>
		</main>
	);
}
