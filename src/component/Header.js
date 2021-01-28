import Resto from './Resto'

const Header = ({title}) => {
    const onClick =() => {
        console.log('Click')
    }
    return (

        <div>
            <h1 className="text-center">{title}</h1>
            <Resto color='green' text='Submit' />
            <Resto color='lightblue' text='Submit' />
            <Resto color='red' text='Submit' onClick = {onClick} />
        </div>
        // <div>
        //     <h1 style = {headingStyle}>{title}</h1>
        // </div>
        )
    }

    Header.defaultProps = {
        title: "Force Task",
    }

    // const headingStyle = {
    //     color: "red", 
    //     backgroundColor: 'lightblue'

    // }
export default Header
