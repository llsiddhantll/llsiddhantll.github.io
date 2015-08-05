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
                display: 'block',
                position: 'absolute',
                height: '70vh',
                overflow: 'scroll',
            }
        return (
            <div style={blog}>
                Check back in a couple of days! I'm working on this.
            </div>
        )
    }
})

module.exports = Blog
