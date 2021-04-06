import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import profile_icon from "../images/profile_icon.png";
import { changeProfile } from "../store/profile/actions";
import { Col, Container } from "react-bootstrap";

export default function Profile() {
	const profile = useSelector((state) => state.profile);
	const dispatch = useDispatch();

	const [value, setValue] = useState(profile);
	const setKeyValue = (key, newValue) => {
		setValue((prevValue) => ({
			...prevValue,
			[key]: newValue,
		}));
	};

	const handleChange = (ev) => {
		switch (ev.target.id) {
			case "formGridName":
				setKeyValue("firstname", ev.target.value);
				break;
			case "formGridLastName":
				setKeyValue("lastname", ev.target.value);
				break;
			case "formGridEmail":
				setKeyValue("email", ev.target.value);
				break;
			case "formGridGender":
				setKeyValue("gender", ev.target.value);
				break;
			case "formGridAddress":
				setKeyValue("adress", ev.target.value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		dispatch(changeProfile(value));
	};

	return (
		<Container>
			<div className="columnsProf">
				<img src={profile_icon} alt="profile_icon" width="200" height="200" />
			</div>
			<div className="columnsProf">
				<h3>{`${profile.firstname} ${profile.lastname}`}</h3>
			</div>
			<Form onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>Имя</Form.Label>
						<Form.Control placeholder="Введите имя" onChange={handleChange} value={value.firstname} />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridLastName">
						<Form.Label>Фамилия</Form.Label>
						<Form.Control placeholder="Введите фамилию" onChange={handleChange} value={value.lastname} />
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Введите email" onChange={handleChange} value={value.email} />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridGender">
						<Form.Label>Пол</Form.Label>
						<Form.Control as="select" onChange={handleChange} value={value.gender}>
							<option>Мужской</option>
							<option>Женский</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress">
					<Form.Label>Адрес</Form.Label>
					<Form.Control as="textarea" rows={3} placeholder="Введите адрес" onChange={handleChange} value={value.adress} />
				</Form.Group>

				<Button variant="dark" type="submit">
					Сохранить
				</Button>
			</Form>
		</Container>
	);
}
