import React, { Component } from 'react';

class SidebarAccordion extends Component {

    constructor(props) {
        super(props);

        this.state = { active: true };
    }

    renderListItems() {

        var count = 0;
        return this.props.topics.map((topic) => {
            count++;
            return (
                <li onClick={() => {this.props.selectTopic(topic.name)}}
                    key={topic.name}
                    style={{padding:'10px', color:'#777', cursor:'pointer'}}>
                    {topic.name}
                </li>
            );                

        });
    }

    handleClick() {
        this.setState({ active: !this.state.active });
    }

	render() {
        var menu_text = {
            textAlign:'center',
            fontWeight: 700,
            padding:'10px',
            backgroundColor:'#ddd',
            width:'inherit',
            cursor:'pointer'
        }
		return (
			<div style={this.props.accordion_style}>
                <li onClick={this.handleClick.bind(this)}
                    className='menu-text'
                    style={menu_text}>
                        <div className='menu-link'>{this.props.name}</div>
                </li>
                {
                    this.state.active &&
                    <ul className='menu vertical' style={{height:'inherit', backgroundColor:'#fff'}}>
                        { this.renderListItems() }
                    </ul>
                }

			</div>
		)
	}
}

export default SidebarAccordion;
