import { Link } from 'react-router-dom';

export const ProductListItem = props => {
    console.log();

    return (
        <div className='ProductCard'>
            <div>
                <figure>
                    <img src={props.data.images[0].filename.medium} alt="Image of a Home for sale." />
                </figure>
            </div>
            <span>
                <h3>{props.data.address}</h3>
                <p>{props.data.zipcode} {props.data.city}</p>
                <p>{props.data.type}</p>
                <Link to={`/products/${props.data.id}`}>Læs Mere</Link>
            </span>
            <span className='ProductCardBottom'>
                <p className='EnergyLabel'>
                    {props.data.energy_label_name}
                </p>
                <p>{props.data.num_rooms} værelser, {props.data.floor_space} m<sup>2</sup></p>
                <p>Price: {props.data.price} DKK</p>
            </span>
        </div>
    )
}