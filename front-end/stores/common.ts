import { defineStore } from 'pinia';

export interface ICommonState {
    
}

const useCommon = defineStore('common', {
    state: (): ICommonState => ({

    })
})

export default useCommon;