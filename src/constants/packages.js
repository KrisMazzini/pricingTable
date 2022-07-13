class Package {
    constructor(packageName, price, description, benefits) {
        this.name = packageName
        this.price = price
        this.description = description
        this.benefits = benefits
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
    ]
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