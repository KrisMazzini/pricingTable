import './styles.css'

export function PriceTag(props) {

    function splitPrice(price) {
        const formatedPrice = price.toFixed(2)
        const splittedPrice = formatedPrice.split('.')
        
        return {
            price: splittedPrice[0],
            cents: splittedPrice[1]
        }
    }

    const { price, cents } = splitPrice(props.price)

    return (
        <p className='price-tag'>
            <span className='price'>R$ {price}</span>
            <span className='cents'>,{cents}</span>
            <span className='period'>/mês</span>
        </p>
    )
}