import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);

	const fetchUser = async () => {
		setLoading(true);
		try {
			let URL = `https://randomuser.me/api/?page=${page}&results=10&seed=jspsp`;
			let response = await axios.get(URL);
			setData(response.data.results);
			setLoading(false);
			console.log(response.data.results);
			
		} catch (error) {
			setData([]);
			setError("failed to fetch");
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [page]);

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				loading,
				setLoading,
				page,
				setPage,
				fetchUser,
				error,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
