import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
export default function Payment() {
  const { total } = useParams();
  const { discount } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector((state) => state.customerReducer);
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();
  const email = useRef();
  const shoppingCart = useSelector((state) => state.shoppingCartReducer);
  const book = useSelector((state) => state.bookReducer);
  let recipeToSend;
  let mailContent = "";
  let receiptContent = "";
  let isOnlyBook = false;
  let isThereBook = false;

  if (shoppingCart.length === 1 && shoppingCart[0].id === 400) {
    isOnlyBook = true;
  }
  async function readRecipe(recipe) {
    await fetch(recipe)
      .then((r) => r.text())
      .then(text => {
        mailContent += `${text}\n\n\n`;
      });
  }

  function sendReceipt() {
    recipeToSend = {
      customerEmail: email.current.value,
      customerName: customer.firstName,
      message: receiptContent
    }
    emailjs.send('service_zzq2sps', 'template_n77ed86', recipeToSend, '3FyxoORFNa1dy-j-q')
      .then((result) => {
        setSended(1);
        setTimeout(() => { 
            dispatch(emptying());
            navigate("/home");
        },
           10000);
        console.log("receipt sended succesfully "+ result.text);
      }, (error) => {
        setSended(2);
        console.log(error.text);
      });
  }

//   async function createMessage() {
//     for (const pastry of shoppingCart) {
//       if (pastry.id === 400) {
//         let qty = 10 - book.qty;
//         receiptContent = `?????????? ?????????? ?????? "?????????? ??????  ???????????? - ?????? ???????????? ??????????", ????????:${qty},
//          ???????????? ??????: ???${qty * book.price} ???????????? ???????? ?????? 7-14 ?????? ??????????`
//         isThereBook = true;
//       }
//       else {
//         mailContent += `--- ${pastry.name} ---\n\n`;
//         await readRecipe(pastry.recipe);
//       }
//     }
//   }


  function sendEmail() {

    recipeToSend = {
      customerEmail: email.current.value,
      customerName: customer.firstName,
      message: mailContent
    }
    emailjs.send('service_zzq2sps', 'template_n77ed86', recipeToSend, '3FyxoORFNa1dy-j-q')
      .then((result) => {
        setSended(1);
        setTimeout(() => {
          dispatch(emptying());
          navigate("/home");
        },
          10000);
        console.log("recipes sended succefully"+result.text);
      }, (error) => {
        setSended(2);
        console.log(error.text);
        console.log()
      });
  };

  const [clicked, setClicked] = useState(false);
  //???????? ?????????? - 0, ?????????? - 1, ?????????? - 2
  const [sended, setSended] = useState(0);

  createMessage()
  return (

    <div className="payment-container" dir='rtl'>
      <div className="details">

        <label>?????????? ???????? <input className="form-control" type="email"
          defaultValue={customer.email} ref={email} /></label>
        {/* <h5><b>???????? ??????????</b></h5> */}
        <p style={{ margin: "0" }}>?????? ???? ???????? ?????????? ????????????</p>
        <div className='credit-card-details'>
          <PaymentInputsWrapper {...wrapperProps} dir='ltr'>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} className="form-control" placeholder='???????? ??????????' />
          </PaymentInputsWrapper>
          <input {...getExpiryDateProps()} className="form-control"  />
          <input {...getCVCProps()} className="form-control"  />
          <input className="form-control" type="text" required={true} placeholder='???? ?????? ????????????'
            defaultValue={customer.firstName + "  " + customer.lastName} />
          <Button variant="dark" size="lg"
            onClick={() => {
              setClicked(true);
              isOnlyBook ? sendReceipt() : sendEmail();
              if (!isOnlyBook && isThereBook) { sendReceipt(); }
              setTimeout(() => {
                setSended(0);
                setClicked(false);
              },
                7000);
            }}>
            {(clicked && sended === 0) && <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />}
            {(!clicked) ? "??????" : ((sended === 1) ? "?????????? ????????????" : (sended === 2) ? "???????? ???????????? ??????????????" : " ???????? ")}
          </Button>


        </div>

      </div >
      {/* <div className="d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p>???????? ???????? ????"??</p>
          <p><span className="fas fa-dollar-sign"></span>???{(total * 0.83).toFixed(2)}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p>????"??</p>
          <p><span className="fas fa-dollar-sign"></span>???{(total * 0.17).toFixed(2)}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold">???????? ???????? ????"??</p>
          <p className="fw-bold"><span className="fas fa-dollar-sign"></span>???{total}.00</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold" style={{ color: "red" }}>????????<span> (???????? ?????????? ????????)</span></p>
          <p className="fw-bold" style={{ color: "red" }}><span className="fas fa-dollar-sign"></span>{discount}.00- ???</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold">????"??</p>
          <p className="fw-bold"><span className="fas fa-dollar-sign"></span>???{(total - discount).toFixed(2)}</p>
        </div>


      </div> */}
    </div >
  )
}