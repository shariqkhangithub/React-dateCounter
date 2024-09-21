import React, { useState } from 'react'
import './Count.css'

export const Stepcount = () => {
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    function countPlus(){
        setcount1(count1 + 1)
    }
    function countMinus(){
        setcount1(count1 - 1)
    }


    function count2Plus(){
        setcount2(count2 + count1)
    }
    function count2Minus(){
        setcount2(count2 - count1)
    }

    let days = 15 + count2;
    // console.log(days);

    let today = new Date()
    console.log(today);
    
    

// let monthNames = [
//     "January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"
//   ];
  

//   let dayNames = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", 
//     "Thursday", "Friday", "Saturday"
//   ];

//   let monthName = monthNames[today.getMonth()];

// let dayName = dayNames[today.getDay()];

// console.log(monthName);

// console.log(dayName);

// let yearName = today.getFullYear()
// console.log(yearName);


// let dateName = today.getDate()
// console.log(dateName);

// let merg = dayName+ " " + monthName+ " " + dateName+ " " + yearName
// console.log(merg);



    return (
        <>
            <div className='main' style={{backgroundColor:'#58ecfc', height:'100vh', width:'100vw'}}>
               
                    <h1 style={{ color: 'blue',margin:'40px' }}>Step Counter</h1>
                    <div style={{ display: 'flex', margin: '15px' }}>
                        <button onClick={countMinus}>-</button>
                        <div style={{ width: '250px', fontSize:'23px', fontWeight:'bold' }}><p>Step: {count1}</p></div>
                        <button onClick={countPlus}>+</button>
                    </div>

                    <div style={{ display: 'flex', margin: '15px' }}>
                        <button onClick={count2Minus}>-</button>
                        <div style={{  width: '250px', fontSize:'23px', fontWeight:'bold'}}><p>Count: {count2}</p></div>
                        <button onClick={count2Plus}>+</button>
                    </div>
                    <p style={{margin:'40px',fontSize:'20px',fontWeight:'bolder'}}><span style={{color:'red'}}>{count2}</span> days from today: <span>{}</span> </p>
                
            </div>
        </>


    )
}

export default Stepcount