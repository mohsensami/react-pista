import classes from './AvailableMeals.module.css';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        image: 'https://loremflickr.com/300/150/meal?lock=122',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        image: 'https://loremflickr.com/300/150/meal?lock=65',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        image: 'https://loremflickr.com/300/150/meal?lock=42',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        image: 'https://loremflickr.com/300/150/meal?lock=12',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getAllProducts = async () => {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts([...data]);
        console.log(products);
        setIsLoading(false);
    };
    useEffect(() => {
        getAllProducts();
    }, []);
    let mealsList;
    if (isLoading) {
        mealsList = <p>Loading</p>;
    } else {
        mealsList = products.map((meal) => (
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.title}
                description={meal.description}
                price={meal.price}
                image={meal.image}
            />
        ));
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
