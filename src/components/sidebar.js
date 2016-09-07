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
		return this.props.topics.map((topic) => {
			return (
				<SidebarAccordion
					key={topic.name}
					name={topic.name}
					selectTopic={(topic_name) => {console.log(topic_name)}}
					topics={topic.sub_topics} />
			);
		});
	}

	render() {
		var default_menu_style = {height:'inherit', backgroundColor:'#fff'};
		var default_menu_header_style = {
			textAlign:'center',
			backgroundColor:'#ddd',
			color:'white !important',
		}

		return 	<div className='sidebar' style={this.props.style}>
			<ul className='menu vertical' style={default_menu_style}>
				<li className='menu-text menu-header' 
					style={{backgroundColor:"#3B5A74 !important", fontWeight:'bolder', fontSize: '15px'}}>
					{this.props.title}
				</li>
				{this.renderListItems()}
			</ul>
		</div>
	}	
}