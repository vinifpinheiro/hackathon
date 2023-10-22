import {create} from 'zustand';

interface IState {
    selected: string;
    setSelected: (selected: string) => void;
    }

const useStore = create<IState>(set => ({
    selected: '',
    setSelected: (selected: string) => set({selected}),
}));

export default useStore;
