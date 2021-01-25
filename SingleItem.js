
import {useGlobalContext} from './context';

const SingleItem = ({item}) => {
	const {increaseQnt, decreaseQnt, removeItem} = useGlobalContext();
	const {id, img, title, price, qnt} = item;


	return <div className="d-flex m-2">
				<div>
					<img src={img} height="80" width="60" alt={title}/>
				</div>
				<div className="w-100">
					<div className="d-flex justify-content-between">
						<div>{title}</div>
						<div><button className="btn btn-sm btn-info" onClick={() => increaseQnt(id, qnt)}>{'^'}</button></div>
					</div>
					<div className="d-flex justify-content-between">
						<div>${price}</div>
						<div className="mr-2">{qnt}</div>
					</div>
					<div className="d-flex justify-content-between">
						<div><button className="btn btn-danger btn-sm" onClick={() => removeItem(id)}>remove</button></div>
						<div><button className="btn btn-sm btn-info" onClick={() => decreaseQnt(id, qnt)}>{'>'}</button></div>
					</div>
				</div>
		</div>
}

export default SingleItem;