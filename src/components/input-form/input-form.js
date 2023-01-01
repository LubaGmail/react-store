import './input-form.styles.scss'

const InputForm = ({ label, ...otherProps }) => {
    // const {id, type, name, value, onChange} = otherProps

    return (
        <div className='group'>
            <input className='form-input'
                {...otherProps}
            />
            {/* apply shrink class on focus or input */}
            {label && (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            )} 
        </div>
    )
}

export default InputForm