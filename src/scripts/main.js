'use strict';

/**
 * Обчислює середнє та загальне значення населення,
 * форматує їх та оновлює DOM, використовуючи лише вбудовані методи.
 */
const populationElements = document.querySelectorAll('span.population');
const numbers = [];

populationElements.forEach((element) => {
  const textValue = element.textContent.replace(/,/g, '');
  const numValue = Number(textValue);

  if (!isNaN(numValue) && isFinite(numValue)) {
    numbers.push(numValue);
  }
});

const total = numbers.reduce((sum, current) => sum + current, 0);
const average = total / numbers.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const numberFormatter = new Intl.NumberFormat('en-US');

if (totalSpan) {
  const formattedTotal = numberFormatter.format(Math.round(total));

  totalSpan.textContent = formattedTotal;
}

if (averageSpan) {
  const formattedAverage = numberFormatter.format(Math.round(average));

  averageSpan.textContent = formattedAverage;
}

// console.log(updatePopulationStatistics());
// function updatePopulationStatistics {
//   const domElem = document.querySelectorAll('span.population');
//   const num = [];

//   domElem.forEach((element) => {
//     const textValue = element.textContent.replace(/,/g, '');
//     const numValue = Number(textValue);

//   if (!NaN(numValue) && isFinite(numValue)) {
//     num.push(numValue);
//   }
//   });

//   const total = num.reduce(acc, (n) => {
//     (acc + n, 0);
//   });

//   const average = total / num.length;

//   const totalSpan = document.querySelectorAll('.total-population');
//   const averSpan = document.querySelectorAll('.average-population');

//   const numberFormatter = new Intl.NumberFormat('en-US');

//   if (totalSpan) {
//     const formattedTotal = numberFormatter.format(Math.round(total));

//     totalSpan.textContent = formattedTotal;
//   }

//   if (averSpan) {

//     const formattedAverage = numberFormatter.format(Math.round(average));

//     averSpan.textContent = formattedAverage;
//   }
// }

// document.addEventListener('DOMContentLoaded', updatePopulationStatistics);
