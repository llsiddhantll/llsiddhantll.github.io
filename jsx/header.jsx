var React = require('react/addons'),
    Router = require('react-router'),
    MediaQuery = require('react-responsive'),
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
                fontSize: '1vw'
            }
        return (
            <div style={link}>
                <Link style={link} to={this.props.text.toLowerCase()}>{this.props.text.toUpperCase()}</Link>
            </div>
        )
    }
})

var Menu = React.createClass({
    toggleMenu: function() {
        var self = this
        self.setState({
            menu: !self.state.menu
        })
    },

    getInitialState: function() {
        return {
            menu: false
        };
    },
    render: function() {
        var self = this,
            menu = {
                position: 'absolute',
                left: '0',
                top: '0',
                backgroundColor: '#232323',
                zIndex: '10',
                height: '100vh',
                width: '100vw',
                transform: self.state.menu ? 'translateY(0%)' : 'translateY(-200vh)',
                WebkitTransform: self.state.menu ? 'translateY(0%)' : 'translateY(-200vh)',
                transition: '0.3s'
            },
            menuIcon = {
                position: 'absolute',
                zIndex: '20',
                left: '30px',
                top: '30px',
                width: '25px',
                cursor: 'pointer',
                color: self.state.menu ? '#232323' : 'white',
                fill: self.state.menu ? '#232323' : 'white',
            },
            menuItem = {
                left: '0',
                right: '0',
                margin: '0 auto',
                color: 'white',
                textAlign: 'center',
                width: '100vw',
                fontSize: '2em',
                lineHeight: '3em',
            },
            img = {
                width: '100px'
            }

        return (
            <div>
                <MediaQuery query='(max-width: 1280px)'>
                    <img
                        src={!self.state.menu
                            ? "/img/hamburger.svg"
                            : "/img/closewhite.svg"} style={menuIcon} onClick={self.toggleMenu}/>
                </MediaQuery>

                <div style={menu}>
                    <div style={{width: '100vw'}}>
                        <div style={{height: "10vh"}}>

                        </div>

                        <div style={menuItem}>
                            <Link to='about' onClick={self.toggleMenu}>ABOUT</Link>
                        </div>
                        <hr style={{width: '70vw'}}/>

                        <div style={menuItem}>
                            <Link to='work' onClick={self.toggleMenu}>WORK</Link>
                        </div>

                        <hr style={{width: '70vw'}}/>
                        <div style={menuItem}>
                            <Link to='blog' onClick={self.toggleMenu}>BLOG</Link>
                        </div>
                        <hr style={{width: '70vw'}}/>

                        <div style={menuItem}>
                            <Link to='contact' onClick={self.toggleMenu}>CONTACT</Link>
                        </div>
                        <hr style={{width: '70vw'}}/>
                    </div>
                </div>
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
                transform: 'translateY(50%)',
                WebkitTransform: 'translateY(50%)'
            },
            rightLinks = {
                position: 'absolute',
                right: '25vw'
            }
        return (
            <div style={header}>

                <Menu />

                <MediaQuery query='(min-width: 1280px)'>
                    <Transition transitionName="headerLeft" transitionAppear={true}>
                        <div style={leftLinks}>
                            <HeaderLink text="about" />
                            <HeaderLink text="work" />
                        </div>
                    </Transition>


                        <Link to="/"><img src="../img/logo.png" style={img}/></Link>
                    <Transition transitionName="headerRight" transitionAppear={true}>
                        <div style={rightLinks}>
                            <HeaderLink text="blog" />
                            <HeaderLink text="contact" />
                        </div>
                    </Transition>
                </MediaQuery>
            </div>
        )
    }
})

module.exports = Header
