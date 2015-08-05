var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Transition = React.addons.CSSTransitionGroup,

    Header = require('./header.jsx'),
    Footer = require('./footer.jsx')

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var App = React.createClass({
    mixins: [Router.State],

    componentDidMount: function() {
        console.log(window.location.hash)
    },
    render: function(){
        var self = this,
            app = {
                margin: '0 15vw'
            }

        return (
            <div style={app}>
                <Header />
                <Transition transitionName="pageAnim" transitionAppear={true}>
                    <RouteHandler key={self.getRoutes()[1].name} style={{overflowY: 'scroll'}}/>
                </Transition>
                <Footer />
            </div>
        )
    }
})

module.exports = App
