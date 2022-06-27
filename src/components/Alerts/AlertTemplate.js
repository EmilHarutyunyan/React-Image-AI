import  {CloseIcon,ErrorIcon} from "./Alerts.styles"
const alertStyle = {
    backgroundColor: '#151515',
    color: 'white',
    padding: '10px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
    fontFamily: 'Arial',
    // width: '400px',
    boxSizing: 'border-box',
    textAlign: 'center',
  }
  
  const buttonStyle = {
    marginLeft: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#FFFFFF'
  }
  
  const AlertTemplate = ({ message, options, style, close }) => {
    return (
      <div style={{ ...alertStyle, ...style }}>

        {options.type === 'error' && <ErrorIcon />}
        <span style={{ flex: 2,  }}>{message}</span>
        <button onClick={close} style={buttonStyle}>
          <CloseIcon />
        </button>

        {/* <div id="__react-alert__"><div style="left: 0px; position: fixed; display: flex; justify-content: center; align-items: flex-end; flex-direction: column; width: 100%; pointer-events: none; bottom: 0px; z-index: 100;"><div style="transition: opacity 250ms ease 0s; opacity: 1;"><div style="background-color: rgb(21, 21, 21); color: white; padding: 10px; text-transform: uppercase; border-radius: 3px; display: flex; justify-content: space-between; align-items: center; box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 2px 2px; font-family: Arial; width: 300px; box-sizing: border-box; margin: 10px; pointer-events: all;"><span style="flex: 2 1 0%;">Oh look, an alert!</span><button style="margin-left: 20px; border: none; background-color: transparent; cursor: pointer; color: rgb(255, 255, 255);"><div style="color: red;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></div></button></div></div></div></div> */}
      </div>
    )
  }
  export default AlertTemplate