
const InputForm = ({ label, ...otherProps }) => {
    const {id, type, name, value, onChange} = otherProps

    return (
        <div>
            <label>{label}</label>
            <input id={id} 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default InputForm