/* fake */
import {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";

const fakeFetch = (delay = 1000) => new Promise(res => setTimeout(res, delay));
/* 리스트 아이템 */
const ListItem = ({ number }) => (
	<div className="ListItem">
		<span>{number}</span>
	</div>
);

function App() {
	/* 아이템 개수와 현재 로딩 상태 */
	const [state, setState] = useState({ itemCount: 0, isLoading: false });
	/* fake 비동기 아이템 로드 */
	const fetchItems = async () => {
		setState(prev => ({ ...prev, isLoading: true }));
		await fakeFetch();
		setState(prev => ({
			itemCount: prev.itemCount + 10,
			isLoading: false
		}));
	};
	/* 초기 아이템 로딩 */
	useEffect(() => {
		fetchItems().then(r => null);
	}, []);
	/* 타겟 엘리먼트 */
	/* 인터섹션 callback */
	const onIntersect = async ([entry], observer) => {
		console.log("호출!!");
		if (entry.isIntersecting) {
			console.log("호출2!!");
			observer.unobserve(entry.target);
			await fetchItems();
			observer.observe(entry.target);
		}
	};
	// const target = useRef(null);
	const [target, setTarget] = useState(null);
	/* 옵저버 등록 */
	useEffect(() => {
		let observer;
		if (target) {
			observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
			observer.observe(target);
		}
		return () => observer && observer.disconnect();
	}, [target]);

	const { itemCount, isLoading } = state;
	return (
		<Box>
			{[...Array(itemCount)].map((_, i) => {
				return <ListItem key={i} number={i} />;
			})}
			<Box ref={setTarget} className="Loading">
				{isLoading && "Loading..."}
			</Box>
		</Box>
	);
}

export default App;