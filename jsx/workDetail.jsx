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
    zoom: function() {
        var self = this
        console.log('Zoom')
        self.setState({
            zoomed: !self.state.zoomed
        })
    },
    close: function() {
        var self = this
        self.transitionTo('work')
    },

    getInitialState: function() {
        var self = this
        return {
            data: self.findData(),
            zoomed: false
        }
    },
    render: function(){
        var self = this,
            detail = {
                position: 'absolute',
                left: '0',
                right: '0',
                margin: '0 auto',
                overflowY: 'scroll',
                height: '55vh'
            },
            img = {
                float: (!self.state.zoomed) ? 'left' : '',
                height: (!self.state.zoomed) ? '40vh' : '50vh',
                marginLeft: (!self.state.zoomed) ? '15vw' : '0vw',
                transform: (!self.state.zoomed) ? '' : 'translateX(50%)',
            },
            img2 = {
                float: 'left',
                width: (!self.state.zoomed) ? '70vw' : '100vw',
                marginLeft: (!self.state.zoomed) ? '15vw' : '0vw',
            },
            wrapper = {
                display: (!self.state.zoomed) ? 'block' : 'none',
                float: 'left',
                marginLeft: '5vw',
                width: '30vw'
            },
            wrapper2 = {
                display: (!self.state.zoomed) ? 'block' : 'none',
                float: 'left',
                marginLeft: '15vw',
                marginTop: '5vh',
                width: '70vw'
            },
            title = {
                fontSize: '1.5em',
                color: '#F99F1E'
            },
            close = {
                position: 'absolute',
                width: '2vw',
                right: '0',
                top: '0',
                marginRight: '15vw',
                cursor: 'pointer'
            },
            close2 = {
                position: 'absolute',
                width: '5vw',
                right: '5vw',
                top: '0',
            }

        return (
            <div style={detail}>
                <MediaQuery query='(min-width: 700px)'>
                    <img src={self.state.data.location} style={img} onClick={self.zoom}/>

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
                </MediaQuery>

                <MediaQuery query='(max-width: 700px)'>
                    <img src={self.state.data.location} style={img2} onClick={self.zoom}/>

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
                    <img style={close2} src="/img/close.svg" onClick={self.close}/>
                </MediaQuery>
            </div>
        )
    }
})

module.exports = WorkDetail