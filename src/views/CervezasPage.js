import React from 'react'
import SearchBox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'

export default function CervezasPage() {
  const cervezas = [
    { nombre: 'Ambar', desc: 'Cerveza de Aragón' },
    { nombre: 'CruzCampo', desc: 'Aguachirri' },
    { nombre: 'CruzCampo', desc: 'Cerveza Mejicana' }
  ]
  return (
    <div>
      <SearchBox />
      <CervezasList cervezas={cervezas}/>
    </div>
  )
}
