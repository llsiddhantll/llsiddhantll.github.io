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
                <BlogEntry title="Title 1" content="Content 1" />
                <BlogEntry title="Title 2" content="Content 2" />
                <BlogEntry title="Title 3" content="Content 3" />
            </div>
        )
    }
})

module.exports = Blog
