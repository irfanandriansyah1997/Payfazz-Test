import { abbreviateNumber } from './number.helper';

it('Test abbreviation price', () => {
    const mixtures = [
        {
            price: 1000,
            expected: '1 k'
        },
        {
            price: 50000,
            expected: '50 k'
        },
        {
            price: 65000000,
            expected: '65 m'
        },
        {
            price: 650,
            expected: '650'
        }
    ];

    mixtures.map(({ price, expected }) => {
        expect(abbreviateNumber(price)).toBe(expected);

        return true;
    });
});
