import React from 'react';
import logo from '../assets/logo.png';

const HeaderNav = () => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	
	return (
		<div className="header">
			<nav>
				<div className={`w-full flex flex-wrap items-center justify-between py-2 ${navbarOpen ? 'pr-4': 'px-4'}`}>
					<a href="#" className={`flex items-center ${navbarOpen ? 'invisible' : 'visible'}`}>
						<img src={logo} className="h-8 mr-3" alt="APED" />
					</a>
					<button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)}>
						<span className="sr-only">Open main menu</span>
						<svg className="w-8 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
					</button>
					<div className={`${navbarOpen ? 'visible': 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
						<ul className="font-medium flex flex-col  md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">

						{
							!navbarOpen ? (
								<div className="bg-black flex flex-row gap-[30px]">
									<li className='w-[105px] text-center h-[32px] border-[#AEAEAE] border-[1px] border-opacity-80 rounded-[15px] py-5 flex items-center justify-center bg-[#1A1A1A]'>
										<a href="#" className="text-white">DOCS</a>
									</li>
										
									<li className='w-[105px] text-center h-[32px] border-[#AEAEAE] border-[1px] border-opacity-80 rounded-[15px] py-5 flex items-center justify-center bg-[#1A1A1A]'>
										<a href="#" className="text-white">CONTACTS</a>
									</li>
								</div>
							) : (
								<div className="bg-black fixed h-[100vh] w-full pl-8 z-50">
									<a href="#" className='w-[105px] text-center h-[32px] py-5 flex font-bold text-[32px] leading-[34px] text-white uppercase py-[30px]'>DOCS</a>
									<a href="#" className='w-[105px] text-center h-[32px] py-5 flex font-bold text-[32px] leading-[34px] text-white uppercase py-[30px]'>CONTACTS</a>
									<a href="#" className='w-[105px] text-center h-[32px] py-5 flex font-bold text-[32px] leading-[34px] text-white uppercase py-[30px]'>TWITTER</a>
									<a href="#" className='w-[105px] text-center h-[32px] py-5 flex font-bold text-[32px] leading-[34px] text-white uppercase py-[30px]'>DISCORD</a>
				
								</div>
							)
						}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default HeaderNav;


