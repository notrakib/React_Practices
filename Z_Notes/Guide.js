Using Ref for Input custom element
const Input = React.forwardRef((props, ref1) => {

id: Math.random().toString()  [For generating ID]

lastname.current.value  [For Ref]
event.target.value  [For state]

element of an object is changable like
setUserInput((prevState)=>{
return {...prevState, eneteredTitle: event.target.value}})

But not possible if the object is under an array through this method

const [getCart, setCart] = useState({
    cartList: [
      {
        id: "m4",
        name: "Green Bowl",
        amount: 1,
        price: 11.99,
      },
      {
        id: "m5",
        name: "Red Bowl",
        amount: 10,
        price: 18.99,
      },
      {
        id: "m6",
        name: "Yellow Bowl",
        amount: 5,
        price: 5.5,
      },
    ],
    total: 10,
    add: () => {},
  });

For this we cant use
setCart(total: amount)
or
setCart({
      cartList: getCart.cartList[1].amount + 1,  [It will change the whole cartList into amount]
      total: getCart.total,
    });

Rather
setCart({
        cartList: getCart.cartList,
        total: amount,
        add: () => {},
      });
Need to change the whole thing

setList((prevList) => {
      return [...prevList, user];
    });


Altering an element in an object in array of object
	const filter = state.list.filter((item) => item.id === action.id);
    const anti_filter = state.list.filter((item) => item.id !== action.id); //This Method will change the list index
    const updatedItem = { ...filter[0], amount: filter[0].amount + 1 };
    const updatedList = anti_filter.concat(updatedItem);
    const updatedItemIndex = state.list.findIndex(
      (item) => item.id === action.id
    );
    state.total += state.list[updatedItemIndex].price;
    return { list: updatedList, total: +state.total.toFixed(2) };
	
	
	for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === action.id) {
        state.list[i].amount = state.list[i].amount - 1;                     //This Method will NOT change
        state.total -= state.list[i].price;                                  //the index of the elements in list
      }
    }
    return { list: state.list, total: +state.total.toFixed(2) };
	
	

We can NOT use two dependent state in one function
But can use two dispatcher
Because after re-evaluate State will give wrong snapshot
but Reducer will give the correct one

Solve of "Expect a return from map()"
const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.cartList.map((item) => {
        return (
          item.amount !== 0 && (
            <CartItems
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
            ></CartItems>
          )
        );
      })}
    </ul>
  );
  
  
React.memo() compares the props changes
& re-evaluate an component if there are changes in props
In JavaScript [1,2]===[1,2] => False
Same for object and function
Thats why React.memo() does not work on them normally,
we need useCallback()
It allocates pointer of the function and runs on every evaluation
Only String, Number and Boolean work normally

How to use useCallback() in function
const changeTitleHandler = useCallback(() => {
	if(list === true){
		setListTitle('New Title');
	}
  }, [list]);
  
useMemo(()=> {return},[]) Hook for performance intensive task
It allocates the return value and does not run on every evaluation
const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]); 


We can treverse an object like an array

  const data = await response.json();
  const loadedMovies = [];

  for (const x in data) {
    console.log(x);
    loadedMovies.push({
      id: x,
      title: data[x].title,
      openingText: data[x].openingText,
      releaseDate: data[x].releaseDate,
    });
  }


We cant use normal loop or condition inside return
Thats why we use map() or {!isValid && <h1></h1>}

const generatedId = data.name; // firebase-specific => "name" contains generated id


Bad Practice (can be done only in redux-toolokit through createSlice())
const CounterReducer = (state = initial, action) => {
  if (action.type === 1) {
    state.counter++;
    return state;
  }
}

Good Practice
const CounterReducer = (state = initial, action) => {
  if (action.type === 1) {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
}

In Redux, Reducer function must be side-effect free & async code free
Thats why we need action creator Thunk. So we write a code in a redux-slice 
file which can be written into any other component file and later we can
dispatch that function from other component.

fetch() function
PUT,PATCH,POST,GET

dispatch(CartItemAction.replaceCart(data || {}));


npm install
- @reduxjs/toolkit
- react-redux
- react-router-dom 


<Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
</Switch>

Link directs to pre-defined Route path
while Route defines a new path
On the other hand Link and NavLink are Same
but navLink adds style attributes to the active routes

useHistory makes programmatic action to redirect into a path
history.push("/quotes");

