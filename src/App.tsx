import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { OnboardingForm } from './components/OnboardingForm/OnboardingForm';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <OnboardingForm />
    </>
  );
}

export default App;