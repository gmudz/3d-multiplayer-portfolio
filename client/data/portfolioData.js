// Centralized Deep Bilingual Portfolio Data for Murad Ashkar (@gmudz)
// Fully localized in English ('en') and Arabic ('ar') with Dual-Aesthetic Branding (Vector SVGs vs Cyberpunk ASCII Art)

export const PORTFOLIO_DATA = {
  profile: {
    name: {
      en: 'Murad Ashkar',
      ar: 'مراد أشقر'
    },
    title: {
      en: 'Full-Stack Architect, Mobile Engineer & Systems Developer',
      ar: 'مهندس برمجيات شامل، مطور تطبيقات وأنظمة منخفضة المستوى'
    },
    tagline: {
      en: 'Founder & CEO of Laffeh & QTicket | Computer Engineer',
      ar: 'مؤسس ومدير منصتي لفة و QTicket | مهندس حاسوب'
    },
    location: {
      en: 'Istanbul, Türkiye',
      ar: 'إسطنبول، تركيا'
    },
    email: 'mmuradashkar@gmail.com',
    phone: '+90 534 779 77 29',
    github: 'https://github.com/gmudz',
    githubUsername: 'gmudz'
  },

  projects: [
    {
      id: 'qticket',
      slug: 'qticket',
      podIndex: 0,
      color: '#00f0ff',
      colorName: 'Cyber Cyan',
      position: { x: 0, y: 0.2, z: -52 }, // Financial District (QTicket Global HQ)
      brandType: 'svg',
      status: {
        en: 'Enterprise Production',
        ar: 'منظومة مؤسسية نشطة'
      },
      title: {
        en: 'QTicket',
        ar: 'كيو تيكت (QTicket)'
      },
      tagline: {
        en: 'Enterprise Multi-Tenant SaaS Ticketing & Reservation Platform',
        ar: 'منصة سحابية متكاملة متعددة المستأجرين لإدارة الحجوزات والتذاكر'
      },
      category: {
        en: 'Multi-Tenant SaaS / Enterprise Architecture',
        ar: 'برمجيات كخدمة (SaaS) / معمارية مؤسسية'
      },
      role: {
        en: 'Founder, Technical Lead & Full-Stack Architect',
        ar: 'المؤسس والقائد التقني ومعماري البرمجيات'
      },
      summary: {
        en: 'An enterprise-grade multi-tenant SaaS reservation and ticketing platform engineered from the ground up with Clean Architecture and ASP.NET Core. Features fine-grained tenant schema isolation, strict Role-Based Access Control (RBAC), multi-gateway payment reconciliation, immutable audit logging with cryptographic hashing, and an embedded proprietary AI assistant "Bawsala AI" designed to eliminate enterprise data leakage.',
        ar: 'منصة حجوزات وتذاكر سحابية متعددة المستأجرين (Multi-Tenant SaaS) صُممت وهُندست بالكامل من الصفر باستخدام معمارية Clean Architecture وتقنيات ASP.NET Core الحديثة. تتميز بعزل بيانات المستأجرين على مستوى قواعد البيانات، نظام أذونات وتحكم بالوصول صارم (RBAC)، تسويات مالية تلقائية متعددة البوابات، سجلات تدقيق غير قابلة للتعديل مشفرة رقمياً، ومساعد ذكاء اصطناعي داخلي "بوصلة AI" لمنع تسريب البيانات الحساسة.'
      },
      highlights: {
        en: [
          'Domain-Driven Design (DDD) & Clean Architecture utilizing ASP.NET Core and Supabase PostgreSQL',
          'Strict tenant isolation with dynamic connection tenancy resolution and zero-leak access policies',
          'High-precision financial refund pipelines with transactional idempotency and automated dispute management',
          'Proprietary "Bawsala AI" assistant acting as a secure semantic firewall against sensitive data exfiltration'
        ],
        ar: [
          'تصميم موجه بالمجال (DDD) ومعمارية Clean Architecture مع محرك ASP.NET Core وقاعدة Supabase',
          'عزل تام ومنهجي لبيانات كل مستأجر مع مفاتيح أمان ديناميكية وسياسات انعدام التسريب',
          'أتمتة شاملة لعمليات الإرجاع المالي وضمان موثوقية المعاملات وتتبع النزاعات لحظياً',
          'دمج مساعد الذكاء الاصطناعي "بوصلة AI" ليعمل كجدار ناري دلالي يمنع تسريب البيانات المؤسسية'
        ]
      },
      techStack: [
        { name: 'ASP.NET Core', color: '#512bd4' },
        { name: 'C#', color: '#239120' },
        { name: 'Supabase RLS', color: '#3ecf8e' },
        { name: 'Clean Architecture', color: '#00f0ff' },
        { name: 'Bawsala AI', color: '#ffaa00' },
        { name: 'RBAC / Security', color: '#ff3366' }
      ],
      metrics: {
        en: {
          tenancy: 'Zero Data Leak',
          architecture: 'Clean / DDD',
          uptime: '99.98% Cloud'
        },
        ar: {
          tenancy: 'عزل تام للبيانات',
          architecture: 'معمارية نظيفة / DDD',
          uptime: 'جاهزية سحابية 99.98%'
        }
      },
      links: {
        demo: 'https://qticket.net',
        github: 'https://github.com/gmudz/Qticket',
        caseStudy: 'https://qticket.net'
      },
      // Modern High-Fidelity Vector SVG Logo
      logoSvg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="qtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00f0ff"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
          <filter id="qtGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <rect x="14" y="24" width="92" height="72" rx="16" fill="#0b1329" stroke="url(#qtGrad)" stroke-width="3.5" filter="url(#qtGlow)"/>
        <path d="M14 60 C24 60 24 50 24 50 L24 70 C24 70 24 60 14 60" fill="#00f0ff"/>
        <path d="M106 60 C96 60 96 50 96 50 L96 70 C96 70 96 60 106 60" fill="#00f0ff"/>
        <circle cx="40" cy="46" r="6" fill="#00f0ff"/>
        <rect x="54" y="42" width="34" height="8" rx="4" fill="#38bdf8"/>
        <line x1="38" y1="62" x2="88" y2="62" stroke="#334155" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/>
        <path d="M42 76 L48 82 L64 68" stroke="#00ff88" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="82" cy="76" r="6" fill="#ffaa00"/>
      </svg>`,
      bannerGradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)'
    },
    {
      id: 'laffeh',
      slug: 'laffeh',
      podIndex: 1,
      color: '#ff6b35',
      colorName: 'Sunset Orange',
      position: { x: 52, y: 0.2, z: 0 }, // Logistics Hub (Laffeh Fulfillment Center)
      brandType: 'svg',
      status: {
        en: 'Commercial Live Ecosystem',
        ar: 'منظومة تجارية متكاملة'
      },
      title: {
        en: 'Laffeh Food Delivery Ecosystem',
        ar: 'منظومة لفة للتوصيل السريع (Laffeh)'
      },
      tagline: {
        en: 'End-to-End Real-Time Multi-App Food Delivery Network',
        ar: 'منظومة متكاملة لتوصيل الأطعمة متعددة التطبيقات في الوقت الفعلي'
      },
      category: {
        en: 'Mobile Ecosystem & Real-Time Sync',
        ar: 'تطبيقات الهاتف والأنظمة المتزامنة لحظياً'
      },
      role: {
        en: 'Founder CEO & Lead Mobile/Backend Engineer',
        ar: 'المؤسس، المدير التنفيذي ومطور التطبيقات والنظام الخلفي'
      },
      summary: {
        en: 'A commercial food delivery network operating across the Istanbul metropolitan area, powered by 4 custom-engineered Flutter applications: Customer Ordering App, Courier Telemetry & Navigation App, Restaurant Order Management Tablet Console, and Central Dispatch Operations Dashboard. Built with battery-conscious background GPS telemetry, sub-second WebSocket dispatch pipelines, and automated merchant settlements.',
        ar: 'شبكة تجارية متكاملة لطلب وتوصيل الوجبات تعمل في نطاق إسطنبول الكبرى، تعمل عبر 4 تطبيقات فلاتر متزامنة لحظياً: تطبيق العميل للطلب السلس، تطبيق السائق المزود بملاحة وتتبع GPS حي موفر للطاقة في الخلفية، لوحة تحكم المطاعم للأجهزة اللوحية، ولوحة الإدارة المركزية لتوزيع الطلبات عبر WebSockets مع تسويات مالية آلية.'
      },
      highlights: {
        en: [
          'Synchronized 4-tier mobile ecosystem (Customer, Courier, Restaurant, Admin) developed with Flutter/Dart',
          'Optimized background GPS courier telemetry utilizing Kalman filters for battery-efficient sub-second precision',
          'Resilient WebSocket event bus handling concurrent order surge without dropped state',
          'Automated cloud merchant settlement workflows integrated with payment gateways and thermal POS printing'
        ],
        ar: [
          'منظومة هاتفية رباعية متكاملة (العميل، السائق، المطعم، الإدارة) مطورة بالكامل عبر Flutter/Dart',
          'تتبع GPS فائق الدقة للسائقين في الخلفية مع خوارزميات ترشيح ذكية تحافظ على بطارية الهاتف',
          'ناقل أحداث WebSocket عالي الاعتمادية لمعالجة آلاف الطلبات المتزامنة في ساعات الذروة دون فقدان الاتصال',
          'أتمتة الحسابات والتسويات المالية للمطاعم والتكامل مع بوابات الدفع وطابعات الفواتير الحرارية'
        ]
      },
      techStack: [
        { name: 'Flutter', color: '#02569b' },
        { name: 'Dart', color: '#0175c2' },
        { name: 'WebSockets', color: '#ffaa00' },
        { name: 'Real-time GPS', color: '#00ff88' },
        { name: 'Cloud Infrastructure', color: '#bf55ec' },
        { name: 'Clean Architecture', color: '#3ecf8e' }
      ],
      metrics: {
        en: {
          apps: '4 Synchronized Apps',
          telemetry: 'Sub-second GPS',
          coverage: 'Istanbul Metro'
        },
        ar: {
          apps: '4 تطبيقات متزامنة',
          telemetry: 'تحديث لحظي للـ GPS',
          coverage: 'نطاق إسطنبول الكبرى'
        }
      },
      links: {
        demo: 'https://laffeh.live',
        github: 'https://github.com/gmudz/Laffeh',
        caseStudy: 'https://laffeh.live'
      },
      // Modern High-Fidelity Vector SVG Logo
      logoSvg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff6b35"/>
            <stop offset="100%" stop-color="#ea580c"/>
          </linearGradient>
          <filter id="lfGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <circle cx="60" cy="60" r="48" fill="#140f0d" stroke="url(#lfGrad)" stroke-width="3.5" filter="url(#lfGlow)"/>
        <path d="M34 68 C34 52 46 42 60 42 C74 42 86 52 86 68 Z" fill="#ff6b35" opacity="0.3" stroke="#ff6b35" stroke-width="3"/>
        <line x1="28" y1="72" x2="92" y2="72" stroke="#ff6b35" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="60" cy="34" r="5" fill="#ffaa00"/>
        <path d="M52 80 L60 92 L68 80 Z" fill="#ff6b35"/>
        <circle cx="60" cy="56" r="5" fill="#ffffff"/>
      </svg>`,
      bannerGradient: 'linear-gradient(135deg, rgba(255, 107, 53, 0.25) 0%, rgba(20, 15, 13, 0.95) 100%)'
    },
    {
      id: 'callcenter',
      slug: 'callcenter',
      podIndex: 2,
      color: '#00ff88',
      colorName: 'Neon Emerald',
      position: { x: 0, y: 0.2, z: 52 }, // Telecom Quarter (Ultimate Call Center AI Spire)
      brandType: 'ascii',
      status: {
        en: 'Open Source AI Core',
        ar: 'نواة ذكاء اصطناعي مفتوحة'
      },
      title: {
        en: 'Ultimate Call Center Agent',
        ar: 'وكيل مركز الاتصال الذكي (AI Copilot)'
      },
      tagline: {
        en: 'Enterprise Real-Time AI Sales Copilot & Arabic Dialect Engine',
        ar: 'مساعد ذكي لحظي لمراكز الاتصال يدعم اللهجات العربية ومراقبة الجودة'
      },
      category: {
        en: 'Enterprise AI & Speech Intelligence',
        ar: 'ذكاء اصطناعي مؤسسي ومعالجة الصوتيات لحظياً'
      },
      role: {
        en: 'AI Systems Architect & Open-Source Creator',
        ar: 'معماري أنظمة الذكاء الاصطناعي ومطور المشروع'
      },
      summary: {
        en: 'An enterprise-grade real-time AI sales copilot built for high-stakes financial brokerage call centers. Integrates a sub-300ms audio streaming pipeline with customized Automatic Speech Recognition (ASR) fine-tuned for Arabic dialects (Gulf, Levantine, Egyptian). Generates dynamic objection battle-cards, cross-references live financial market telemetry, and performs real-time regulatory compliance scoring against mandatory disclosure guidelines.',
        ar: 'مساعد ذكي متقدم لممثلي المبيعات في مراكز الاتصال وشركات الوساطة المالية يعمل بالوقت الفعلي. يتضمن مسار معالجة صوتية فائق السرعة (أقل من 300 مللي ثانية) مع نموذج تعرف صوتي مدرب خصيصاً على اللهجات العربية المختلفة (الخليجية، الشامية، المصرية). يوفر بطاقات استجابة سريعة للاعتراضات، ربطاً حياً بمؤشرات الأسواق المالية، وتدقيقاً آلياً للامتثال التنظيمي لمنع المخالفات القانونية.'
      },
      highlights: {
        en: [
          'Ultra-low-latency bidirectional audio streaming processing voice packets under 300ms',
          'Specialized multi-dialect Arabic NLP tokenizers handling colloquial nuances and code-switching',
          'Contextual RAG battle-card retrieval surfacing real-time competitive counter-arguments during active calls',
          'VoIP / SIP telecommunication hook integrating directly into enterprise PBX call distribution trunks'
        ],
        ar: [
          'معالجة صوتية ثنائية الاتجاه فائقة السرعة تتعامل مع حزم الصوت في أقل من 300 مللي ثانية',
          'نماذج لغوية متخصصة في اللهجات العربية تفهم المصطلحات الدارجة والخلط اللغوي بين العربية والإنجليزية',
          'نظام RAG استرجاعي سياقي يظهر حججاً مضادة فورية لممثل المبيعات للرد على تردد أو اعتراضات العميل',
          'تكامل مع بروتوكولات الاتصال الهاتفي المؤسسي VoIP / SIP وربط مباشر مع سنترالات PBX'
        ]
      },
      techStack: [
        { name: 'Python', color: '#3776ab' },
        { name: 'Arabic NLP', color: '#00ff88' },
        { name: 'Real-Time Audio', color: '#ff3366' },
        { name: 'LLM Orchestration', color: '#bf55ec' },
        { name: 'VoIP / SIP', color: '#00f0ff' },
        { name: 'WebSockets', color: '#ffaa00' }
      ],
      metrics: {
        en: {
          latency: '< 300ms Stream',
          dialects: 'Multi-Arabic',
          compliance: 'Real-Time Auditor'
        },
        ar: {
          latency: 'معالجة أقل من 300ms',
          dialects: 'دعم اللهجات العربية',
          compliance: 'تدقيق امتثال فوري'
        }
      },
      links: {
        demo: 'https://github.com/gmudz/UltimateCallCenterAgent',
        github: 'https://github.com/gmudz/UltimateCallCenterAgent',
        caseStudy: 'https://github.com/gmudz/UltimateCallCenterAgent#architecture'
      },
      // Cyberpunk Monospace ASCII Art Banner
      asciiArt: `
  ___ ___   _   ___  ___ ___ _____ 
 | _ \\ __| /_\\ |   \\| __|_ _|_   _|
 |   / _| / _ \\| |) | _| | |  | |  
 |_|_\\___/_/ \\_\\___/|___|___| |_|  
 [AI_AUDIO_PIPELINE: ARABIC_DIALECT_V2.5_ONLINE]
 [LATENCY: 284ms | CHANNELS: DUAL_VOIP_SIP | STATUS: ACTIVE]
      `,
      bannerGradient: 'linear-gradient(135deg, rgba(0, 255, 136, 0.22) 0%, rgba(5, 20, 15, 0.95) 100%)'
    },
    {
      id: 'kernel',
      slug: 'kernel',
      podIndex: 3,
      color: '#ffaa00',
      colorName: 'Cyber Gold',
      position: { x: -52, y: 0.2, z: 0 }, // Silicon Park (Snapdragon & SedOS Foundry)
      brandType: 'ascii',
      status: {
        en: 'Embedded / Systems',
        ar: 'أنظمة مدمجة ونواة'
      },
      title: {
        en: 'Snapdragon 732G Kernel & SedOS',
        ar: 'نواة لينكس لسنابدراجون 732G وتوزيعة SedOS'
      },
      tagline: {
        en: 'Custom Linux Kernel, Droidian Toolchain & Independent OS',
        ar: 'تعديل نواة لينكس، أدوات تشغيل Droidian وبناء توزيعة مستقلة'
      },
      category: {
        en: 'Embedded Systems & Operating System Internals',
        ar: 'الأنظمة المدمجة وتطوير نوى أنظمة التشغيل'
      },
      role: {
        en: 'Systems Engineer & Kernel Developer',
        ar: 'مهندس أنظمة ومطور نوى النظم'
      },
      summary: {
        en: 'A deep low-level systems engineering project establishing mainline Linux kernel compatibility and a custom Droidian GNU/Linux boot toolchain on the Qualcomm Snapdragon 732G (SM7150 platform for Xiaomi Redmi Note 10 Pro / sweet). Encompasses Device Tree Source (DTS) writing for display, touchscreen, and power controllers. Additionally developed SedOS: an independent Linux distribution with kernel-level performance tuning and customized init packages.',
        ar: 'مشروع هندسة أنظمة منخفض المستوى يهدف إلى تشغيل وتكييف نواة لينكس الحديثة (Mainline Linux Kernel) وأدوات إقلاع توزيعة Droidian على معالجات كوالكوم سنابدراجون 732G (منصة SM7150 لهاتف Redmi Note 10 Pro). يتضمن كتابة ملفات شجرة الأجهزة (DTS) لتعريف الشاشات واللمس وإدارة الطاقة، بالإضافة إلى تطوير توزيعة SedOS المستقلة مع تحسينات عميقة على مستوى النواة وحزم الإقلاع.'
      },
      highlights: {
        en: [
          'Mainline Linux 6.x kernel porting for Qualcomm Snapdragon 732G architecture (ARM64)',
          'Custom Device Tree Source (DTS) definitions enabling MIPI-DSI display panels and I2C touch digitizers',
          'Droidian GNU/Linux rootfs bootchain and Hardware Abstraction Layer (HAL) bypass for pure Linux',
          'SedOS independent Linux distribution with kernel-level scheduling and package management'
        ],
        ar: [
          'تكييف وتجميع نواة لينكس 6.x لمعمارية معالجات كوالكوم سنابدراجون 732G (ARM64)',
          'كتابة وتجميع ملفات شجرة الأجهزة (DTS) لتشغيل شاشات MIPI-DSI ولوحات اللمس عبر ناقل I2C',
          'بناء مسار إقلاع نظام Droidian وتجاوز طبقات أندرويد لتشغيل نظام جنو/لينكس كامل',
          'تطوير توزيعة SedOS المستقلة مع تحسين جدولة المعالجة وإدارة الحزم المخصصة'
        ]
      },
      techStack: [
        { name: 'C', color: '#a8b9cc' },
        { name: 'Linux Kernel', color: '#ffaa00' },
        { name: 'ARM64', color: '#00f0ff' },
        { name: 'Device Trees (DTS)', color: '#3ecf8e' },
        { name: 'Android Internals', color: '#3ddc84' },
        { name: 'SedOS Core', color: '#bf55ec' }
      ],
      metrics: {
        en: {
          arch: 'ARM64 / SM7150',
          os: 'GNU/Linux Pure',
          drivers: 'DSI / Touch / PMIC'
        },
        ar: {
          arch: 'معمارية ARM64',
          os: 'جنو/لينكس نقي',
          drivers: 'الشاشة / اللمس / الطاقة'
        }
      },
      links: {
        demo: 'https://github.com/gmudz/Snapdragon-732G-Linux-Kernel',
        github: 'https://github.com/gmudz/Snapdragon-732G-Linux-Kernel',
        caseStudy: 'https://github.com/gmudz/LinuxMacOSUI'
      },
      // Cyberpunk Monospace ASCII Art Banner
      asciiArt: `
  _    _                 _  __                    _ 
 | |  (_)_ _ _  ___ __  | |/ /___ _ _ _ _  ___ | |
 | |__| | ' \\ || \\ \\ /  | ' </ -_) '_| ' \\/ -_)| |
 |____|_|_||_\\_,_/\\_\\_\\  |_|\\_\\___|_| |_||_\\___||_|
 [BOOT: QUALCOMM_SM7150_MAINLINE_V6.1_AARCH64_OK]
 [INIT: DROIDIAN_ROOTFS_MOUNTED | SEDOS_CORE_READY]
      `,
      bannerGradient: 'linear-gradient(135deg, rgba(255, 170, 0, 0.22) 0%, rgba(20, 15, 5, 0.95) 100%)'
    }
  ],

  // Career & Education Milestones for Road Waypoints (Central Island Hub)
  waypoints: [
    {
      id: 'waypoint-1',
      index: 0,
      position: { x: 0, y: 0.2, z: -10 },
      type: 'experience',
      icon: 'briefcase',
      title: {
        en: 'Founder CEO & Full-Stack Lead',
        ar: 'المؤسس، المدير التنفيذي وقائد البرمجيات'
      },
      organization: {
        en: 'Laffeh & QTicket',
        ar: 'منصتي لفة وكيو تيكت (Laffeh & QTicket)'
      },
      period: {
        en: '2024 — Present | Istanbul, Türkiye',
        ar: '2024 — الآن | إسطنبول، تركيا'
      },
      description: {
        en: 'Single-handedly architected and engineered two enterprise platforms: Laffeh (real-time food delivery ecosystem) and QTicket (multi-tenant SaaS reservation platform). Built mobile, backend, frontend, and cloud infrastructure layers with Clean Architecture.',
        ar: 'تأسيس وقيادة منصتين تقنيتين متكاملتين: لفة (منظومة توصيل طلبات لحظية) وكيو تيكت (منصة حجز تذاكر سحابية). بناء وتطوير كامل الأنظمة الخلفية، التطبيقات، والواجهات السحابية باستخدام معمارية Clean Architecture.'
      }
    },
    {
      id: 'waypoint-2',
      index: 1,
      position: { x: 10, y: 0.2, z: 0 },
      type: 'experience',
      icon: 'server',
      title: {
        en: 'Technical Support & Network Operations Specialist',
        ar: 'أخصائي الدعم الفني وإدارة عمليات الشبكات'
      },
      organization: {
        en: 'ALQABIDA Group',
        ar: 'مجموعة القابضة (ALQABIDA)'
      },
      period: {
        en: '2026 | Istanbul, Türkiye',
        ar: '2026 | إسطنبول، تركيا'
      },
      description: {
        en: 'Server-level resource sharing, enterprise VoIP/SIP telecommunication (MicroSIP), PBX/PABX telephone exchange management, PSTN Trunks integration, and secure VPN infrastructure across multi-company corporate divisions.',
        ar: 'إدارة مشاركة موارد الخوادم، شبكات الاتصال الصوتي المؤسسية VoIP/SIP، أنظمة السنترال PBX/PABX وخطوط PSTN، وإعداد بنية الاتصال المشفر والشبكات الخاصة الافتراضية VPN بين الشركات.'
      }
    },
    {
      id: 'waypoint-3',
      index: 2,
      position: { x: 0, y: 0.2, z: 10 },
      type: 'education',
      icon: 'graduation-cap',
      title: {
        en: 'B.Sc. in Computer Engineering & Graphic Design',
        ar: 'بكالوريوس هندسة الحاسوب ودراسات التصميم الجرافيكي'
      },
      organization: {
        en: 'Bartın University',
        ar: 'جامعة بارتن (Bartın University)'
      },
      period: {
        en: '2022 — 2026 | Türkiye',
        ar: '2022 — 2026 | تركيا'
      },
      description: {
        en: 'Comprehensive academic grounding in computer architecture, systems programming, artificial intelligence, algorithms, combined with formal graphic design and visual communication studies.',
        ar: 'تكوين أكاديمي هندسي متين في معمارية الحاسوب، البرمجة منخفضة المستوى، خوارزميات الذكاء الاصطناعي، متزامناً مع دراسات التصميم الجرافيكي والتواصل البصري.'
      }
    }
  ],

  // Skills Matrix for Central Monolith
  skillsMatrix: {
    title: {
      en: 'Core Technical Arsenal',
      ar: 'ترسانة المهارات التقنية الأساسية'
    },
    subtitle: {
      en: 'Specialized proficiency across Mobile, Cloud, AI, and Systems',
      ar: 'خبرات هندسية متخصصة في الهواتف، السحابة، الذكاء الاصطناعي والأنظمة'
    },
    categories: [
      {
        id: 'mobile',
        name: {
          en: 'Mobile & Client Apps',
          ar: 'تطبيقات الهواتف والواجهات'
        },
        color: '#02569b',
        skills: ['Flutter', 'Dart', '.NET MAUI', 'React Native', 'JavaScript', 'HTML5 / CSS3', 'Tailwind', 'Bootstrap']
      },
      {
        id: 'backend',
        name: {
          en: 'Backend, Cloud & Architecture',
          ar: 'الأنظمة الخلفية والسحابة'
        },
        color: '#512bd4',
        skills: ['ASP.NET Core', 'C#', 'Node.js', 'Clean Architecture', 'Supabase RLS', 'Redis', 'Docker', 'Oracle Cloud', 'DigitalOcean']
      },
      {
        id: 'ai',
        name: {
          en: 'AI, Deep Learning & Voice',
          ar: 'الذكاء الاصطناعي ومعالجة الصوت'
        },
        color: '#00ff88',
        skills: ['Arabic NLP', 'Real-Time Audio', 'DeepSeek', 'Kimi K2.5', 'CNN', 'RNN', 'LSTM', 'Ollama', 'Edge AI', 'MCP Protocols']
      },
      {
        id: 'systems',
        name: {
          en: 'Systems, Kernel & Networking',
          ar: 'الأنظمة المنخفضة والشبكات'
        },
        color: '#ffaa00',
        skills: ['C / C++', 'Linux Kernel', 'ARM64', 'Device Trees (DTS)', 'Android Internals', 'VoIP / SIP', 'PBX / PABX', 'VPN / Tunneling', 'RBAC & Auditing']
      }
    ]
  },

  // 100% Comprehensive Bilingual UI Strings Dictionary
  ui: {
    brand: {
      en: 'MURAD ASHKAR // 3D CAMPUS',
      ar: 'مراد أشقر // الحرم التفاعلي'
    },
    tagline: {
      en: '3D Interactive Cyber City & Real-Time World',
      ar: 'مدينة سبرانية تفاعلية ثلاثية الأبعاد بالوقت الفعلي'
    },
    pilot: {
      en: 'Pilot',
      ar: 'الطيار'
    },
    onlinePilots: {
      en: 'Pilots Online',
      ar: 'متصلون الآن'
    },
    singlePilot: {
      en: 'Pilot Online',
      ar: 'متصل الآن'
    },
    controlsHintDrive: {
      en: 'Drive / Steer',
      ar: 'قيادة / توجيه'
    },
    controlsHintBrake: {
      en: 'Handbrake / Drift',
      ar: 'فرامل اليد / تفحيط'
    },
    controlsHintExplore: {
      en: 'Explore District / Landmark',
      ar: 'استكشاف الحي / المعلم'
    },
    parkedAt: {
      en: 'Parked at',
      ar: 'أنت متوقف عند'
    },
    pressEOrTap: {
      en: 'Click or press E to view',
      ar: 'انقر أو اضغط E للاستعراض'
    },
    touchGas: {
      en: 'GAS',
      ar: 'انطلاق'
    },
    touchRev: {
      en: 'REV',
      ar: 'رجوع'
    },
    touchBrake: {
      en: 'BRAKE',
      ar: 'فرامل'
    },
    envDay: {
      en: '☀️ Day',
      ar: '☀️ نهار'
    },
    envSunset: {
      en: '🌅 Sunset',
      ar: '🌅 غروب'
    },
    envNight: {
      en: '🌙 Night',
      ar: '🌙 ليل'
    },
    mapButton: {
      en: '🗺️ Map',
      ar: '🗺️ الخريطة'
    },
    mapTitle: {
      en: 'Cyber City Tactical Satellite Map',
      ar: 'خريطة المدينة التكتيكية عبر الأقمار الاصطناعية'
    },
    mapSubtitle: {
      en: 'Click any district or landmark to engage Autonomous Autopilot',
      ar: 'انقر على أي حي أو معلم لتفعيل القيادة الذاتية الفورية'
    },
    autopilotActive: {
      en: 'Autopilot Active: Navigating to',
      ar: 'الطيار الآلي مفعّل: التوجه إلى'
    },
    autopilotCancelHint: {
      en: 'Press WASD or tap screen to cancel autopilot',
      ar: 'اضغط أي مفتاح تحكم أو المس الشاشة لإلغاء الطيار الآلي'
    },
    autopilotDisengaged: {
      en: 'Autopilot disengaged. Manual control resumed.',
      ar: 'تم إلغاء الطيار الآلي. تم استئناف التحكم اليدوي.'
    },
    autopilotArrived: {
      en: 'Arrived at destination!',
      ar: 'تم الوصول إلى الوجهة بنجاح!'
    },
    destCentral: {
      en: 'Central Innovation Plaza & Monolith',
      ar: 'ساحة الابتكار المركزية والمسلة التقنية'
    },
    destNorth: {
      en: 'Financial District // QTicket Global HQ',
      ar: 'المنطقة المالية // المقر الرئيسي لـ QTicket'
    },
    destEast: {
      en: 'Logistics Hub // Laffeh Fulfillment Center',
      ar: 'المركز اللوجستي // مركز توزيع لفة'
    },
    destSouth: {
      en: 'Telecom Quarter // Call Center AI Spire',
      ar: 'حي الاتصالات // برج الذكاء الاصطناعي'
    },
    destWest: {
      en: 'Silicon Park // Snapdragon & SedOS Foundry',
      ar: 'واحة السيليكون // مسبك سنابدراجون و SedOS'
    },
    destRaceTrack: {
      en: 'City Street Circuit // Grand Prix',
      ar: 'حلبة شوارع المدينة // الجائزة الكبرى'
    },
    raceTrackSubtitle: {
      en: 'High-speed banked downtown circuit & checkpoint time-trial',
      ar: 'مضمار شوارع المدينة عالي السرعة وتحدي النقاط الزمنية'
    },
    lapTimerLap: {
      en: 'LAP',
      ar: 'دورة'
    },
    lapTimerBest: {
      en: 'BEST',
      ar: 'الأفضل'
    },
    lapTimerCurrent: {
      en: 'TIME',
      ar: 'الوقت'
    },
    lapTimerSector: {
      en: 'SECTOR',
      ar: 'قطاع'
    },
    newLapRecord: {
      en: '🏁 NEW LAP RECORD!',
      ar: '🏁 رقم قياسي جديد للحلبة!'
    },
    lapCompleted: {
      en: 'Lap Completed',
      ar: 'اكتملت الدورة بنجاح'
    },
    driftScore: {
      en: 'DRIFT',
      ar: 'تفحيط'
    },
    driftPts: {
      en: 'PTS',
      ar: 'نقطة'
    },
    paceCarActive: {
      en: 'Autopilot Pace-Car: Lapping Circuit',
      ar: 'الطيار الآلي (سيارة الأمان): قيادة ذاتية حول الحلبة'
    },
    modalRole: {
      en: 'Role & Scope',
      ar: 'الدور والمسؤولية'
    },
    modalHighlights: {
      en: 'Architecture Highlights',
      ar: 'أبرز معالم المعمارية التقنية'
    },
    modalMetrics: {
      en: 'Scale & Performance Metrics',
      ar: 'مؤشرات الأداء والمقاييس'
    },
    modalTechStack: {
      en: 'Technologies & Frameworks',
      ar: 'التقنيات وأطر العمل'
    },
    liveDemo: {
      en: 'Live Platform',
      ar: 'زيارة المنصة'
    },
    sourceCode: {
      en: 'GitHub Repository',
      ar: 'المستودع البرمجي'
    },
    caseStudy: {
      en: 'Case Study',
      ar: 'تفاصيل المشروع'
    },
    skillsMatrixTitle: {
      en: 'Central Tech Monolith',
      ar: 'مسلة المهارات والتقنيات'
    },
    waypointTitle: {
      en: 'Career Milestone Checkpoint',
      ar: 'محطة مسار مهني وأكاديمي'
    },
    ballHint: {
      en: 'Cyber Soccer Playground: Ram the ball to play!',
      ar: 'ملعب الكرة الإلكتروني: اصدم الكرة بسيارتك لتلعب!'
    },
    speedUnit: {
      en: 'KM/H',
      ar: 'كم/س'
    }
  }
};
