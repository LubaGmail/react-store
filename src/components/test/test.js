import './test.styles.scss'
import Button from './button'

const Test = () => {

    const handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')        
    }

    const doSomething = () => {
        console.log('doSomething')        
    }

    return (

        <div className='container'>
            <h2>Test</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='first'>First Name: </label>
                    <input id='first'
                        name='first'
                        type='text'
                        required
                        
                    />
                </div>
                <div>
                    <label htmlFor='last'>Last Name: </label>
                    <input id='last'
                        name='last'
                        type='text'
                        required
                        onClick={doSomething}
                    />
                </div>
                <div className='buttonContiner'>
                    <Button 
                        type='submit'
                    >
                        submit Button  
                    </Button>
                    <Button
                        type='button'
                        onClick={doSomething}
                    >
                        doSomething Button
                    </Button>
                    <button
                        type='button'
                        onClick={doSomething}
                    >
                        doSomething button
                    </button>

                </div>

            </form>
        </div>
    )
}

export default Test
