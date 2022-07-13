import './styles.css'

import { PriceTag } from '../PriceTag'
import { Benefit } from '../Benefit'
import { Button } from '../Button'

export function Card({name, price, description, benefits}) {
    return (
        <div className="card" id="name">
            <h3>{name}</h3>
            <PriceTag
                key={name}
                price={price}
            />
            <h4>{description}</h4>
            <ul className="benefits">
                {
                    benefits.map((benefit, index) => 
                        <Benefit
                            key={`${name}-${index}`}
                            benefit={benefit}
                        />
                    )
                }
            </ul>
            <Button />
        </div>
    )
}