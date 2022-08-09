let bank = [
    {
        name: "uztelecom",
        tax: 12,
        budget: 200000,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        tax: 14,
        expensesPerYear: [{
            title: "rent",
            total: 15000,
        },
        {
            title: "salaries",
            total: 150000,
        },
        {
            title: "furniture",
            total: 25000,
        },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        tax: 10,
        expensesPerYear: [{
            title: "rent",
            total: 30000,
        },
        {
            title: "salaries",
            total: 350000,
        },
        {
            title: "furniture",
            total: 90000,
        }
        ]
    }
]

let cleanTax = []
let all = []

for (let item of bank) {

    item.expensesPerMonth = 0

    item.expensesPerMonth = Math.round(item.expensesPerYear.reduce((a, b) => {
        return a + b.total
    }, 0) / 12) // Траты за месяц \\ 

    item.taxCost = Math.round(item.expensesPerMonth * item.tax / 100) // Вычисляет cумму налога \\ 

    item.taxPerMonth = Math.round(item.expensesPerMonth - (item.expensesPerMonth * item.tax / 100)) // Вычисляет сумму с учетом налога \\ 

    cleanTax.push(item.taxCost) // Тут находиться сумма налога \\ 
    all.push(item.taxPerMonth)  // Тут находиться сумма с учетом налога \\ 

}

let maxCleanTax = Math.max(...cleanTax)
let minCleanTax = Math.min(...cleanTax)

let maxAll = Math.max(...all)
let minAll = Math.min(...all)

let max_clean_tax = bank.find(item => item.taxCost === maxCleanTax) // Компания которая плати больше всех \\
let min_clean_tax = bank.find(item => item.taxCost === minCleanTax) // Компания которая плати меньше всех \\

console.table(bank);

// Сумма с учетом налога\\

console.log('Сумма с учетом налога', all);
console.log('Максимальная сумма с учетом налога', maxAll);
console.log('Минимальная сумма с учетом налога', minAll);

// Сумма налога\\

console.log('Сумма налога', cleanTax);
console.log('Максимальная сумма налога', maxCleanTax);
console.log('Минимальная сумма налога', minCleanTax);

// Сами компании \\ 
console.log('Компания которая плати больше всех', max_clean_tax);
console.log('Компания которая плати меньше всех', min_clean_tax);