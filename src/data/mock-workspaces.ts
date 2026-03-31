import { Workspace, Mission } from './types';
import { transformedEmails } from './mock-emails';

export const mockWorkspaces: Workspace[] = [
  {
    id: 'workspace_travel',
    name: 'Travel',
    icon: 'Plane',
    category: 'travel',
    color: 'bg-blue-50 border-blue-200',
    emailCount: 12,
    activeCount: 5,
    description: 'Flights, hotels, transport, bookings',
    missions: [
      {
        id: 'mission_lisbon_trip',
        name: 'Lisbon Trip',
        emails: [
          transformedEmails[0], // Flight BA2490
          transformedEmails[1], // Pestana hotel
          transformedEmails[2], // Uber airport transfer
          transformedEmails[11], // Flight delay alert
        ],
        status: 'active',
        progress: 35,
      },
      {
        id: 'mission_past_trips',
        name: 'Past Trips',
        emails: [],
        status: 'completed',
        progress: 100,
      },
    ],
  },
  {
    id: 'workspace_shopping',
    name: 'Shopping',
    icon: 'ShoppingBag',
    category: 'commerce',
    color: 'bg-orange-50 border-orange-200',
    emailCount: 15,
    activeCount: 8,
    description: 'Orders, shipments, returns, refunds',
    missions: [
      {
        id: 'mission_active_orders',
        name: 'Active Orders',
        emails: [
          transformedEmails[3], // Nike Air Max shipped
          transformedEmails[4], // Amazon Power Bank delayed
          transformedEmails[5], // ASOS return processed
        ],
        status: 'active',
        progress: 42,
      },
      {
        id: 'mission_completed_orders',
        name: 'Completed Orders',
        emails: [],
        status: 'completed',
        progress: 100,
      },
    ],
  },
  {
    id: 'workspace_finance',
    name: 'Finance',
    icon: 'Wallet',
    category: 'finance',
    color: 'bg-green-50 border-green-200',
    emailCount: 18,
    activeCount: 3,
    description: 'Payments, salary, tax, alerts',
    missions: [
      {
        id: 'mission_monthly_overview',
        name: 'Monthly Overview',
        emails: [
          transformedEmails[6], // Monzo unusual transaction
          transformedEmails[7], // Tax return reminder
          transformedEmails[8], // Salary credited
        ],
        status: 'active',
        progress: 67,
      },
      {
        id: 'mission_tax_2025_26',
        name: 'Tax Year 2025-26',
        emails: [transformedEmails[7]],
        status: 'active',
        progress: 5,
      },
    ],
  },
  {
    id: 'workspace_events',
    name: 'Events',
    icon: 'Calendar',
    category: 'events',
    color: 'bg-purple-50 border-purple-200',
    emailCount: 8,
    activeCount: 6,
    description: 'Appointments, tickets, reminders',
    missions: [
      {
        id: 'mission_upcoming_events',
        name: 'Upcoming Events',
        emails: [
          transformedEmails[9], // Concert tickets
          transformedEmails[10], // Dentist appointment
        ],
        status: 'active',
        progress: 50,
      },
      {
        id: 'mission_past_events',
        name: 'Past Events',
        emails: [],
        status: 'completed',
        progress: 100,
      },
    ],
  },
];

// Helper function to get workspace by category
export const getWorkspaceByCategory = (category: string): Workspace | undefined => {
  return mockWorkspaces.find((ws) => ws.category === category);
};

// Helper function to get all missions
export const getAllMissions = (): Mission[] => {
  return mockWorkspaces.flatMap((ws) => ws.missions);
};

// Helper function to get mission by ID
export const getMissionById = (id: string): Mission | undefined => {
  for (const workspace of mockWorkspaces) {
    const mission = workspace.missions.find((m) => m.id === id);
    if (mission) return mission;
  }
  return undefined;
};

// Helper function to get active missions
export const getActiveMissions = (): Mission[] => {
  return getAllMissions().filter((m) => m.status === 'active');
};

// Helper function to get mission progress stats
export const getMissionStats = (mission: Mission) => {
  const totalEmails = mission.emails.length;
  const resolvedEmails = mission.emails.filter((e) => e.status === 'resolved').length;
  const pendingEmails = mission.emails.filter((e) => e.status === 'pending').length;
  const inProgressEmails = mission.emails.filter((e) => e.status === 'in_progress').length;

  return {
    totalEmails,
    resolvedEmails,
    pendingEmails,
    inProgressEmails,
    completionPercentage: totalEmails > 0 ? Math.round((resolvedEmails / totalEmails) * 100) : 0,
  };
};
