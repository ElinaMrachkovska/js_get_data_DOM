function updatePopulationStatistics() {
  const populationElements = document.querySelectorAll('span.population');
  const numbers = [];

  const separatorRegex = /[^0-9-.]/g;

  populationElements.forEach((element) => {
    const textValue = element.textContent.replace(separatorRegex, '');
    const numValue = Number(textValue);

    if (!isNaN(numValue) && isFinite(numValue)) {
      numbers.push(numValue);
    }
  });

  const totalSpan = document.querySelector('.total-population');
  const averageSpan = document.querySelector('.average-population');

  if (numbers.length === 0) {
    if (totalSpan) {
      totalSpan.textContent = '0';
    }

    if (averageSpan) {
      averageSpan.textContent = '0';
    }

    return;
  }

  const total = numbers.reduce((sum, current) => sum + current, 0);
  const average = total / numbers.length;

  const numberFormatter = new Intl.NumberFormat('en-US');

  if (totalSpan) {
    const formattedTotal = numberFormatter.format(Math.round(total));

    totalSpan.textContent = formattedTotal;
  }

  if (averageSpan) {
    const formattedAverage = numberFormatter.format(Math.round(average));

    averageSpan.textContent = formattedAverage;
  }
}

document.addEventListener('DOMContentLoaded', updatePopulationStatistics);
