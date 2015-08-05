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
                top: '70px',
                left: '0',
                width: '100px',
                borderRadius: '50%'
            },
            desc = {
                position: 'absolute',
                top: '50px',
                right: '0',
                marginLeft: '150px'
            }
        return (
            <div style={about}>

                <img src="../img/profile.jpg" style={img}></img>

                <div style={desc}>
                    My name is Siddhant. I do fancy stuff.<br />
                    A designer at heart, I believe the way a product looks and feels is just as important as the way it works.<br /><br />

                    Visual Design and Development should go hand-in-hand, and they should be interchangable. That’s why I like to call myself a full-stack designer. <br /><br />

                    Basically I’m this mess of a lot of things.<br /><br />

                    <a href="resume.pdf">Download My Resume</a><br /><br />

                    Check out my work, you’ll see.<br /><br />

                    I love talking to people. Drop me a line.
                </div>
            </div>
        )
    }
})

module.exports = About
