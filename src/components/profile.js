import React from "react";
import profile_icon from "../images/profile_icon.png";

export default function Profile() {
	return (
		<>
			<div className="profile">
				<h3>Мой профиль</h3>
				<img src={profile_icon} alt="profile_icon" width="200" height="200" />
			</div>
		</>
	);
}
