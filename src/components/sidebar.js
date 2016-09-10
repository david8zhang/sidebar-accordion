import React, { Component } from 'react';
import SidebarAccordion from './sidebar_accordion';

/**
 * @property {Array} topics A list of topic jsons that describe a topic and its respective subcategories
 * @property {String} title The title of the sidebar at the top
 * @property {Object} (OPTIONAL) style A style JSON that describes style for the outer most sidebar component
 */
class Sidebar extends Component {
	constructor(props) {
		super(props)

		this.state = { activeTopic: null }

	}

	/**
	 * @description Creates a list of collapsable sidebar elements
	 * @return {A list of sidebar accordion components}
	 */
	renderListItems() {
		var count = 0;
		return this.props.topics.map((topic) => {
			count++;
			return (
				<SidebarAccordion
					key={count}
					name={topic.name}
					selectTopic={(topic_name) => {console.log(topic_name)}}
					topics={topic.topics} />
			);
		});
	}

	render() {
		var sidebar_style = {
			boxShadow: '1px 1px 3px 1px #eee',
			border:'1px solid #ddd'
		}

		// Set the sidebar style to have the values of custom passed in styles
		if(this.props.style) {
			for (var key in this.props.style) {
				sidebar_style[key] = this.props.style[key]
			}
		}

		var default_menu_style = {
			height:'inherit', 
			backgroundColor:'#fff'
		}

		var default_menu_header_style = { 
			backgroundColor:"#3B5A74", 
			fontWeight:'bolder', 
			fontSize: '15px',
			color:'white',
			width:'inherit',
			textAlign:'center',
			padding: '25px',
			borderRadius:'5px 5px 0px 0px'
		}

		return <div className='sidebar' style={sidebar_style}>
			<ul className='menu vertical' style={default_menu_style}>
				<li className='menu-text menu-header' 
					style={default_menu_header_style}>
					{this.props.title}
				</li>
				{this.props.children || this.renderListItems()}
			</ul>
		</div>
	}	
}

export default Sidebar;