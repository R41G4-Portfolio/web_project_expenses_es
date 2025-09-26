//Variables

let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12]
];

//Obtener el total de la compra
for(let i =0; i< expenseEntries.length; i++)
{
    totalExpensesValue += Number(expenseEntries[i][1])
    console.log(expenseEntries[i][1]);
}

//funciones
//Obtener el promedio de la compra
function calculateAverageExpense(expenseEntries, totalExpensesValue)
{
    //Si no hay lista de compras o viene vacío
    if(!expenseEntries || expenseEntries.length === 0)
        return 0
    else
    {
        //se declara const ya que es de un solo uso y si se invoca se crea de nuevo
        const average = totalExpensesValue / expenseEntries.length;
        return average;
    }
}

//Obtener el balance de las compras de acuerdo al saldo
function calculateBalance(budgetValue,totalExpensesValue)
{
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor(budgetValue,totalExpensesValue)
{
    if(budgetValue - totalExpensesValue < 0)
        return 'red';

    else if(budgetValue - totalExpensesValue < budgetValue * 0.25)
        return 'orange';

    else
        return 'green';
}

function calculateCategoryExpenses(category, expenseEntries)
{
    let categoryTotal = 0;
    for(let i =0; i< expenseEntries.length; i++)
    {
        if(expenseEntries[i][0] === category)
        {
            categoryTotal += Number(expenseEntries[i][1])
            console.log(expenseEntries[i][1]);
        }
    }
    return categoryTotal;
}

function calculateLargestCategory(expenseEntries)
{
    let uniqueCategories = [];
    let maxCategory = "";
    let maxExpense = 0;

    // Obtener categorías únicas
    for (let i = 0; i < expenseEntries.length; i++)
    {
        let category = expenseEntries[i][0];
        if (uniqueCategories.indexOf(category) === -1)
            uniqueCategories.push(category);
    }

    // Calcular el total por categoría y encontrar la mayor
    for(let i = 0; i < uniqueCategories.length; i++)
    {
        let category = uniqueCategories[i];
        let categoryTotal = calculateCategoryExpenses(category, expenseEntries);

        if (categoryTotal > maxExpense)
        {
            maxExpense = categoryTotal;
            maxCategory = category;
        }
    }

    return maxCategory;
}

function addExpenseEntry(entryArray)
{
    // Validación básica
    if (
        !Array.isArray(entryArray) ||
        entryArray.length !== 2 ||
        typeof entryArray[0] !== "string" ||
        isNaN(entryArray[1])
    ) {
        console.log("Entrada inválida. Debe ser un array con [categoría, número]");
        return;
    }

    // Se convierte el segundo valor a número por seguridad
    let category = entryArray[0];
    let amount = Number(entryArray[1]);

    // Agregamos al arreglo original
    expenseEntries.push([category, amount]);

    // Actualizamos el total de gastos
    totalExpensesValue += amount;

    console.log(`Se agregó: ${category} - $${amount}`);
}

//Comprobación de las funcionalidades del programa

//Sumatoria de las compras
console.log(`Precio total: ${totalExpensesValue}`);

//Promedio de las compras
console.log(calculateAverageExpense(expenseEntries, totalExpensesValue));

//Balance
balance = calculateBalance(budgetValue, totalExpensesValue)
console.log(balance);


//Color del balance
balanceColor = updateBalanceColor(budgetValue, totalExpensesValue);
console.log(balanceColor)

//Calcular el totla de una categoría
console.log("Total subscriptions: " + calculateCategoryExpenses("subscriptions", expenseEntries))

//Calcular la categoría con el gasto más alto
console.log(calculateLargestCategory(expenseEntries));

//Agregar elemento nuevo a la lista de gastos
addExpenseEntry(["transport", 10]); // agrega un nuevo gasto
