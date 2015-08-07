var React = require('react'),
    Router = require('react-router'),
    MediaQuery = require('react-responsive'),

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
            if(workData[x].link.toLowerCase() == self.getParams().workId)
                return workData[x];
        }
    },
    close: function() {
        var self = this
        self.transitionTo('work')
    },

    getInitialState: function() {
        var self = this
        return {
            data: self.findData()
        }
    },
    render: function(){
        var self = this,
            detail = {
                width: '100vw'
            },
            detail2 = {
                overflowY: 'scroll',
                height: '100vh'
            },
            img = {
                float: 'left',
                width: '30vw'
            },
            img2 = {
                float: 'left',
                width: '70vw',
            },
            wrapper = {
                float: 'left',
                marginLeft: '5vw',
                width: '30vw'
            },
            wrapper2 = {
                float: 'left',
                width: '60vw',
                marginTop: '5vh',
                height: '90vh'
            },
            title = {
                fontSize: '1.5em',
                color: '#F99F1E'
            },
            close = {
                float: 'left',
                width: '2vw',
                cursor: 'pointer'
            },
            close2 = {
                float: 'right',
                width: '5vw',
                marginTop: '5vh'
            }

        return (
            <div>
                <MediaQuery query='(min-width: 1280px)'>
                    <div style={detail}>
                        <img src={self.state.data.location} style={img} />

                        <div style={wrapper}>
                            <div style={title}>{self.state.data.title}</div>
                            <div>({self.state.data.client})</div>
                            <br/>
                            <div dangerouslySetInnerHTML={{__html: self.state.data.desc}} />
                            <br /><br />

                            <div style={{color: '#F99F1E'}}>Tools: </div>
                            <div>
                                {self.state.data.tools.map(function(element) {
                                    return (
                                        <div>
                                            {element}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <img style={close} src="/img/close.svg" onClick={self.close}/>
                        </div>
                    </MediaQuery>

                    <MediaQuery query='(max-width: 1280px)'>
                        <div style={detail2}>
                            <img src={self.state.data.location} style={img2}/>
                            <img style={close2} src="/img/close.svg" onClick={self.close}/>

                            <div style={wrapper2}>
                                <div style={title}>{self.state.data.title}</div>
                                <div>({self.state.data.client})</div>
                                <br/>
                                <div dangerouslySetInnerHTML={{__html: self.state.data.desc}} />
                                <br /><br />

                                <div style={{color: '#F99F1E'}}>Tools: </div>
                                <div>
                                    {self.state.data.tools.map(function(element) {
                                        return (
                                            <div>
                                                {element}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
        )
    }
})

module.exports = WorkDetail
