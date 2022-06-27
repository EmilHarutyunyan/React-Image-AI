import React, {useCallback, useEffect} from "react";
import { useAlert } from "react-alert";

const Button = ({errorBox, setError}) => {
    const alert = useAlert();

    const xoski = useCallback(
        () => {
            if(errorBox) {
                alert.show("Image should not exceed 3MB")
    
                setError(false)
                // errorBox.setErrorBox(false)
            }
        },
        [errorBox,setError,alert],
    )
    useEffect(() => {
        xoski()
    },[xoski])

    return (
    <React.Fragment>

    </React.Fragment>
    )
}
export default Button;