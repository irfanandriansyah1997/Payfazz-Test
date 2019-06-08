const SI_SYMBOL: string[] = ['', 'k', 'm', 'b'];

export function abbreviateNumber(number: number): string {
    const tier: number = Math.log10(number) / 3 | 0;

    if (tier === 0) return `${number}`;

    const suffix: string = SI_SYMBOL[tier];
    const scale: number = Math.pow(10, tier * 3);
    const scaled: number = number / scale;

    return `${scaled.toFixed(0)} ${suffix}`;
}

export function stringToCurrency(number: number): string {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
