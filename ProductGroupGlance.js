import './ProductGroupGlance.css'
import Axious from 'axios'
import { useState , useEffect} from 'react'

const ProductGroupGlance=()=>{

    const [age,setAge]=useState('')
    const [exp,setExp]=useState('')
    const [GenderDiversity,setGenderDiversity]=useState('')
    const [yearsOfService15,setyearsOfService15]=useState('')
    const [yearsOfService10,setyearsOfService10]=useState('')
    const [yearsOfService5,setyearsOfService5]=useState('');

    const submit= () =>{
        Axious.post('http://localhost:3000/ProductGroups', {
            age:age,exp:exp,GenderDiversity:GenderDiversity,yearsOfService15:yearsOfService15,yearsOfService10:yearsOfService10,yearsOfService5:yearsOfService5
        }).then(()=>{
            alert('successfull insert')
        })
    };
    return(
        <form>
    <div className='abc'>
        <div className='inputdiv'>
            <input className='inputbox' type='text' name="age" onChange={(e)=>{
                setAge(e.target.value)
            }}></input>
            <h3>Employee Average years Of Age</h3>
        </div>
        <div className='inputdiv'>
            <input className='inputbox' type='text' name="exp"
            onChange={(e)=>{
                setExp(e.target.value)
            }}></input>
            <h3>Employee Average years Of Experience</h3>
        </div>
        <div className='inputdiv'>
            <input className='inputbox' type='text' name='GenderDiversity'
            onChange={(e)=>{
                setGenderDiversity(e.target.value)
            }}></input>
            <h3>Gender diversity</h3>
        </div>
        <div className='inputdiv'>
            <input className='inputbox' type='text' name='yearsOfService15'
            onChange={(e)=>{
                setyearsOfService15(e.target.value)
            }}></input>
            <h3>15 years Of Service</h3>
        </div>
        <div className='inputdiv'>
            <input className='inputbox' type='text' name='yearsOfService10'
            onChange={(e)=>{
                setyearsOfService10(e.target.value)
            }}></input>
            <h3>10 years Of Service</h3>
        </div>
        <div className='inputdiv'>
            <input className='inputbox' type='text' name='yearsOfService5'
            onChange={(e)=>{
                setyearsOfService5(e.target.value)
            }}></input>
            <h3>5 years Of Service</h3>
       </div>
       

    </div>
    </form>
    
    )
    }
    
    export default ProductGroupGlance;