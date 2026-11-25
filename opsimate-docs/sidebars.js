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
        'integrations/custom-alerts',
        'integrations/grafana',
        'integrations/datadog',
        'integrations/gcp',
        'integrations/uptime-kuma',
        'integrations/zabbix',
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
      ],
    },
  ],
};

module.exports = sidebars;