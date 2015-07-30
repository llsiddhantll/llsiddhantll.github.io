var React = require('react')

var About = React.createClass({

    render: function(){
        var self = this,
            about = {
                position: 'absolute'
            }
        return (
            <div style={about}>
                About
            </div>
        )
    }
})

module.exports = About
