import { writable } from 'svelte/store';

import type { TBinance } from '../types';
import { binanceData } from '../api/binance';

export const useBinanceAndState = () => {

    const isLoading = writable<boolean>(true);
    const bin = writable<TBinance>();

    const getCurrencies = async() => {
        const resp = await binanceData.get<TBinance[]>('');
        const binReq = resp.data.find(curr => curr.symbol === 'BTCUSDT');
        bin.update(bin => ({...bin, ...binReq}));
        isLoading.update(load => !load);
    };

    return { isLoading, bin, getCurrencies };

};