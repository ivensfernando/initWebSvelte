<script>
  export let assetType;
  export let assetClasses;
  export let tables = [];

  const assetColumns = ['Stocks', 'Futures', 'Options', 'Crypto'];

  const isActive = (column) => column === assetType;
</script>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>{assetClasses.title}</h2>
      <p>{assetClasses.description}</p>
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Brokers</th>
            {#each assetColumns as column}
              <th>{column}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each assetClasses.brokers as broker}
            <tr>
              <th>{broker}</th>
              {#each assetColumns as column}
                <td>{isActive(column) ? '✓' : ''}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

{#each tables as table}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>{table.title}</h2>
        <p>{table.description}</p>
      </div>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              {#each table.columns as column}
                <th>{column}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#if table.rows}
              {#each table.rows as row}
                <tr>
                  {#each row as cell}
                    <td>{cell}</td>
                  {/each}
                </tr>
              {/each}
            {:else}
              <tr>
                {#each table.columns as _column}
                  <td>✓</td>
                {/each}
              </tr>
            {/if}
          </tbody>
        </table>
      </div>
    </div>
  </section>
{/each}

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 640px;
  }

  th,
  td {
    text-align: left;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
  }

  thead th {
    background: var(--brand-50);
    font-weight: 600;
  }

  tbody th {
    font-weight: 600;
    color: var(--text);
  }

  .table-wrapper {
    margin-top: 24px;
    overflow-x: auto;
    border-radius: 16px;
    border: 1px solid var(--border);
    background: #fff;
  }

  @media (max-width: 640px) {
    table {
      min-width: 520px;
    }
  }
</style>
