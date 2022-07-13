import './styles.css'

export function Benefit({benefit}) {
    return (
        <li className="benefit">
            <img src="/check.svg" alt="check" />
            {benefit}
        </li>
    )
}