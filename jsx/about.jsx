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
            },
            desc = {

            }
        return (
            <div style={about}>

                <img src="../img/profile.jpg" style={img}></img>

                <div style={desc}>
                    You know those people who just need a pair of headphones, the dark of the night and solitude to work?<br />
                    Add free Wi-Fi, and you've got a description that almost matches me.
                <br /><br />
                People say I'm cool to hang out with. Yes, they're human beings.
                </div>

                <a href="resume.pdf">Download My Resume</a>
            </div>
        )
    }
})

module.exports = About
