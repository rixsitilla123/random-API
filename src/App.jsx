import { useState, useEffect } from 'react';
import './App.css'

function App() {
	const URL = "https://jsonplaceholder.typicode.com/";

	const [users, setUsers] = useState([])
	const [posts, setPosts] = useState([])
	const [comments, setComments] = useState([])

	const [userId, setUserId] = useState(1)
	const [postId, setPostId] = useState(1)

	useEffect(() => {
		fetch(`${URL}users`).then(res => res.json()).then(data => setUsers(data))
	}, [])

	useEffect(() => {
		fetch(`${URL}posts?userId=${userId}`).then(res => res.json()).then(data => setPosts(data))
	}, [userId])	

	useEffect(() => {
		fetch(`${URL}comments?postId=${postId}`).then(res => res.json()).then(data => setComments(data))
	}, [postId])

	return (
		<div className="m-5 flex items-start justify-between">
			<div className="h-[93vh] overflow-y-auto border-[2px] border-slate-800 rounded-[15px] w-[32%]">
				<h1 className="p-3 sticky top-0 bg-gray-600 mb-[20px] text-center font-bold text-[25px]">Users</h1>
				<ul className="space-y-[20px] p-5">
					{users.map(item => (
						<li key={item.id} className="bg-slate-400 p-5 rounded-[12px]">
							<strong className="text-[20px]">ID: <span>{item.id}</span></strong>
							<h2 className="text-[20px] font-bold">Name: <span className='font-normal'>{item.name}</span></h2>
							<p className="text-[20px] font-bold">Email: <span className='font-normal'>{item.email}</span></p>
							<p className="text-[20px] font-bold">Phone: <span className='font-normal'>{item.phone}</span></p>
							<button onClick={() => setUserId(item.id)} className="mt-2 p-2 bg-green-500 text-[18px] leading-[18px] w-full font-bold rounded-[12px] border-[2px] duration-500 border-transparent hover:border-green-700 hover:bg-green-300 hover:text-green-700">Show Posts</button>
						</li>
					))}
				</ul>
			</div>
			<div className="h-[93vh] overflow-y-auto border-[2px] border-slate-800 rounded-[15px] w-[32%]">
				<h1 className="p-3 sticky top-0 bg-gray-600 mb-[20px] text-center font-bold text-[25px]">Posts</h1>
				<ul className="p-5 space-y-[20px]">
					{posts.map(item => (
						<li key={item.id} className="bg-slate-400 p-5 rounded-[12px]">
							<strong className="text-[20px]">ID: {item.id}</strong>
							<h2 className="text-[20px] font-bold">User ID: <span className="font-normal">{item.userId}</span></h2> 
							<h3 className="text-[20px] font-bold">Title: <span className="font-normal">{item.title}</span></h3>
							<p className="text-[20px] font-bold">Body: <span className="font-normal">{item.body}</span></p>
							<button onClick={() => setPostId(item.id)} className="mt-2 p-2 bg-green-500 text-[18px] leading-[18px] w-full font-bold rounded-[12px] border-[2px] duration-500 border-transparent hover:border-green-700 hover:bg-green-300 hover:text-green-700">Show Comments</button>
						</li>
					))}
				</ul>
			</div>
			<div className="h-[93vh] overflow-y-auto border-[2px] border-slate-800 rounded-[15px] w-[32%]">
				<h1 className="p-3 sticky top-0 bg-gray-600 mb-[20px] text-center font-bold text-[25px]">Comments</h1>
				<ul className="p-5 space-y-[20px]">
					{comments.map(item => (
						<li key={item.id} className="bg-slate-400 p-5 rounded-[12px]">
							<strong className="text-[20px]">ID: {item.id}</strong>
							<h2 className="text-[20px] font-bold">Post ID: {item.postId}</h2>
							<h3 className="text-[20px] font-bold">Name: <span className="font-normal">{item.name}</span></h3>
							<p className="text-[20px] font-bold">Email: <span className="font-normal">{item.email}</span></p>
							<p className="text-[20px] font-bold">Body: <span className="font-normal">{item.body}</span></p>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default App
