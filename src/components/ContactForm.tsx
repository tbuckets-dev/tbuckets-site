import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setStatus('sending');
    try {
      // Replace with your actual n8n Webhook URL
      const response = await fetch('https://n8n.tbuckets.us/webhook/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-slate-900 py-12 px-6 rounded-2xl shadow-xl max-w-2xl mx-auto border border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-slate-300 mb-1">Name</label>
          <input 
            {...register("name", { required: true })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label className="block text-slate-300 mb-1">Email</label>
          <input 
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="taylor@tbuckets.us"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-1">Message</label>
          <textarea 
            {...register("message", { required: true })}
            rows={4}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Tell me about your project..."
          />
        </div>

        <button 
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg disabled:bg-slate-700"
        >
          {status === 'sending' ? 'Transmitting...' : 'Send Message'}
        </button>

        {status === 'success' && <p className="text-green-400 mt-4">Message sent successfully to the TBuckets NUC!</p>}
        {status === 'error' && <p className="text-red-400 mt-4">Something went wrong. Check n8n logs.</p>}
      </form>
    </section>
  );
};

export default ContactForm;