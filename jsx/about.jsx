var React = require('react')

var About = React.createClass({

    render: function(){
        var self = this,
            about = {
                position: 'absolute',
                width: 'calc(100% - 30vw)'
            },
            img = {
                position: 'absolute',
                top: '0',
                right: '0',
                width: '100px',
                borderRadius: '50%'
            }
        return (
            <div style={about}>

                <img src="../img/profile.jpg" style={img}></img>

                <a href="resume.pdf">Download My Resume</a>
            </div>
        )
    }
})

module.exports = About
