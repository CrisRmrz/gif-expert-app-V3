import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['TWD']);


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) { // Esto se me ocurrió para poner el newCategory repetido al puro principio y asi no me da error por el key
            let newCategoryIndice = categories.indexOf(newCategory);
            setCategories(categories.splice(newCategoryIndice, 1))
            setCategories([newCategory, ...categories])
            return;
        }

        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} /> {/* EMITIR EVENTO AL PADRE */}


            {
                categories.map(category => {
                    return (<GifGrid key={category} category={category} />)
                })
            }



        </>
    )
}
