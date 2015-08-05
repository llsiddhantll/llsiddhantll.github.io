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
            detail2 = {
                position: 'absolute',
                left: '0',
                right: '0',
                top: '10vh',
                overflowY: 'scroll',
                height: '75vh',
                width: '100vw'
            },
            img = {
                float: (!self.state.zoomed) ? 'left' : '',
                height: (!self.state.zoomed) ? '40vh' : '50vh',
                marginLeft: (!self.state.zoomed) ? '15vw' : '0vw',
                transform: (!self.state.zoomed) ? '' : 'translateX(50%)',
            },
            img2 = {
                float: 'left',
                width: '100vw',
                marginLeft: '0vw',
            },
            wrapper = {
                display: (!self.state.zoomed) ? 'block' : 'none',
                float: 'left',
                marginLeft: '5vw',
                width: '30vw'
            },
            wrapper2 = {
                float: 'left',
                marginLeft: '5vw',
                marginTop: '5vh',
                width: '90vw'
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
                float: 'right',
                width: '5vw',
                marginRight: '5vw',
                marginTop: '5vw'
            }

        return (
            <div>
                <MediaQuery query='(min-width: 1280px)'>
                    <div style={detail}>
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
