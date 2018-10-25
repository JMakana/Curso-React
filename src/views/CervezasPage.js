import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'

export default class CervezasPage extends Component {
  state = {
    cervezas: [],
    error: '',
    cervezasFiltradas: []
  }

  componentDidMount = () => {
    this.setState({ error: '' })
    fetch('http://localhost:8080/api/cervezas')
      .then(response => response.json())
      .then(cervezas =>
        this.setState({ cervezas, error: '', cervezasFiltradas: cervezas })
      )
      .catch(error => {
        console.log(`Este es mi error: ${error}`)
        this.setState({ error: error.message })
      })
  }

  handleFilter = searchText => {
    const cervezasFiltradas = this.state.cervezas.filter(cerveza => {
      return searchText
        .split(' ')
        .some(
          palabra =>
            cerveza.descripción.toUpperCase().includes(palabra.toUpperCase()) ||
            cerveza.nombre.toUpperCase().includes(palabra.toUpperCase())
        )
    })
    this.setState({ cervezasFiltradas })
  }

  render() {
    const { cervezasFiltradas, error } = this.state
    return (
      <div>
        <SearchBox filter={this.handleFilter} />
        <CervezasList cervezas={cervezasFiltradas} />
        {error ? <p>{error}</p> : ''}
      </div>
    )
  }
}
