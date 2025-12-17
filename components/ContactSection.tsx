import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  role: string;
  intent: 'participant' | 'collaborator';
};

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Simulate API call
    console.log(data);
    setTimeout(() => {
        setIsSubmitted(true);
        reset();
    }, 1000);
  };

  return (
    <section id="action" className="py-24 bg-[#0B121F] text-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-spark-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-spark-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Initiate</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Secure Your Coordinates</h3>
        </div>

        <div className="bg-spark-navy p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden rounded-sm">
           {/* Decorative corner */}
           <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-spark-gold/20 to-transparent"></div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Designation</label>
                        <input 
                            {...register("name", { required: true })}
                            placeholder="Full Name" 
                            className="w-full bg-[#152238] border border-gray-600 focus:border-spark-gold p-4 text-white outline-none transition-colors rounded-sm"
                        />
                         {errors.name && <span className="text-red-400 text-xs mt-1 block">Required</span>}
                    </div>
                     <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Coordinates</label>
                        <input 
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            placeholder="Email Address" 
                            className="w-full bg-[#152238] border border-gray-600 focus:border-spark-gold p-4 text-white outline-none transition-colors rounded-sm"
                        />
                        {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email required</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Current Role</label>
                    <input 
                        {...register("role", { required: true })}
                        placeholder="e.g. Product Designer, Founder, Student" 
                        className="w-full bg-[#152238] border border-gray-600 focus:border-spark-gold p-4 text-white outline-none transition-colors rounded-sm"
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Objective</label>
                    <select 
                        {...register("intent")}
                        className="w-full bg-[#152238] border border-gray-600 focus:border-spark-gold p-4 text-white outline-none transition-colors appearance-none rounded-sm"
                    >
                        <option value="participant">Enter the Lab (Participant)</option>
                        <option value="collaborator">Start Collaboration (Partner/Lead)</option>
                    </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-spark-gold text-spark-navy font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm"
              >
                Transmit Request <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="h-full py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 border-4 border-spark-gold rounded-full flex items-center justify-center">
                    <Send className="text-spark-gold w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Signal Received.</h4>
                <p className="text-gray-400">Our curators are reviewing your profile. <br/>Expect communication shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="text-xs text-spark-gold underline uppercase tracking-widest mt-8">Reset Transmittion</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;