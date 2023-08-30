import React from 'react'
import "./formStyle.css"
import Modal from './Modal'
import { useState } from 'react'
const LoanForm = () => {
  const [errorMessage, setErrorMessage]= useState(null);
  const [showModal, setShowModal] = useState(false);
const [LoanInputs, setLoanInputs]= useState({
  name:"",
  phoneNumber: "",
  age: "",
  isEmployee: false,
  salaryRange: ""
})


function handleDivClick(){
  if(showModal){
    setShowModal(false)
  }
}
  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const {age,phoneNumber} = LoanInputs;
    if(age <18 || age> 100 ){
      setErrorMessage("the age is not allowed");
    }else if(phoneNumber.length  <8 || phoneNumber.length > 12) {
      setErrorMessage("the phone number is incorrect");

    }
    setShowModal(true);
  }

  const btnIsDisabled =
    LoanInputs.name === "" ||
    LoanInputs.age === "" ||
    LoanInputs.phoneNumber === "";

  return (
  <div onClick={handleDivClick} style={{flexDirection:"column"}}  className="flex" >
<form action="" id="loan-form" className="flex" style={{flexDirection:"column"}} >
<h1>Loan Request</h1>
<hr />
<label htmlFor="">Name:</label>
<input type="text" value={LoanInputs.name} onChange={(e) => setLoanInputs({...LoanInputs,name:e.target.value})} />
<label htmlFor="">Phone Number:</label>
<input type="text" value={LoanInputs.phoneNumber} onChange={(e) => setLoanInputs({...LoanInputs,phoneNumber:e.target.value})}/>
<label htmlFor="">Age:</label>
<input type="text" value={LoanInputs.age} onChange={(e) => setLoanInputs({...LoanInputs,age:e.target.value})}/>
<label htmlFor="" style={{marinTop:"30px"}}> Are You an Employee ?</label>
<input type="checkbox" checked={LoanInputs.isEmployee} onChange={(e) => setLoanInputs({...LoanInputs,isEmployee: e.target.checked})} />
<label htmlFor="">Salary:</label>
<select value={LoanInputs.salaryRange} onChange={(e) => setLoanInputs({...LoanInputs,salaryRange:e.target.value})}>
<option value="">Less than 500 $</option>
<option value="">Between 500 & 2000 $</option>
<option value="">Above 2000$</option>
</select>
<button id="btn-submit" className={btnIsDisabled ?"disable" : ""} disabled={btnIsDisabled} onClick={handleSubmit}> Submit</button>

</form>
<Modal isVisible = {showModal}  errorMessage ={errorMessage}/>
    </div>
  )
}

export default LoanForm