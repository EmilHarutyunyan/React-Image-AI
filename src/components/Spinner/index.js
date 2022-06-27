import sunCross from "../../images/sunCross.png"
import { Spinner } from './Spinner.styles'

function Spin() {
   return (
      <Spinner image={sunCross}>
         <img src={sunCross} alt="Spin"/>
      </Spinner>
   )
}
export default Spin