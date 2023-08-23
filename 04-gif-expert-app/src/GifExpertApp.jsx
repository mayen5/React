import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;

        // categories.push(newCategory);
        
        setCategories( [newCategory, ...categories] );

        // Otra forma de agregar elementos
        // setCategories( categories => [...categories, 'Digimon'] );
    }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories= { setCategories } 
            onNewCategory={ event => onAddCategory(event) }
        />

        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />
            )) 
        }


    </>
  )
}
