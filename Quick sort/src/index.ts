import { QuickSort } from './models/QuickSort.ts';

(async () => {
    const array = [-20, 0, 10032, 1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    console.log('Original array: ', array, '\nSorted array: ', QuickSort.sort(array));
})();
