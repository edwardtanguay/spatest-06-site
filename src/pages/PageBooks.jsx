import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { subject } = useContext(AppContext);

	return (
		<div className="page_books">
			<h2>Books</h2>
			{subject === 'history' ? (
				<div className="message">Books on World History</div>
			) : (
				<div className="message">Books on Web Development</div>
			)}

		</div>
	)
}