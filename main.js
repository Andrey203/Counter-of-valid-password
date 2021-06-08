'use strict';

function validPassCount(passObj) {
  let counter = 0;
  for (const key in passObj) {
    let charCounter = 0;
    const minQuantity = key.split(' ')[1].split('-')[0];
    const maxQuantity = key.split(' ')[1].split('-')[1];
    for (let i = 0; i < passObj[key].length; i++) {
      if (key[0] === passObj[key][i]) charCounter++;
    }

    if (charCounter >= minQuantity && charCounter <= maxQuantity) {
      counter++;
    }
  }
  return counter;
}

const requirements = {
  'a 1-5': 'abcdj',
  'z 2-4': 'asfalseiruqwo',
  'b 3-6': 'bhhkkbbjjjb',
}

console.log(validPassCount(requirements));








