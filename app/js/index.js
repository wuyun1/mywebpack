require('../css/reset.scss'); //加载初始化样式
require('../css/allComponent.scss'); //加载组件样式

var React = require('react');
var TTT = require('./TTT.js');
var $ = require('jquery');

class Test {

}

var App = React.createClass({
	clickHandle: function() {

		// console.log(this);
		$(this.refs.show).toggle(500);
	},
	render: function() {
		return (
			<div >
				<h1 onClick = {this.clickHandle}>Hdaasdfsald!</h1>
					<br />
				<TTT></TTT>
				<div ref="show">asfdasfasdfadsf
				</div>
			</div>

		);
	}
});

React.render(
	<App />, document.body
);