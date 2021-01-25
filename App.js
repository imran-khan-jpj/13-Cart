import SingleItem from './SingleItem';
import {useGlobalContext} from './context';

const App = () => {
	const {cartCount, items, totalAmount} = useGlobalContext();

	return (
		<div className="container">
			<div className="row justify-content-between text-light bg-primary">
				<h1>useReducer</h1>
				<div className="pt-3">Notify<span className="badge badge-secondary">{cartCount}</span></div>
			</div>
			<div className="row mt-4">
				<div className="col-8 offset-2 text-center">
					<h1>Your Bag</h1>
				</div>
			</div>
			<div className="row mt-1">
				<div className="col-8 offset-2">
					{
						items.map((item) => {
							return <SingleItem key={item.id} item={item} />
						})
					}
					{!cartCount && <p>Your Bag is Empty</p>}
				</div>
			</div>
			{
				cartCount > 0 && <div className="row">
				<div className="col-8 offset-2">
					<hr />
					<div className="row justify-content-between">
						<p>Total</p>
						<p>${totalAmount}</p>
					</div>
				</div>
			</div>
			}
			
		</div>
	)
}

export default App;