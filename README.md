# sidebar-accordion
collapsing sidebar with categories implemented in ReactJS

# Usage
Pass in topics and a title, and inline styles. You can also pass in nested children
to customize the sidebar options

```
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

<Sidebar topics={topics}
		 selectTopic={(topic) => {console.log(topic)}}
		 title='Sample Sidebar'/>

<Sidebar title='Sample Sidebar With Children'>
	<div>Hello World!</div>
</Sidebar>

```