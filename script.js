// دالة للتوزيع الإلكتروني
function distributeElectrons(atomicNumber) {
    const orbitals = [
        { name: '1s', capacity: 2 },
        { name: '2s', capacity: 2 },
        { name: '2p', capacity: 6 },
        { name: '3s', capacity: 2 },
        { name: '3p', capacity: 6 },
        { name: '4s', capacity: 2 },
        { name: '3d', capacity: 10 },
        { name: '4p', capacity: 6 },
        { name: '5s', capacity: 2 },
        { name: '4d', capacity: 10 },
        { name: '5p', capacity: 6 },
        { name: '6s', capacity: 2 },
        { name: '4f', capacity: 14 },
        { name: '5d', capacity: 10 },
        { name: '6p', capacity: 6 },
        { name: '7s', capacity: 2 },
        { name: '5f', capacity: 14 },
        { name: '6d', capacity: 10 },
        { name: '7p', capacity: 6 }
    ];

    if (isNaN(atomicNumber) || atomicNumber < 1) {
        return 'الرجاء إدخال عدد ذري صحيح وموجب.';
    }

    let remainingElectrons = atomicNumber;
    let distribution = '';

    for (let i = 0; i < orbitals.length && remainingElectrons > 0; i++) {
        const orbital = orbitals[i];
        let electronsInOrbital = Math.min(remainingElectrons, orbital.capacity);
        distribution += `${orbital.name}<sup>${electronsInOrbital}</sup> `;
        remainingElectrons -= electronsInOrbital;
    }

    return distribution;
}

// دالة لمعالجة التوزيع من حقل الإدخال
function distributeFromInput() {
    const atomicNumberInput = document.getElementById('atomicNumberInput');
    const atomicNumber = parseInt(atomicNumberInput.value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(atomicNumber) || atomicNumber < 1) {
        resultDiv.textContent = 'الرجاء إدخال عدد ذري صحيح وموجب.';
        return;
    }
    
    const distribution = distributeElectrons(atomicNumber);
    resultDiv.innerHTML = `التوزيع الإلكتروني: ${distribution}`;
}

// مستمعي الأحداث لعناصر الجدول الدوري
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const resultDiv = document.getElementById('result');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            const atomicNumber = parseInt(element.getAttribute('data-atomic-number'));
            const symbol = element.getAttribute('data-symbol');
            const distribution = distributeElectrons(atomicNumber);
            resultDiv.innerHTML = `التوزيع الإلكتروني للعنصر ${symbol} (العدد الذري: ${atomicNumber}): <br>${distribution}`;
        });
    });
});