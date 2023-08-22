import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball', 'Pokemon' ]);

    const onAddCategory = () => {
        setCategories( ['Digimon', ...categories] );
        // Otra forma de agregar elementos
        // setCategories( categories => [...categories, 'Digimon'] );
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory setCategories= { setCategories } />

        {/* Listado de Gif */}
        <ol>
            { 
                categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) 
            }
        </ol>
            {/* Gif Item */}
    </>
  )
}
