var React = require('react'),
    Router = require('react-router'),

    workData = require('json!../data/work.json')

var WorkDetail = React.createClass({
    mixins: [Router.State, Router.Navigation],

    back: function(e) {
        var self = this
        e.preventDefault();
        self.goBack()
    },
    findData: function() {
        var self = this
        for(var x in workData) {
            if(workData[x].title.toLowerCase() == self.getParams().workId)
                return workData[x];
        }
    },

    componentWillMount: function() {
        console.log(this.findData())
    },

    render: function(){
        var self = this,
            detail = {
                position: 'absolute',
                left: '0',
                right: '0',
                top: '0',
                margin: '0 auto',
                width: '70vw',
                backgroundColor: 'black',
                color: 'white',
                overflowY: 'scroll'
            }

        return (
            <div style={detail}>
                WorkDetail
                <div onClick={self.back}>Back</div>
            </div>
        )
    }
})

module.exports = WorkDetail
