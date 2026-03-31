export type EmailCategory = 'travel' | 'commerce' | 'finance' | 'subscriptions' | 'urgent' | 'events' | 'school';

export interface RawEmail {
  id: string;
  from: string;
  subject: string;  // Traditional email subject
  body: string;     // Brief raw email body excerpt
  timestamp: string;
  category: EmailCategory;
}

export interface TransformedEmail {
  id: string;
  rawEmail: RawEmail;
  aiSummary: string;        // LLM-generated human summary
  action: string;           // Primary CTA text
  actionUrl?: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  workspace: string;        // Which workspace this belongs to
  mission?: string;         // Sub-grouping e.g. "Trip to Lisbon"
  status: 'pending' | 'in_progress' | 'resolved' | 'archived';
  extractedData?: Record<string, string>; // Structured data pulled from email
}

export interface Workspace {
  id: string;
  name: string;
  icon: string;  // Lucide icon name
  category: EmailCategory;
  color: string;
  emailCount: number;
  activeCount: number;
  description: string;
  missions: Mission[];
}

export interface Mission {
  id: string;
  name: string;
  emails: TransformedEmail[];
  status: 'active' | 'completed' | 'archived';
  progress: number; // 0-100
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  workspace: EmailCategory;
  icon: string;
  status: 'active' | 'suggested' | 'disabled';
}
