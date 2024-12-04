import React, { useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useOnboardingForm } from './useOnboardingForm';
import { IndustryStep } from './steps/IndustryStep';
import { SingleInputStep } from './steps/SingleInputStep';
import { ThankYouStep } from './ThankYouStep';
import { cn } from '@/lib/utils';

export function OnboardingForm() {
  const { 
    isOpen,
    currentStep,
    showThankYou,
    formState,
    closeForm,
    goToNextStep,
    goToPreviousStep,
    updateFormData,
    formData,
    submitForm
  } = useOnboardingForm();

  useEffect(() => {
    const handleNextStep = () => {
      if (currentStep === steps.length - 1) {
        submitForm();
      } else {
        goToNextStep();
      }
    };

    window.addEventListener('form-next-step', handleNextStep);
    return () => window.removeEventListener('form-next-step', handleNextStep);
  }, [currentStep, goToNextStep, submitForm]);

  if (!isOpen) return null;

  const steps = [
    {
      component: IndustryStep,
      title: "What type of home service business do you run?",
    },
    {
      component: SingleInputStep,
      title: "What's your business name?",
      props: {
        field: 'businessName',
        placeholder: 'Enter your business name',
        type: 'text'
      }
    },
    {
      component: SingleInputStep,
      title: "What's your first name?",
      props: {
        field: 'firstName',
        placeholder: 'Enter your first name',
        type: 'text'
      }
    },
    {
      component: SingleInputStep,
      title: "What's your last name?",
      props: {
        field: 'lastName',
        placeholder: 'Enter your last name',
        type: 'text'
      }
    },
    {
      component: SingleInputStep,
      title: "What's your phone number?",
      props: {
        field: 'phoneNumber',
        placeholder: '(555) 555-5555',
        type: 'tel'
      }
    },
    {
      component: SingleInputStep,
      title: "What's your email address?",
      props: {
        field: 'email',
        placeholder: 'Enter your email address',
        type: 'email'
      }
    }
  ];

  const CurrentStepComponent = steps[currentStep].component;
  const currentStepProps = 'props' in steps[currentStep] ? steps[currentStep].props : {};

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      submitForm();
    } else {
      goToNextStep();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!showThankYou && (
          <div className="h-1 bg-gray-100 rounded-t-xl">
            <div 
              className="h-full bg-blue-600 rounded-xl transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        )}

        <div className="p-8">
          {showThankYou ? (
            <ThankYouStep />
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-8">
                {steps[currentStep].title}
              </h2>

              <CurrentStepComponent
                formData={formData}
                updateFormData={updateFormData}
                {...currentStepProps}
              />

              {formState.submitError && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg">
                  {formState.submitError}
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={goToPreviousStep}
                  className={cn(
                    "text-gray-600 hover:text-gray-800 transition-colors",
                    currentStep === 0 && "invisible"
                  )}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={formState.isSubmitting}
                  className={cn(
                    "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2",
                    formState.isSubmitting && "opacity-75 cursor-not-allowed"
                  )}
                >
                  {formState.isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    currentStep === steps.length - 1 ? "Create my Account" : "Continue"
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}