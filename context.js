import React, {useState, useContext, useEffect} from 'react';
import data from './data';

const AppContext = React.createContext();
	

const AppProvider = ({children}) => {
	const [cartCount, setCartCount] = useState(0);

	const [items, setItems] = useState(data);
	const [totalAmount, setTotalAmount] = useState(0);
	const increaseQnt = (id, qnt) => {
		const newItems = items.filter((i) => {
			if(i.id === id){
				i.qnt += 1;
			}
			return i;
		})
		setItems(newItems);

	}
	const removeItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	}
	const decreaseQnt = (id, qnt) => {

		const newItems = data.map((item) => {
			if(item.id === id){ item.qnt -= 1}
			return item;
		}).filter((item) => item.qnt > 0);

		console.log(newItems);
		setItems(newItems);
	}
	useEffect(() => {
		let qnt = 0;
		let total = 0;
		items.map((item) => {
				   total += (item.price * item.qnt);
			return qnt += item.qnt;
		})
		total = parseFloat(total.toFixed(2))
		setCartCount(qnt);
		setTotalAmount(total);
	}, [items])

	

	return <AppContext.Provider value={{
		increaseQnt,
		items,
		cartCount,
		decreaseQnt,
		totalAmount,
		removeItem
	}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
	return useContext(AppContext);
}

export {AppProvider, useGlobalContext};