import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => { // destructuring
    const onClick = (e) => {
        console.log(e)
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Add" />

        </header>
    )
}
// CSS in JS
// const headingStyle = {
//     color: 'skyblue',
//     backgroundColor: 'red'
// }

Header.defaultProps = {
    title: 'Hello from header'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
