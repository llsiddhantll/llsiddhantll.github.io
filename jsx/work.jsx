var React = require('react'),
    Router = require('react-router'),
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
            }
        return (
            <div>
                <img onClick={self.expand} src={this.props.data.location} style={workItem}/>
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
                overflowY: 'scroll'
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
