var React = require('react'),
    Router = require('react-router'),

    anarchy = require('json!../data/work/anarchy.json'),
    anatomy = require('json!../data/work/anatomy.json'),
    brain = require('json!../data/work/brain.json'),
    camera = require('json!../data/work/camera.json'),
    construction = require('json!../data/work/construction.json'),
    heart = require('json!../data/work/heart.json'),
    internals = require('json!../data/work/internals.json'),
    phoenix = require('json!../data/work/phoenix.json'),
    pizza = require('json!../data/work/pizza.json'),
    polymer = require('json!../data/work/polymer.json'),
    zuckerberg = require('json!../data/work/zuckerberg.json')

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
                width: '70vw'
            }
        return (
            <div style={work}>
                <WorkItem data={anarchy}/>
                <WorkItem data={pizza}/>
                <WorkItem data={brain}/>
                <WorkItem data={camera}/>
                <WorkItem data={construction}/>
                <WorkItem data={internals}/>
                <WorkItem data={heart}/>
                <WorkItem data={phoenix}/>
                <WorkItem data={zuckerberg}/>
                <WorkItem data={polymer}/>
                <WorkItem data={anatomy}/>
            </div>
        )
    }
})

module.exports = Work
