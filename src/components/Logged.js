import React, { Component } from 'react'
import fire from '../firebase'


export default class Logged extends Component {
    
    constructor(){
        super()
        this.state = {value:''}
    }
    //========== textNum is use for to made input only numeric========
    textNum(e){
      this.setState({inputvalue: e.target.value.replace(/[^0-9,]/,'')}) ///\D/g
    }
    //=======Control Submit========
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        const db = fire.database();
        let value = this.state.inputvalue
        let value2 = this.state.input
        let temp = [];
        let temp2 = []

        //=======Get Inputs as a Number========
        temp = value.split(",")
        for (let a in temp ) {
             temp[a] = parseInt(temp[a], 10);   
        }
        temp2 = Number(value2.split(","))
        
        for(var i=0;i<temp.length; i++){
            let result = document.getElementById('result')
            if(temp.includes(temp2)){
                result.innerText = 'True'
            }else{
                result.innerText='False'
            }
            console.log(temp,temp2);
        }
       //==== transfer input value on firebase after sort ====
        temp.sort((a,b)=> b-a)
        db.ref('Inputs').orderByKey().limitToLast(100)
        db.ref('Inputs').push(temp)
        this.setState({
            inputvalue:'',
            input: ''
        })
      }
    // ==== For Second input value ====
      handleChange(e) { 
        this.setState({ input: e.target.value });
      }
        
    
      
    render() {
        return (
            <section className="login">
                <button className='logout' onClick={this.props.handleLogOut}>Log Out</button>
                <div className='loginContainer'>
                    <h2 className="welcome">Ami Coding Pari Na</h2>
                    <label>Input values</label>
                    <input type="text" value={this.state.inputvalue} onChange={this.textNum.bind(this)} required />
                    <label>Search value</label>
                    <input type="number" value={this.state.input} onChange={this.handleChange.bind(this)} required/>
                    <button style={{marginTop:'50px',fontWeight:'bold'}} onClick={this.handleSubmit}>Khuje to Dekho</button>
                    <p style={{fontSize:'24px',
                                color:'white',
                                marginTop:'20px'}}>Result: <span id='result'></span></p>
                </div>  
            </section>
        )
    }
}
