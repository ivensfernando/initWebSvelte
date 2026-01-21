<script>
  let nextId = 4;

  let sections = [
    {
      id: 1,
      title: '01. Strategy Foundation',
      tagline: 'Shape the thesis with visuals and evidence.',
      summary:
        'Gather market context, define the playbook, and align signals with Biidin-managed execution.',
      tasks: [
        {
          title: 'Market thesis storyboard',
          description: 'Use annotated charts and headlines to align the team on directional bias.',
          image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'
        },
        {
          title: 'Signal source catalog',
          description: 'Map indicator inputs to automated triggers to keep strategy design consistent.',
          image:
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80'
        },
        {
          title: 'Execution guardrails',
          description: 'Document risk limits and hand them off for Biidin-managed routing.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 2,
      title: '02. Alert Orchestration',
      tagline: 'Turn ideas into repeatable actions.',
      summary:
        'Design alerts, verify data formatting, and preview how Biidin relays tasks into live brokers.',
      tasks: [
        {
          title: 'Webhook storyboard',
          description: 'Visualize alert payloads so every team member understands the flow.',
          image:
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80'
        },
        {
          title: 'Payload validation',
          description: 'Check required fields and note response expectations for Biidin.',
          image:
            'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=900&q=80'
        },
        {
          title: 'Task timeline',
          description: 'Map each trigger to a time-based slide in the presentation deck.',
          image:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 3,
      title: '03. Monitoring & Insights',
      tagline: 'Show results, iterate fast.',
      summary:
        'Track outcomes, spotlight wins, and let Biidin-managed execution report back.',
      tasks: [
        {
          title: 'Performance snapshot',
          description: 'Use a hero chart image to summarize P/L, win-rate, and drawdown.',
          image:
            'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=900&q=80'
        },
        {
          title: 'Execution recap',
          description: 'Highlight how Biidin handled routing, fills, and broker confirmations.',
          image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
        },
        {
          title: 'Iteration checklist',
          description: 'Close the loop with next steps and visual owners for each update.',
          image:
            'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80'
        }
      ]
    }
  ];

  const newSectionTemplate = () => ({
    id: nextId++,
    title: `0${nextId - 1}. New Section`,
    tagline: 'Create a new flow with imagery and tasks.',
    summary:
      'Add a description for this section and outline the tasks that Biidin will handle.',
    tasks: [
      {
        title: 'Add a hero visual',
        description: 'Pick an image that establishes the mood for this section.',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Define the tasks',
        description: 'Explain the handoff and desired output in a short statement.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'
      }
    ]
  });

  const addSection = () => {
    sections = [...sections, newSectionTemplate()];
  };

  const removeSection = (id) => {
    sections = sections.filter((section) => section.id !== id);
  };
</script>

<main>
  <header class="hero">
    <div>
      <span class="eyebrow">Presentation Builder</span>
      <h1>Biidin Strategy Presentation</h1>
      <p>
        Build a visual-first deck that translates tasks into images and text. Each
        section is a slide-ready narrative with Biidin handling execution behind the
        scenes.
      </p>
      <div class="hero-actions">
        <button class="primary" type="button" on:click={addSection}>
          Add section
        </button>
        <button class="ghost" type="button">Download outline</button>
      </div>
    </div>
    <div class="hero-panel">
      <div class="hero-card">
        <img
          src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80"
          alt="Presentation board with sticky notes"
        />
        <div>
          <h3>Visual storytelling</h3>
          <p>Stack each task as an image-first slide.</p>
        </div>
      </div>
      <div class="hero-card">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Team collaborating over dashboards"
        />
        <div>
          <h3>Biidin workflow</h3>
          <p>Execution is monitored and coordinated by Biidin.</p>
        </div>
      </div>
    </div>
  </header>

  <section class="section-grid">
    {#each sections as section (section.id)}
      <article class="section-card">
        <div class="section-header">
          <div>
            <h2>{section.title}</h2>
            <p class="tagline">{section.tagline}</p>
          </div>
          <button
            class="remove"
            type="button"
            on:click={() => removeSection(section.id)}
            aria-label={`Remove ${section.title}`}
          >
            Remove
          </button>
        </div>
        <p class="summary">{section.summary}</p>
        <div class="tasks">
          {#each section.tasks as task}
            <div class="task-card">
              <img src={task.image} alt={task.title} />
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </article>
    {/each}
  </section>
</main>
