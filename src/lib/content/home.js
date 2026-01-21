export const navLinks = [
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Connections', href: '/connections' },
  { label: 'Assets', href: '/assets' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Docs', href: '/docs' },
  { label: 'Support', href: '/support' },
  { label: 'Blog', href: '/blog' }
];

export const hero = {
  title: 'Automated Trading',
  description:
    'Turn your strategy signals into fully automated trades across stocks, crypto, and futures with BidiinPost.',
  emailPlaceholder: 'Enter your email',
  primaryCtaLabel: 'Register'
};

export const howItWorks = {
  introTitle: 'How It Works',
  introDescription:
    'Connect your favorite strategy tools to automated trade execution in four easy steps.'
};

export const steps = [
  {
    number: '01',
    title: 'Build Your Strategy',
    body:
      'Design strategies with the tools you already love and generate trading signals automatically.',
    mediaType: 'logos',
    ctaLabel: 'View Signal Sources',
    ctaHref: '/signals',
    logos: ['TradingView', 'TrendSpider', 'LuxAlgo', 'QuantConnect']
  },
  {
    number: '02',
    title: 'Send Alerts to BidiinPost',
    body:
      'Stream every alert to BidiinPost in real time with secure webhook payloads.',
    mediaType: 'code',
    codeSample: `{
  "ticker": "AAPL",
  "action": "buy",
  "price": 194.12,
  "quantity": 10
}`
  },
  {
    number: '03',
    title: 'Connect to BidiinPost',
    body:
      'Link your broker or exchange to automatically place trades the moment signals arrive.',
    mediaType: 'logos-grid',
    ctaLabel: 'View Supported Connections',
    ctaHref: '/connections',
    logos: [
      'TradeStation',
      'Tradier',
      'TDA',
      'Alpaca',
      'Interactive Brokers',
      'Coinbase',
      'Binance',
      'Kraken',
      'Bybit',
      'Bitstamp',
      'FTX',
      'Gemini'
    ]
  },
  {
    number: '04',
    title: 'Monitor Your Trades',
    body:
      'Track performance, manage risk, and see every fill in a unified dashboard.',
    mediaType: 'screenshot'
  }
];

export const audiences = [
  {
    title: 'Systematic Traders',
    description:
      'Automate rule-based strategies with consistent execution across every trade.'
  },
  {
    title: 'Discretionary Traders',
    description:
      'Keep control of decision making while automating order placement.'
  },
  {
    title: 'Strategy and Indicator Developers',
    description:
      'Deliver signals to clients with automated execution in one clean workflow.'
  },
  {
    title: 'Prop Firm Traders',
    description:
      'Scale trade automation and compliance across multiple accounts.'
  }
];

export const featureGrid = [
  {
    title: 'Backtesting',
    description: 'Evaluate strategies before going live.'
  },
  { title: 'Webhooks', description: 'Instantly route alert payloads.' },
  { title: 'Notifications', description: 'Stay updated on every fill.' },
  { title: 'Paper Trading', description: 'Test execution with no risk.' },
  { title: 'Multi-Asset Support', description: 'Trade stocks, crypto, and futures.' },
  { title: 'Broker Sync', description: 'Connect multiple accounts at once.' },
  { title: 'Risk Controls', description: 'Protect capital with guardrails.' },
  { title: 'Order Templates', description: 'Standardize your order flow.' },
  { title: 'Position Management', description: 'Automate stops and exits.' },
  { title: 'Portfolio Views', description: 'Monitor exposure in one place.' },
  { title: 'Alerts Dashboard', description: 'See every signal in real time.' },
  { title: 'Team Access', description: 'Collaborate with shared workflows.' }
];

export const socialProof = [
  { value: '$200M+', label: 'In Connected Accounts' },
  { value: '40000+', label: 'Traders' },
  { value: '20M+', label: 'Trades Executed' }
];

export const comparisonGuides = [
  {
    title: 'Comparison Guides',
    description: 'Evaluate BidiinPost against other trading automation platforms.',
    links: [
      'BidiinPost vs TradingView',
      'BidiinPost vs 3Commas',
      'BidiinPost vs SignalStack',
      'BidiinPost vs Composer',
      'BidiinPost vs TrendSpider',
      'BidiinPost vs Tickerly',
      'BidiinPost vs SignalStack Pro',
      'BidiinPost vs PineConnector'
    ]
  }
];

export const journalingPlatforms = [
  'TradesViz',
  'TraderSync',
  'TradeZella',
  'Journalytix',
  'Edgewonk',
  'Trademetria'
];

export const testimonials = [
  {
    quote:
      'BidiinPost helped me automate every strategy without hiring a developer.',
    name: 'Alex Morgan'
  },
  {
    quote:
      'I can finally trust my alerts to execute on time across all my accounts.',
    name: 'Priya Shah'
  },
  {
    quote:
      'The platform saves me hours each week and keeps my risk controls tight.',
    name: 'Daniel Kim'
  }
];

export const footerColumns = [
  {
    title: 'Connections',
    links: ['Brokers', 'Exchanges', 'TradingView', 'TrendSpider', 'Signal Sources']
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Status', 'Community', 'Affiliates']
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Partners', 'Blog']
  },
  {
    title: 'Use Cases',
    links: ['Stocks', 'Crypto', 'Futures', 'Options', 'Automated Bots']
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Cookie Policy']
  }
];

export const legalDisclaimer =
  'Trading involves substantial risk and is not suitable for all investors. Automated trading does not guarantee profits and can amplify losses. Past performance is not indicative of future results. You are responsible for evaluating the merits and risks associated with the use of any information provided on this site before making any decisions based on such information.';
