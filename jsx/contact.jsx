var React = require('react'),
    MediaQuery = require('react-responsive')

var Contact = React.createClass({

    submit: function(){
        console.log('Submit form')
    },
    getLink: function() {
        return ("mailto:me@madebysid.com?subject=Hey from " + React.getDOMNode(self.refs.name).value + "!")
    },

    render: function(){
        var self = this,
            contact = {
                position: 'absolute'
            },
            heading = {
                left: '0',
                right:'0',
                margin: '0 auto',
                textAlign: 'center',
                color: '#F99F1E',
                fontSize: '1.5em',
                width: '70vw'
            },
            space1 = {
                height: '15vh'
            },
            space2 = {
                height: '8vh'
            },
            input = {
                position: 'absolute',
                left: '0',
                right:'0',
                margin: '0 auto',
                width: '20vw'
            },
            input2 = {
                position: 'absolute',
                left: '0',
                right:'0',
                margin: '0 auto',
                width: '70vw'
            },
            button = {
                position: 'absolute',
                left: '0',
                right:'0',
                margin: '0 auto',
                width: '10vw'
            }
        return (
            <div style={contact}>
                <div style={heading}>
                    Y'ALL PEEPS KNOW I LUV ZE DESIGN<br />FILL THE FORM TO DROP ME A LINE
                </div>

                <div style={space1}/>

                <MediaQuery query='(min-width: 700px)'>
                    <input type="text" style={input} ref="name" className="inputBox" placeholder="Name"/>
                    <div style={space2}/>
                    <input type="text" style={input} className="inputBox" placeholder="Message"/>
                    <div style={space1}/>
                </MediaQuery>

                <MediaQuery query='(max-width: 700px)'>
                    <input type="text" style={input2} ref="name" className="inputBox" placeholder="Name"/>
                    <div style={space2}/>
                    <input type="text" style={input2} className="inputBox" placeholder="Message"/>
                    <div style={space1}/>
                </MediaQuery>
                <a style={button} className="btn" href="mailto:me@madebysid.com?subject=Hey!">SHOOT</a>

            </div>
        )
    }
})

module.exports = Contact