import React from 'react';
import ContactView from './views/ContactView';
import ContactMode from './views/ContactMode';

const Contact = () => {
    return (
			<div className='bg-black'>
				<section className="">
					<ContactMode></ContactMode>
				</section>
				<section>
					<ContactView></ContactView>
				</section>
			</div>
    )
}

export default Contact;