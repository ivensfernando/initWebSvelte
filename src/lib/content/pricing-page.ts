export const heroTop = {
  eyebrow: 'No credit card required',
  title: "Free, until you're ready",
  paragraph:
    'Test signals with manual submission on live accounts and automated submission on paper accounts free for 7 days. Access our experimental script library with indicators and strategies. No commitment, no expiration. Upgrade when you\'re ready for live auto-submit.',
  ctaLabel: 'Sign up free',
  card: {
    label: 'Free',
    price: '$0',
    subtext: 'forever'
  }
};

export const billingToggle = {
  badge: 'With yearly billing you save 15%, which is 2 months free',
  monthlyLabel: 'Monthly Billing',
  yearlyLabel: 'Yearly Billing -15%'
};

const planFeatures = [
  'Live Accounts',
  'Paper Accounts',
  'Add-on Accounts',
  'Asset Classes',
  'Unlimited Tickers and Trades',
  'Manual Submit',
  'Live Auto Submit',
  'In-App and Email Support',
  'Affiliate Program',
  'Parallel Account Execution',
  'Scheduled Video Call Support',
  'User Management'
];

const mapFeatures = (includedLabels: string[]) =>
  planFeatures.map((label) => ({
    label,
    included: includedLabels.includes(label)
  }));

export const plans = [
  {
    name: 'Starter',
    badge: null,
    monthlyPrice: '$19',
    yearlyPrice: '$16',
    strikePrice: '$22',
    discountLabel: '-15% off',
    yearlySummaryText: '$192 a year. You save $36 a year.',
    features: mapFeatures([
      'Paper Accounts',
      'Asset Classes',
      'Unlimited Tickers and Trades',
      'Manual Submit',
      'In-App and Email Support'
    ])
  },
  {
    name: 'Basic',
    badge: 'Most Popular',
    monthlyPrice: '$39',
    yearlyPrice: '$33',
    strikePrice: '$46',
    discountLabel: '-15% off',
    yearlySummaryText: '$396 a year. You save $72 a year.',
    features: mapFeatures([
      'Live Accounts',
      'Paper Accounts',
      'Add-on Accounts',
      'Asset Classes',
      'Unlimited Tickers and Trades',
      'Manual Submit',
      'Live Auto Submit',
      'In-App and Email Support',
      'Affiliate Program'
    ])
  },
  {
    name: 'Pro',
    badge: null,
    monthlyPrice: '$79',
    yearlyPrice: '$67',
    strikePrice: '$92',
    discountLabel: '-15% off',
    yearlySummaryText: '$804 a year. You save $144 a year.',
    features: mapFeatures([
      'Live Accounts',
      'Paper Accounts',
      'Add-on Accounts',
      'Asset Classes',
      'Unlimited Tickers and Trades',
      'Manual Submit',
      'Live Auto Submit',
      'In-App and Email Support',
      'Affiliate Program',
      'Parallel Account Execution',
      'User Management'
    ])
  },
  {
    name: 'Premium',
    badge: null,
    monthlyPrice: '$149',
    yearlyPrice: '$127',
    strikePrice: '$175',
    discountLabel: '-15% off',
    yearlySummaryText: '$1524 a year. You save $264 a year.',
    features: mapFeatures(planFeatures)
  }
];

export const pricingIntro = {
  title: 'Pricing',
  description:
    'Discover our flexible pricing plans designed to accommodate traders of all levels. From beginners to seasoned professionals, we have options tailored to support your automated trading journey with our comprehensive set of tools and features.',
  helperText:
    'Not sure which plan fits best? Add Live and Paper accounts to any plan to fit your needs.'
};

export const platformSection = {
  title: 'All-in-One Trading Bot Platform',
  description:
    'TradersPost streamlines your trading process. Choose your preferred broker from our list, connect your strategies, and start automating your trades effortlessly!',
  features: [
    {
      title: 'Backtesting',
      description:
        'Backtest your strategies using popular charting software like TradingView or TrendSpider.'
    },
    {
      title: 'TradingView',
      description: 'Place orders directly in your broker from TradingView strategies.'
    },
    {
      title: 'TrendSpider',
      description: 'Place orders directly in your broker from TrendSpider strategies.'
    },
    {
      title: 'Paper Trading',
      description: 'Paper trade free for 7 days to test your trading strategies with TradersPost.'
    },
    {
      title: 'Webhooks',
      description: 'Send your trading signals to TradersPost from easy to use webhooks.'
    },
    {
      title: 'Notifications',
      description: 'Get notifications from your automated trading strategies.'
    },
    {
      title: 'Trade your IRA',
      description: 'Trade your retirement accounts with automated trading strategies.'
    },
    {
      title: 'Multiple Asset Classes',
      description:
        'Trade multiple asset classes like stocks, options and futures from automated trading strategy strategies.'
    },
    {
      title: 'Multiple Accounts',
      description:
        'Run your automated trading strategies in multiple accounts from one unified interface.'
    },
    {
      title: 'Unified Trading UI',
      description:
        'Manage all your trading activities across multiple accounts from one easy to use user interface.'
    },
    {
      title: 'Mobile Friendly',
      description:
        'TradersPost works great on mobile devices too in addition to the desktop.'
    },
    {
      title: 'Broker API',
      description:
        'Unified and standardized Broker API that makes it easy to build trading functionality into your application.'
    }
  ]
};

export const seeHowItWorks = {
  title: 'See how it works!',
  description:
    "Learn how to set up your own trading bot with TradersPost—it's quick and easy to begin automating your trading strategies. Take control of your investments with our powerful tools.",
  ctaLabel: 'Sign up for free',
  videoThumbnailUrl: 'https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg'
};

export const createAccountStrip = {
  title: 'Create your account',
  description:
    'Start building automated trading strategies with paper money for FREE. Upgrade to a paid plan to go live on top of your existing broker.',
  formLabel: 'Email address',
  placeholder: 'Enter your email',
  ctaLabel: 'Register',
  legalText:
    'By providing your email, you agree to our terms of service and privacy policy.'
};
