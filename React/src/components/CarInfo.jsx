const CarInfo = (props) => {
return (<li>
 <input onClick={props.onChange} type="checkbox"  name="确认" id="" /> 
 <span> {props.name}</span>： 
 <span>{props.info}</span>
</li>)
}

export default CarInfo;