var React = require('react'),
    Router = require('react-router')

var WorkItem = React.createClass({
    mixins: [Router.Navigation],

    expand: function() {
        console.log('Expanded ', this.props.img)
    },

    render: function() {
        var self = this,
            workItem = {
                float: 'left',
                backgroundColor: '#BABABA',
                width: 'calc(17.5vw - 10px)',
                margin: '5px'
            }
        return (
            <div>
                <img onClick={self.expand} src={this.props.data.img} style={workItem}/>
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
                width: '70vw'
            }
        return (
            <div style={work}>
                <WorkItem data="../data/anarchy.json"/>
                <WorkItem data="../data/work/brain.json"/>
                <WorkItem data="../data/work/camera.json"/>
                <WorkItem data="../data/work/anatomy.json"/>
                <WorkItem data="../data/work/internals.json"/>
                <WorkItem data="../data/work/zuckerberg.json"/>
                <WorkItem data="../data/work/pizza.json"/>
                <WorkItem data="../data/work/heart.json"/>
            </div>
        )
    }
})

module.exports = Work
