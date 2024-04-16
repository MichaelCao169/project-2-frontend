import React from 'react'
import InputField from '../Components/InputField'

const Location = ({handleChange}) => {
  return (
    <div >
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
            <label className='sizebar-label-container'>
                <input type='radio' name='test' value="" onChange={handleChange}/>
                <span className='checkmark'> </span> All
            </label>
            <br/>
            <InputField handleChange={handleChange} value="Hanoi" title="Hanoi" name="test"/>
            <br/>
            <InputField handleChange={handleChange} value="Danang" title="Danang" name="test"/>
            <br/>
            <InputField handleChange={handleChange} value="Hochiminh City" title="Hochiminh City" name="test"/>
        </div>
    </div>
  )
}

export default Location