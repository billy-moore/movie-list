import React, { Fragment } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import DrinkCard from '../DrinkCard/DrinkCard'
import { fetchDrinkDetails } from '../../../actions/cocktails'

const Drinks = ({ list }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const clickDrink = ( e, drink ) => {
        // drink variable is ID #
        e.preventDefault()
        
        navigate(`/drink/${ drink.idDrink }`)
        dispatch( fetchDrinkDetails( drink.idDrink ))
        
    }
    
    return (
        <Fragment>
            {list.length > 0 && list.map((drink, index) => (
                <DrinkCard 
                    key={ drink.idDrink }
                    name={ drink.strDrink }
                    thumbnail={ drink.strDrinkThumb }
                    id={ drink.idDrink }
                    type={ [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3] }
                    clicked={ ( e ) => clickDrink(e, drink )}
                />
            ) )
            }
        </Fragment>
    )
}

export default Drinks