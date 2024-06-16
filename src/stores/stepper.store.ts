import {create} from 'zustand';

interface StepperState {
    step: number;
    setStep: (redirect: number) => void;
}

export const useStepperStore = create<StepperState>()((set) => ({
    step: 1,
    setStep: (step) => set(() => ({step: step})),
}));
