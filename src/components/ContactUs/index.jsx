import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	width: 100vw;
	margin-top: 50px;
	height: fit-content;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

const TextArea = styled.input`
	width: 50%;
	height: fit-content;
	min-height: 200px;
`;
const Title = styled.h2`
	font-size: 2rem;
	font-family: sans-serif;
`;
const Input = styled.input`
	width: 50%;
	height: 20px;
	border-radius: 10px;
	font-size: 1.5rem;
`;

const Button = styled.button`
	width: 20%;
	height: 20px;
	color: gray;
	border-radius: 10px;
	border: none;
`;

export default function ContactUs() {
	const [userInfo, setUserInfo] = useState({ name: '', email: '', comments: '' });

	function handleSubmit(e) {
		e.preventDefault();
		//where are we sending the user info?
		console.log(userInfo);
	}

	//this is causing input to stop typing and i can't figure it out...
	function handleChange(e) {
		const value = e.target.value;
		setUserInfo({
			...userInfo,
			[e.target.name]: value
		});
	}

	return (
		<div>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Title>Contact us!</Title>
				<Input
					type='text'
					placeholder='Name'
					name='name'
					value={userInfo.name}
					onChange={handleChange}
					required
				/>
				<Input
					type='email'
					placeholder='Email'
					name='email'
					value={userInfo.email}
					onChange={handleChange}
					required
				/>
				<TextArea
					name='comments'
					value={userInfo.comments}
					onChange={handleChange}
					placeholder='Comments/Questions/Request'
				/>
				<Button type='submit' />
			</Form>
		</div>
	);
}
