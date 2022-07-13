import './styles.css'

import { PriceTag } from '../PriceTag'
import { Benefit } from '../Benefit'
import { Button } from '../Button'

export function Card({name, price, description, benefits}) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <PriceTag price={price} />
            <h4>{description}</h4>
            <ul className="benefits">
                <Benefit benefit={'kjaskjasd'} />
                <Benefit benefit={'kjaskjasd'} />
            </ul>
            <Button />
        </div>
    )
}