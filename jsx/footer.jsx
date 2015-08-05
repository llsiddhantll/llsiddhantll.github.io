var React = require('react'),
    Router = require('react-router'),
    MediaQuery = require('react-responsive')

var FooterIcon = React.createClass({
    render: function() {
        var self = this,
            icon = {
                float: 'left',
                padding: '25px'
            }

        return (
            <div style={icon}>
                <a target="_blank" href={self.props.link}><img width="20px" height="20px" src={self.props.icon} /></a>
            </div>
        )
    }
})

var Footer = React.createClass({
    render: function(){
        var self = this,
            footer = {
                backgroundColor: '#373837',
                position: 'fixed',
                bottom: '0',
                left: '0',
                height: '20vh',
                width: '100%'
            },
            icons = {
                position: 'absolute',
                left: '0',
                right: '0',
                margin: '0 auto',
                width: '420px',
                paddingTop: 'calc(10vh - 40px)'
            }
        return (
            <div style={footer}>
                <div style={icons}>
                    <FooterIcon icon="../img/dribbble.svg" link="http://dribbble.com/madebysid"/>
                    <FooterIcon icon="../img/twitter.svg" link="http://twitter.com/madebysid"/>
                    <FooterIcon icon="../img/github.svg" link="http://github.com/madebysid"/>
                    <FooterIcon icon="../img/behance.svg" link="http://behance.net/madebysid"/>
                    <FooterIcon icon="../img/stackoverflow.svg" link="http://stackoverflow.com/users/1708706/madebysid"/>
                    <FooterIcon icon="../img/linkedin.svg" link="http://linkedin.com/in/madebysid"/>
                </div>
            </div>
        )
    }
})

module.exports = Footer
