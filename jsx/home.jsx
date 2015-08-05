var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link

var Home = React.createClass({
    mixins: [Router.Navigation],

    render: function(){
        var self = this,
            title = {
                width: '70vw',
                textAlign: 'center',
                color: '#F99F1E',
                fontSize: '3em',
                marginTop: '15vh'
            },
            subtitle = {
                position: 'absolute',
                left: '0',
                right: '0',
                margin: '0 auto',
                width: '100vw',
                textAlign: 'center',
                color: '#232323',
                marginTop: '5vh'
            }
        return (
            <div>
                <div style={title}>Welcome</div>
                <div style={subtitle}>
                    <Link to="work" style={subtitle}>Check out my work</Link>
                </div>
            </div>
        )
    }
})

module.exports = Home
