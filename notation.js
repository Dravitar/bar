function format(value) {
    /* const BARS = ["", "", "", "", "", "", "", ""];
    const BARS = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const LOG8 = Math.log(8);
    const log8 = Math.LN10 / LOG8 * Math.log10(value);
    let wholeLog = Math.floor(log8);
    const decimalLog = log8 - wholeLog;
    const decimalLog64 = Math.floor(decimalLog * 64);
    const parts = [
        BARS[decimalLog64 % 8],
        BARS[Math.floor(decimalLog64 / 8)]
    ];
    while (wholeLog >= 8) {
        const remainder = wholeLog % 8;
        wholeLog = (wholeLog - remainder) / 8;
        parts.push(BARS[remainder]);
    }
    parts.push(BARS[wholeLog]);
    return parts.join("");
    */
}
