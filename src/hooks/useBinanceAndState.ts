import { writable } from 'svelte/store';
import { Subscription } from 'rxjs';

import type { TBinance } from '../types';
import { binance$ } from '../api/binance';

let subscription = new Subscription();

export const useBinanceAndState = () => {

    const bin = writable<TBinance>();
    const isLoading = writable<boolean>(true);

    const getCurrencies = (): void => {
        subscription = binance$.subscribe( data => {
            const binReq = data.find(curr => curr.symbol === 'BTCUSDT');
            bin.update(bin => ({...bin, ...binReq}));
            isLoading.update(load => !load);
        });
    };

    const unsubscribe = (): void => {
        subscription.unsubscribe();
    };

    return { isLoading, bin, getCurrencies, unsubscribe };

};