import { Agent } from './types';

export const mockAgents: Agent[] = [
  {
    id: 'agent_travel',
    name: 'Travel Agent',
    description: 'Automatically tracks flights, hotels, ground transport, and travel documents. Monitors delays and assists with rebooking.',
    capabilities: [
      'Flight tracking and updates',
      'Add boarding passes to digital wallet',
      'Monitor delays and cancellations',
      'Track hotel & car rental reservations',
      'Calculate travel times and plan connections',
      'Monitor luggage allowances',
      'Generate travel itineraries',
      'Assist with rebooking on delays',
    ],
    workspace: 'travel',
    icon: 'Plane',
    status: 'active',
  },
  {
    id: 'agent_commerce',
    name: 'Commerce Agent',
    description: 'Monitors all online orders and shipments. Tracks packages, handles returns, processes refunds, and alerts you to issues.',
    capabilities: [
      'Real-time package tracking',
      'Track refund status',
      'Initiate returns automatically',
      'Monitor price drops on orders',
      'Estimate delivery windows',
      'Alert on package delays',
      'Handle warranty claims',
      'Monitor delivery attempt issues',
    ],
    workspace: 'commerce',
    icon: 'ShoppingBag',
    status: 'active',
  },
  {
    id: 'agent_finance',
    name: 'Finance Agent',
    description: 'Categorizes transactions, flags unusual activity, prepares tax documents, and provides monthly spending summaries.',
    capabilities: [
      'Flag suspicious transactions',
      'Categorize spending by type',
      'Monthly expense summaries',
      'Tax document preparation',
      'Salary & benefits tracking',
      'Bill reminders and payments',
      'Budget monitoring and alerts',
      'Currency exchange tracking',
    ],
    workspace: 'finance',
    icon: 'Wallet',
    status: 'active',
  },
  {
    id: 'agent_events',
    name: 'Events Agent',
    description: 'Syncs events to your calendar, sends timely reminders, suggests transport and prepares event details.',
    capabilities: [
      'Sync tickets to calendar',
      'Appointment reminders (24h, 1h, 15m)',
      'Auto-sync event location to maps',
      'Calculate travel time to venue',
      'Suggest transport options (Uber, rail)',
      'Store tickets in digital wallet',
      'Alert on event cancellations',
      'Seat map previews for concerts/events',
    ],
    workspace: 'events',
    icon: 'Calendar',
    status: 'active',
  },
  {
    id: 'agent_subscriptions',
    name: 'Subscriptions Agent',
    description: 'Tracks recurring charges, cancellations, and renewals. Alerts on price changes and duplicate subscriptions.',
    capabilities: [
      'Track all subscriptions',
      'One-click cancellation',
      'Price change alerts',
      'Duplicate subscription detection',
      'Auto-renewal reminders',
      'Cost consolidation reports',
      'Compare similar services',
    ],
    workspace: 'subscriptions',
    icon: 'RotateCcw',
    status: 'suggested',
  },
  {
    id: 'agent_urgent',
    name: 'Alert Escalator',
    description: 'Surfaces critical alerts and urgent actions. Ensures you never miss time-sensitive emails.',
    capabilities: [
      'Critical alert escalation',
      'Time-sensitive action prioritization',
      'Notification suppression (quiet mode)',
      'Custom urgency rules',
      'Smart batching of lower-priority alerts',
      'Contact blocking for spam',
      'Phishing detection',
    ],
    workspace: 'urgent',
    icon: 'AlertCircle',
    status: 'active',
  },
];

// Helper functions
export const getAgentById = (id: string): Agent | undefined => {
  return mockAgents.find((agent) => agent.id === id);
};

export const getAgentsByWorkspace = (workspace: string): Agent[] => {
  return mockAgents.filter((agent) => agent.workspace === workspace);
};

export const getActiveAgents = (): Agent[] => {
  return mockAgents.filter((agent) => agent.status === 'active');
};

export const getSuggestedAgents = (): Agent[] => {
  return mockAgents.filter((agent) => agent.status === 'suggested');
};

export const getDisabledAgents = (): Agent[] => {
  return mockAgents.filter((agent) => agent.status === 'disabled');
};
