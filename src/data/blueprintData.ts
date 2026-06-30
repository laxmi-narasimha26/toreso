// Comprehensive Toreso Strategic Blueprint Data

export interface BlueprintNode {
  id: string;
  label: string;
  type: string;
  icon: string;
  summary: string;
  color: string;
  tier: number;
  details: {
    significance: string;
    justification: string;
    dataFlow: string;
    goals?: string[];
    features?: string[];
    challenges?: string[];
  };
}

// Comprehensive data covering all strategic aspects
export const BLUEPRINT_NODES: BlueprintNode[] = [
  // Tier 1: Personas
  {
    id: 'enterprise_buyer',
    label: 'Enterprise Buyer',
    type: 'Persona',
    icon: '??',
    summary: 'C-level executives and procurement managers seeking cost optimization and supply chain efficiency',
    color: '#3B82F6',
    tier: 1,
    details: {
      significance: 'Primary decision makers with substantial procurement budgets and authority to implement platform-wide solutions',
      justification: 'Target pain points around cost reduction, supplier consolidation, and procurement process efficiency',
      dataFlow: 'Initiates procurement requests, defines requirements, approves suppliers, and monitors performance metrics',
      goals: [
        'Reduce procurement costs by 15-25%',
        'Consolidate supplier base',
        'Improve procurement cycle time',
        'Enhance supplier quality control'
      ],
      features: [
        'Bulk RFQ management',
        'Supplier performance analytics',
        'Cost savings dashboard',
        'Compliance monitoring'
      ],
      challenges: [
        'Fragmented supplier ecosystem',
        'Manual procurement processes',
        'Limited supplier visibility',
        'Quality consistency issues'
      ]
    }
  },
  {
    id: 'msme_supplier',
    label: 'MSME Supplier',
    type: 'Persona',
    icon: '??',
    summary: 'Small and medium manufacturers providing packaging solutions seeking growth and operational efficiency',
    color: '#10B981',
    tier: 1,
    details: {
      significance: 'Critical supply-side participants who provide competitive pricing, flexibility, and specialized capabilities',
      justification: 'Enable platform scalability while providing growth opportunities for smaller manufacturers',
      dataFlow: 'Receives RFQs, submits quotes, manages production, delivers products, and handles payment processing',
      goals: [
        'Increase order volume by 40%',
        'Improve cash flow management',
        'Enhance operational efficiency',
        'Meet compliance requirements'
      ],
      features: [
        'Order management system',
        'Production planning tools',
        'Financial services integration',
        'Compliance documentation'
      ],
      challenges: [
        'Limited working capital',
        'Compliance complexity',
        'Technology adoption barriers',
        'Market access limitations'
      ]
    }
  },

  // Tier 2: Gateway
  {
    id: 'public_homepage',
    label: 'Public Homepage',
    type: 'Gateway',
    icon: '??',
    summary: 'Central entry point showcasing platform value proposition and driving user acquisition',
    color: '#8B5CF6',
    tier: 2,
    details: {
      significance: 'First impression that determines conversion rates and sets expectations for platform capabilities',
      justification: 'Designed to build immediate trust, demonstrate clear value, and guide users to appropriate entry points',
      dataFlow: 'Serves content, captures leads, routes users to registration, and tracks engagement metrics',
      features: [
        'Hero section with value proposition',
        'Trust indicators and testimonials',
        'Interactive cost calculator',
        'Feature showcase and demos'
      ]
    }
  },

  // Tier 3: Homepage Features
  {
    id: 'hero_section',
    label: 'Hero Section',
    type: 'Homepage Feature',
    icon: '??',
    summary: 'Compelling value proposition with clear financial benefits and premium brand positioning',
    color: '#F59E0B',
    tier: 3,
    details: {
      significance: 'Critical conversion element that captures attention and communicates core value within seconds',
      justification: 'Clear, quantified value proposition drives engagement and reduces bounce rates',
      dataFlow: 'Displays dynamic value propositions, captures user attention, and drives CTA engagement'
    }
  },
  {
    id: 'trust_bar',
    label: 'Trust Bar',
    type: 'Homepage Feature',
    icon: '??',
    summary: 'Social proof through recognized enterprise client logos and certifications',
    color: '#06B6D4',
    tier: 3,
    details: {
      significance: 'Establishes immediate credibility through association with recognized brands',
      justification: 'Enterprise buyers require social proof before engaging with new platforms',
      dataFlow: 'Displays client logos, certifications, and trust indicators to build confidence'
    }
  },
  {
    id: 'interactive_calculator',
    label: 'Interactive Calculator',
    type: 'Homepage Feature',
    icon: '??',
    summary: 'Personalized ROI demonstration tool showing potential cost savings',
    color: '#EF4444',
    tier: 3,
    details: {
      significance: 'Converts visitors by providing personalized, quantified value propositions',
      justification: 'Tangible savings estimates significantly increase conversion rates',
      dataFlow: 'Processes user inputs, calculates savings potential, and generates personalized reports'
    }
  },

  // Tier 4: Portals
  {
    id: 'supplier_portal',
    label: 'Supplier Portal',
    type: 'Portal',
    icon: '??',
    summary: 'Comprehensive management platform for supplier operations and growth',
    color: '#8B5CF6',
    tier: 4,
    details: {
      significance: 'Core platform experience that drives supplier engagement and operational efficiency',
      justification: 'Integrated tools reduce operational complexity and improve supplier satisfaction',
      dataFlow: 'Provides dashboard access, order management, and business intelligence tools',
      features: [
        'Centralized dashboard',
        'Order management system',
        'Financial services hub',
        'Compliance management'
      ]
    }
  },
  {
    id: 'buyer_portal',
    label: 'Buyer Portal',
    type: 'Portal',
    icon: '??',
    summary: 'Enterprise procurement management and supplier relationship platform',
    color: '#3B82F6',
    tier: 4,
    details: {
      significance: 'Central hub for procurement activities and supplier management',
      justification: 'Streamlined interface improves procurement efficiency and decision-making',
      dataFlow: 'Manages RFQs, supplier evaluation, order tracking, and performance analytics'
    }
  },

  // Tier 5: Supplier Features
  {
    id: 'mission_control_dashboard',
    label: 'Mission Control Dashboard',
    type: 'Supplier Feature',
    icon: '??',
    summary: 'Business intelligence hub with KPI monitoring and actionable insights',
    color: '#8B5CF6',
    tier: 5,
    details: {
      significance: 'Central command center that enables data-driven decision making for suppliers',
      justification: 'Real-time insights improve operational efficiency and business performance',
      dataFlow: 'Aggregates data from multiple sources, generates insights, and displays key metrics',
      features: [
        'Real-time KPI monitoring',
        'Performance analytics',
        'Trend analysis',
        'Alert management'
      ]
    }
  },
  {
    id: 'kanban_order_board',
    label: 'Kanban Order Board',
    type: 'Supplier Feature',
    icon: '??',
    summary: 'Visual production flow management with drag-and-drop workflow optimization',
    color: '#10B981',
    tier: 5,
    details: {
      significance: 'Streamlines production workflow and improves order fulfillment efficiency',
      justification: 'Visual workflow management reduces errors and improves coordination',
      dataFlow: 'Tracks order status, manages workflow stages, and coordinates production activities'
    }
  },
  {
    id: 'dynamic_pricing_studio',
    label: 'Dynamic Pricing Studio',
    type: 'Supplier Feature',
    icon: '??',
    summary: 'AI-powered pricing optimization with real-time market intelligence',
    color: '#F59E0B',
    tier: 5,
    details: {
      significance: 'Maximizes revenue through intelligent pricing while maintaining competitiveness',
      justification: 'Dynamic pricing improves margins and win rates simultaneously',
      dataFlow: 'Analyzes market data, optimizes pricing strategies, and generates competitive quotes'
    }
  },
  {
    id: 'financial_hub',
    label: 'Financial Hub',
    type: 'Supplier Feature',
    icon: '??',
    summary: 'Integrated financial services including payments, credit, and cash flow management',
    color: '#EF4444',
    tier: 5,
    details: {
      significance: 'Addresses critical cash flow challenges that limit MSME growth',
      justification: 'Financial services integration creates competitive advantage and supplier loyalty',
      dataFlow: 'Processes payments, manages credit facilities, and provides financial analytics'
    }
  },

  // Tier 6: Backend Services
  {
    id: 'order_aggregation_service',
    label: 'Order Aggregation Service',
    type: 'Backend Service',
    icon: '?',
    summary: 'Core platform value - transforms fragmented demand into consolidated orders',
    color: '#F59E0B',
    tier: 6,
    details: {
      significance: 'Fundamental value proposition that enables volume discounts and operational efficiency',
      justification: 'Order consolidation creates win-win scenarios for buyers and suppliers',
      dataFlow: 'Collects individual orders, identifies consolidation opportunities, and optimizes delivery schedules',
      features: [
        'Multi-location aggregation',
        'Volume-based pricing',
        'Delivery optimization',
        'Inventory management'
      ]
    }
  },
  {
    id: 'product_pricing_service',
    label: 'Product & Pricing Service',
    type: 'Backend Service',
    icon: '??',
    summary: 'Complex pricing logic engine with product catalog management',
    color: '#EF4444',
    tier: 6,
    details: {
      significance: 'Enables sophisticated pricing strategies and product management at scale',
      justification: 'Intelligent pricing drives platform value and supplier competitiveness',
      dataFlow: 'Manages product data, calculates dynamic pricing, and handles quote generation'
    }
  },
  {
    id: 'financial_service',
    label: 'Financial Service',
    type: 'Backend Service',
    icon: '??',
    summary: 'Payment processing, credit management, and financial transaction handling',
    color: '#10B981',
    tier: 6,
    details: {
      significance: 'Critical infrastructure for platform monetization and supplier support',
      justification: 'Integrated financial services improve platform stickiness and revenue',
      dataFlow: 'Processes payments, manages credit assessments, and handles financial settlements'
    }
  },
  {
    id: 'audit_compliance_service',
    label: 'Audit & Compliance Service',
    type: 'Backend Service',
    icon: '??',
    summary: 'Automated compliance verification and audit trail management',
    color: '#8B5CF6',
    tier: 6,
    details: {
      significance: 'Ensures platform integrity and meets enterprise compliance requirements',
      justification: 'Automated compliance reduces risk and improves supplier onboarding',
      dataFlow: 'Monitors compliance status, generates audit reports, and manages certification processes'
    }
  },

  // Tier 7: Technology Stack
  {
    id: 'apache_kafka',
    label: 'Apache Kafka',
    type: 'Technology',
    icon: '??',
    summary: 'Event-driven architecture backbone enabling real-time data processing',
    color: '#6B7280',
    tier: 7,
    details: {
      significance: 'Enables scalable, real-time data processing and system integration',
      justification: 'Event streaming architecture supports platform scalability and responsiveness',
      dataFlow: 'Handles all inter-service communication, event processing, and data streaming'
    }
  },
  {
    id: 'aws_cloud',
    label: 'AWS Cloud Infrastructure',
    type: 'Technology',
    icon: '??',
    summary: 'Enterprise-grade cloud infrastructure providing scalability and reliability',
    color: '#374151',
    tier: 7,
    details: {
      significance: 'Provides scalable, secure, and reliable infrastructure foundation',
      justification: 'Cloud-native architecture ensures high availability and global reach',
      dataFlow: 'Hosts all platform services, manages data storage, and provides security infrastructure'
    }
  },
  {
    id: 'microservices_architecture',
    label: 'Microservices Architecture',
    type: 'Technology',
    icon: '??',
    summary: 'Modular service architecture enabling independent scaling and deployment',
    color: '#10B981',
    tier: 7,
    details: {
      significance: 'Enables rapid development, independent scaling, and system resilience',
      justification: 'Microservices architecture supports agile development and operational flexibility',
      dataFlow: 'Decomposes platform functionality into independently deployable services'
    }
  },
  {
    id: 'postgresql_database',
    label: 'PostgreSQL Database',
    type: 'Technology',
    icon: '???',
    summary: 'Robust relational database for transactional data and business logic',
    color: '#3B82F6',
    tier: 7,
    details: {
      significance: 'Provides reliable data storage and complex query capabilities',
      justification: 'PostgreSQL offers enterprise-grade reliability and advanced features',
      dataFlow: 'Stores transactional data, user information, and business process data'
    }
  }
];

// Helper functions
export const getNodeById = (id: string): BlueprintNode | undefined => {
  return BLUEPRINT_NODES.find(node => node.id === id);
};

export const getFilteredNodes = (filters: Record<string, boolean>): BlueprintNode[] => {
  // For now, return all nodes - can implement filtering logic as needed
  return BLUEPRINT_NODES;
};

export const getNodesByTier = (tier: number): BlueprintNode[] => {
  return BLUEPRINT_NODES.filter(node => node.tier === tier);
};

export const getTierLabel = (tier: number): string => {
  const labels: Record<number, string> = {
    1: 'Personas',
    2: 'Gateway',
    3: 'Homepage Features',
    4: 'Portals',
    5: 'Supplier Features',
    6: 'Backend Services',
    7: 'Technology Stack'
  };
  return labels[tier] || `Tier ${tier}`;
};

