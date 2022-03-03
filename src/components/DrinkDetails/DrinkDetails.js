import React, { useEffect, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDrinkDetails } from '../../actions/cocktails'
import { Container } from '@material-ui/core'
import RecipeSheet from '../DrinkList/RecipeSheet/RecipeSheet'

const DrinkDetails = () => {
    const { currentDrink} = useSelector((state) => state.drinks)
    const dispatch = useDispatch()
    const { id } = useParams()
    const myCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const currentIngredients = []
    const ingredient = 'strIngredient'
    const measurement = 'strMeasure'
    
    const stableDispatch = useCallback(() => {
        dispatch( fetchDrinkDetails( id ))
    }, [id, dispatch]);
    
    //ingredient: currentDrink[ingredient+item.toString()], measurement: currentDrink[measurement + item.toString()]}
    
    useEffect(() => {
        stableDispatch()
        //console.log(currentInstructions)
    }, [ id, stableDispatch ])

    if( !currentDrink ) return null

    currentDrink && myCount.map(item => currentIngredients.push({
        ingredient: currentDrink[ingredient+item.toString()], measurement: currentDrink[measurement + item.toString()]
    }))

    return (
        <Container>
            <RecipeSheet 
                id={ currentDrink.idDrink }
                name={ currentDrink.strDrink }
                thumbnail={ currentDrink.strDrinkThumb }
                glass={ currentDrink.strGlass }
                ingredients={ currentIngredients }
                instructions= { currentDrink.strInstructions }
            />
        </Container>
    )
}

export default DrinkDetails