import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { createContext, useState } from 'react';

export default function Drinks() {


    const [cart, setCart] = useState([]);

    const addToCart = (el) => {
        setCart([...cart,el])
    }

    const cartItems = cart.map((el) => (
        <div>
            <span>{el.name}</span>
        </div>

    ))

    const drinks = [
        {
            name: 'Tea',
            price: 'Rp. 10.000,-',
            gambar: require('../../public/tea.jpg')
        },
        {
            name: 'Susu',
            price: 'Rp. 10.000,-',
            gambar: require('../../public/susu.jpg')
        },
        {
            name: 'Coffe',
            price: 'Rp. 10.000,-',
            gambar: require('../../public/coffe.jpg')
        },
        {
            name: 'Beer',
            price: 'Rp. 10.000,-',
            gambar: require('../../public/beer.jpg')
        },
    ]

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 w-90 w-10/12 font-bold">
            {drinks.map((drink) => (
                <div className="shadow-xl rounded-xl">
                    <div className="hover:opacity-30 p-2">
                        <Image
                            src={drink.gambar}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-evenly items-center md:text-sm p-2">
                        <span>{drink.name} </span>
                        <span>{drink.price}  </span>
                        <div className="text-3xl text-green-300 space-x-3">
                            <button type="submit"> <FontAwesomeIcon icon={faPlusSquare} onClick={()=>addToCart(drink)} /></button>
                            <button> <FontAwesomeIcon icon={faMinusSquare} /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}