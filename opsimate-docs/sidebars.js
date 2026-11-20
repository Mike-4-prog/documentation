// sidebars.js
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // 1. Overview
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        { type: 'doc', id: 'intro', label: 'Welcome to OpsiMate' },
        { type: 'doc', id: 'getting-started/introduction', label: 'Core Features' },
      ],
    },

    // 2. Get Started
    {
      type: 'category',
      label: 'Get Started',
      collapsed: true,
      items: [
        'getting-started/configuration',
        'getting-started/quick-start', 
      ],
    },

    // 3. Integrate
    {
      type: 'category',
      label: 'Integrate',
      collapsed: true,
      items: [
        'integrations/overview',
        'integrations/grafana',
        'integrations/datadog',
        'integrations/gcp',
        'integrations/uptime-kuma',
        'integrations/zabbix',
        'providers-services/overview',
        {
          type: 'category',
          label: 'Providers',
          collapsed: true,
          items: [
            'providers-services/providers/add-provider',
            'providers-services/providers/server-provider',
            'providers-services/providers/kubernetes-provider',
          ],
        },
        {
          type: 'category',
          label: 'Services',
          collapsed: true,
          items: [
            'providers-services/services/add-services',
            'providers-services/services/container-services',
            'providers-services/services/systemd-services',
            'providers-services/services/kubernetes-pods',
          ],
        },
      ],
    },

    // 4. Monitor
    {
      type: 'category',
      label: 'Monitor',
      collapsed: true,
      items: [
        'alerts/adding-alerts',
        'alerts/alert-management',
        'alerts/tv-mode-view',
        'dashboards/saved-dashboards',
        'alerts/archived-alerts',
      ],
    },

    // 5. Respond
    {
      type: 'category',
      label: 'Respond',
      collapsed: true,
      items: [
        'alerts/enrichments',
        'alerts/actions',
        'alerts/silences-and-mute-policies',
        'alerts/root-cause-analysis',
        'alerts/insights',
      ],
    },

    // 6. Configure
    {
      type: 'category',
      label: 'Configure',
      collapsed: true,
      items: [
        'user-management/register-login',
        'user-management/admin-panel',
        'user-management/audit-logs',
      ],
    },

    // 7. Develop
    {
      type: 'category',
      label: 'Develop',
      collapsed: true,
      items: [
        'development',
        'contributing/index',
      ],
    },
    
    // Extra pages
    'glossary/index',
    'faq/index',
    'legal/privacy',
  ],
};

module.exports = sidebars;