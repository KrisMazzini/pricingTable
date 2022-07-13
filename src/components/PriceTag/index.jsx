import './styles.css'

export function PriceTag({price}) {
    return (
        <p className='price-tag'>
            <span className='price'>R$ {price}</span>
            <span className='cents'>,00</span>
            <span className='period'>/mês</span>
        </p>
    )
}