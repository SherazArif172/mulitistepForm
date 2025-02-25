"use client";

import { Provider, useDispatch } from "react-redux";
import Paginationn from "./_components/Pagination";
import { useState } from "react";
import { store } from "@/redux/store/store";
import { updateFormData, resetForm } from "@/redux/slice/formSlice";
import StepA from "./_components/Step1";
import StepB from "./_components/Step2";
import StepC from "./_components/Step3";

export default function Home() {
  const [step, setStep] = useState(1); // Initialize step to 1

  return (
    <Provider store={store}>
      <div className="max-w-md mx-auto mt-16">
        <p className="text-5xl text-blue-500 text-right">{step}/3</p>
        <div className="max-w-md mx-auto shadow-xl p-4 rounded-md mb-20">
          {/* Step 1: First Name and Last Name */}
          {step === 1 && <StepA />}

          {/* Step 2: Occupation and Description */}
          {step === 2 && <StepB />}

          {/* Step 3: Email, Password, and Confirm Password */}
          {step === 3 && <StepC />}
        </div>
        <Paginationn step={step} setStep={setStep} />
      </div>
    </Provider>
  );
}
