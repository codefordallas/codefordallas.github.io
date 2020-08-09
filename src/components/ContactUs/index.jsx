import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ContactUs() {
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

	const [userInfo, setUserInfo] = useState({ name: '', email: '', comments: '' });

	function handleSubmit(e) {
		e.preventDefault();
		//where are we sending the user info?
		console.log(userInfo);
	}

	//this is causing input to stop typing and i can't figure it out...
	function handleChange(e) {
		console.log('HEY');
		const value = e.target.value;
		setUserInfo({
			...userInfo,
			[e.target.name]: value
		});
	}

	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
			<Title>Contact us!</Title>
			<Input
				type='text'
				placeholder='Name'
				name='name'
				value={userInfo.name}
				onChange={(e) => handleChange(e)}
				required
			/>
			<Input
				type='email'
				placeholder='Email'
				name='email'
				value={userInfo.email}
				onChange={(e) => handleChange(e)}
				required
			/>
			<TextArea
				name='comments'
				value={userInfo.comments}
				onChange={(e) => handleChange(e)}
				placeholder='Comments/Questions/Request'
			/>
			<Button type='submit' />
		</Form>
	);
}
