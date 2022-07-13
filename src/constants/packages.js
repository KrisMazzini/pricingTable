class Package {
    constructor(packageName, price, description, benefits, popular = false) {
        this.name = packageName
        this.price = price
        this.description = description
        this.benefits = benefits
        this.popular = popular
    }
}

const free = new Package(
    'free',
    0,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    [
        'Lorem impsum dolor sit amet',
        'Lorem impsum dolor sit amet'
    ]
)

const basic = new Package(
    'básico',
    29.9,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    [
        'Lorem impsum dolor sit amet',
        'Lorem impsum dolor sit amet',
        'Lorem impsum dolor sit amet'
    ],
    true
)

const professional = new Package(
    'profissional',
    59.9,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    [
        'Lorem impsum dolor sit amet',
        'Lorem impsum dolor sit amet',
        'Lorem impsum dolor sit amet',
        'Lorem impsum dolor sit amet'
    ]
)

export const packageList = [free, basic, professional]