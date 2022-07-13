import './styles.css'

import { PriceTag } from '../PriceTag'
import { Benefit } from '../Benefit'
import { Button } from '../Button'

export function Card({name, price, description, benefits, popular = false}) {
    const cardClass = popular ? "card popular" : "card"
    
    return (
        <div className={cardClass} id="name">
            <header className="card-header">
                <h3>{name}</h3>
                {
                    popular ? <p className="popular-tag">Popular</p> : <></>
                }
            </header>
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