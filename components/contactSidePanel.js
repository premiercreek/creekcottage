import React from 'react';
import Link from 'next/link';
import Email from './email';
import { MailOutlined } from '@ant-design/icons';

const ContactSidePanel = () => {
	return (
		<div className="sidePanelContactText">
						<h1>
				<MailOutlined className="icon" /> Contact Us
			</h1>
					<p>Lenore Lawrence</p><p>
			Premier Creek Lodging
			</p>
			<p>3101 Oceanview Drive</p>
			<p>Queen Charlotte</p>
			<p>British Columbia</p>
			<p>V0T 1S0</p>
			<p>Canada</p>

			<br />
			<p> Tel: 250-617-1251</p>
<p>Tel: 250-559-8415</p>
<p>Fax: 250-559-8198</p>
<p>Toll Free Reservations: 1-888-322-3388</p><br/>
<p><a href="mailto:premier@qcislands.net">premier@qcislands.net</a></p>
			
		</div>
	);
};

export default ContactSidePanel;
