import React, { useEffect } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFacts } from "../store/catfacts/actions";

export default function Factlist() {
	const dispatch = useDispatch();

	const facts = useSelector((state) => state.catfacts.facts);
	const error = useSelector((state) => state.catfacts.request.error);
	const loading = useSelector((state) => state.catfacts.request.loading);

	const requestFacts = () => {
		dispatch(getFacts());
	};

	useEffect(() => {
		requestFacts();
	}, []);

	if (loading)
		return (
			<div className="text-center">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);

	if (error) {
		return (
			<>
				<Alert variant="danger">Ошибка в запросе, исправь ошибку в консоли или попробуй еще раз</Alert>
				<Button variant="dark" type="submit" onClick={requestFacts}>
					Повторить запрос
				</Button>
			</>
		);
	}

	return facts.map((fact) => (
		<div className="catFact" key={fact._id}>
			{fact.text}
		</div>
	));
}
