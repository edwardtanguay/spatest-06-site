import { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [subject, setSubject] = useState('history');

	const handleToggleSubject = () => {
		const _subject = subject === 'history' ? 'technology' : 'history';
		setSubject(_subject);
	};

	return (
		<AppContext.Provider
			value={{
				subject,
				setSubject,
				handleToggleSubject,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
