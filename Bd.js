const birthdayParadox = () => {
    let currentValue = 1
    for (let i = 0; i < 365; i++) {
        currentValue *= (365 - i) / 365
        console.log([i + 1, currentValue])
    }
}
birthdayParadox()
