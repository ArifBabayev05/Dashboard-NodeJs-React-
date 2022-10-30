import React from 'react'
import { Link } from 'react-router-dom'


const CustomersCard = (props) => {
    return (
        <div className='border-2 mb-4 aa rounded overflow-hidden container'>
            <div className='search'>
            </div>
            <Link id='cards' to={`/customers/${props.product._id}`} style={{ textDecoration: 'none', 'filter': `drop-shadow(2px 2px 2px #3506ff99)` }}>
                <div
                    style={{
                        'background': `linear-gradient(109.6deg, rgba(119, 44, 232, 0.68) 11.5%, rgb(119, 44, 232) 91.2%)`, "height": '103px',
                    }}
                    className="w-100  myCard flex ">

                    <img src={props.product.imageUrl} width='100' alt='aaa' />
                    <h3>{props.product.name}</h3>

                    <div className='deadline mt-2'>
                        <p style={{ fontSize: '16px' }}>{props.product.name}</p>
                    </div>
                    <div className='p-1 viewMore'>
                        <a href='/#'>Daha Ətraflı</a>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default CustomersCard