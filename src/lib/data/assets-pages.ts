export const assetCards = [
  {
    title: 'Stocks',
    description:
      'Buy and sell US Equities and ETFs with brokers like Alpaca, TradeStation, Robinhood and more.',
    href: '/assets/stocks'
  },
  {
    title: 'Futures',
    description:
      'Stocks not enough? Need more? Trade futures contracts in brokers like TradeStation and Tradovate.',
    href: '/assets/futures'
  },
  {
    title: 'Options',
    description:
      'Are you an advanced options trader? Easily trade call and put options with brokers like TradeStation and E*TRADE.',
    href: '/assets/options'
  },
  {
    title: 'Crypto',
    description:
      'Trade the crypto markets 24/7 with your automated trading strategies in brokers like Coinbase, Binance and Bybit.',
    href: '/assets/crypto'
  },
  {
    title: 'Crypto Futures',
    description: 'Advanced crypto derivatives automation is on the way.',
    href: '/assets/crypto-futures',
    badge: 'Coming Soon'
  },
  {
    title: 'Forex',
    description: 'Automate major FX pairs and global currency markets soon.',
    href: '/assets/forex',
    badge: 'Coming Soon'
  }
];

const sharedTables = {
  tradingFlexibility: {
    title: 'Trading Flexibility',
    description:
      'Trade live or paper accounts, automate fully or partially, and scale your strategies with flexible order handling.',
    columns: [
      'Live Money Trading',
      'Paper Money Trading',
      'Auto Submit',
      'Side Swapping',
      'Shorting',
      'Fractional Quantity',
      'Multiple Orders at Once'
    ]
  },
  riskManagement: {
    title: 'Risk Management',
    description:
      'Protect every trade with sophisticated risk tools including stops, targets, and trailing logic across positions.',
    columns: [
      'Stop Losses',
      'Take Profits',
      'Trailing Stops',
      'Stop Loss Legs',
      'Take Profit Legs',
      'Trailing Stop Legs'
    ]
  },
  marketData: {
    title: 'Market Data',
    description:
      'Access market data feeds and paper trading sources to test strategies before going live.',
    columns: ['Market Data', 'Paper Market Data Source'],
    rows: [['Real-time broker data', 'Broker paper or simulated data']]
  }
};

export const assetPages = {
  stocks: {
    asset: 'Stocks',
    title: 'Automated Stocks Trading',
    heroText:
      "Interested in automating stocks trading strategies with TradingView or TrendSpider to make your own trading bot? Send alerts to us and we'll send orders to your account!",
    connectionsTitle: 'Supported Stocks Connections',
    connectionsText:
      'Automate your stocks trading with ease. TradersPost connects seamlessly with your platform to execute trades. Focus on your strategy, and let us handle the rest.',
    connections: [
      'tradingstation',
      'alpaca',
      'robinhood',
      'ibkr',
      'etrade',
      'tastytrade',
      'webull',
      'tradier',
      'traderspost_paper'
    ],
    assetClasses: {
      title: 'Asset Classes',
      description:
        'Trade across multiple asset classes with confidence. See which brokers offer the instruments you need.',
      brokers: [
        'TradeStation',
        'Alpaca',
        'Robinhood',
        'Interactive Brokers (Beta)',
        'E*TRADE',
        'tastytrade',
        'Webull',
        'Tradier',
        'TradersPost Paper'
      ]
    },
    tables: [sharedTables.tradingFlexibility, sharedTables.riskManagement, sharedTables.marketData],
    botsTitle: 'Stocks Trading Bots'
  },
  futures: {
    asset: 'Futures',
    title: 'Automated Futures Trading',
    heroText:
      "Interested in automating futures trading strategies with TradingView or TrendSpider to make your own trading bot? Send alerts to us and we'll send orders to your account!",
    connectionsTitle: 'Supported Futures Connections',
    connectionsText:
      'Automate your futures trading with ease. TradersPost connects seamlessly with your platform to execute trades. Focus on your strategy, and let us handle the rest.',
    connections: [
      'tradovate',
      'projectx',
      'tradingstation',
      'ninjatrader',
      'tastytrade',
      'traderspost_paper'
    ],
    assetClasses: {
      title: 'Asset Classes',
      description:
        'Trade across multiple asset classes with confidence. See which brokers offer the instruments you need.',
      brokers: [
        'Tradovate',
        'ProjectX',
        'TradeStation',
        'NinjaTrader',
        'tastytrade',
        'TradersPost Paper'
      ]
    },
    tables: [sharedTables.tradingFlexibility, sharedTables.riskManagement, sharedTables.marketData],
    botsTitle: 'Futures Trading Bots'
  },
  options: {
    asset: 'Options',
    title: 'Automated Options Trading',
    heroText:
      "Interested in automating options trading strategies with TradingView or TrendSpider to make your own trading bot? Send alerts to us and we'll send orders to your account!",
    connectionsTitle: 'Supported Options Connections',
    connectionsText:
      'Automate your options trading with ease. TradersPost connects seamlessly with your platform to execute trades. Focus on your strategy, and let us handle the rest.',
    connections: [
      'tradingstation',
      'alpaca',
      'etrade',
      'tastytrade',
      'tradier',
      'traderspost_paper'
    ],
    assetClasses: {
      title: 'Asset Classes',
      description:
        'Trade across multiple asset classes with confidence. See which brokers offer the instruments you need.',
      brokers: [
        'TradeStation',
        'Alpaca',
        'E*TRADE',
        'tastytrade',
        'Tradier',
        'TradersPost Paper'
      ]
    },
    tables: [sharedTables.tradingFlexibility, sharedTables.riskManagement, sharedTables.marketData],
    botsTitle: 'Options Trading Bots'
  },
  crypto: {
    asset: 'Crypto',
    title: 'Automated Crypto Trading',
    heroText:
      "Interested in automating crypto trading strategies with TradingView or TrendSpider to make your own trading bot? Send alerts to us and we'll send orders to your account!",
    connectionsTitle: 'Supported Crypto Connections',
    connectionsText:
      'Automate your crypto trading with ease. TradersPost connects seamlessly with your platform to execute trades. Focus on your strategy, and let us handle the rest.',
    connections: [
      'alpaca',
      'coinbase',
      'tastytrade',
      'kraken',
      'binance',
      'bybit',
      'crypto_com',
      'traderspost_paper'
    ],
    assetClasses: {
      title: 'Asset Classes',
      description:
        'Trade across multiple asset classes with confidence. See which brokers offer the instruments you need.',
      brokers: [
        'Alpaca',
        'Coinbase',
        'tastytrade',
        'Kraken',
        'Binance',
        'Bybit',
        'Crypto.com (Beta)',
        'TradersPost Paper'
      ]
    },
    tables: [sharedTables.tradingFlexibility, sharedTables.riskManagement, sharedTables.marketData],
    botsTitle: 'Crypto Trading Bots'
  }
};
