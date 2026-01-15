import React, { useState } from 'react';
// We import 'useForm' to handle the heavy lifting of the form logic
import { useForm } from 'react-hook-form';

// This is a "Type" definition. It tells the computer exactly what 
// data to expect from this form.
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  // register: Connects an input field to the library
  // handleSubmit: A function that runs when the "Send" button is clicked
  // reset: Clears the form after success
  // errors: An object that holds any validation mistakes (like an empty name)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  // We use "State" to track what the UI should show (Is it sending? Was it successful?)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // This function runs when the user clicks the submit button
  const onSubmit = async (data: FormData) => {
    setStatus('sending'); // Tell the UI to show "Transmitting..."
    
    try {
      // 'fetch' is a built-in browser tool to send data to a URL
      const response = await fetch('https://n8n.tbuckets.us/webhook/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), // Turn the JavaScript object into a JSON string
      });

      if (response.ok) {
        setStatus('success');
        reset(); // Clear the form
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    // Tailwind Classes: 
    // 'bg-slate-900' = Dark blue background
    // 'py-12' = Padding on the Y-axis (top/bottom)
    // 'rounded-2xl' = Very rounded corners
    <section className="bg-slate-900 py-12 px-6 rounded-2xl shadow-xl max-w-2xl mx-auto border border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
      
      {/* We wrap the 'onSubmit' in 'handleSubmit' so the library handles validation first */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Name Field */}
        <div>
          <label className="block text-slate-300 mb-1 font-medium">Name</label>
          <input 
            {...register("name", { required: "Please tell me your name" })}
            className={`w-full bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Your Name"
          />
          {/* If there is an error for 'name', show the message */}
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        
        {/* Email Field */}
        <div>
          <label className="block text-slate-300 mb-1 font-medium">Email</label>
          <input 
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
            })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="taylor@tbuckets.us"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-slate-300 mb-1 font-medium">Message</label>
          <textarea 
            {...register("message", { required: "What can I help you with?" })}
            rows={4}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell me about your project..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button 
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition shadow-lg disabled:bg-slate-700 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Transmitting to NUC...' : 'Send Message'}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400 mt-4">
            🚀 Success! n8n has received your data and Taylor will be notified.
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;