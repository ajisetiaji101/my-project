import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default function Promote() {

    const promotes = [
        {
            name: 'Bakso',
            price: 'Rp. 10.000,-',
            gambar: require('../../public/bakso.jpg')
        },
        {
            name: 'Sate',
            price: 'Rp. 12.000,-',
            gambar: require('../../public/sate.jpg')
        },
        {
            name: 'Tea',
            price: 'Rp. 5.000,-',
            gambar: require('../../public/tea.jpg')
        },
        {
            name: 'Susu',
            price: 'Rp. 5.000,-',
            gambar: require('../../public/susu.jpg')
        },

    ]

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 w-90 w-10/12 font-bold font-rubik">
            {promotes.map((promote) => (
                <div className="bg-gray-200 shadow-xl rounded-xl">
                    <div className="hover:opacity-30 p-2">
                        <Image
                            src={promote.gambar}
                        />
                    </div>
                    <div className="grid grid-cols-1 justify-items-center items-center md:text-xl p-2">
                        <span>{promote.name} </span>
                        <span>{promote.price}  </span>
                        <div className="text-3xl text-green-300 space-x-3">
                            <button> <FontAwesomeIcon icon={faPlusSquare} /></button>
                            <button> <FontAwesomeIcon icon={faMinusSquare} /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}