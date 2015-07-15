var React = require('react')

module.exports = React.createClass({
    render: function(){
        var imgStyle = {
            height: '100%',
            position: 'absolute',
            left: '0',
            right: '0',
            margin: '0 auto'
        },
        logoStyle = {
            width: '64px',
            position: 'absolute',
            left: '0',
            right: '0',
            margin: '32px auto'
        },
        headingStyle = {
            position: 'absolute',
            left: '0',
            right: '0',
            top: '150px',
            margin: '0 auto',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            fontSize: '3em'
        },
        subheadingStyle = {
            position: 'absolute',
            left: '0',
            right: '0',
            top: '225px',
            margin: '0 auto',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            fontSize: '1.5em'
        },
        subsubheadingStyle = {
            position: 'absolute',
            left: '0',
            right: '0',
            top: '400px',
            margin: '0 auto',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            fontSize: '0.8em'
        },
        linkContainerStyle = {
            position: 'absolute',
            left: '0',
            right: '0',
            top: '420px',
            margin: '0 auto',
            zIndex: '2',
            width: '256px'
        },
        linkStyle = {
            width: '32px',
            margin: '16px'
        }
        return (
            <div>
                <img src="img/underConstruction.png" style={imgStyle} />

                <img src="img/logo.svg" style={logoStyle}/>

                <div style={headingStyle}>
                    Hello-dee-lo!
                </div>

                <div style={subheadingStyle}>
                    you're early! <br />
                    we'll be up soon!
                </div>

                <div style={subsubheadingStyle}>
                    check out my work
                </div>

                <div style={linkContainerStyle}>
                    <a href="http://behance.net/madebysid" target="_blank"><img src="img/behance.svg" style={linkStyle}/></a>
                    <a href="http://twitter.com/madebysid" target="_blank"><img src="img/twitter.svg" style={linkStyle}/></a>
                    <a href="http://github.com/madebysid" target="_blank"><img src="img/github.svg" style={linkStyle}/></a>
                    <a href="http://dribbble.com/madebysid" target="_blank"><img src="img/dribbble.svg" style={linkStyle}/></a>
                </div>
            </div>
        )
    }
})