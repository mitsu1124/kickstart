import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
	return (
		<Menu style={{ marginTop: '10px' }}>
			<Link route="/">
				<a className="item">CrowdCoin</a>
			</Link>
			{/* <Menu.Item>CrowdCoin</Menu.Item> */}

			<Menu.Menu position="right">
				<Link route="/">
					<a className="item">Campaigns</a>
				</Link>
				{/* <Menu.Item>Campaigns</Menu.Item> */}

				<Link route="/campaigns/new">
					<a className="item">+</a>
				</Link>
				{/* <Menu.Item>+</Menu.Item> */}
			</Menu.Menu>
		</Menu>
	);
};
