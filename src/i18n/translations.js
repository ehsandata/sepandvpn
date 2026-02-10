const translations = {
  en: {
    common: {
      brand: "SepandVPN",
      brandTagline: "OpenVPN Cloud",
      navServers: "Home",
      navSecurity: "Download",
      navTechnology: "Technology",
      navPricing: "Pricing",
      ctaAccess: "Get Access",
      ctaTrial: "Register Now",
      ctaNetwork: "Download App",
      ctaWhitepaper: "Download Whitepaper",
      ctaCaseStudies: "See Case Studies",
      footerTagline: "Secure OpenVPN services for Professional Users.",
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
      serverStatus: "Server Status: Up and Ready to use",
    },
    home: {
      badge: "OpenVPN Servers",
      title: "Fast, secure, and reliable OpenVPN infrastructure for Professional Users.",
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
        label: "Download App",
        title: "Get SepandVPN on every device in minutes.",
        copy:
          "Install the apps and sign in to connect instantly. One account covers your full device stack.",
        stack: ["Android", "iOS", "macOS", "Windows"],
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
        annual: "1 month free for 3-month subscription",
        plans: [
          {
            name: "Free",
            price: "Free/1 Week",
            description: "For testing",
            features: ["1 user", "7 days free", "Secure DNS"],
            showPerMonth: false,
          },
          {
            name: "Monthly",
            price: "50 DKK",
            description: "Popular plan",
            features: ["2 users", "Multi Location", "Secure DNS"],
            highlighted: true,
            showPerMonth: true,
          },
          {
            name: "3 Months",
            price: "100 DKK",
            description: "Best value",
            features: ["5 users", "Multi Location", "Secure DNS"],
            showPerMonth: true,
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
      badge: "Download Center",
      title: "",
      subtitle:
        "Choose your platform and get connected in minutes with secure OpenVPN profiles.",
      ctaPrimary: "Download App",
      ctaSecondary: "Home Page",
      compliance: [
        { label: "Android", text: "Latest build" },
        { label: "iOS", text: "App Store" },
        { label: "macOS", text: "Apple Silicon" },
      ],
      threatConsole: {
        title: "Release Channel",
        status: "STABLE",
        liveEvents: "Latest Builds",
        events: [
          { label: "Windows", value: "v2.6.1" },
          { label: "Android", value: "v2.6.3" },
          { label: "macOS", value: "v2.6.0" },
        ],
      },
      safeguards: {
        label: "Platforms",
        title: "Native apps for every OS.",
        copy:
          "Download the right client and use the same account across all devices.",
        items: [
          {
            title: "Android",
            detail: "Optimized for fast roaming and battery efficiency.",
          },
          {
            title: "iOS",
            detail: "App Store builds with automatic profile updates.",
          },
          {
            title: "macOS",
            detail: "Universal build for Intel and Apple Silicon.",
          },
          {
            title: "Windows",
            detail: "Stable installer with smart split-tunneling.",
          },
        ],
      },
      controls: {
        label: "Resources",
        title: "Everything you need to get connected.",
        items: [
          "Setup guide and quick start",
          "OpenVPN config downloads",
          "Account activation",
          "Device limit management",
          "Support and troubleshooting",
          "Release notes",
        ],
      },
      complianceBlock:
        "Need help? Our team can assist with installation and onboarding.",
      complianceLabel: "Support",
      action: {
        label: "Get Started",
        title: "Install, sign in, and connect.",
        copy:
          "Download the app for your platform and activate your subscription.",
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
      brandTagline: "OpenVPN Cloud",
      navServers: "خانه",
      navSecurity: "دانلود",
      navTechnology: "فناوری",
      navPricing: "قیمت‌گذاری",
      ctaAccess: "دریافت دسترسی",
      ctaTrial: "ثبت نام",
      ctaNetwork: "دانلود اپ",
      ctaWhitepaper: "دانلود وایت‌پیپر",
      ctaCaseStudies: "مطالعه نمونه‌ها",
      footerTagline: "سرویس‌های امن OpenVPN برای کاربران حرفه‌ای.",
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
      serverStatus: "وضعیت سرور: آماده و فعال",
    },
    home: {
      badge: "سرورهای OpenVPN",
      title: "زیرساخت OpenVPN سریع، امن و قابل اعتماد برای کاربران حرفه‌ای.",
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
        label: "دانلود اپ",
        title: "SepandVPN را در چند دقیقه روی همه دستگاه‌ها داشته باشید.",
        copy:
          "اپ‌ها را نصب کنید و با یک حساب کاربری فوراً وصل شوید.",
        stack: ["اندروید", "iOS", "macOS", "ویندوز"],
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
        annual: "۱ ماه رایگان برای اشتراک ۳ ماهه",
        plans: [
          {
            name: "رایگان",
            price: "رایگان/۱ هفته",
            description: "برای تست",
            features: ["۱ کاربر", "۷ روز رایگان", "DNS امن"],
            showPerMonth: false,
          },
          {
            name: "ماهانه",
            price: "۵۰ کرون",
            description: "پلن محبوب",
            features: ["۲ کاربر", "چند موقعیت", "DNS امن"],
            highlighted: true,
            showPerMonth: true,
          },
          {
            name: "۳ ماهه",
            price: "۱۰۰ کرون",
            description: "به‌صرفه",
            features: ["۵ کاربر", "چند موقعیت", "DNS امن"],
            showPerMonth: true,
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
      badge: "مرکز دانلود",
      title: "",
      subtitle:
        "پلتفرم خود را انتخاب کنید و در چند دقیقه وصل شوید.",
      ctaPrimary: "دانلود اپ",
      ctaSecondary: "صفحه اصلی",
      compliance: [
        { label: "اندروید", text: "آخرین نسخه" },
        { label: "iOS", text: "اپ استور" },
        { label: "macOS", text: "Apple Silicon" },
      ],
      threatConsole: {
        title: "کانال انتشار",
        status: "پایدار",
        liveEvents: "آخرین نسخه‌ها",
        events: [
          { label: "ویندوز", value: "v2.6.1" },
          { label: "اندروید", value: "v2.6.3" },
          { label: "macOS", value: "v2.6.0" },
        ],
      },
      safeguards: {
        label: "پلتفرم‌ها",
        title: "اپ‌های بومی برای همه سیستم‌ها.",
        copy:
          "اپ مناسب را دانلود کنید و با یک حساب روی همه دستگاه‌ها وارد شوید.",
        items: [
          { title: "اندروید", detail: "بهینه برای رومینگ سریع و مصرف کم." },
          { title: "iOS", detail: "نسخه App Store با بروزرسانی خودکار." },
          { title: "macOS", detail: "نسخه یونیورسال برای اینتل و اپل." },
          { title: "ویندوز", detail: "نصب‌کننده پایدار با اسپیلیت‌تونلینگ." },
        ],
      },
      controls: {
        label: "منابع",
        title: "همه چیز برای اتصال سریع.",
        items: [
          "راهنمای نصب سریع",
          "دانلود کانفیگ OpenVPN",
          "فعال‌سازی حساب",
          "مدیریت تعداد دستگاه",
          "پشتیبانی و رفع مشکل",
          "یادداشت نسخه‌ها",
        ],
      },
      complianceBlock:
        "کمک لازم دارید؟ تیم ما در نصب و راه‌اندازی همراه شماست.",
      complianceLabel: "پشتیبانی",
      action: {
        label: "شروع کنید",
        title: "نصب، ورود و اتصال.",
        copy:
          "اپ را برای پلتفرم خود دانلود و اشتراک را فعال کنید.",
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
