import React from 'react'
import { PokemonDetail } from './PokemonDetail'

function Cards({pokemones}) {


  return (
    <div className="App pt-5">
      <div className='container-card pb-5'>
        {pokemones.map((pokemon) => {
          return <div className='card' key = {pokemon.name}>
            <PokemonDetail pokemon = {pokemon}
              />
          </div>
        })}
      </div>  

      {/* crear un boton que te devuelva automaticamente a la pagina */} 
      {/* aplicar bootstrap a todo el proyecto */}
      {/* dividir el proyecto en componentes */}
    </div>
  )
}

export default Cards