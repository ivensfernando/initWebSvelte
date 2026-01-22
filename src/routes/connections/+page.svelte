<svelte:head>
  <title>Connections | TradersPost</title>
</svelte:head>

<script>
  const tabs = [
    'All Connections',
    'Stocks',
    'Futures',
    'Options',
    'Crypto',
    'Crypto Futures',
    'Forex'
  ];

  const logos = [
    { label: 'TradingView', color: '#4c6fff' },
    { label: 'Binance', color: '#f0b90b' },
    { label: 'TradeStation', color: '#1b75bb' },
    { label: 'Alpaca', color: '#f7c948' },
    { label: 'Kraken', color: '#5848c2' },
    { label: 'Coinbase', color: '#0052ff' },
    { label: 'OKX', color: '#1f1f1f' },
    { label: 'Bitget', color: '#00b7c2' },
    { label: 'KuCoin', color: '#00c38c' },
    { label: 'Bybit', color: '#f7a600' },
    { label: 'Deribit', color: '#2d9cdb' },
    { label: 'Tradovate', color: '#ef4444' },
    { label: 'NinjaTrader', color: '#f97316' },
    { label: 'Interactive Brokers', color: '#0b66c3' },
    { label: 'Tastytrade', color: '#ff4d4f' },
    { label: 'Paper', color: '#16a34a' }
  ];

  const brokers = [
    {
      name: 'Tradovate',
      statuses: ['none', 'full', 'none', 'none']
    },
    {
      name: 'ProjectX',
      statuses: ['none', 'full', 'none', 'none']
    },
    {
      name: 'TradeStation',
      statuses: ['full', 'full', 'full', 'none']
    },
    {
      name: 'Alpaca',
      statuses: ['full', 'none', 'full', 'full']
    },
    {
      name: 'Robinhood',
      statuses: ['full', 'none', 'none', 'none']
    },
    {
      name: 'Interactive Brokers',
      badge: 'Beta',
      statuses: ['full', 'none', 'none', 'none']
    },
    {
      name: 'NinjaTrader',
      statuses: ['none', 'full', 'none', 'none']
    },
    {
      name: 'E*TRADE',
      statuses: ['full', 'none', 'full', 'none']
    },
    {
      name: 'Coinbase',
      statuses: ['none', 'none', 'none', 'full']
    },
    {
      name: 'tastytrade',
      statuses: ['full', 'full', 'full', 'full']
    },
    {
      name: 'Webull',
      statuses: ['full', 'none', 'none', 'none']
    },
    {
      name: 'Tradier',
      statuses: ['full', 'none', 'full', 'none']
    },
    {
      name: 'Kraken',
      statuses: ['none', 'none', 'none', 'full']
    },
    {
      name: 'Binance',
      statuses: ['none', 'none', 'none', 'full']
    },
    {
      name: 'Bybit',
      statuses: ['none', 'none', 'none', 'full']
    },
    {
      name: 'Crypto.com',
      badge: 'Beta',
      statuses: ['none', 'none', 'none', 'full']
    },
    {
      name: 'TradersPost Paper',
      statuses: ['full', 'full', 'full', 'full']
    }
  ];
</script>

<section class="connections-hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">Connections</span>
      <h1>Integrate and automate</h1>
      <p>
        TradersPost makes trading automation easy by providing you access to enterprise-grade integrations with
        traditional brokers in stocks, futures, and options, as well as exchanges in crypto. We take care of all the
        complex parts of ensuring your automated signals and orders are routed to these integrations exactly the way you
        need.
      </p>
      <div class="hero-actions">
        <a class="btn primary" href="/connections">Connect</a>
        <a class="btn secondary" href="/register">Register</a>
      </div>
    </div>
    <div class="hero-logos">
      {#each logos as logo}
        <div class="logo-chip" style={`--chip:${logo.color}`}>
          <span>{logo.label}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="connections-tabs">
  <div class="container">
    <div class="tabs">
      {#each tabs as tab, index}
        <button class={`tab ${index === 0 ? 'active' : ''}`} type="button">{tab}</button>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="asset-card">
      <div class="asset-header">
        <div class="asset-icon">
          <span>◇</span>
        </div>
        <div>
          <h2>Asset Classes</h2>
          <p>
            Not all brokers support the same asset classes, and support can vary depending on both the broker and
            TradersPost. The table below clearly shows which asset classes are available for each broker, making it
            easier to compare your options and choose the one that fits your trading needs. In some cases, a broker may
            support an asset class, but due to technical or platform limitations, TradersPost may not yet support it.
          </p>
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Brokers</th>
              <th>Stocks</th>
              <th>Futures</th>
              <th>Options</th>
              <th>Crypto</th>
            </tr>
          </thead>
          <tbody>
            {#each brokers as broker}
              <tr>
                <td>
                  <div class="broker-name">
                    <span>{broker.name}</span>
                    {#if broker.badge}
                      <span class="badge">{broker.badge}</span>
                    {/if}
                  </div>
                </td>
                {#each broker.statuses as status}
                  <td class={`status ${status}`}>
                    {#if status === 'full'}
                      <span aria-hidden="true">✓</span>
                    {:else if status === 'partial'}
                      <span aria-hidden="true">◐</span>
                    {:else}
                      <span aria-hidden="true">—</span>
                    {/if}
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <div class="legend">
        <div><span class="dot full">✓</span> All asset classes fully supported</div>
        <div><span class="dot partial">◐</span> Partially supported on certain asset classes</div>
        <div><span class="dot none">—</span> Not supported</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="info-card">
      <div class="info-icon">⇄</div>
      <div>
        <h2>Trading Flexibility</h2>
        <p>
          Trading Flexibility encompasses everything from the ability to choose between live and paper trading, to
          enabling full or partial automation of your trades. Our robust integrations with each supported broker ensure
          you can go long or short, and even trade fractional quantities to fine-tune your position sizing. Whether you
          want to test a new strategy in a risk-free environment, rapidly execute signals without manual intervention, or
          tailor your trades down to fractional shares, we’ve built TradersPost to give you as much freedom as possible
          in how you trade.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .connections-hero {
    padding: clamp(40px, 6vw, 80px) 0;
    background: #fff;
  }

  .hero-grid {
    display: grid;
    gap: clamp(24px, 4vw, 56px);
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: center;
  }

  .eyebrow {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: #2c7be5;
    font-size: 12px;
  }

  .hero-copy h1 {
    margin: 12px 0 16px;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    flex-wrap: wrap;
  }

  .hero-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 16px;
  }

  .logo-chip {
    background: #f6f8fb;
    border-radius: 16px;
    padding: 16px 12px;
    text-align: center;
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
    position: relative;
  }

  .logo-chip::before {
    content: '';
    display: block;
    width: 36px;
    height: 36px;
    margin: 0 auto 10px;
    border-radius: 12px;
    background: var(--chip);
  }

  .logo-chip span {
    font-size: 12px;
    color: #1f2937;
    font-weight: 600;
  }

  .connections-tabs {
    border-top: 1px solid #eef1f4;
    border-bottom: 1px solid #eef1f4;
    background: #fafbfc;
    padding: 16px 0;
  }

  .tabs {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .tab {
    padding: 10px 18px;
    border-radius: 999px;
    border: none;
    background: #eef2f6;
    color: #334155;
    font-weight: 600;
    cursor: pointer;
  }

  .tab.active {
    background: #1f2937;
    color: #fff;
  }

  .asset-card {
    background: #fff;
    border-radius: 24px;
    padding: clamp(24px, 4vw, 36px);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  }

  .asset-header {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 24px;
  }

  .asset-icon {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: #f1f5f9;
    display: grid;
    place-items: center;
    font-size: 20px;
    color: #1e293b;
  }

  .table-wrap {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 640px;
  }

  thead th {
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6b7280;
    padding: 14px 12px;
    border-bottom: 1px solid #e5e7eb;
  }

  tbody td {
    padding: 14px 12px;
    border-bottom: 1px solid #f1f5f9;
    font-weight: 500;
    color: #1f2937;
  }

  .broker-name {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .badge {
    font-size: 11px;
    color: #2563eb;
    border: 1px solid #bfdbfe;
    background: #eff6ff;
    padding: 2px 8px;
    border-radius: 999px;
  }

  .status {
    text-align: center;
    font-weight: 700;
    color: #94a3b8;
  }

  .status.full {
    background: #ecfdf3;
    color: #16a34a;
  }

  .status.partial {
    background: #fef9c3;
    color: #ca8a04;
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 12px;
    color: #6b7280;
    margin-top: 24px;
  }

  .dot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    font-weight: 700;
  }

  .dot.full {
    background: #ecfdf3;
    color: #16a34a;
  }

  .dot.partial {
    background: #fef9c3;
    color: #ca8a04;
  }

  .dot.none {
    background: #f1f5f9;
    color: #94a3b8;
  }

  .info-card {
    background: #f8fafc;
    border-radius: 24px;
    padding: clamp(24px, 4vw, 36px);
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .info-icon {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: #e2e8f0;
    display: grid;
    place-items: center;
    font-size: 20px;
    color: #1f2937;
  }

  @media (max-width: 720px) {
    .asset-header,
    .info-card {
      flex-direction: column;
    }

    table {
      min-width: 100%;
    }
  }
</style>
