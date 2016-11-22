const React = require('react')


const Efforts = React.createClass({
  getInitialState: function() {
    return {
      efforts: []
    }
  },
  componentDidMount() {
    this.props.allDocs('efforts', (err, efforts) => {
      if (err) return console.log(err.message)
      this.setState({efforts})
    })
  },
  render() {
    return (
      <div>
        <h3>Efforts</h3>
        <ul>
        {this.state.efforts.map(effort =>
          <li key={effort.id}>{effort.name}</li>
        )}
      </ul>
      </div>
    )
  }
})

module.exports = Efforts
