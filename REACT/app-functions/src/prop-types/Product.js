import PropTypes from 'prop-types';
const defaultImage = 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg';
export const Product = ({image, name, price}) => {
    const url = image && image.url;
    return <article className="product" style={{width: '24%', display: 'inline-block', margin: '5px', border: '1px solid black'}}>
                <img src={url || defaultImage} alt={name || 'default name'} width="100%" height='250px' />
                <h4>{name}</h4>
                <p>${price || 3.99}</p>
        </article>
}

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

Product.defaultProps = {
    name: 'default name',
    price: 3.99,
    image: defaultImage
}