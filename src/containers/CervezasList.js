import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CervezaSnippet from '../components/Cervezas'

/* export default class CervezasList extends Component {
  render() {
    return <p>Aquí estaría la lista de cervezas</p>
  }
} */

const CervezasList = props => {
  const { cervezas } = this.props
  return (
    <div>
      {cervezas.map(cerveza => (
        <CervezaSnippet nombre={cerveza.nombre} desc={cerveza.desc} />
      ))}
    </div>
  )
}

CervezasList.PropTypes = {
  cervezas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.required,
      desc: PropTypes.string
    })
  ).required
}
