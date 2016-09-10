'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sidebar_accordion = require('./sidebar_accordion');

var _sidebar_accordion2 = _interopRequireDefault(_sidebar_accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @property {Array} topics A list of topic jsons that describe a topic and its respective subcategories
 * @property {String} title The title of the sidebar at the top
 * @property {Object} (OPTIONAL) style A style JSON that describes style for the outer most sidebar component
 */

var Sidebar = (function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar(props) {
		_classCallCheck(this, Sidebar);

		var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

		_this.state = { activeTopic: null };

		return _this;
	}

	/**
  * @description Creates a list of collapsable sidebar elements
  * @return {A list of sidebar accordion components}
  */

	_createClass(Sidebar, [{
		key: 'renderListItems',
		value: function renderListItems() {
			var count = 0;
			return this.props.topics.map(function (topic) {
				count++;
				return _react2.default.createElement(_sidebar_accordion2.default, {
					key: count,
					name: topic.name,
					selectTopic: function selectTopic(topic_name) {
						console.log(topic_name);
					},
					topics: topic.topics });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var sidebar_style = {
				boxShadow: '1px 1px 3px 1px #eee',
				border: '1px solid #ddd'
			};

			// Set the sidebar style to have the values of custom passed in styles
			if (this.props.style) {
				for (var key in this.props.style) {
					sidebar_style[key] = this.props.style[key];
				}
			}

			var default_menu_style = {
				height: 'inherit',
				backgroundColor: '#fff'
			};

			var default_menu_header_style = {
				backgroundColor: "#3B5A74",
				fontWeight: 'bolder',
				fontSize: '15px',
				color: 'white',
				width: 'inherit',
				textAlign: 'center',
				padding: '25px',
				borderRadius: '5px 5px 0px 0px'
			};

			return _react2.default.createElement(
				'div',
				{ className: 'sidebar', style: sidebar_style },
				_react2.default.createElement(
					'ul',
					{ className: 'menu vertical', style: default_menu_style },
					_react2.default.createElement(
						'li',
						{ className: 'menu-text menu-header',
							style: default_menu_header_style },
						this.props.title
					),
					this.props.children || this.renderListItems()
				)
			);
		}
	}]);

	return Sidebar;
})(_react.Component);

exports.default = Sidebar;