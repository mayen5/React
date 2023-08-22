import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola mundo',
    title: 'Carmelo'
};

const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = ( { 
    title, 
    subTitle = 'La tierra es redonda',
    name
} ) => {


    return (
        <>
        {/* <h1>Hola Mundo</h1> */}
        <h1 data-testid="test-title"> { title } </h1>
        {/* <h1>{ getResult(10, 20) }</h1> */}
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Carmelo Mayén',
    subTitle: 'No hay subtítulo',
}