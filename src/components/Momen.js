import moment from "moment";

const Momen = (props) => {
  return (
    <span>{moment(props.date).format(props.format)}</span>
  )
}

export default Momen