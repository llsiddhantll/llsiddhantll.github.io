var React = require('react/addons'),
    Router = require('react-router'),
    Transition = React.addons.CSSTransitionGroup,

    Link = Router.Link

var HeaderLink = React.createClass({
    mixins: [Router.State],

    render: function() {
        var self = this,
            link = {
                color: (window.location.hash.slice(2,5) == self.props.text.slice(0,3).toLowerCase()) ? '#F99F1E' : '#373837',
                textDecoration: 'none',
                textAlign: 'center',
                float: 'left',
                padding: '20px',
            }
        return (
            <div style={link}>
                <Link style={link} to={this.props.text.toLowerCase()}>{this.props.text.toUpperCase()}</Link>
            </div>
        )
    }
})

var Header = React.createClass({
    render: function(){
        var self = this,
            header = {
                height: '20vh',
                width: '100%'
            },
            leftLinks = {
                position: 'absolute',
                left: '25vw'
            },
            img = {
                display: 'block',
                position: 'absolute',
                left: '0',
                right: '0',
                margin: '0 auto',
                width: '50px',
                transform: 'translateY(50%)'
            },
            rightLinks = {
                position: 'absolute',
                right: '25vw'
            }
        return (
            <div style={header}>
                <Transition transitionName="headerLeft" transitionAppear={true}>
                    <div style={leftLinks}>
                        <HeaderLink text="about" />
                        <HeaderLink text="work" />
                    </div>
                </Transition>


                    <Link to="/"><img src="../img/logo.svg" style={img}/></Link>
                <Transition transitionName="headerRight" transitionAppear={true}>
                    <div style={rightLinks}>
                        <HeaderLink text="blog" />
                        <HeaderLink text="contact" />
                    </div>
                </Transition>
            </div>
        )
    }
})

module.exports = Header
