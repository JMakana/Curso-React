import React, { Component } from 'react'
  import PropTypes from 'prop-types'

  export default class SearchBox extends Component {
    static propTypes = {
      filter: PropTypes.func.isRequired
    }

    state = {
      disabled: true,
      busqueda:'',
      searchText: ''
    }

    handleChange = event => {
      const searchText = event.target.value
      this.setState({
        disabled: searchText ? false : true,
        searchText
      })
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.filter(this.state.searchText)
    }

    render() {
      const { disabled } = this.state
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <button type="submit" disabled={disabled}>
              Buscar
            </button>
          </form>
        </div>
      )
    }
  }
