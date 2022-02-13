import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameinput = useRef();
  const streetinput = useRef();
  const postalinput = useRef();
  const cityinput = useRef();

  const [validity, setvalidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameinput.current.value;
    const street = streetinput.current.value;
    const postal = postalinput.current.value;
    const city = cityinput.current.value;

    const namestate = !isEmpty(name);
    const streetstate = !isEmpty(street);
    const postalstate = isFiveChars(postal);
    const citystate = !isEmpty(city);

    setvalidity({
      name: namestate,
      street: streetstate,
      postal: postalstate,
      city: citystate,
    });

    props.onConfirm({
      name: name,
      street: street,
      city: city,
      postal: postal,
    });
  };

  const nameControlClasses = `${classes.control} ${
    validity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    validity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    validity.postal ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    validity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameinput} type="text" id="name" />
        {!validity.name && <p>Enter valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetinput} type="text" id="street" />
        {!validity.street && <p>Enter valid Street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalinput} type="text" id="postal" />
        {!validity.postal && <p>Enter valid Postal</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityinput} type="text" id="city" />
        {!validity.city && <p>Enter valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
