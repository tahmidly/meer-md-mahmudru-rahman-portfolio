'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { ShieldCheck, Phone, ChevronRight, MapPin, Star, GraduationCap, BookOpen, Heart, Briefcase, Users, History, Globe, Award, CheckCircle2, Facebook, Twitter, Menu, X, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-900 selection:text-white scroll-smooth">
            {/* Top Bar - Deep Green */}
            {/* <div className="bg-emerald-950 text-white py-2.5 overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-wider gap-2 md:gap-0">
                    <div className="flex gap-4 md:gap-8">
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                            বগুড়া-০৫ (শেরপুর-ধুনট)
                        </span>
                        <span>প্রতীক: হাতপাখা</span>
                    </div>
                    <div className="hidden md:flex gap-6 opacity-80">
                        <span>যোগাযোগ করুন: ০১৭১৮৩২৯৫০৮</span>
                        <span>২৪/৭ অনলাইন সমর্থন</span>
                    </div>
                </div>
            </div> */}

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl transition-all duration-300">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center gap-4">

                            <div className="hidden md:block">
                                <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">প্রভাষক মীর মাহমুদুর রহমান</h2>
                                <p className="text-[10px] font-black text-emerald-700 tracking-[0.2em] mt-1 uppercase">বগুড়া-০৫ (শেরপুর-ধুনট)</p>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex gap-2">
                            <Link href="#home"><Button variant="ghost" className="rounded-lg font-semibold text-xs bg-emerald-50 text-emerald-900 transition-all px-5 h-10">হোম</Button></Link>
                            <Link href="#about"><Button variant="ghost" className="rounded-lg font-semibold text-xs hover:bg-emerald-50 hover:text-emerald-900 transition-all px-5 h-10">পরিচিতি</Button></Link>
                            <Link href="#education"><Button variant="ghost" className="rounded-lg font-semibold text-xs hover:bg-emerald-50 hover:text-emerald-900 transition-all px-5 h-10">শিক্ষাগত যোগ্যতা</Button></Link>
                            <Link href="#journey"><Button variant="ghost" className="rounded-lg font-semibold text-xs hover:bg-emerald-50 hover:text-emerald-900 transition-all px-5 h-10">রাজনৈতিক পথচলা</Button></Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-4 text-emerald-950"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-500 overflow-hidden shadow-2xl z-50 ${isMenuOpen ? 'max-h-[500px] border-b-4 border-emerald-900' : 'max-h-0'}`}>
                    <div className="container mx-auto px-4 py-8 flex flex-col gap-2">
                        <Link href="#home"><Button variant="ghost" className="w-full justify-start rounded-lg font-semibold text-sm p-4 h-12" onClick={() => setIsMenuOpen(false)}>হোম</Button></Link>
                        <Link href="#about"><Button variant="ghost" className="w-full justify-start rounded-lg font-semibold text-sm p-4 h-12" onClick={() => setIsMenuOpen(false)}>পরিচিতি</Button></Link>
                        <Link href="#education"><Button variant="ghost" className="w-full justify-start rounded-lg font-semibold text-sm p-4 h-12" onClick={() => setIsMenuOpen(false)}>শিক্ষাগত যোগ্যতা</Button></Link>
                        <Link href="#journey"><Button variant="ghost" className="w-full justify-start rounded-lg font-semibold text-sm p-4 h-12" onClick={() => setIsMenuOpen(false)}>রাজনৈতিক পথচলা</Button></Link>
                        <div className="pt-4 mt-2 border-t border-slate-100">
                            <Button asChild className="w-full bg-emerald-600 text-white rounded-lg h-12 font-semibold text-sm shadow-sm">
                                <a href="https://wa.me/8801718329508" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    যোগাযোগ করুন
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative overflow-hidden bg-white pt-24 lg:pt-32">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-left">
                        {/* Content Side */}
                        <div className="flex-1 py-16 lg:py-30 pr-0 lg:pr-12 space-y-10">
                            <div className="space-y-6">
                                <div className="inline-block bg-white/60 backdrop-blur-md text-emerald-900 text-[12px] font-black uppercase  px-5 py-2 shadow-sm">
                                    সৎ, যোগ্য ও খোদাভিরু নেতৃত্ব প্রতিষ্ঠায় শেরপুর ধুনটের মাটি ও গণমানুষের নেতা
                                </div>
                                <h1 className="text-5xl  font-black text-slate-900 uppercase ">
                                    <span className="text-4xl mb-5">প্রভাষক মীর মুহাঃ </span><br />
                                    <span className="text-emerald-700 mt-5 md:text-7xl"> মাহমুদুর রহমান চুন্নু </span>

                                </h1>
                            </div>

                            <p className="text-sm md:text-base text-slate-600 max-w-sm leading-relaxed border-l-4 border-emerald-900 pl-6">
                                পীর সাহেব চরমোনাই মনোনীত সংসদ সদস্য পদপ্রার্থী বগুড়া-৫, শেরপুর-ধুনট নির্বাচনী এলাকা
                            </p>
                            <div className="flex flex-row flex-wrap gap-4 pt-4">
                                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-5 h-11 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    বিস্তারিত পড়ুন
                                </Button>
                                <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700 px-5 h-11 rounded-lg text-sm font-semibold transition-all shadow-sm">
                                    <a href="https://wa.me/8801718329508" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        যোগাযোগ করুন
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="lg:w-[500px] relative flex items-center justify-center min-h-[500px]">
                            <div className="absolute inset-0 bg-emerald-50 -rotate-3 rounded-3xl"></div>
                            <div className="relative w-full h-full bg-slate-200 overflow-hidden shadow-2xl transition-all duration-700 rounded-3xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent z-10"></div>
                                <img
                                    src="https://i.postimg.cc/jq90gdpW/pic.png"
                                    alt="MP Candidate"
                                    className="w-full h-full object-cover grayscale-100 brightness-110 hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/80 backdrop-blur-md p-6 shadow-2xl  -rotate-6 hidden md:flex items-center justify-center">
                                <img src="/h1.png" alt="হাতপাখা" className="w-full h-full object-contain brightness-75" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Info Grid */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "প্রতীক", val: <img src="/h2.png" alt="হাতপাখা" className="h-20 w-auto object-contain" />, sub: "শেরপুর-ধুনট" },
                            { label: "দল", val: "IAB", sub: "ইসলামী আন্দোলন বাংলাদেশ" },
                            { label: "দলে যোগদান", val: "২০১০", sub: "সাল" },
                            { label: "শিক্ষা", val: "এম.কম", sub: "ব্যাবস্থাপনা" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-md p-10 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-500">
                                <p className="text-[12px] font-black text-emerald-800/40 uppercase mb-4">{stat.label}</p>
                                <div className="text-5xl font-black text-emerald-950 mb-2">{stat.val}</div>
                                <p className="text-[12px] font-black text-slate-400 uppercase">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About & Education Section */}
            <section id="about" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute -right-20 top-20 opacity-[0.03] pointer-events-none transform rotate-12">
                    <img src="/h2.png" alt="watermark" className="w-[600px]" />
                </div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch mb-20">
                        {/* Left Column - Bio & CTA */}
                        <div className="w-full lg:w-2/5 space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                            <div className="relative w-full">
                                <h2
                                    className="text-5xl font-black text-emerald-950 uppercase mb-8 flex flex-col lg:flex-row items-center lg:items-center gap-6 text-center lg:text-left">আমার পরিচয়</h2>

                                <p className="text-sm text-emerald-900/80 leading-relaxed text-center lg:text-justify">
                                    আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে বগুড়া-০৫ (শেরপুর-ধুনট) আসনে ইসলামী আন্দোলন বাংলাদেশ-এর আমীর, পীর সাহেব চরমোনাই মনোনীত সংসদ সদস্য পদপ্রার্থী জননেতা প্রভাষক মীর মাহমুদুর রহমান চুন্নু ।
                                    সংক্ষিপ্ত পরিচয়: বগুড়া জেলার শেরপুর উপজেলার ভবানীপুর ইউনিয়নের চন্ডিপুর গ্রামে সম্ভ্রান্ত মুসলিম পরিবারে জন্ম পিতাঃ মৃত মোঃ মোসলেম উদ্দিন মীর, মাতাঃ মৃত মাহেলা বেগম, আট ভাইবোনের মধ্যে কনিষ্ঠ শিক্ষাজীবন: SSC: ছোনকা দ্বিমুখী উচ্চ বিদ্যালয় HSC: শেরপুর সরকারি কলেজ উচ্চতর ডিগ্রি লাভঃ সরকারি আজিজুল হক বিশ্ববিদ্যালয় কলেজ। কলেজ জীবনে শেরপুর কলেজে ১৯৯৫ সালে বিএনপির ছাত্রদল কতৃক হামলার শিকার। এছাড়াও
                                    ফ্যাসিবাদী শাসনামলে অন্যায়, অত্যাচার, গুম ও খুনের বিরুদ্ধে কথা বলতে গিয়ে আওয়ামী সরকারের হাতে কারাবরণ ও নির্যাতনের শিকার ২০১৩ সালে । ২০২৪ সালের জুলাই গণঅভ্যুত্থানে ছাত্র-জনতার সাথে থেকে আন্দোলন সংগ্রাম করি ।
                                    পেশাজীবন: ছোনকা রহিমা নওশের আলী অনার্স কলেজের ম্যানেজমেন্ট বিভাগে প্রভাষক পদে কর্মরত।
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="/about">
                                    <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg h-11 px-6 font-semibold text-sm shadow-sm transition-all flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        বিস্তারিত প্রোফাইল
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Roles Grid */}
                        <div className="w-full lg:w-3/5">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { label: "সাংগঠনিক সম্পাদক", title: "জাতীয় শিক্ষক ফোরাম", sub: "রাজশাহী বিভাগ" },
                                    { label: "সহ-সভাপতি", title: "ইসলামী আন্দোলন বাংলাদেশ", sub: "বগুড়া জেলা শাখা" },
                                    { label: "চেয়ারম্যান", title: "বগুড়া ইন্টারন্যাশনাল সোর্সিং লিমিটেড", sub: "শেরপুর, বগুড়া" },
                                    { label: "সদস্য", title: "চেম্বার অব কমার্স", sub: "বগুড়া" },

                                ].map((role, i) => (
                                    <div key={i} className={`p-10 transition-all hover:-translate-y-2 rounded-2xl shadow-xl flex flex-col items-center text-center lg:items-start lg:text-left justify-between group h-full bg-white border border-emerald-100`}>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest mb-6 text-emerald-600">{role.label}</p>
                                            <h3 className="text-2xl font-black leading-tight mb-2 tracking-tighter text-emerald-950">{role.title}</h3>
                                            <p className="text-sm font-bold text-emerald-900/60">{role.sub}</p>
                                        </div>
                                        <div className="mt-10 h-1.5 w-12 mx-auto lg:mx-0 rounded-full bg-emerald-200 group-hover:bg-emerald-500 transition-all"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    {/* <div id="education" className="mb-32 scroll-mt-24">
                        <h2 className="text-4xl font-black text-emerald-950 uppercase mb-16 flex flex-col lg:flex-row items-center lg:items-center gap-6 text-center lg:text-left">
                            শিক্ষাগত যোগ্যতা
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative group overflow-hidden border border-emerald-50">
                                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                                <h3 className="text-2xl font-black uppercase mb-10 text-emerald-900 pb-4 text-center lg:text-left">সাধারণ শিক্ষা</h3>
                                <div className="space-y-10">
                                    <div className="relative pl-8 before:absolute before:left-0 lg:before:left-0 before:top-2 before:w-3 before:h-3 before:bg-emerald-700 before:rounded-full flex flex-col items-center lg:items-start text-center lg:text-left">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-emerald-800/40 mb-1">M.S.S (Masters)</h4>
                                        <p className="text-lg font-black text-emerald-950">রাষ্ট্রবিজ্ঞান</p>
                                    </div>
                                    <div className="relative pl-8 before:absolute before:left-0 lg:before:left-0 before:top-2 before:w-3 before:h-3 before:bg-emerald-700 before:rounded-full flex flex-col items-center lg:items-start text-center lg:text-left">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-emerald-800/40 mb-1">B.Com Honors</h4>
                                        <p className="text-lg font-black text-emerald-950">ব্যবস্থাপনা সম্মান (Hons)</p>
                                        <p className="text-xs font-bold text-emerald-900/60 mt-1">সরকারি আজিজুল হক কলেজ</p>
                                    </div>
                                    <div className="relative pl-8 before:absolute before:left-0 lg:before:left-0 before:top-2 before:w-3 before:h-3 before:bg-emerald-700 before:rounded-full flex flex-col items-center lg:items-start text-center lg:text-left">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-emerald-800/40 mb-1">B.S.S Honors</h4>
                                        <p className="text-lg font-black text-emerald-950">বি.এস.এস (অনার্স)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-12 bg-white text-emerald-950 relative overflow-hidden shadow-xl group rounded-2xl border border-emerald-100">
                                <div className="absolute inset-0 bg-emerald-50/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-9xl font-black text-emerald-100/20 absolute top-4 right-4 pointer-events-none uppercase hidden md:block">দ্বীন</div>
                                <h3 className="text-2xl font-black uppercase mb-10 text-emerald-700 pb-4 relative z-10 text-center lg:text-left border-b border-emerald-100">ধর্মীয় শিক্ষা</h3>
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {["হিফজ", "দাওরা ও ইফতা", "কামিল (হাদিস)", "ম্যানেজমেন্ট"].map((edu, i) => (
                                        <div key={i} className="p-6 bg-emerald-50/50 backdrop-blur-md rounded-xl flex flex-col items-center lg:items-start justify-end min-h-[120px] transition-all hover:bg-emerald-100 text-center lg:text-left border border-emerald-100">
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-2 text-emerald-600 opacity-60">যোগ্যতা</p>
                                            <p className="text-sm font-black leading-tight text-emerald-900">{edu}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            {/* Political Journey Section */}
            <section id="journey" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-24">
                <div className="absolute -left-20 top-20 opacity-[0.03] pointer-events-none transform rotate-12">
                    <img src="/h2.png" alt="watermark" className="w-[600px]" />
                </div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-5xl font-black text-emerald-950 uppercase tracking-tighter">রাজনৈতিক পথচলা</h2>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { year: "স্কুল", title: "ধর্মীয় সম্পাদক", loc: "ছোনকা দ্বিমুখী উচ্চ বিদ্যালয়", desc: "স্কুল জীবনে ছাত্র সংসদ নির্বাচনে অংশগ্রহণ ও ধর্মীয় সম্পাদক হিসেবে দায়িত্ব পালন।" },
                            { year: "কলেজ", title: "জিএস পদপ্রার্থী", loc: "শেরপুর সরকারি কলেজ", desc: "শেরপুর সরকারি কলেজে অধ্যয়নকালীন ছাত্র সংসদ নির্বাচনে জিএস প্রার্থী হিসেবে প্রতিদ্বন্দ্বিতা।" },
                            { year: "উচ্চ শিক্ষা", title: "ছাত্র সংসদ নির্বাচন", loc: "সরকারি আজিজুল হক কলেজ", desc: "বাণিজ্য বিভাগে শ্রেণি প্রতিনিধি" },
                            { year: "সালঃ ২০১৪", title: "উপজেলা পরিষদ নির্বাচন", loc: "শেরপুর উপজেলা", desc: "শেরপুর উপজেলা পরিষদ নির্বাচনে অংশগ্রহণ।" },
                            { year: "সালঃ ২০১৮", title: "এমপি পদপ্রার্থী", loc: "বগুড়া-০৫ (শেরপুর-ধুনট)", desc: "জাতীয় সংসদ নির্বাচনে ইসলামী আন্দোলন বাংলাদেশ মনোনীত প্রার্থী হিসেবে অংশগ্রহণ।" },
                            { year: "২০২৬", title: "এমপি পদপ্রার্থী", loc: "বগুড়া-০৫ (হাতপাখা)", desc: "পীর সাহেব চরমোনাই মনোনীত সংসদ সদস্য পদপ্রার্থী হিসেবে লড়াইয়ে প্রস্তুত।" },
                        ].map((p, i) => (
                            <div key={i} className="relative p-10 bg-white shadow-lg rounded-2xl group transition-all hover:-translate-y-2 flex flex-col items-center text-center border border-emerald-50">
                                <div className="text-7xl font-black text-emerald-100/40 absolute top-2 right-2">০{i + 1}</div>
                                <p className="text-[10px] font-black text-emerald-700 uppercase  mb-6 relative z-10">{p.year}</p>
                                <h4 className="text-xl font-black text-emerald-950 mb-2 relative z-10">{p.title}</h4>
                                <p className="text-xs font-extrabold text-emerald-800/60 mb-4 relative z-10">{p.loc}</p>
                                <p className="text-xs font-bold text-emerald-900/70 leading-relaxed relative z-10">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Work Section */}
            <section className="py-24 bg-emerald-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
                    <img src="/h1.png" alt="watermark" className="w-[1000px]" />
                </div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-5xl font-black text-white uppercase tracking-tighter">সমাজসেবা ও জনকল্যাণ</h2>

                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "বয়স্কদের কোরআন শিক্ষা", icon: <BookOpen className="h-8 w-8" /> },
                            { title: "স্বেচ্ছায় রক্তদান", icon: <Heart className="h-8 w-8" /> },
                            { title: "ফ্রি কম্পিউটার ট্রেনিং", icon: <Briefcase className="h-8 w-8" /> },
                            { title: "ত্রাণ সামগ্রী বিতরণ", icon: <Users className="h-8 w-8" /> },
                            { title: "শীতবস্ত্র বিতরণ", icon: <History className="h-8 w-8" /> },
                            { title: "বৃক্ষ রোপন ও বিতরণ", icon: <Globe className="h-8 w-8" /> },
                            { title: "গরিব দুঃখী মানুষের সেবা", icon: <Heart className="h-8 w-8" /> },
                            { title: "সামাজিক উন্নয়ন", icon: <Users className="h-8 w-8" /> },
                        ].map((s, i) => (
                            <div key={i} className="p-10 bg-white border border-emerald-100 rounded-2xl transition-all group relative overflow-hidden text-center flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1">
                                <div className="text-emerald-600 mb-6 font-black transition-colors">{s.icon}</div>
                                <h4 className="font-black text-xs md:text-sm uppercase tracking-widest text-emerald-900 transition-colors uppercase">{s.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strong Call to Action */}
            <section className="py-24 bg-emerald-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <div className="mb-10 inline-block p-8 rounded-3xl">
                        <img src="/h3.png" alt="Campaign Logo" className="h-36 w-auto object-contain" />
                    </div>
                    <p className="text-xl text-white mb-12 font-bold ">"ইসলাম, দেশ ও মানবতার কল্যাণে <br /> সাম্য,  মানবিক মর্যাদা ও সামাজিক ন্যায় বিচার প্রতিষ্ঠায়"</p>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                        আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে হাতপাখা মার্কায় <br />
                        আপনার মূল্যবান ভোট দিন
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Button asChild className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 h-11 rounded-lg text-sm font-semibold shadow-sm transition-all">
                            <a href="https://wa.me/8801718329508" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                সরাসরি যোগাযোগ
                            </a>
                        </Button>
                        <div className="flex gap-4">
                            <Button variant="outline" className="border-white/40  transition-all rounded-lg h-11 w-11 p-0">
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="border-white/40  transition-all rounded-lg h-11 w-11 p-0">
                                <Twitter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-emerald-950 text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <h3 className="text-xl  uppercase">মীর মাহমুদুর রহমান</h3>
                            </div>
                            <p className="text-sm  leading-relaxed uppercase">
                                বগুড়া-০৫ (শেরপুর-ধুনট) সংসদীয় আসন। <br />
                                ইসলামী আন্দোলন বাংলাদেশ।
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-sm  uppercase  text-emerald-400">লিংক সমূহ</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {['হোম', 'পরিচিতি', 'শিক্ষাগত যোগ্যতা', 'রাজনৈতিক সফর', 'সমাজসেবা', 'যোগাযোগ'].map((link) => (
                                    <a key={link} href="#" className="text-sm  uppercase text-white hover:text-white transition-colors">
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-sm  uppercase text-emerald-400">অফিস ঠিকানা</h4>
                            <p className="text-sm  text-white leading-loose">
                                ওয়াল্টন প্লাজা ৩য় তলা, বাসস্ট্যান্ড শেরপুর, বগুড়া<br />
                                ইমেইল: meermahmud.contact@gmail.com <br />
                                ফোন: ০১৭১৮৩২৯৫০৮
                            </p>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100/20">© ২০২৬ প্রভাষক মীর মাহমুদুর রহমান। সর্বস্বত্ব সংরক্ষিত।</p>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100/20">
                            <span>ডিজাইন ও ডেভেলপমেন্ট:</span>
                            <span className="text-emerald-400">Meer Tahmid</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
