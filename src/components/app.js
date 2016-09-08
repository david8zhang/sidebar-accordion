import React, { Component } from 'react';
import Sidebar from './sidebar';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var topics = [{
			name:'Super Topic 1',
			topics: [{
				name:'Topic 1'
			}, {
				name:'Topic 2'
			}, {
				name: 'Topic 3'
			}]
		}, {
			name: 'Super Topic 2',
			topics: [{
				name:'Topic 1'
			}, {
				name: 'Topic 2'
			}, {
				name: 'Topic 3'
			}]
		}];
		return (
			<div>
				<Sidebar topics={topics}
						 selectTopic={(topic) => {console.log(topic)}}
						 title='Sample Sidebar'>
					<h1>Hello World!</h1>
				</Sidebar>
				<br/>
				<Sidebar topics={topics}
						 selectTopic={(topic) => {console.log(topic)}}
						 title='Sample Sidebar'/>
			</div>
		);
	}
}

export default App;