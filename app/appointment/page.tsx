"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MessageCircle,
  FileCheck,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { clinicData } from "@/data/clinic";
import FadeUp from "@/components/motion/FadeUp";

function AppointmentForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentRef, setAppointmentRef] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ageGroup: "30-45",
    patientType: "new",
    serviceSlug: preselectedService || servicesData[0].slug,
    consultationMode: "in-clinic",
    chiefConcern: "",
    preferredDate: "",
    preferredTimeSlot: "10:00 AM – Morning Session",
    notes: "",
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceSlug: preselectedService }));
    }
  }, [preselectedService]);

  // Generate random reference code on submission
  const generateRef = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `VNC-2026-${randomNum}`;
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name.";
      if (!formData.email.trim() || !formData.email.includes("@"))
        newErrors.email = "Please provide a valid email address.";
      if (!formData.phone.trim() || formData.phone.length < 7)
        newErrors.phone = "Please provide a contact phone number.";
    } else if (step === 3) {
      if (!formData.preferredDate)
        newErrors.preferredDate = "Please choose a preferred consultation date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setAppointmentRef(generateRef());
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      ageGroup: "30-45",
      patientType: "new",
      serviceSlug: servicesData[0].slug,
      consultationMode: "in-clinic",
      chiefConcern: "",
      preferredDate: "",
      preferredTimeSlot: "10:00 AM – Morning Session",
      notes: "",
    });
  };

  const selectedServiceObj =
    servicesData.find((s) => s.slug === formData.serviceSlug) || servicesData[0];

  const steps = [
    { num: 1, label: "Personal Details" },
    { num: 2, label: "Consultation" },
    { num: 3, label: "Date & Time" },
    { num: 4, label: "Confirm" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Step Indicators */}
      {!isSubmitted && (
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, idx) => {
              const isDone = currentStep > step.num;
              const isCurrent = currentStep === step.num;

              return (
                <div key={step.num} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                        isDone
                          ? "bg-teal-500 text-white shadow-subtle"
                          : isCurrent
                          ? "bg-teal-600 text-white ring-4 ring-teal-100"
                          : "bg-white text-slate-400 border border-slate-200"
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : `0${step.num}`}
                    </div>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider mt-2 transition-colors text-center hidden sm:block ${
                        isCurrent ? "text-slate-900 font-bold" : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {idx < steps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 transition-colors duration-300 -mt-5 hidden sm:block ${
                        currentStep > step.num ? "bg-teal-500" : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Confirmation State (Frontend-Only Submission) */}
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-14 rounded-[40px] bg-white border border-slate-200/80 shadow-floating text-center space-y-8"
          >
            {/* Animated Success Icon */}
            <div className="w-20 h-20 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mx-auto shadow-soft">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-bold px-3 py-1 rounded-full bg-teal-50 border border-teal-200">
                Request Received (Demo)
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                Your Consultation Request Has Been Logged
              </h2>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your appointment request has been recorded for this portfolio demonstration.
              </p>
            </div>

            {/* Mock Reference Badge */}
            <div className="p-6 rounded-3xl bg-warm-bg border border-slate-200 max-w-md mx-auto text-left space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-400 uppercase">Demo Reference ID:</span>
                <span className="font-bold text-teal-700">{appointmentRef}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-400 uppercase">Selected Program:</span>
                <span className="font-medium text-slate-800 truncate max-w-[200px]">
                  {selectedServiceObj.title}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-400 uppercase">Requested Date:</span>
                <span className="font-medium text-slate-800">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 uppercase">Consultation Mode:</span>
                <span className="font-medium text-slate-800 uppercase">
                  {formData.consultationMode}
                </span>
              </div>
            </div>

            {/* Reassurance & Direct Contact Notice */}
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200/80 max-w-md mx-auto text-xs text-teal-800 font-sans space-y-1">
              <p className="font-semibold">Notice for Portfolio Evaluators:</p>
              <p className="text-teal-700 leading-relaxed">
                This was a client-side simulation. No database, email, or third-party servers were pinged.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={clinicData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold tracking-wider uppercase shadow-subtle transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Concierge via WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
              >
                Book Another Demo Consultation
              </button>
            </div>
          </motion.div>
        ) : (
          /* Multi-Step Wizard Form */
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/80 shadow-floating"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                      Step 01 &bull; Personal Information
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                      Patient Identification & Contact
                    </h2>
                    <p className="text-xs text-slate-500 font-sans">
                      All consultation records are kept strictly confidential under physician-patient privilege.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    {/* Full Name */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                        Full Legal Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="e.g. Eleanor Bennett"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-warm-bg border text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white transition-all ${
                            errors.fullName
                              ? "border-red-400 focus:ring-red-400"
                              : "border-slate-200 focus:border-teal-500"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-red-500 font-mono">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="eleanor@example.com"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-warm-bg border text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white transition-all ${
                            errors.email
                              ? "border-red-400 focus:ring-red-400"
                              : "border-slate-200 focus:border-teal-500"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-500 font-mono">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                        Mobile Phone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-warm-bg border text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white transition-all ${
                            errors.phone
                              ? "border-red-400 focus:ring-red-400"
                              : "border-slate-200 focus:border-teal-500"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 font-mono">{errors.phone}</p>
                      )}
                    </div>

                    {/* Patient Type */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                        Practice Status
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, patientType: "new" })}
                          className={`py-3 px-4 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.patientType === "new"
                              ? "bg-teal-500 text-white border-teal-500"
                              : "bg-warm-bg text-slate-600 border-slate-200 hover:bg-white"
                          }`}
                        >
                          New Patient
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, patientType: "returning" })}
                          className={`py-3 px-4 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.patientType === "returning"
                              ? "bg-teal-500 text-white border-teal-500"
                              : "bg-warm-bg text-slate-600 border-slate-200 hover:bg-white"
                          }`}
                        >
                          Returning Member
                        </button>
                      </div>
                    </div>

                    {/* Age Range */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                        Age Range
                      </label>
                      <select
                        value={formData.ageGroup}
                        onChange={(e) =>
                          setFormData({ ...formData, ageGroup: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-warm-bg border border-slate-200 text-sm text-slate-800 focus:bg-white focus:border-teal-500 transition-all"
                      >
                        <option value="18-29">18 – 29 Years</option>
                        <option value="30-45">30 – 45 Years</option>
                        <option value="46-60">46 – 60 Years</option>
                        <option value="60+">60+ Years</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Consultation Needs */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                      Step 02 &bull; Clinical Focus
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                      Select Program & Care Modality
                    </h2>
                    <p className="text-xs text-slate-500 font-sans">
                      Tailor your session according to your preventive or diagnostic priorities.
                    </p>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                      Clinical Program of Interest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {servicesData.map((s) => {
                        const isSelected = formData.serviceSlug === s.slug;
                        return (
                          <div
                            key={s.slug}
                            onClick={() => setFormData({ ...formData, serviceSlug: s.slug })}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? "bg-teal-50 border-teal-500 ring-2 ring-teal-200"
                                : "bg-warm-bg border-slate-200 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-teal-600 font-bold">
                                {s.number} &bull; {s.category}
                              </span>
                              <span className="font-mono text-[10px] text-slate-400">
                                {s.duration}
                              </span>
                            </div>
                            <p className="font-serif text-base font-normal text-slate-900 mt-1">
                              {s.title}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Modality Mode */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                      Consultation Modality
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, consultationMode: "in-clinic" })
                        }
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          formData.consultationMode === "in-clinic"
                            ? "bg-teal-50 border-teal-500 ring-2 ring-teal-200"
                            : "bg-warm-bg border-slate-200 hover:bg-white"
                        }`}
                      >
                        <p className="font-serif text-base font-normal text-slate-900">
                          In-Clinic Pavilion
                        </p>
                        <p className="text-xs text-slate-500 font-sans mt-0.5">
                          Suite 4B &bull; On-site diagnostic blood draw available
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, consultationMode: "telehealth" })
                        }
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          formData.consultationMode === "telehealth"
                            ? "bg-teal-50 border-teal-500 ring-2 ring-teal-200"
                            : "bg-warm-bg border-slate-200 hover:bg-white"
                        }`}
                      >
                        <p className="font-serif text-base font-normal text-slate-900">
                          Encrypted Video Telehealth
                        </p>
                        <p className="text-xs text-slate-500 font-sans mt-0.5">
                          HD HIPAA-compliant virtual consultation suite
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Primary Concerns / Message */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                      Primary Health Goals or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.chiefConcern}
                      onChange={(e) =>
                        setFormData({ ...formData, chiefConcern: e.target.value })
                      }
                      placeholder="e.g. Family history of heart disease, persistent brain fog, or wanting a comprehensive longevity baseline."
                      className="w-full px-4 py-3 rounded-2xl bg-warm-bg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-teal-500 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Date & Time Preferences */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                      Step 03 &bull; Scheduling
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                      Preferred Date & Session Timing
                    </h2>
                    <p className="text-xs text-slate-500 font-sans">
                      We protect full 60-minute blocks for each consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                        Target Consultation Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDate: e.target.value })
                          }
                          className={`w-full pl-11 pr-4 py-3.5 rounded-2xl bg-warm-bg border text-sm text-slate-800 focus:bg-white transition-all ${
                            errors.preferredDate
                              ? "border-red-400 focus:ring-red-400"
                              : "border-slate-200 focus:border-teal-500"
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-xs text-red-500 font-mono">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    {/* Time Slot Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                        Time of Day
                      </label>
                      <select
                        value={formData.preferredTimeSlot}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTimeSlot: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-warm-bg border border-slate-200 text-sm text-slate-800 focus:bg-white focus:border-teal-500 transition-all"
                      >
                        <option value="09:00 AM – Morning Session">
                          09:00 AM – Early Morning (Ideal for fasting labs)
                        </option>
                        <option value="11:30 AM – Late Morning">
                          11:30 AM – Late Morning Consultation
                        </option>
                        <option value="02:30 PM – Afternoon Session">
                          02:30 PM – Early Afternoon
                        </option>
                        <option value="04:30 PM – Late Afternoon">
                          04:30 PM – Late Afternoon Session
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      <span className="font-semibold text-slate-800">Note regarding fasting:</span> If you are booking a Preventive Health Mapping session with comprehensive lipid subfractions, we recommend choosing a morning slot to accommodate your overnight 10-hour fast.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 4: Summary & Confirm */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                      Step 04 &bull; Final Review
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                      Review Your Consultation Request
                    </h2>
                    <p className="text-xs text-slate-500 font-sans">
                      Verify your details prior to submitting to our patient concierge.
                    </p>
                  </div>

                  {/* Summary Details Card */}
                  <div className="p-6 rounded-3xl bg-warm-bg border border-slate-200/80 space-y-4 font-sans text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-200/60">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-slate-400 block">
                          Patient Name
                        </span>
                        <span className="font-serif text-base font-semibold text-slate-900">
                          {formData.fullName || "Not specified"}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-slate-400 block">
                          Contact Info
                        </span>
                        <span className="text-slate-800 font-medium">
                          {formData.email} &bull; {formData.phone}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-200/60">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-slate-400 block">
                          Selected Program
                        </span>
                        <span className="font-serif text-base font-semibold text-slate-900">
                          {selectedServiceObj.title}
                        </span>
                        <span className="text-slate-500 block mt-0.5">
                          {selectedServiceObj.duration}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-slate-400 block">
                          Modality & Timing
                        </span>
                        <span className="text-slate-800 font-medium capitalize">
                          {formData.consultationMode}
                        </span>
                        <span className="text-slate-500 block mt-0.5">
                          {formData.preferredDate || "Date TBD"} ({formData.preferredTimeSlot})
                        </span>
                      </div>
                    </div>

                    {formData.chiefConcern && (
                      <div className="pt-1">
                        <span className="font-mono text-[10px] uppercase text-slate-400 block">
                          Clinical Notes / Chief Concern
                        </span>
                        <p className="text-slate-700 italic mt-1 leading-relaxed">
                          &ldquo;{formData.chiefConcern}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Demo Notice Alert */}
                  <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-teal-800 font-sans leading-relaxed">
                      <span className="font-semibold">Portfolio Demonstration:</span> Clicking &ldquo;Confirm Consultation Request&rdquo; will trigger a simulated frontend confirmation without transmitting private data to a backend or external database.
                    </p>
                  </div>
                </div>
              )}

              {/* Wizard Nav Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold tracking-wider uppercase shadow-subtle hover:shadow-soft transition-all"
                  >
                    <span>Continue to Step 0{currentStep + 1}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold tracking-wider uppercase shadow-soft hover:shadow-floating transition-all"
                  >
                    <Calendar className="w-4 h-4 text-teal-200" />
                    <span>Confirm Consultation Request</span>
                  </button>
                )}
              </div>

            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-warm-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <FadeUp distance={20}>
          <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
            Appointment Reservation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-tight mt-2">
            Schedule a Private Consultation
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-xl mx-auto mt-3">
            A calm, four-step booking interface for an unhurried 60-minute health evaluation with Dr. Julian Vance.
          </p>
        </FadeUp>
      </div>

      <Suspense fallback={<div className="text-center py-20 font-mono text-sm text-slate-400">Loading booking portal...</div>}>
        <AppointmentForm />
      </Suspense>
    </div>
  );
}
