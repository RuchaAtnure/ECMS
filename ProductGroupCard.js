import './ProductGroupCard.css';

const ProductGroupCard=()=>{
    return(
        <div className="card">
        <p>Product Group name:</p>
        <p>Last Updated date:</p>
        <p>Point of contact:</p>
        <div className='statusDiv'> 
            <h3>Status</h3>
        </div>
        </div>
    )
}

export default ProductGroupCard;