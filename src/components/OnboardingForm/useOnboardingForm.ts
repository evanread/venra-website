import { create } from 'zustand';
import { sendEmail } from '@/lib/api';

interface FormData {
  industry: string;
  customIndustry?: string;
  businessName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

interface FormState {
  isSubmitting: boolean;
  submitError: string | null;
}

interface OnboardingFormState {
  isOpen: boolean;
  currentStep: number;
  formData: FormData;
  formState: FormState;
  showThankYou: boolean;
  openForm: () => void;
  closeForm: () => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
  submitForm: () => Promise<void>;
  reset: () => void;
}

const initialFormData: FormData = {
  industry: '',
  businessName: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
};

const initialFormState: FormState = {
  isSubmitting: false,
  submitError: null,
};

export const useOnboardingForm = create<OnboardingFormState>((set, get) => ({
  isOpen: false,
  currentStep: 0,
  showThankYou: false,
  formData: initialFormData,
  formState: initialFormState,
  openForm: () => set({ isOpen: true, showThankYou: false }),
  closeForm: () => set({ 
    isOpen: false, 
    currentStep: 0, 
    showThankYou: false,
    formState: initialFormState 
  }),
  goToNextStep: () => set((state) => ({ 
    currentStep: Math.min(state.currentStep + 1, 5)
  })),
  goToPreviousStep: () => set((state) => ({ 
    currentStep: Math.max(state.currentStep - 1, 0)
  })),
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),
  submitForm: async () => {
    const state = get();
    
    set((state) => ({
      formState: {
        ...state.formState,
        isSubmitting: true,
        submitError: null,
      }
    }));

    try {
      const timestamp = new Date().toISOString();
      const emailData = {
        ...state.formData,
        submittedAt: timestamp,
      };

      const result = await sendEmail(emailData);

      if (result.success) {
        set({ showThankYou: true });
      } else {
        set((state) => ({
          formState: {
            ...state.formState,
            submitError: result.message,
          }
        }));
      }
    } catch (error) {
      set((state) => ({
        formState: {
          ...state.formState,
          submitError: 'An unexpected error occurred. Please try again.',
        }
      }));
    } finally {
      set((state) => ({
        formState: {
          ...state.formState,
          isSubmitting: false,
        }
      }));
    }
  },
  reset: () => set({
    isOpen: false,
    currentStep: 0,
    showThankYou: false,
    formData: initialFormData,
    formState: initialFormState,
  })
}));