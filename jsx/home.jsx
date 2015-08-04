var React = require('react')

var Home = React.createClass({

    render: function(){
        var self = this,
            title = {
                width: '70vw',
                textAlign: 'center',
                color: '#F99F1E',
                fontSize: '3em',
                marginTop: '15vh'
            }
        return (
            <div>
                <div style={title}>Welcome</div>
            </div>
        )
    }
})

module.exports = Home
