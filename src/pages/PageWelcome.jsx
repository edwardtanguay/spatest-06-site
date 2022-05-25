import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { subject, handleToggleSubject} = useContext(AppContext);

	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
		
			<button onClick={handleToggleSubject}>Subject</button>
			<div className="subject">{subject}</div>
		</div>
	)
}