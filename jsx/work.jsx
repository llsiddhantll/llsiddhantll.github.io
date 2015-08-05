var React = require('react'),
    Router = require('react-router'),
    MediaQuery = require('react-responsive'),
    RouteHandler = Router.RouteHandler,

    workData = require('json!../data/work.json')

var WorkItem = React.createClass({
    mixins: [Router.Navigation, Router.State],

    expand: function() {
        var self = this
        self.transitionTo('workDetail', {workId: self.props.data.link.toLowerCase()})
    },

    render: function() {
        var self = this,
            workItem = {
                float: 'left',
                backgroundColor: '#BABABA',
                width: 'calc(15vw - 10px)',
                margin: '5px',
                cursor: 'pointer'
            },
            workItem2 = {
                float: 'left',
                backgroundColor: '#BABABA',
                width: '70vw',
                margin: '5px',
            }
        return (
            <div>
                <MediaQuery query='(min-width: 700px)'>
                    <img onClick={self.expand} src={this.props.data.location} style={workItem}/>
                </MediaQuery>

                <MediaQuery query='(max-width: 700px)'>
                    <img onClick={self.expand} src={this.props.data.location} style={workItem2}/>
                </MediaQuery>
            </div>
        )
    }
})

var Work = React.createClass({

    render: function(){
        var self = this,
            work = {
                position: 'absolute',
                left: '0',
                right: '0',
                margin: '0 auto',
                width: 'calc(60vw + 40px)',
                overflowY: 'scroll',
                height: '55vh'
            }
        return (
            <div style={work}>
            {
                workData.map(function(element, index) {
                    return (
                        <WorkItem data={element} id={element.title} />
                    )
                })
            }
            </div>
        )
    }
})

module.exports = Work
