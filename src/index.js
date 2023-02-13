//1 import area
//1.1 import somedefaultimport from some location/library
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
//2. function defination area

function ComponentA(){
  const appName = "Simple Interest Calculator"
  const thanktext = "Thank you For Reading"
  const aboutCalculator = "An electronic calculator is typically a portable electronic device used to perform calculations, ranging from basic arithmetic to complex mathematics"
  //every function should return something
  return(
    <div className='comp-a'>
      <h1 className='text-calc'>{appName}</h1>
      <div className='comp-a-child-cont'>
        <ComponentB />
      </div>
      <ComponentG aboutCalculator={aboutCalculator} />
      <ComponentR thanktext={thanktext} />
    </div>
  )
}

// Class Component defination area
class ComponentB extends Component{
  //1. variable
    input1 = "Principal Amount"
    label2Name = "Interest Amount"
    tankyoutag = "Thank you for Using"
    
  //2. cunstructor


  //3. method

  //3.1 every class Component should have render method
  render(){


    //every method/function should return something
    return(
      <React.Fragment>
        <ComponentC heading="Calculate Here" />
        <label className='p-ampont-label' htmlFor ="amountinput">{this.input1}</label>
        <input className='input-box-style'  id="amountinput" type="text" />
        <div className='comp-b-sunt-cont-d'>
          <ComponentD label2Name={this.label2Name} />
        </div>
        <ComponentE>Total Amount</ComponentE>
        <ComponentF>Click Again</ComponentF>
        
      </React.Fragment>
    )
  }
}

const ComponentC = props=>{
  //every function should return something
  return(
    <h1 className='calc-here'>{props.heading}</h1>
  )
}

class ComponentD extends Component{
  state = {pAmount:""}

  onAmount(event){
    //const pUserInput = event.target.value
    //console.log(typeof(pUserInput))
    this.setState({pAmount:event.target.value})
  }

  render(){
    return(
      <React.Fragment>
        <label className='p-ampont-label' htmlFor ="amount">{this.props.label2Name}</label>
        <input onChange={this.onAmount} className='input-box-style'  id="amount" type="text" />
      </React.Fragment>
    )
  }
}

function ComponentE(props){
  return(
    <div className='comp-e'>
      <button className='total-button' type='button'>{props.children}</button>
    </div>
  )
}

class ComponentF extends Component{
  state = {btnClicked:false}
  onCheck = ()=>{
    this.setState(prevState =>({btnClicked:!prevState.btnClicked}))
  }
    render(){
      const response = (
        <div>
        <p className='response-para'>Currently Calculator is not working, we are working on it.</p>
        <h4 className='thank-tag'>Thank you for using</h4>
        </div>  
      )
      const {btnClicked} = this.state
      //console.log(btnClicked)
      return(
        <div className='comp-e'>
          {btnClicked ? <button className='total-button' onClick={this.onCheck} type = "button">{this.props.children}</button> : <button className='total-button' onClick={this.onCheck} type = "button">Check Calculator</button>}
          {btnClicked && response}
        </div>
      )
    }
}

class ComponentG extends Component{
  Design = "Design"
  render(){
    return(
        <div className='comp-g'>
          <h1 className='ab-calculator-heading'>About Calculator</h1>
          <ComponentH >Introduction:-</ComponentH>
          <p className='into-para'>{this.props.aboutCalculator}</p>
          <ComponentI>
            The first solid-state electronic calculator was created in the early 1960s. Pocket-sized devices became available in the 1970s, especially after the Intel 4004, the first microprocessor, was developed by Intel for the Japanese calculator company Busicom.
            Modern electronic calculators vary from cheap, give-away, credit-card-sized models to sturdy desktop models with built-in printers. They became popular in the mid-1970s as the incorporation of integrated circuits reduced their size and cost. By the end of that decade, prices had dropped to the point where a basic calculator was affordable to most and they became common in schools.
          </ComponentI> 
          <ComponentJ Design={this.Design} />
          <hr className='hori-line' />
          <ComponentK />
        </div>
    )
  }
}

const ComponentH = (props)=>{
  return(
    <h3 className='ab-calculator-heading'>{props.children}</h3>
  )
}

class ComponentI extends Component{

  render(){

    return(
      <p className='into-para' >{this.props.children}</p>
    )
  }
}

const ComponentJ = props=>{
  return(
    <div>
      <h3 className='ab-calculator-heading'>{props.Design}</h3>
    </div>
  )
}

class ComponentK extends Component{
  Inputs = "Input:-"
  DisplayOutput = "Display output:-"
  abnoutInputs = "Electronic calculators contain a keyboard with buttons for digits and arithmetical operations; some even contain \"00\" and \"000\" buttons to make larger or smaller numbers easier to enter. Most basic calculators assign only one digit or operation on each button; however, in more specific calculators, a button can perform multi-function working with key combinations."
  render(){
    return(
      <>
        <h3 className='ab-calculator-heading'>{this.Inputs}</h3>
        <ComponentL abnoutInputs={this.abnoutInputs}/>
        <ComponentM DisplayOutput={this.DisplayOutput} />
      </>
      )
  }
}

function ComponentL (props){
  return(
    <p className='into-para'>{props.abnoutInputs}</p>
  )
}

class ComponentM extends Component {
  calcImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/CalculatorFractions-5550x.jpg/220px-CalculatorFractions-5550x.jpg"
  memoryItem = "Calculators also have the ability to save numbers into computer memory. Basic calculators usually store only one number at a time; more specific types are able to store many numbers represented in variables. The variables can also be used for constructing formulas. Some models have the ability to extend memory capacity to store more numbers; the extended memory address is termed an array index."
  KeyLayout = "Key layout:-"
  KeyDescription = "The following keys are common to most pocket calculators. While the arrangement of the digits is standard, the positions of other keys vary from model to model; the illustration is an example."
  
  render(){
    
    return(
      <>
        <h3 className='ab-calculator-heading'>{this.props.DisplayOutput}</h3>
        <ComponentN calcImage={this.calcImage} />
        <ComponentO memoryItem={this.memoryItem} />
        <ComponentP>Power sources of calculators are batteries, solar cells or mains electricity (for old models), turning on with a switch or button. Some models even have no turn-off button but they provide some way to put off (for example, leaving no operation for a moment, covering solar cell exposure, or closing their lid). Crank-powered calculators were also common in the early computer era.</ComponentP>
        <ComponentQ KeyLayout={this.KeyLayout} KeyDescription={this.KeyDescription}/>
      </>
    )
  }
}


const ComponentN = props =>{
  const outputPara = "Calculators usually have liquid-crystal displays (LCD) as output in place of historical light-emitting diode (LED) displays and vacuum fluorescent displays (VFD); details are provided in the section Technical improvements.Large sized figures are often used to improve readability using decimal separator usually a point rather than a comma instead  or  addition to vulgar fractions. Various symbols for commands may also be shown on the display. Fractions such  are displayed  decimal approximations, for example rounded to Also, some fractions such  which is  to  significant figures can be difficult to recognize decimal form;  a result, many scientific calculators are able to work vulgar fractions or mixed numbers."
  return(
    <React.Fragment>
      <p className='into-para'>{outputPara}</p>
      <img src = {props.calcImage} alt= "calculator" className='output-img' />
    </React.Fragment>
  )
}

class ComponentO extends Component{
  Memory = "Memory:-"
  render(){
    return(
      <React.Fragment>
        <h3 className='ab-calculator-heading' >{this.Memory}</h3>
        <p className='into-para'>{this.props.memoryItem}</p>
      </React.Fragment>
    )
  }
}

const ComponentP =props=>{
  const PowerSource = "Power source:-"
  return(
    <>
      <h3 className='ab-calculator-heading'>{PowerSource}</h3>
      <p className='into-para'>{props.children}</p>
    </>
  )
}

class ComponentQ extends Component{
  layOutImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Casio_fx-991EX.png/170px-Casio_fx-991EX.png"
  render(){
    return(
      <>
        <h3 className='ab-calculator-heading'>{this.props.KeyLayout}</h3>
        <p className='into-para'>{this.props.KeyDescription}</p>
        <img src = {this.layOutImage} alt = "cals" className='output-img'/>
      </>
    )
  }
}

function ComponentR(props){
  return(
    <h1 className='text-calc'>{props.thanktext}</h1>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentA />
  </React.StrictMode>
);
//3 export area
//3.1 default export 
//3.2 named export