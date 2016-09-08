# sidebar-accordion
collapsing sidebar with categories implemented in ReactJS

# Styles
You must have Foundation 6 included as part of the project for this component to work!

Get it here: [Foundation 6](http://foundation.zurb.com/sites/download.html/)

Require it in your html

```
<link rel="stylesheet" type="text/css" href="./style/css/app.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.min.css">
```

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