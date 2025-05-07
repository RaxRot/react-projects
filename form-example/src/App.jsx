import './App.css'
import { useState } from 'react'

function App() {
    const [formData, setFormData] = useState({
        text: '',
        checkBox: false,
        radio: '',
        select: ''
    })

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        alert(JSON.stringify(formData, null, 2))
    }

    return (
        <div className="form-container">
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Text:
                    <input
                        type="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="checkBox"
                        checked={formData.checkBox}
                        onChange={handleChange}
                    />
                    Accept Terms
                </label>

                <fieldset>
                    <legend>Choose an option:</legend>
                    <label>
                        <input
                            type="radio"
                            name="radio"
                            value="option1"
                            checked={formData.radio === 'option1'}
                            onChange={handleChange}
                        />
                        Option 1
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="radio"
                            value="option2"
                            checked={formData.radio === 'option2'}
                            onChange={handleChange}
                        />
                        Option 2
                    </label>
                </fieldset>

                <label>
                    Choose a fruit:
                    <select
                        name="select"
                        value={formData.select}
                        onChange={handleChange}
                    >
                        <option value="">-- Select --</option>
                        <option value="apple">🍏 Apple</option>
                        <option value="banana">🍌 Banana</option>
                        <option value="orange">🍊 Orange</option>
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
