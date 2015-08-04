var React = require('react/addons'),
    Transition = React.CSSTransitionGroup

var BlogEntry = React.createClass({
    render: function() {
        var self = this,
            title = {
                fontFamily: 'RobotoRegular'
            },
            content = {
                fontSize: '0.8em'
            }
        return (
            <div>
                <div style={title}>{this.props.title}</div>
                <p style={content}>{this.props.content}</p>
            </div>
        )
    }
})

var Blog = React.createClass({

    render: function(){
        var self = this,
            blog = {
                position: 'absolute'
            }
        return (
            <div style={blog}>
                This section is under construction
            </div>
        )
    }
})

module.exports = Blog
