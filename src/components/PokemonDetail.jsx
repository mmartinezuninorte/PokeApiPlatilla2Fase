import { useEffect, useState } from 'react'


export function PokemonDetail({pokemon}) {
    const [detail, setDetail]= useState('')
    useEffect(()=>{
        async function obtenerPokemon(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        setDetail(data.sprites.front_default) // con una ruta de imagen
    } obtenerPokemon(pokemon.name)},[])
  return (<>
            <img src={ detail }/>
            <p>{pokemon.name}</p>
        </>
  )
}
