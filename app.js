
const views = {
    login: `<!-- TopAppBar Section -->
<header class="fixed top-0 left-0 right-0 z-50 bg-[#F8F9F8] border-b border-[#8B5E3C]/15 shadow-sm flex justify-between items-center w-full px-4 h-16">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#2D5A27]" data-icon="cloud_sync">cloud_sync</span>
<h1 class="font-['Work_Sans'] font-bold text-xl tracking-tight text-[#2D5A27]">SWIF Intelligence</h1>
</div>
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
<span class="material-symbols-outlined text-outline" data-icon="person">person</span>
</div>
</header>
<!-- Main Content Canvas -->
<main class="flex-grow pt-16 flex flex-col">
<!-- Hero Section with Tactical Background -->
<section class="relative w-full h-[353px] min-h-[300px] flex items-end overflow-hidden">
<div class="absolute inset-0 z-0">
<img alt="Agricultural Landscape" class="w-full h-full object-cover" data-alt="expansive sunlit green farmland field with rolling hills and a clear blue sky at dawn reflecting professional agriculture technology mood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVB2kMuO3NFZ7x71yfDghYuolnBo1Wf8PqFbtPKqD0reK04dbOh1suWvedSK7bHOgGxbv5QihldN-mjbk3FJDwpalENMMED-XVClPVgiJkmigEu0wxQIGbuzH3DolGXbc1aWlV3gWjVrTQN5fUAQtTNdgwHa16nn0VbUE_q43jOEkNSmUvjn3s9Pmdydkor0jt5DCIuxOl6n1JofWpdRzRO4UkJuxhdAQ6q8E3waXRc6glHwYw4RYAGucOF2h77iX2DMp8BDOekq0"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
</div>
<div class="relative z-10 px-margin pb-lg w-full">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/30 backdrop-blur-sm border border-secondary-container/20 mb-4">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="auto_awesome">auto_awesome</span>
<span class="font-label-bold text-secondary text-[12px] uppercase tracking-wider">AI Powered Farming</span>
</div>
<h2 class="font-headline-lg text-primary mb-2">Welcome to SWIF</h2>
<p class="font-body-md text-on-surface-variant max-w-[280px]">Enter your phone number to get started with field insights.</p>
</div>
</section>
<!-- Login Form Section -->
<section class="px-margin -mt-4 relative z-20 flex-grow">
<div class="bg-surface-container-lowest rounded-lg p-lg shadow-sm border border-[#8B5E3C]/15 flex flex-col gap-6">
<!-- Input Group -->
<div class="space-y-4">
<label class="font-label-bold text-tertiary block ml-1">Phone Number</label>
<div class="flex gap-2">
<!-- Country Code Dropdown -->
<div class="relative flex items-center justify-between px-3 py-4 bg-surface rounded-lg border-2 border-outline-variant w-28 focus-within:border-primary-container transition-colors">
<span class="font-body-md font-bold text-on-surface">+1</span>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
<!-- Number Input -->
<div class="flex-grow">
<input class="w-full px-4 py-4 bg-surface rounded-lg border-2 border-outline-variant font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
</div>
<!-- Primary Action -->
<button class="w-full bg-primary-container hover:opacity-90 active:scale-[0.98] transition-all py-4 rounded-lg flex items-center justify-center gap-3">
<span class="font-label-bold text-on-primary-fixed uppercase tracking-widest">Send OTP</span>
<span class="material-symbols-outlined text-on-primary-fixed" data-icon="arrow_forward">arrow_forward</span>
</button>
<!-- Divider -->
<div class="flex items-center gap-4 py-2">
<div class="h-[1px] flex-grow bg-outline-variant/50"></div>
<span class="font-caption text-outline">OR LOGIN WITH</span>
<div class="h-[1px] flex-grow bg-outline-variant/50"></div>
</div>
<!-- Secondary Options -->
<div class="grid grid-cols-2 gap-4">
<button class="flex items-center justify-center gap-2 py-3 rounded-lg border border-outline-variant hover:bg-surface transition-colors">
<span class="material-symbols-outlined text-tertiary" data-icon="google">google</span>
<span class="font-label-md">Google</span>
</button>
<button class="flex items-center justify-center gap-2 py-3 rounded-lg border border-outline-variant hover:bg-surface transition-colors">
<span class="material-symbols-outlined text-tertiary" data-icon="mail">mail</span>
<span class="font-label-md">Email</span>
</button>
</div>
</div>
<!-- AI Insight Toast (Agri-Specific) -->
<div class="mt-8 p-4 bg-secondary-fixed/10 border border-secondary-container/20 rounded-lg flex items-start gap-4">
<div class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-secondary" data-icon="lightbulb">lightbulb</span>
</div>
<div>
<h4 class="font-label-bold text-secondary">Pro Tip</h4>
<p class="font-caption text-on-secondary-container mt-1">Linking your phone number allows for real-time frost alerts and soil moisture notifications directly via SMS.</p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="p-margin text-center">
<p class="font-caption text-outline max-w-[240px] mx-auto leading-relaxed">
            By continuing, you agree to our <br/>
<a class="text-secondary font-bold hover:underline" href="#">Terms of Service</a> and 
            <a class="text-secondary font-bold hover:underline" href="#">Privacy Policy</a>
</p>
<div class="mt-6 font-caption text-outline-variant">
            v2.4.0 Intelligence Suite
        </div>
</footer>`,
    communication: `<!-- Premium AI Voice Assistant Hero -->
<section class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-container to-[#154212] p-8 md:p-12 shadow-xl ai-glow">
<div class="absolute top-0 right-0 p-8 opacity-10">
<span class="material-symbols-outlined text-[120px]" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
</div>
<div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div class="space-y-4 max-w-2xl">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-primary-container opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-on-primary-container"></span>
</span>
<span class="text-white text-caption font-caption tracking-wider uppercase">Live AI Active</span>
</div>
<h1 class="font-headline-xl text-headline-xl text-white">How can I help with your harvest today?</h1>
<p class="text-on-primary-container text-body-lg font-body-lg opacity-90">SWIF Intelligence is monitoring 12 active sensors across the North Field.</p>
</div>
<button class="flex items-center justify-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-label-bold text-label-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">mic</span>
                    Talk to AI Assistant
                </button>
</div>
</section>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Smart Control Panel & Selection -->
<div class="lg:col-span-8 space-y-8">
<div>
<h2 class="font-headline-md text-headline-md mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">settings_suggest</span>
                        Smart Control Panel
                    </h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- SMS Card -->
<div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div class="flex justify-between items-start mb-4">
<div class="p-3 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg">
<span class="material-symbols-outlined">sms</span>
</div>
<span class="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase">AI Recommended</span>
</div>
<h3 class="font-headline-md text-body-lg mb-2">SMS Alerts</h3>
<p class="text-on-surface-variant text-caption font-caption mb-6">Recommended for critical weather alerts</p>
</div>
<div class="flex items-center justify-between">
<span class="text-label-md font-label-md text-outline">Enable</span>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
<!-- WhatsApp Card -->
<div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div class="flex justify-between items-start mb-4">
<div class="p-3 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg">
<span class="material-symbols-outlined">chat</span>
</div>
<span class="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase">AI Recommended</span>
</div>
<h3 class="font-headline-md text-body-lg mb-2">WhatsApp</h3>
<p class="text-on-surface-variant text-caption font-caption mb-6">Best for detailed visual reports</p>
</div>
<div class="flex items-center justify-between">
<span class="text-label-md font-label-md text-outline">Enable</span>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
<!-- Voice Card -->
<div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div class="flex justify-between items-start mb-4">
<div class="p-3 bg-surface-container-high text-on-surface-variant rounded-lg">
<span class="material-symbols-outlined">call</span>
</div>
</div>
<h3 class="font-headline-md text-body-lg mb-2">Voice Call</h3>
<p class="text-on-surface-variant text-caption font-caption mb-6">Only for critical emergencies</p>
</div>
<div class="flex items-center justify-between">
<span class="text-label-md font-label-md text-outline">Disable</span>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</div>
<!-- Recent Alerts -->
<div>
<h2 class="font-headline-md text-headline-md mb-6">Recent Alerts</h2>
<div class="space-y-4">
<!-- High Risk Alert -->
<div class="bg-white rounded-xl shadow-sm border-l-4 border-error p-5 flex items-center gap-6 hover:translate-x-1 transition-transform">
<div class="flex-shrink-0 text-error">
<span class="material-symbols-outlined text-[32px]">warning</span>
</div>
<div class="flex-grow">
<div class="flex items-center gap-3 mb-1">
<span class="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-bold rounded uppercase">High Risk</span>
<span class="text-caption font-caption text-outline">12:45 PM • Today</span>
</div>
<h4 class="font-label-bold text-label-md text-on-surface">Frost Warning: North Ridge</h4>
<p class="text-body-md font-body-md text-on-surface-variant">Temperatures expected to drop to -2°C between 02:00 and 05:00.</p>
</div>
<div class="flex flex-col items-end gap-2">
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-caption font-caption rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-sm">done_all</span>
                                    via SMS
                                </span>
</div>
</div>
<!-- Info Alert -->
<div class="bg-white rounded-xl shadow-sm border-l-4 border-secondary p-5 flex items-center gap-6 hover:translate-x-1 transition-transform">
<div class="flex-shrink-0 text-secondary">
<span class="material-symbols-outlined text-[32px]">water_drop</span>
</div>
<div class="flex-grow">
<div class="flex items-center gap-3 mb-1">
<span class="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase">Info</span>
<span class="text-caption font-caption text-outline">09:15 AM • Today</span>
</div>
<h4 class="font-label-bold text-label-md text-on-surface">Irrigation Complete</h4>
<p class="text-body-md font-body-md text-on-surface-variant">Zone 4 saturation achieved. 450 gallons delivered.</p>
</div>
<div class="flex flex-col items-end gap-2">
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-caption font-caption rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-sm">done_all</span>
                                    via App
                                </span>
</div>
</div>
<!-- System Alert -->
<div class="bg-white rounded-xl shadow-sm border-l-4 border-outline p-5 flex items-center gap-6 hover:translate-x-1 transition-transform">
<div class="flex-shrink-0 text-outline">
<span class="material-symbols-outlined text-[32px]">system_update</span>
</div>
<div class="flex-grow">
<div class="flex items-center gap-3 mb-1">
<span class="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded uppercase">System</span>
<span class="text-caption font-caption text-outline">Yesterday</span>
</div>
<h4 class="font-label-bold text-label-md text-on-surface">System Update: v2.4.1</h4>
<p class="text-body-md font-body-md text-on-surface-variant">AI Hub updated with new pest recognition models.</p>
</div>
<div class="flex flex-col items-end gap-2">
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-caption font-caption rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-sm">done_all</span>
                                    Internal
                                </span>
</div>
</div>
</div>
</div>
</div>
<!-- Side Sidebar: AI Insights & Regional Settings -->
<div class="lg:col-span-4 space-y-8">
<!-- AI Suggestion Card -->
<div class="bg-secondary-fixed/30 border border-secondary/20 p-6 rounded-2xl relative overflow-hidden ai-glow">
<div class="absolute top-0 right-0 p-4 opacity-10">
<span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
</div>
<div class="flex items-center gap-3 mb-4">
<div class="p-2 bg-white rounded-lg shadow-sm">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">colors_spark</span>
</div>
<h3 class="font-label-bold text-label-md text-on-secondary-container">AI Insight</h3>
</div>
<p class="text-on-secondary-fixed-variant text-body-md font-body-md leading-relaxed mb-6">
                        "I've noticed your alert frequency for irrigation is higher than usual. Based on the 7-day forecast, I suggest switching to <span class="font-bold">Eco-Mode</span> to save 12% on water consumption."
                    </p>
<button class="w-full py-3 bg-secondary text-white rounded-xl font-label-bold text-label-md hover:bg-on-secondary-fixed-variant transition-colors">
                        Apply Eco-Mode
                    </button>
</div>
<!-- Voice Language Selection -->
<div class="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
<h3 class="font-label-bold text-label-md mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">language</span>
                        Voice Language
                    </h3>
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant hover:border-primary cursor-pointer transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="Close up of a stylized globe with golden light highlighting continents and soft focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyYavoM1X3luiHiQ-KSRzkB0uMfplMtWXYpYXaVLDgcbukNl0uH8WTmY509jXdl5fOIDLHuk58IQ3osNSCyNExPaPKrrPGqwMkxSNqHTGoY1IYRVoa_cgmJHF5rTdl4wMilFoW30Hz11QpPdBkPhfZTIIzyKMN-o5_EKq-dbuv5Xj8QuyXP1X6AL-IjTieHu26FVo6EZOy9XtAcGjNLCl3ENzFF32uQwMHel5QiHq10BNQwmr_9JOVCpnclciPcr_uWEElgqKBsdo"/>
</div>
<div>
<p class="font-label-bold text-label-md text-on-surface">English (UK)</p>
<p class="text-caption font-caption text-on-primary-container font-medium">Recommended for your region</p>
</div>
</div>
<span class="material-symbols-outlined text-outline">expand_more</span>
</div>
</div>
<!-- Active Map Context -->
<div class="bg-white p-2 rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
<div class="relative h-48 w-full rounded-xl overflow-hidden">
<img class="w-full h-full object-cover grayscale-[0.2]" data-alt="High angle view of geometric green farm fields separated by dirt roads under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMMuaPDr0gKKjU8hGshlJ4d3DWXUhAW_PyxsiDxm9DmPF0GYmQ1tEsZPC5xaOo42Q-NUkIFKT8Wp7aTuqkO75Mf7Kxw1Y8UtHP4v8q9u1sbjNCzBhWUvSJkdVQCU5bb-Ah_RBA28YgffD7-Ehac1VMYhyQHE1xaU-uzHlZTpMA-h-DxArHlRONLD71MOlzLy5K17JjOPQwCSM_TpmvYn-meL8sm6CB2y843miTntRVJzcmfWlCRRCqNpXa84ovk-AH3xuQdlJZpQ"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div class="absolute bottom-4 left-4 text-white">
<p class="text-caption font-bold uppercase tracking-widest opacity-80">Primary Sector</p>
<p class="font-headline-md text-body-lg">Hertfordshire Hub</p>
</div>
</div>
</div>
</div>
</div>`,
    'crop-doctor': `<div class="max-w-5xl mx-auto">
<!-- Result Header -->
<div class="mb-8">
<h2 class="font-headline-lg text-primary mb-2">Crop Doctor Analysis</h2>
<p class="text-body-md text-on-surface-variant">Real-time AI diagnosis based on field imagery from Sector 4G (Tomato Crop).</p>
</div>
<!-- Bento Grid Results -->
<div class="grid grid-cols-12 gap-6 mb-8">
<!-- Diagnosis Primary Card -->
<div class="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-md p-lg border border-outline-variant/15">
<div class="flex items-start justify-between mb-6">
<div class="flex items-center gap-4">
<div class="p-3 bg-tertiary-fixed rounded-lg text-tertiary">
<span class="material-symbols-outlined text-3xl" data-icon="coronavirus">coronavirus</span>
</div>
<div>
<p class="text-caption text-on-surface-variant uppercase tracking-wider font-bold">Disease Identified</p>
<h3 class="font-headline-md text-on-surface">Early Blight</h3>
</div>
</div>
<div class="flex flex-col items-end">
<span class="bg-tertiary-fixed-dim text-tertiary px-4 py-1 rounded-full font-label-bold">Severity: Medium</span>
<p class="text-caption text-on-surface-variant mt-1 italic">Action recommended within 48h</p>
</div>
</div>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
<p class="text-caption text-on-surface-variant mb-1">AI Confidence Score</p>
<div class="flex items-end gap-2">
<span class="text-3xl font-headline-md text-primary">94%</span>
<div class="w-full bg-surface-container h-2 rounded-full mb-2">
<div class="bg-primary h-2 rounded-full" style="width: 94%"></div>
</div>
</div>
</div>
<div class="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
<p class="text-caption text-on-surface-variant mb-1">Affected Area Est.</p>
<div class="flex items-end gap-2">
<span class="text-3xl font-headline-md text-secondary">12%</span>
<p class="text-caption mb-1.5 text-on-surface-variant">of Sector 4G</p>
</div>
</div>
</div>
<div class="space-y-4">
<h4 class="font-label-bold flex items-center gap-2 text-on-surface">
<span class="material-symbols-outlined text-primary" data-icon="info">info</span>
                            About Early Blight (Alternaria solani)
                        </h4>
<p class="text-body-md text-on-surface-variant leading-relaxed">
                            Early blight is a common fungal disease that affects tomato foliage, stems, and fruit. It typically appears as dark spots with concentric rings (target-like appearance) on older leaves. If left untreated, it can lead to significant defoliation and reduced crop yield.
                        </p>
</div>
</div>
<!-- Analysis Preview Card -->
<div class="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-md overflow-hidden border border-outline-variant/15 flex flex-col">
<div class="h-56 relative">
<img class="w-full h-full object-cover" data-alt="close up of a tomato plant leaf with small brown spots showing signs of fungal infection and early blight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_1YHfuHDtXK7XI6PpOwCRO7UUdDGDKy0cy24Dw0_Lnn6KxfwuONE0HNrOYKA66_yVvH8Mf9v4ZS9mWmZjwCHDSR1E4yBn_AJ683urloerb8Iargka2paCE8YpGWMQHCbNhwLRZi-xvFVu_Wg_w5AOuqOo6vgejaFzjgKvQFcrEHLG2tVt5xLX9PDy7-JfxLTmcb0RgPuOWAomSbevCzfi228YOvQ5x8mWgpFBuFFxXDIpGtSihWkADAafYnit2o0nqmoxXaUv8p8"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div class="absolute bottom-4 left-4 text-white">
<p class="text-caption font-bold">Analysis Sample #8821</p>
<p class="text-[10px] opacity-80">Captured 14 mins ago</p>
</div>
</div>
<div class="p-6 flex-1 flex flex-col justify-between">
<div class="space-y-3">
<div class="flex justify-between items-center py-2 border-b border-outline-variant/20">
<span class="text-sm text-on-surface-variant">Environmental Risk</span>
<span class="text-sm font-bold text-error">High Humidity</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-outline-variant/20">
<span class="text-sm text-on-surface-variant">Spread Potential</span>
<span class="text-sm font-bold text-tertiary">Moderate</span>
</div>
</div>
<div class="mt-6 flex flex-col gap-2">
<button class="w-full py-3 bg-primary text-white rounded-lg font-label-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="analytics">analytics</span>
                                View Detailed Treatment
                            </button>
<button class="w-full py-3 border border-secondary text-secondary rounded-lg font-label-bold hover:bg-secondary-fixed/30 transition-all">
                                Save Report
                            </button>
</div>
</div>
</div>
<!-- AI Recommended Treatment -->
<div class="col-span-12 bg-white rounded-xl shadow-md p-lg border-l-8 border-l-secondary-container relative overflow-hidden">
<div class="absolute top-0 right-0 p-8 opacity-5">
<span class="material-symbols-outlined text-9xl" data-icon="bolt">bolt</span>
</div>
<div class="flex items-center gap-2 mb-6">
<div class="bg-secondary-container/20 p-2 rounded-lg text-secondary">
<span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</div>
<h3 class="font-headline-md text-on-surface">AI Recommended Treatment Plan</h3>
</div>
<div class="grid md:grid-cols-3 gap-6">
<div class="flex gap-4">
<div class="h-10 w-10 shrink-0 bg-surface-container rounded-full flex items-center justify-center font-bold text-primary">1</div>
<div>
<h5 class="font-label-bold text-on-surface mb-1">Prune Infected Foliage</h5>
<p class="text-caption text-on-surface-variant">Remove lower leaves that show spotting to prevent ground-level fungal splash.</p>
</div>
</div>
<div class="flex gap-4">
<div class="h-10 w-10 shrink-0 bg-surface-container rounded-full flex items-center justify-center font-bold text-primary">2</div>
<div>
<h5 class="font-label-bold text-on-surface mb-1">Apply Copper Fungicide</h5>
<p class="text-caption text-on-surface-variant">Use an organic copper-based spray every 7-10 days until symptoms subside.</p>
</div>
</div>
<div class="flex gap-4">
<div class="h-10 w-10 shrink-0 bg-surface-container rounded-full flex items-center justify-center font-bold text-primary">3</div>
<div>
<h5 class="font-label-bold text-on-surface mb-1">Adjust Irrigation Time</h5>
<p class="text-caption text-on-surface-variant">Switch to early morning watering to allow foliage to dry before nightfall.</p>
</div>
</div>
</div>
</div>
<!-- Scan History -->
<div class="col-span-12">
<h4 class="font-label-bold text-on-surface-variant mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="history">history</span>
                        Recent Scan History - Sector 4G
                    </h4>
<div class="bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden">
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-high/50 text-on-surface-variant font-label-md">
<tr>
<th class="px-6 py-3 border-b border-outline-variant/20">Date</th>
<th class="px-6 py-3 border-b border-outline-variant/20">Condition</th>
<th class="px-6 py-3 border-b border-outline-variant/20">Confidence</th>
<th class="px-6 py-3 border-b border-outline-variant/20">Severity</th>
<th class="px-6 py-3 border-b border-outline-variant/20 text-right">Action</th>
</tr>
</thead>
<tbody class="text-sm">
<tr class="hover:bg-white/50 transition-colors">
<td class="px-6 py-4 text-on-surface-variant">Oct 12, 2023</td>
<td class="px-6 py-4 font-medium">Healthy</td>
<td class="px-6 py-4">98%</td>
<td class="px-6 py-4"><span class="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold">NONE</span></td>
<td class="px-6 py-4 text-right"><button class="text-secondary font-medium">View</button></td>
</tr>
<tr class="hover:bg-white/50 transition-colors">
<td class="px-6 py-4 text-on-surface-variant">Oct 05, 2023</td>
<td class="px-6 py-4 font-medium">Nutrient Deficiency (N)</td>
<td class="px-6 py-4">89%</td>
<td class="px-6 py-4"><span class="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold">LOW</span></td>
<td class="px-6 py-4 text-right"><button class="text-secondary font-medium">View</button></td>
</tr>
<tr class="hover:bg-white/50 transition-colors border-t border-outline-variant/10">
<td class="px-6 py-4 text-on-surface-variant">Sep 28, 2023</td>
<td class="px-6 py-4 font-medium">Healthy</td>
<td class="px-6 py-4">99%</td>
<td class="px-6 py-4"><span class="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold">NONE</span></td>
<td class="px-6 py-4 text-right"><button class="text-secondary font-medium">View</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>`,
    irrigation: `<!-- Row 1: Soil Moisture & System Status -->
<div class="grid grid-cols-12 gap-8">
<!-- Soil Moisture Card -->
<section class="col-span-8 bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(45,90,39,0.06)] border border-[#8B5E3C]/10 relative">
<div class="flex justify-between items-start mb-8">
<div>
<h2 class="font-headline-lg text-on-surface font-bold">Soil Moisture</h2>
<p class="font-body-md text-on-surface-variant flex items-center gap-2">Central Pivot • Field A-12 <span class="text-primary font-bold ml-2 flex items-center"><span class="material-symbols-outlined text-[18px]" data-icon="trending_up">trending_up</span>+3% from yesterday</span></p>
</div>
<div class="bg-primary-container/10 text-primary-container px-4 py-1.5 rounded-full flex items-center gap-2">
<span class="material-symbols-outlined text-base" data-icon="sensors">sensors</span>
<span class="font-label-bold">Live Status</span>
</div>
</div>
<div class="flex flex-row items-center justify-around py-4">
<!-- Gauge Visualization -->
<div class="relative w-64 h-64 soil-gauge-glow">
<svg class="w-full h-full transform -rotate-90">
<circle class="text-surface-container-high" cx="128" cy="128" fill="transparent" r="105" stroke="currentColor" stroke-width="18"></circle>
<circle class="text-primary" cx="128" cy="128" fill="transparent" r="105" stroke="currentColor" stroke-dasharray="660" stroke-dashoffset="211" stroke-linecap="round" stroke-width="18"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-5xl text-primary font-black">68%</span>
<span class="font-label-bold text-primary/70 uppercase tracking-widest mt-1">Optimal</span>
</div>
</div>
<div class="space-y-8 min-w-[200px]">
<div class="flex items-center gap-6">
<div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined">thermostat</span>
</div>
<div>
<p class="font-caption text-on-surface-variant font-medium">Temperature</p>
<p class="text-2xl font-bold text-on-surface">24°C</p>
</div>
</div>
<div class="flex items-center gap-6">
<div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined">humidity_percentage</span>
</div>
<div>
<p class="font-caption text-on-surface-variant font-medium">Humidity</p>
<p class="text-2xl font-bold text-on-surface">42%</p>
</div>
</div>
</div>
</div>
<div class="mt-8 pt-6 border-t border-dashed border-outline-variant flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-2xl" data-icon="auto_awesome">auto_awesome</span>
<p class="text-on-surface font-medium italic text-lg">AI Insight: No irrigation needed for next 12 hours based on current saturation and predicted evaporation.</p>
</div>
</section>
<!-- System Status Summary -->
<section class="col-span-4 bg-surface-container-low rounded-xl p-6 border border-outline-variant/30 flex flex-col">
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-primary text-2xl" data-icon="dashboard_customize">dashboard_customize</span>
<h3 class="font-label-bold text-on-surface font-bold uppercase tracking-tight">System Status Summary</h3>
</div>
<div class="space-y-4 flex-1 flex flex-col justify-center">
<div class="bg-white p-4 rounded-xl border border-outline-variant/20 shadow-sm">
<p class="font-caption text-on-surface-variant uppercase font-bold mb-1">Overall Status</p>
<p class="text-2xl font-bold text-primary">Optimal</p>
</div>
<div class="bg-white p-4 rounded-xl border border-outline-variant/20 shadow-sm">
<p class="font-caption text-on-surface-variant uppercase font-bold mb-1">Next Action Window</p>
<p class="text-2xl font-bold text-on-surface">04:00 AM</p>
</div>
<div class="bg-white p-4 rounded-xl border border-outline-variant/20 shadow-sm">
<p class="font-caption text-on-surface-variant uppercase font-bold mb-1">Operating Efficiency</p>
<p class="text-2xl font-bold text-secondary">94%</p>
</div>
</div>
</section>
</div>
<!-- Row 2: AI Recommended & Pump/Valve Stack -->
<div class="grid grid-cols-12 gap-8">
<!-- AI Recommended Schedule -->
<section class="col-span-8 bg-white rounded-xl p-8 shadow-[0_12px_32px_-4px_rgba(0,99,153,0.12)] border-2 border-secondary/20 relative overflow-hidden">
<div class="absolute top-0 right-0 p-4 opacity-10">
<span class="material-symbols-outlined text-7xl" data-icon="auto_awesome">auto_awesome</span>
</div>
<div class="flex items-center justify-between mb-8">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary text-2xl" data-icon="bolt">bolt</span>
<h3 class="font-label-bold text-secondary font-bold uppercase tracking-wider">AI Recommended Schedule</h3>
</div>
<div class="flex gap-2">
<span class="bg-error/10 text-error text-xs font-bold px-3 py-1 rounded-full uppercase">Priority: High</span>
<span class="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">91% Confidence</span>
</div>
</div>
<div class="flex gap-8 items-start">
<div class="flex-1 bg-secondary-fixed/20 p-6 rounded-xl border border-secondary/10">
<div class="flex justify-between items-center mb-4">
<p class="text-xl text-on-surface font-extrabold">Next Window: <span class="text-secondary">Tonight</span></p>
<span class="bg-secondary-container/40 text-on-secondary-container px-3 py-1 rounded font-bold text-sm">Forecast: Clear</span>
</div>
<p class="text-on-surface-variant text-lg leading-relaxed mb-6">Pre-dawn pulse irrigation recommended (04:00 AM) to minimize evaporation. Expected soil depletion: -12% by 10 AM if skip.</p>
<div class="flex items-center gap-2 text-secondary font-bold">
<span class="material-symbols-outlined" data-icon="eco">eco</span>
<span>Saves 18% water compared to standard cycle</span>
</div>
</div>
<div class="w-64 pt-2">
<button class="w-full bg-primary text-on-primary font-label-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg">
<span class="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                                Approve &amp; Schedule
                            </button>
<button class="w-full mt-4 text-on-surface-variant font-label-bold py-3 hover:bg-surface-container rounded-lg transition-colors">
                                View Details
                            </button>
</div>
</div>
</section>
<!-- Pump & Valve Cards (Stacked) -->
<div class="col-span-4 flex flex-col gap-6">
<div class="flex-1 bg-white p-6 rounded-xl border border-[#8B5E3C]/10 shadow-sm flex items-center gap-4">
<div class="p-4 bg-primary/10 rounded-xl">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="water_pump">water_pump</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<p class="font-caption text-on-surface-variant font-bold uppercase tracking-tighter">Pump Alpha</p>
<div class="flex items-center gap-1.5">
<span class="text-[10px] text-green-600 font-bold uppercase">Active</span>
<div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
<p class="text-xl font-bold text-on-surface">Standby</p>
<p class="text-xs text-on-surface-variant mt-1">Pressure: 4.2 Bar • Last active 2h ago</p>
</div>
</div>
<div class="flex-1 bg-white p-6 rounded-xl border border-[#8B5E3C]/10 shadow-sm flex items-center gap-4">
<div class="p-4 bg-tertiary-fixed/30 rounded-xl">
<span class="material-symbols-outlined text-tertiary text-3xl" data-icon="settings_input_component">settings_input_component</span>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<p class="font-caption text-on-surface-variant font-bold uppercase tracking-tighter">Zone Valve B</p>
<div class="flex items-center gap-1.5">
<span class="text-[10px] text-orange-600 font-bold uppercase">Alert</span>
<div class="w-2 h-2 rounded-full bg-orange-400"></div>
</div>
</div>
<p class="text-xl font-bold text-on-surface">Maintenance</p>
<p class="text-xs text-error font-bold mt-1">Issue: Pressure drop detected</p>
</div>
</div>
</div>
</div>
<!-- Row 3: Upcoming Tasks -->
<section class="space-y-6 pb-12">
<div class="flex items-center justify-between">
<h3 class="font-headline-md text-on-surface font-bold flex items-center gap-3">
<span class="material-symbols-outlined text-3xl" data-icon="list_alt">list_alt</span>
                        Upcoming Maintenance &amp; Irrigation Tasks
                    </h3>
</div>
<div class="grid grid-cols-1 gap-4">
<!-- Task Card 1 -->
<div class="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex items-center gap-8">
<div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/5">
<span class="material-symbols-outlined text-3xl" data-icon="opacity">opacity</span>
</div>
<div class="flex-1">
<div class="flex items-center gap-3 mb-1">
<h4 class="text-lg font-bold text-on-surface">West Orchard Hydration Cycle</h4>
<span class="bg-error/10 text-error text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">High Priority</span>
</div>
<p class="text-on-surface-variant">Central Irrigation Block C • Duration: 45m • 1,200L Estimated Consumption</p>
</div>
<div class="text-right flex flex-col items-end gap-3">
<span class="font-label-bold text-primary bg-primary/5 px-4 py-1.5 rounded-lg">Today, 04:00 AM</span>
<div class="flex gap-3">
<button class="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-bold flex items-center gap-2 hover:opacity-95 transition-transform active:scale-95 shadow-md">
<span class="material-symbols-outlined text-sm" data-icon="play_arrow" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                                    Start Now
                                </button>
<button class="w-10 h-10 bg-surface-container-high text-on-surface rounded-lg flex items-center justify-center hover:bg-outline-variant transition-colors border border-outline-variant">
<span class="material-symbols-outlined">more_horiz</span>
</button>
</div>
</div>
</div>
<!-- Task Card 2 -->
<div class="bg-white p-6 rounded-xl border border-outline-variant/20 shadow-sm opacity-80 flex items-center gap-8">
<div class="w-16 h-16 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined text-3xl" data-icon="water_drop">water_drop</span>
</div>
<div class="flex-1">
<div class="flex items-center gap-3 mb-1">
<h4 class="text-lg font-bold text-on-surface">Corn Field Fertigation Feed</h4>
<span class="bg-on-surface-variant/10 text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Medium Priority</span>
</div>
<p class="text-on-surface-variant">Fertigation Mix A-Z • Targeted Root Feed • 2h Duration</p>
</div>
<div class="text-right">
<span class="text-lg font-bold text-on-surface-variant block mb-2">Tomorrow, 06:00 AM</span>
<button class="text-primary font-label-bold hover:underline">Edit Schedule</button>
</div>
</div>
</div>
</section>`,
    'soil-analysis': `<!-- TopNavBar (Shared Component) -->

<!-- Page Content -->
<div class="p-8 max-w-screen-2xl mx-auto space-y-8">
<!-- Hero Section: AI Insight & Field Health -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- AI Smart Insight Card -->
<div class="lg:col-span-2 bg-white rounded-xl p-lg card-shadow ai-glow border border-secondary-container/20 relative overflow-hidden">
<div class="absolute top-0 right-0 p-4">
<div class="flex gap-2">
<span class="px-3 py-1 bg-secondary-container/10 text-secondary text-caption rounded-full font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-xs" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
                                Priority: High
                            </span>
<span class="px-3 py-1 bg-primary/10 text-primary text-caption rounded-full font-bold">
                                Confidence: 92%
                            </span>
</div>
</div>
<div class="flex items-center gap-3 mb-4">
<div class="p-2 bg-secondary-container rounded-lg">
<span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">flare</span>
</div>
<h3 class="font-headline-md text-secondary">AI Smart Insight</h3>
</div>
<div class="space-y-4">
<p class="font-body-lg text-on-surface leading-relaxed max-w-2xl">
                            Apply <span class="font-bold text-secondary">Nitrogen-rich fertilizer</span> within 48 hours for optimal growth. Current levels are dipping below the 15% threshold for the vegetative stage.
                        </p>
<div class="flex items-center gap-2 text-primary font-label-bold">
<span class="material-symbols-outlined">trending_up</span>
                            Impact: High yield improvement predicted (+12%)
                        </div>
</div>
</div>
<!-- Field Health Summary Card -->
<div class="bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15">
<div class="flex justify-between items-start mb-6">
<h3 class="font-headline-md">Field Health</h3>
<span class="px-3 py-1 bg-amber-100 text-amber-800 text-caption rounded-full font-bold uppercase tracking-wide">Needs Attention</span>
</div>
<div class="space-y-6">
<div class="flex items-center gap-4">
<div class="h-12 w-12 rounded-full bg-error-container flex items-center justify-center text-error">
<span class="material-symbols-outlined">warning</span>
</div>
<div>
<p class="text-caption text-on-surface-variant">Key Issue</p>
<p class="font-label-bold text-error">Nitrogen deficiency</p>
</div>
</div>
<div class="flex items-center gap-4">
<div class="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<span class="material-symbols-outlined">water_drop</span>
</div>
<div>
<p class="text-caption text-on-surface-variant">Irrigation Status</p>
<p class="font-label-bold text-primary">Optimal</p>
</div>
</div>
</div>
<button class="w-full mt-8 py-3 outline outline-1 outline-secondary text-secondary rounded-lg font-label-bold hover:bg-secondary-container/10 transition-colors">
                        View Detailed Map
                    </button>
</div>
</div>
<!-- Main Data Grid -->
<div class="bento-grid">
<!-- Nutrient Overview Panel -->
<div class="col-span-12 lg:col-span-8 bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15">
<div class="flex justify-between items-center mb-8">
<h3 class="font-headline-md">Nutrient Overview</h3>
<button class="text-secondary font-label-bold flex items-center gap-1 hover:underline">
                            History <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Nitrogen -->
<div class="p-md bg-surface-container-low rounded-xl border border-error/10">
<div class="flex justify-between items-center mb-2">
<span class="font-headline-md text-error">N</span>
<span class="text-caption font-bold text-error">LOW</span>
</div>
<div class="h-2 w-full bg-zinc-200 rounded-full mb-4 overflow-hidden">
<div class="h-full bg-error rounded-full" style="width: 28%"></div>
</div>
<p class="text-caption text-on-surface-variant mb-2">Nitrogen Levels</p>
<p class="text-[12px] font-bold text-error leading-tight">Apply nitrogen-rich fertilizer within 48 hrs</p>
</div>
<!-- Phosphorus -->
<div class="p-md bg-surface-container-low rounded-xl border border-primary/10">
<div class="flex justify-between items-center mb-2">
<span class="font-headline-md text-primary">P</span>
<span class="text-caption font-bold text-primary">OPTIMAL</span>
</div>
<div class="h-2 w-full bg-zinc-200 rounded-full mb-4 overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 72%"></div>
</div>
<p class="text-caption text-on-surface-variant mb-2">Phosphorus Levels</p>
<p class="text-[12px] font-bold text-primary leading-tight">No action needed</p>
</div>
<!-- Potassium -->
<div class="p-md bg-surface-container-low rounded-xl border border-amber-500/10">
<div class="flex justify-between items-center mb-2">
<span class="font-headline-md text-amber-600">K</span>
<span class="text-caption font-bold text-amber-600">HIGH</span>
</div>
<div class="h-2 w-full bg-zinc-200 rounded-full mb-4 overflow-hidden">
<div class="h-full bg-amber-500 rounded-full" style="width: 88%"></div>
</div>
<p class="text-caption text-on-surface-variant mb-2">Potassium Levels</p>
<p class="text-[12px] font-bold text-amber-600 leading-tight">Reduce input next cycle</p>
</div>
</div>
</div>
<!-- Soil pH Section -->
<div class="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15 flex flex-col items-center justify-center text-center">
<h3 class="font-headline-md mb-6 w-full text-left">Soil pH</h3>
<div class="relative w-48 h-24 mb-6">
<!-- Simplified Gauge Design -->
<svg class="w-full h-full" viewbox="0 0 100 50">
<path d="M 10 45 A 35 35 0 0 1 90 45" fill="none" stroke="#e1e3e2" stroke-linecap="round" stroke-width="8"></path>
<path d="M 10 45 A 35 35 0 0 1 70 20" fill="none" stroke="#f4bb92" stroke-linecap="round" stroke-width="8"></path>
</svg>
<div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
<span class="text-4xl font-extrabold text-on-surface">6.5</span>
<span class="px-3 py-1 bg-tertiary-fixed text-tertiary text-[10px] rounded-full font-bold uppercase tracking-wider mt-1">Slightly Acidic</span>
</div>
</div>
<p class="text-body-md text-on-surface-variant">Suitable for most crops. No lime adjustment required this season.</p>
</div>
<!-- Moisture Content Graph -->
<div class="col-span-12 md:col-span-6 lg:col-span-7 bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15">
<div class="flex justify-between items-center mb-6">
<h3 class="font-headline-md">Last 7 Days Moisture Trend</h3>
<div class="flex items-center gap-4">
<div class="flex items-center gap-1">
<div class="w-3 h-3 bg-secondary rounded-full"></div>
<span class="text-caption">Actual</span>
</div>
<div class="flex items-center gap-1">
<div class="w-3 h-3 bg-primary-fixed-dim rounded-full"></div>
<span class="text-caption">Target Zone</span>
</div>
</div>
</div>
<div class="h-48 w-full relative">
<!-- High Fidelity CSS Chart Representation -->
<div class="absolute inset-0 bg-primary/5 rounded-lg border-y border-primary/10 top-10 bottom-20"></div> <!-- Optimal Range Band -->
<div class="absolute inset-0 flex items-end justify-between px-2 pt-4">
<div class="w-[10%] h-[40%] bg-secondary/20 relative group">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
<div class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-caption opacity-40">Mon</div>
</div>
<div class="w-[10%] h-[55%] bg-secondary/20 relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
<div class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-caption opacity-40">Tue</div>
</div>
<div class="w-[10%] h-[72%] bg-secondary/30 relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-lg z-10"></div>
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white px-2 py-1 rounded text-[10px] font-bold">72%</div>
<div class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-caption opacity-40">Wed</div>
</div>
<div class="w-[10%] h-[68%] bg-secondary/20 relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
<div class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-caption opacity-40">Thu</div>
</div>
<div class="w-[10%] h-[45%] bg-secondary/20 relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
<div class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-caption opacity-40">Fri</div>
</div>
<div class="w-[10%] h-[42%] bg-secondary/20 relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
<div class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-caption opacity-40">Sat</div>
</div>
<div class="w-[10%] h-[50%] bg-secondary/20 relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
<div class="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-caption opacity-40 font-bold">Today</div>
</div>
</div>
</div>
</div>
<!-- Soil Temperature Card -->
<div class="col-span-12 md:col-span-6 lg:col-span-5 bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15">
<div class="flex items-center gap-3 mb-8">
<div class="p-2 bg-primary-fixed rounded-lg text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">thermostat</span>
</div>
<h3 class="font-headline-md">Soil Temperature</h3>
</div>
<div class="flex items-baseline gap-4 mb-4">
<span class="text-5xl font-extrabold tracking-tight">18.4°C</span>
<div class="flex items-center text-primary font-label-bold text-lg">
<span class="material-symbols-outlined">trending_up</span>
                            +1.2°C
                        </div>
</div>
<div class="flex items-center gap-2">
<span class="px-3 py-1 bg-primary/10 text-primary text-caption rounded-full font-bold uppercase">Optimal</span>
<p class="text-caption text-on-surface-variant">Ideal for seed germination</p>
</div>
</div>
<!-- Visual Confirmation Card -->
<div class="col-span-12 bg-white rounded-xl overflow-hidden card-shadow border border-[#8B5E3C]/15 relative h-[320px]">
<img alt="Soil Visual Confirmation" class="w-full h-full object-cover" data-alt="Top-down close-up view of dark, rich moist soil with tiny green sprouts emerging in rows, soft natural morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzZI26EuOxnNfkEAWasMuxD3InIwJcAMxttQmpV-Ihvrp0xIoX114N4lcArPsylaCoHqrHUKvxbZn7yZItq4kGDm9S5stCWN4Bo5NkC0sKI2Ij0FDrmHxcUL5UGgQCgkotQ8rc0-3vNe_uMPtyOKvev0-LNUiuvoe4xXKk8fJsVzllfVvT-YTjeNXsWX0z5AufeVwFtEHqD2oY0mSdXIFh7bQhmHCvvIqmLI3L3mLE00PBQdXY-_30QAgDNyZBzuAyuXkDa6lLK_0"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
<div class="p-lg w-full flex flex-col md:flex-row justify-between items-end gap-4">
<div class="text-white">
<div class="flex items-center gap-2 mb-2">
<span class="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(35,80,30,1)]"></span>
<span class="font-label-bold text-lg uppercase tracking-wider">Status: Live</span>
</div>
<h4 class="font-headline-lg mb-1">Visual Soil Confirmation</h4>
<p class="font-body-md text-zinc-300">Remote Camera Feed: Sector N-12 • High Resolution Spectral Analysis</p>
</div>
<div class="bg-white/10 backdrop-blur-md rounded-xl p-md border border-white/20 text-white min-w-[200px]">
<div class="flex justify-between mb-2">
<span class="text-caption opacity-70">Last Updated</span>
<span class="text-caption font-bold">2h ago</span>
</div>
<div class="flex justify-between">
<span class="text-caption opacity-70">Sensor Node</span>
<span class="text-caption font-bold">SN-48291</span>
</div>
<button class="w-full mt-4 py-2 bg-white text-on-surface rounded-lg font-label-bold text-sm hover:bg-zinc-100 transition-colors">
                                    Refresh Feed
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>`,
    dashboard: `
        <div class="p-8 max-w-screen-2xl mx-auto space-y-8">
            <div class="flex justify-between items-center">
                <h2 class="font-headline-lg text-primary">Dashboard Overview</h2>
            </div>
            
            <div class="bento-grid">
                <!-- Weather Forecast Section -->
                <div class="col-span-12 lg:col-span-8 space-y-6">
                    <div class="bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15 ai-glow relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-4">
                            <span class="px-3 py-1 bg-secondary-container/10 text-secondary text-caption rounded-full font-bold flex items-center gap-1">
                                <span class="material-symbols-outlined text-xs" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
                                AI Weather Insight
                            </span>
                        </div>
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined text-4xl text-secondary" style="font-variation-settings: 'FILL' 1;">partly_cloudy_day</span>
                            </div>
                            <div>
                                <h3 class="font-headline-xl text-primary">24°C</h3>
                                <p class="font-body-md text-on-surface-variant">Partly Cloudy, 15% precipitation</p>
                            </div>
                        </div>
                        <p class="font-body-md text-on-surface leading-relaxed max-w-2xl">
                            Optimal conditions for spraying in the afternoon. Wind speeds are expected to drop below 10km/h after 2 PM.
                        </p>
                    </div>

                    <!-- 7 Day Forecast -->
                    <div class="bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15">
                        <h3 class="font-headline-md mb-6">7-Day Forecast</h3>
                        <div class="flex flex-wrap gap-4 justify-between">
                            ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => `
                                <div class="flex flex-col items-center bg-surface-container-low p-4 rounded-xl flex-1 min-w-[80px]">
                                    <span class="font-label-bold text-on-surface-variant mb-2">${day}</span>
                                    <span class="material-symbols-outlined text-secondary mb-2" style="font-variation-settings: 'FILL' 1;">${i % 3 === 0 ? 'rainy' : i % 2 === 0 ? 'sunny' : 'partly_cloudy_day'}</span>
                                    <span class="font-headline-md text-primary">${22 + (i % 4)}°</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Right Column: News & Ads -->
                <div class="col-span-12 lg:col-span-4 space-y-6">
                    <!-- Crop Doctor Summary -->
                    <div class="bg-white rounded-xl p-lg card-shadow border border-[#8B5E3C]/15">
                        <h3 class="font-headline-md mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-tertiary">bug_report</span>
                            Crop Doctor
                        </h3>
                        <div class="space-y-4">
                            <div class="border-b border-outline-variant pb-4">
                                <div class="flex items-start justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="p-2 bg-tertiary-fixed rounded-lg text-tertiary flex items-center justify-center">
                                            <span class="material-symbols-outlined">coronavirus</span>
                                        </div>
                                        <div>
                                            <p class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Sector 4G</p>
                                            <h4 class="font-label-bold text-on-surface mt-0.5">Early Blight</h4>
                                        </div>
                                    </div>
                                    <span class="bg-tertiary-fixed-dim text-tertiary px-2 py-0.5 rounded text-[10px] font-label-bold">Medium Risk</span>
                                </div>
                                <p class="text-caption text-on-surface-variant mt-3">AI Confidence: <span class="font-bold text-primary">94%</span></p>
                                <p class="text-caption text-on-surface-variant mt-1">Action recommended within 48h</p>
                            </div>
                        </div>
                        <button onclick="window.location.hash='crop-doctor'" class="w-full mt-4 py-2 bg-primary-container text-on-primary font-label-bold hover:opacity-90 transition-colors rounded-lg flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-sm">analytics</span>
                            Open Crop Doctor
                        </button>
                    </div>

                    <!-- Ads / Sponsored Content -->
                    <div class="bg-surface-container-low rounded-xl p-lg border border-outline-variant/50 relative overflow-hidden group cursor-pointer">
                        <div class="absolute top-2 right-2 text-[10px] uppercase text-outline bg-white px-2 py-1 rounded shadow-sm">Ad</div>
                        <h4 class="font-headline-md text-primary mb-2">Upgrade Your Tractor</h4>
                        <p class="font-body-md text-on-surface-variant mb-4">Discover the new John Deere 8R Series with advanced autonomous capabilities.</p>
                        <img src="https://images.unsplash.com/photo-1592982537447-6f296d0bb43c?auto=format&fit=crop&q=80&w=800" alt="Tractor Ad" class="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                    </div>
                </div>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app-root');
    const sidebar = document.getElementById('app-sidebar');
    const header = document.getElementById('app-header');
    const mainContainer = document.getElementById('main-container');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');

    function toggleMobileMenu(forceClose = false) {
        if (!sidebar || !mobileOverlay) return;
        
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (forceClose || !isClosed) {
            sidebar.classList.add('-translate-x-full');
            mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
        } else {
            sidebar.classList.remove('-translate-x-full');
            mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
    if (mobileOverlay) mobileOverlay.addEventListener('click', () => toggleMobileMenu(true));

    function render() {
        const hash = window.location.hash.substring(1) || 'login';
        
        if (views[hash]) {
            appRoot.innerHTML = views[hash];
        } else {
            appRoot.innerHTML = '<div class="p-8 text-center text-error font-headline-md">404 - Page Not Found</div>';
        }

        if (hash === 'login') {
            sidebar.classList.add('hidden-layout');
            header.classList.add('hidden-layout');
            mainContainer.classList.add('main-expanded');
            mainContainer.classList.remove('min-h-screen');
        } else {
            sidebar.classList.remove('hidden-layout');
            header.classList.remove('hidden-layout');
            mainContainer.classList.remove('main-expanded');
            mainContainer.classList.add('min-h-screen');
            window.scrollTo(0, 0);
        }

        navLinks.forEach(link => {
            const linkRoute = link.getAttribute('data-route');
            if (linkRoute === hash) {
                link.classList.add('bg-[#2D5A27]/5', 'text-[#2D5A27]', 'border-r-4', 'border-[#2D5A27]', 'font-bold');
                link.classList.remove('text-zinc-500');
            } else {
                link.classList.remove('bg-[#2D5A27]/5', 'text-[#2D5A27]', 'border-r-4', 'border-[#2D5A27]', 'font-bold');
                link.classList.add('text-zinc-500');
            }
        });
        
        // Close menu on navigation
        toggleMobileMenu(true);
        
        setupInternalLinks();
    }

    function setupInternalLinks() {
        const loginBtn = document.querySelector('button:has(span.text-on-primary-fixed)');
        if (loginBtn && (window.location.hash === '' || window.location.hash === '#login')) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.hash = 'dashboard';
            });
        }
    }

    window.addEventListener('hashchange', render);
    
    render();
});
