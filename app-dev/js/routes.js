var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Redirect = Router.Redirect,

    App = require('./app.js'),
    Home = require('./home.js')

var routes = (

    <Route handler={App}>
        <Route path="/" handler={Home} />
    </Route>
)

Router.run(routes, Router.HashLocation, function(Root){
    React.render(
        <Root />,
        document.body
    )
})