var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute,

    App = require('./app.jsx'),
    Home = require('./home.jsx'),

    About = require('./about.jsx'),
    Work = require('./work.jsx'),
    WorkDetail = require('./workDetail.jsx'),
    Blog = require('./blog.jsx'),
    Contact = require('./contact.jsx')

var routes = (
    <Route name="app" handler={App}>
        <Route name="home" path="/" handler={Home} />

        <Route name="about" path="/about" handler={About} />

        <Route name="work" path="/work" handler={Work}>
            <Route name="workDetail" path=":workId" handler={WorkDetail} />
        </Route>

        <Route name="blog" path="/blog" handler={Blog} />

        <Route name="contact" path="/contact" handler={Contact} />

    </Route>
)

Router.run(routes, Router.HashLocation, function(Root){
    React.render(
        <Root />,
        document.body
    )
})
