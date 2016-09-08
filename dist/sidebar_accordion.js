'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarAccordion = (function (_Component) {
    _inherits(SidebarAccordion, _Component);

    function SidebarAccordion(props) {
        _classCallCheck(this, SidebarAccordion);

        var _this = _possibleConstructorReturn(this, (SidebarAccordion.__proto__ || Object.getPrototypeOf(SidebarAccordion)).call(this, props));

        _this.state = { active: true };
        return _this;
    }

    _createClass(SidebarAccordion, [{
        key: 'renderListItems',
        value: function renderListItems() {
            var _this2 = this;

            var count = 0;
            return this.props.topics.map(function (topic) {
                count++;
                return _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                            _this2.props.selectTopic(topic.name);
                        },
                        key: topic.name,
                        style: { padding: '10px', color: '#777', cursor: 'pointer' } },
                    topic.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var menu_text = {
                textAlign: 'center',
                fontWeight: 700,
                padding: '10px',
                backgroundColor: '#ddd',
                width: 'inherit',
                cursor: 'pointer'
            };
            return _react2.default.createElement(
                'div',
                { style: this.props.accordion_style },
                _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                            _this3.setState({ active: !_this3.state.active });
                        },
                        className: 'menu-text',
                        style: menu_text },
                    _react2.default.createElement(
                        'div',
                        { className: 'menu-link' },
                        this.props.name
                    )
                ),
                this.state.active && _react2.default.createElement(
                    'ul',
                    { className: 'menu vertical', style: { height: 'inherit', backgroundColor: '#fff' } },
                    this.renderListItems()
                )
            );
        }
    }]);

    return SidebarAccordion;
})(_react.Component);

exports.default = SidebarAccordion;