import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const REACT_APP_GOOGLE_SHEET_URL='https://sheet.best/api/sheets/8be6eed0-27b6-4fc7-9363-2014751ab498';

const ContactView = () => {

	const [ mode, setMode ] = useState(0);
	const [ handFlag, setHandFlag ] = useState(true);

	const schema1 = yup.object().shape({
		name: yup.string().required('Name/Country is required.'),
		email: yup.string().email('Enter a valid email.').required('Email is required.'),
		question: yup.string().required('Question is required.'),
		averageSize: yup.number().required('Check size is required.').typeError('Check size must be a number.'),
	}).required();

	const schema2 = yup.object().shape({
		name: yup.string().required('Name/Country is required.'),
		email: yup.string().email('Enter a valid email.').required('Email is required.'),
		desiredRole: yup.string().required('Desired role is required.'),
		content: yup.string().required('Question is required.'),
	}).required();

	const { register: register1, handleSubmit: handleSubmit1, reset: reset1, formState: { errors: errors1 } } = useForm({
    resolver: yupResolver(schema1)
  });

	const { register: register2, handleSubmit: handleSubmit2, reset: reset2, formState: { errors: errors2 }} = useForm({
    resolver: yupResolver(schema2)
  });

	const onSubmit1 = async (data) => {

		data.handsStatus = handFlag ? 'on': 'off';
		try {
			await new Promise((resolve) => setTimeout(resolve, 500));
			axios.post(REACT_APP_GOOGLE_SHEET_URL, data).then((response) => {
				const { status } = response;
				if (status === 200) {
					reset1();
					NotificationManager.success('Submitted Successfully', '', 1000);
				}
			}).catch(err => {
				NotificationManager.error('Failed!', '', 1000);
			});
		} catch (error) {
			NotificationManager.error('Failed!', '', 1000);
		}
	}

	const onSubmit2 = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 500));
			axios.post(REACT_APP_GOOGLE_SHEET_URL, data).then((response) => {
				const { status } = response;
				if (status === 200) {
					reset2();
					NotificationManager.success('Submitted Successfully', '', 1000);
				}
			})
			.catch(err => {
				NotificationManager.error('Failed!', '', 1000);
			});
		} catch (error) {
			NotificationManager.error('Failed!', '', 1000);
		}
	}

	const goBack = () => {
		setHandFlag(true);
		reset2();
		reset1();
		setMode(0);
	}

	return (
		<div className='container mx-auto py-[100px] md:py-[138px] px-[20px] overflow-hidden'>
			<NotificationContainer />
			{mode == 0 &&
				<p className='font-bold text-[40px] leading-[48px] uppercase text-white mb-[166px] hidden md:block'>Contact Us</p>
			}

			{mode != 0 &&
				<p className='font-bold text-[40px] leading-[48px] uppercase text-white mb-[40px]'>Contact Us</p>
			}

			{
				mode == 0 ? (
					<div>
						<div className='flex flex-col md:flex-row  gap-y-[66px]'>
							<input type="button" value="Investor" className='w-[335px] mx-auto py-[74px] md:py-[132px] px-[103px] bg-[#3E3A59] text-white rounded text-[32px] font-bold leading-[39px] rounded-[20px] cursor-pointer' onClick={() => setMode(1)}></input>
							<input type="button" value="Contributor" className='w-[335px] mx-auto py-[74px] md:py-[132px] px-[103px] bg-[#3E3A59] text-white rounded text-[32px] font-bold leading-[39px] rounded-[20px] cursor-pointer' onClick={() => setMode(2)}></input>
						</div>
					</div>
				) : mode ==1 ? 
				(
					<form onSubmit={handleSubmit1(onSubmit1)}>
						<div className='text-white bg-[#3E3A59] max-w-[669px] px-[10px] md:px-[35px] pt-[43px] pb-[20px] md:pb-[37px]  rounded-[20px] mx-auto mt-[54px]'>
							<div className='flex w-full'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Name/Company</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] 	text-white bg-black pl-[10px] border-0' {...register1('name')}></input>
									{errors1.name && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors1.name.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Email Address</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register1('email')}></input>
									{errors1.email && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors1.email.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Hands on or Hands off?</p>
								<div className="flex-1 text-left">
									<label htmlFor="Toggle3" className="w-full inline-flex justify-between py-[3px] px-[7px] bg-black rounded-[10px]">
										<input id="Toggle3" type="checkbox" className="hidden peer" {...register1('handsStatus')} defaultChecked={true}/>
										<span className={`cursor-pointer text-[14px] leading-[17px] text-white font-bold p-[9px] rounded-[10px] ${handFlag ? 'bg-[#5600C3]': '' }`} onClick={() => setHandFlag(true)}>Hands On</span>
										<span className={`cursor-pointer text-[14px] leading-[17px] text-white font-bold p-[9px] rounded-[10px] ${!handFlag ? 'bg-[#5600C3]': '' }`} onClick={() => setHandFlag(false)}>Hands Off</span>
									</label>
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Average check size?</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register1('averageSize')}></input>
									{errors1.averageSize && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors1.averageSize.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Twitter</p>
								<div className="flex-1 text-left">
								<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register1('twitter')} placeholder='optional'></input>
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Discord</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register1('discord')} placeholder='optional'></input>
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Do you have any questions for us?</p>
								<div className="flex-1 text-left">
									<textarea type="text" className='h-[160px] font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register1('question')}></textarea>
									{errors1.question && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors1.question.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[32px] md:mt-[41px] justify-between'>
								<input className="text-[14px] font-bold leading-[17px] w-[111px] h-[37px] bg-[#005AC3] rounded-[10px] cursor-pointer" type="button" value="Back" onClick={() => goBack()}></input>
								<input className="text-[14px] font-bold leading-[17px] w-[111px] h-[37px] bg-[#5600C3] rounded-[10px] cursor-pointer" type="submit" value="Submit"></input>
							</div>
						</div>
					</form>
				) : (
					<form onSubmit={handleSubmit2(onSubmit2)}>
						<div className='text-white bg-[#3E3A59] max-w-[669px] px-[10px] md:px-[35px] pt-[43px] pb-[20px] md:pb-[37px] rounded-[20px] mx-auto mt-[54px]'>

							<div className='flex w-full'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Name/Company</p>
								<div className="flex-1 text-left">
									<input type="text" className='w-full font-bold text-[16px] leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register2('name')}></input>
									{errors2.name && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors2.name.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Email Address</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register2('email')}></input>
									{errors2.email && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors2.email.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Desired role</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register2('desiredRole')}></input>
									{errors2.desiredRole && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors2.desiredRole.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Github</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register2('github')} placeholder='optional'></input>
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Twitter</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register2('twitter')} placeholder='optional'></input>
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Discord</p>
								<div className="flex-1 text-left">
									<input type="text" className='font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register2('discord')} placeholder='optional'></input>
								</div>
							</div>

							<div className='flex w-full mt-[25px]'>
								<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Do you have any questions for us?</p>
								<div className="flex-1 text-left">
									<textarea type="text" className='h-[160px] font-bold text-[16px] w-full leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' {...register2('content')}></textarea>
									{errors2.content && <div className='text-[#FF3344] font-bold pl-[20px]'>{errors2.content.message}</div>}
								</div>
							</div>

							<div className='flex w-full mt-[32px] md:mt-[41px] justify-between'>
								<input className="text-[14px] font-bold leading-[17px] w-[111px] h-[37px] bg-[#005AC3] rounded-[10px] cursor-pointer" type="button" value="Back" onClick={() => goBack()}></input>
								<input className="text-[14px] font-bold leading-[17px] w-[111px] h-[37px] bg-[#5600C3] rounded-[10px] cursor-pointer" type="submit" value="Submit"></input>
							</div>
						</div>
					</form>
				)
			}
			
		</div>
		
	)
}

export default ContactView;