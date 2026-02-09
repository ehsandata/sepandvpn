const translations = {
  en: {
    common: {
      brand: "SepandVPN",
      brandTagline: "OpenVPN Cloud",
      navServers: "Servers",
      navSecurity: "Security",
      navTechnology: "Technology",
      navPricing: "Pricing",
      ctaAccess: "Get Access",
      ctaTrial: "Register Now",
      ctaNetwork: "View Network Map",
      ctaWhitepaper: "Download Whitepaper",
      ctaCaseStudies: "See Case Studies",
      footerTagline: "Secure OpenVPN services for modern users.",
      footerPrivacy: "Privacy",
      footerStatus: "Status",
      footerDocs: "Docs",
      footerContact: "Contact",
      choosePlan: "Choose Plan",
      scheduleCall: "Schedule a Security Call",
      requestAssessment: "Request Assessment",
      workEmail: "Work email",
      responseTime: "We respond within 24 hours with a tailored security plan.",
      perMonth: "/month",
      ms: "ms",
    },
    home: {
      badge: "OpenVPN Servers",
      title: "Fast, secure, and reliable OpenVPN infrastructure for modern users.",
      subtitle:
        "SepandVPN delivers elite OpenVPN clusters engineered for speed, encryption, and always-on reliability. Launch in seconds and stay protected anywhere.",
      highlights: [
        { label: "5+", value: "Global locations" },
        { label: "10 Gbps", value: "Premium backbone" },
        { label: "24/7", value: "Threat monitoring" },
      ],
      liveCard: {
        title: "Secure Session",
        status: "LIVE",
        routeLabel: "Active Route",
        routeValue: "Frankfurt → Singapore",
        encryption: "Encryption",
        handshake: "Handshake",
        integrity: "Integrity",
      },
      liveRoutes: [
        { route: "Copenhagen → Iran", ms: 26 },
        { route: "Stockholm → Iran", ms: 31 },
        { route: "Berlin → Iran", ms: 22 },
        { route: "Paris → Iran", ms: 28 },
        { route: "Canada → Iran", ms: 49 },
      ],
      pillars: [
        {
          title: "Fast",
          description:
            "Smart routing selects the lowest-latency OpenVPN server in milliseconds for streaming, gaming, and teams.",
        },
        {
          title: "Secure",
          description:
            "Traffic is wrapped in hardened tunnels with DNS leak protection, kill-switch enforcement, and split tunneling.",
        },
        {
          title: "Reliable",
          description:
            "Redundant clusters and health checks keep uptime above 99.99% with automatic failover.",
        },
      ],
      securityStack: {
        label: "Security stack",
        title: "Built with modern cryptography and transparent reliability.",
        copy:
          "Our OpenVPN fabric is built on hardened server images, strict key rotation, and continuous monitoring. Every connection is audited for performance and integrity.",
        stack: [
          "OpenVPN 2.6 hardened configs",
          "TLS 1.3 with modern cipher suites",
          "AES-256-GCM data channel",
          "ECDHE key exchange (PFS)",
          "HMAC packet authentication",
        ],
        networkLabel: "Live network",
        networkTitle: "Global OpenVPN mesh",
      },
      technology: {
        label: "Technology",
        title: "Security technologies powering every tunnel.",
        items: [
          {
            title: "OpenVPN + TLS 1.3",
            description:
              "Hardened OpenVPN servers with modern TLS 1.3 handshakes, enabling faster secure sessions and reduced latency.",
          },
          {
            title: "AES-256-GCM",
            description:
              "Military-grade encryption with authenticated packets keeps traffic confidential and tamper-proof end-to-end.",
          },
          {
            title: "Perfect Forward Secrecy",
            description:
              "Ephemeral keys rotate automatically, so past sessions stay protected even if keys are compromised.",
          },
          {
            title: "Zero-Log Routing",
            description:
              "Session metadata is minimized and never stored, backed by stateless edge routing.",
          },
        ],
      },
      pricing: {
        label: "Pricing",
        title: "Plans for every security posture.",
        copy:
          "Start fast, scale instantly. Every plan includes OpenVPN configs, secure onboarding, and live performance analytics.",
        monthly: "Billed monthly",
        annual: "2 months free annually",
        plans: [
          {
            name: "Starter",
            price: "$9",
            description: "Ideal for personal privacy.",
            features: ["3 devices", "5 regions", "Secure DNS"],
          },
          {
            name: "Teams",
            price: "$24",
            description: "For small teams and agencies.",
            features: ["12 devices", "40 regions", "Team policies"],
            highlighted: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "Dedicated clusters & SLA.",
            features: ["Unlimited devices", "All regions", "Custom routing"],
          },
        ],
      },

      faq: {
        label: "FAQ",
        title: "Questions teams ask before deploying SepandVPN.",
        copy:
          "Need deeper architecture details? Our security team is ready to review your OpenVPN requirements.",
        items: [
          {
            q: "Do you support split tunneling?",
            a: "Yes. Define per-app or per-network rules from the dashboard to keep critical traffic secure while allowing local access.",
          },
          {
            q: "How fast are the servers?",
            a: "All core regions run on 10 Gbps links with adaptive routing to select the fastest OpenVPN node in real time.",
          },
          {
            q: "Is there a free trial?",
            a: "Every plan includes a 7-day trial with full access to the global OpenVPN mesh.",
          },
        ],
      },
    },
    security: {
      badge: "Security Layer",
      title: "Security controls designed for mission-critical OpenVPN deployments.",
      subtitle:
        "From key vaults to real-time integrity checks, SepandVPN keeps every tunnel resilient against outages and intrusion.",
      ctaPrimary: "Talk to Security",
      ctaSecondary: "Back to Servers",
      compliance: [
        { label: "99.99%", text: "Uptime SLA" },
        { label: "24 hrs", text: "Security response" },
        { label: "15 min", text: "Key rotation cadence" },
      ],
      threatConsole: {
        title: "Threat Console",
        status: "ACTIVE",
        liveEvents: "Live Events",
        events: [
          { label: "Key rotation", value: "Completed" },
          { label: "Latency spike", value: "Mitigated" },
          { label: "Policy sync", value: "In progress" },
        ],
      },
      safeguards: {
        label: "Safeguards",
        title: "Defense-in-depth for every OpenVPN session.",
        copy:
          "We combine hardened OpenVPN builds, automated threat response, and continuous auditing so teams can deploy at scale.",
        items: [
          {
            title: "Multi-region key vaults",
            detail:
              "HSM-backed key storage with scheduled rotation and regional redundancy for compliance and resilience.",
          },
          {
            title: "Continuous integrity checks",
            detail:
              "Agents validate OpenVPN configs, kernel modules, and cipher suites every 60 seconds.",
          },
          {
            title: "Autonomous failover",
            detail:
              "If latency spikes or a node fails, sessions move to a healthy cluster without disconnects.",
          },
          {
            title: "Adaptive threat response",
            detail:
              "Behavior-based detection blocks brute force attempts before they reach the tunnel.",
          },
        ],
      },
      controls: {
        label: "Controls",
        title: "Operational controls built for IT teams.",
        items: [
          "Dedicated OpenVPN profiles per team",
          "DNS leak protection and secure resolver",
          "Split tunneling with policy layers",
          "Always-on kill switch enforcement",
          "SOC 2-ready audit trails",
          "Real-time bandwidth analytics",
        ],
      },
      complianceBlock:
        "SOC 2-ready logging, GDPR-aligned data handling, and regional data residency for regulated environments.",
      complianceLabel: "Compliance",
      action: {
        label: "Action",
        title: "Ready to review your OpenVPN architecture?",
        copy:
          "Get a personalized security assessment and migration plan with our infrastructure team.",
      },
    },
    language: {
      chooseTitle: "Choose your language",
      chooseCopy: "Select your preferred language to personalize the experience.",
      english: "English",
      persian: "Persian",
      confirm: "Continue",
    },
  },
  fa: {
    common: {
      brand: "SepandVPN",
      brandTagline: "ابر OpenVPN",
      navServers: "سرورها",
      navSecurity: "امنیت",
      navTechnology: "فناوری",
      navPricing: "قیمت‌گذاری",
      ctaAccess: "دریافت دسترسی",
      ctaTrial: "ثبت نام",
      ctaNetwork: "نقشه شبکه",
      ctaWhitepaper: "دانلود وایت‌پیپر",
      ctaCaseStudies: "مطالعه نمونه‌ها",
      footerTagline: "سرویس‌های امن OpenVPN برای کاربران مدرن.",
      footerPrivacy: "حریم خصوصی",
      footerStatus: "وضعیت",
      footerDocs: "اسناد",
      footerContact: "تماس",
      choosePlan: "انتخاب پلن",
      scheduleCall: "رزرو جلسه امنیتی",
      requestAssessment: "درخواست ارزیابی",
      workEmail: "ایمیل کاری",
      responseTime: "حداکثر تا ۲۴ ساعت با برنامه امنیتی پاسخ می‌دهیم.",
      perMonth: "/ماه",
      ms: "میلی‌ثانیه",
    },
    home: {
      badge: "سرورهای OpenVPN",
      title: "زیرساخت OpenVPN سریع، امن و قابل اعتماد برای کاربران مدرن.",
      subtitle:
        "SepandVPN خوشه‌های OpenVPN را برای سرعت، رمزنگاری و پایداری طراحی می‌کند. در چند ثانیه راه‌اندازی شوید و همه‌جا امن بمانید.",
      highlights: [
        { label: "۵+", value: "موقعیت جهانی" },
        { label: "۱۰ گیگابیت", value: "بک‌بون پریمیوم" },
        { label: "۲۴/۷", value: "پایش تهدید" },
      ],
      liveCard: {
        title: "جلسه امن",
        status: "زنده",
        routeLabel: "مسیر فعال",
        routeValue: "فرانکفورت ← سنگاپور",
        encryption: "رمزنگاری",
        handshake: "هندشیک",
        integrity: "یکپارچگی",
      },
      liveRoutes: [
        { route: "کپنهاگ → ایران", ms: 26 },
        { route: "استکهلم → ایران", ms: 31 },
        { route: "برلین → ایران", ms: 22 },
        { route: "پاریس → ایران", ms: 28 },
        { route: "کانادا → ایران", ms: 49 },
      ],
      pillars: [
        {
          title: "سریع",
          description:
            "مسیر هوشمند، سریع‌ترین سرور OpenVPN را برای استریم، گیمینگ و تیم‌ها انتخاب می‌کند.",
        },
        {
          title: "امن",
          description:
            "ترافیک با تونل‌های مقاوم، جلوگیری از نشت DNS، کیل‌سوئیچ و اسپیلیت‌تونلینگ محافظت می‌شود.",
        },
        {
          title: "پایدار",
          description:
            "کلاسترهای افزونه و سلامت‌سنجی مداوم، پایداری بالای ۹۹.۹۹٪ و فیل‌اوور خودکار فراهم می‌کند.",
        },
      ],
      securityStack: {
        label: "لایه امنیتی",
        title: "رمزنگاری مدرن و پایایی شفاف.",
        copy:
          "شبکه OpenVPN با ایمیج‌های سخت‌سازی‌شده، چرخش کلید سخت‌گیرانه و پایش پیوسته ساخته شده است.",
        stack: [
          "پیکربندی سخت‌سازی OpenVPN 2.6",
          "TLS 1.3 با مجموعه رمزهای مدرن",
          "کانال داده AES-256-GCM",
          "تبادل کلید ECDHE (PFS)",
          "احراز صحت بسته با HMAC",
        ],
        networkLabel: "شبکه زنده",
        networkTitle: "مش OpenVPN جهانی",
      },
      technology: {
        label: "فناوری",
        title: "فناوری‌های امنیتی پشت هر تونل.",
        items: [
          {
            title: "OpenVPN + TLS 1.3",
            description:
              "سرورهای سخت‌سازی‌شده با TLS 1.3 برای اتصال امن و سریع‌تر.",
          },
          {
            title: "AES-256-GCM",
            description:
              "رمزنگاری سطح نظامی با احراز صحت بسته‌ها برای جلوگیری از دست‌کاری.",
          },
          {
            title: "محرمانگی پیشرو",
            description:
              "کلیدهای موقت مرتب چرخش دارند تا نشست‌های قبلی محافظت شوند.",
          },
          {
            title: "مسیر‌یابی بدون لاگ",
            description:
              "متادیتا حداقلی است و ذخیره نمی‌شود؛ مسیریابی لبه‌ای بدون حالت.",
          },
        ],
      },
      pricing: {
        label: "قیمت‌گذاری",
        title: "پلن مناسب برای هر سطح امنیت.",
        copy:
          "سریع شروع کنید و با رشد تیم مقیاس دهید. همه پلن‌ها شامل کانفیگ OpenVPN و تحلیل عملکرد هستند.",
        monthly: "پرداخت ماهانه",
        annual: "۲ ماه رایگان با سالانه",
        plans: [
          {
            name: "استارتر",
            price: "۹$",
            description: "مناسب حریم خصوصی شخصی.",
            features: ["۳ دستگاه", "۵ منطقه", "DNS امن"],
          },
          {
            name: "تیمی",
            price: "۲۴$",
            description: "برای تیم‌ها و آژانس‌ها.",
            features: ["۱۲ دستگاه", "۴۰ منطقه", "سیاست‌های تیمی"],
            highlighted: true,
          },
          {
            name: "سازمانی",
            price: "سفارشی",
            description: "کلاستر اختصاصی و SLA.",
            features: ["نامحدود دستگاه", "تمام مناطق", "مسیریابی سفارشی"],
          },
        ],
      },

      faq: {
        label: "سوالات متداول",
        title: "سوالات رایج قبل از استقرار SepandVPN.",
        copy:
          "برای معماری دقیق‌تر، تیم امنیت آماده بررسی نیازهای OpenVPN شماست.",
        items: [
          {
            q: "آیا اسپیلیت‌تونلینگ دارید؟",
            a: "بله. از داشبورد می‌توانید قوانین اپلیکیشن و شبکه را تنظیم کنید.",
          },
          {
            q: "سرورها چقدر سریع هستند؟",
            a: "تمام مناطق اصلی روی لینک ۱۰ گیگابیت با مسیر‌یابی تطبیقی کار می‌کنند.",
          },
          {
            q: "آزمایشی رایگان دارید؟",
            a: "همه پلن‌ها شامل ۷ روز آزمایش با دسترسی کامل هستند.",
          },
        ],
      },
    },
    security: {
      badge: "لایه امنیت",
      title: "کنترل‌های امنیتی برای استقرارهای حیاتی OpenVPN.",
      subtitle:
        "از خزانه کلید تا بررسی یکپارچگی لحظه‌ای، SepandVPN تونل‌ها را در برابر قطعی و نفوذ مقاوم می‌کند.",
      ctaPrimary: "گفتگو با تیم امنیت",
      ctaSecondary: "بازگشت به سرورها",
      compliance: [
        { label: "۹۹.۹۹٪", text: "SLA پایداری" },
        { label: "۲۴ ساعت", text: "پاسخ امنیتی" },
        { label: "۱۵ دقیقه", text: "چرخش کلید" },
      ],
      threatConsole: {
        title: "کنسول تهدید",
        status: "فعال",
        liveEvents: "رویدادهای زنده",
        events: [
          { label: "چرخش کلید", value: "انجام شد" },
          { label: "افزایش تاخیر", value: "مهار شد" },
          { label: "همگام‌سازی سیاست", value: "در حال انجام" },
        ],
      },
      safeguards: {
        label: "محافظت",
        title: "دفاع چندلایه برای هر نشست OpenVPN.",
        copy:
          "OpenVPN سخت‌سازی‌شده، پاسخ خودکار به تهدید و ممیزی مداوم، استقرار در مقیاس را ممکن می‌کند.",
        items: [
          {
            title: "خزانه کلید چندمنطقه‌ای",
            detail:
              "ذخیره کلید مبتنی بر HSM با چرخش برنامه‌ریزی‌شده و افزونگی منطقه‌ای.",
          },
          {
            title: "بررسی مداوم یکپارچگی",
            detail:
              "عامل‌ها تنظیمات OpenVPN و مجموعه رمزها را هر ۶۰ ثانیه بررسی می‌کنند.",
          },
          {
            title: "فیل‌اوور خودکار",
            detail:
              "در صورت افزایش تاخیر یا خرابی، نشست بدون قطع به کلاستر سالم منتقل می‌شود.",
          },
          {
            title: "پاسخ تطبیقی به تهدید",
            detail:
              "تشخیص رفتاری، تلاش‌های بروت‌فورس را قبل از رسیدن به تونل مسدود می‌کند.",
          },
        ],
      },
      controls: {
        label: "کنترل‌ها",
        title: "کنترل‌های عملیاتی برای تیم‌های IT.",
        items: [
          "پروفایل OpenVPN اختصاصی برای هر تیم",
          "محافظت از نشت DNS و رزولور امن",
          "اسپیلیت‌تونلینگ با لایه سیاست",
          "اجرای کیل‌سوئیچ همیشه‌فعال",
          "لاگ‌های آماده ممیزی SOC 2",
          "تحلیل لحظه‌ای پهنای باند",
        ],
      },
      complianceBlock:
        "لاگ‌گذاری آماده SOC 2، مدیریت داده مطابق GDPR و اقامت داده منطقه‌ای برای محیط‌های حساس.",
      complianceLabel: "انطباق",
      action: {
        label: "اقدام",
        title: "برای بازبینی معماری OpenVPN آماده‌اید؟",
        copy:
          "ارزیابی امنیتی و برنامه مهاجرت اختصاصی را با تیم زیرساخت دریافت کنید.",
      },
    },
    language: {
      chooseTitle: "انتخاب زبان",
      chooseCopy: "زبان مورد نظر خود را برای تجربه بهتر انتخاب کنید.",
      english: "انگلیسی",
      persian: "فارسی",
      confirm: "ادامه",
    },
  },
};

export default translations;
