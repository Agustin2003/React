const Button = (props) => {
    return <button oneClick={props.func} style={{ color: props.colorText}}>{props.text}</button>
    
}

export default Button