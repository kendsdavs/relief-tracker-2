const React = require('react')
const { BrowserRouter, Match } = require('react-router')
const Service = require('./components/service')

const Home = require('./pages/home')
const About = require('./pages/about')
const Efforts = require('./pages/efforts')
const EffortForm = require('./pages/efforts/form')



const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match exactly pattern="/efforts" component={Service(Efforts)} />
          <Match pattern="/efforts/new" component={Service(EffortForm)} />
        </div>
      </BrowserRouter>

    )
  }
})

module.exports = App
