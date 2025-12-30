'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  sNo: number
  customerName: string
  parentGroup: string
  country: string
  city: string
  coreIndustry: string
  facilityType: string
  businessOverview?: string
  industryVertical?: string
  totalAnnualRevenue?: string
  productTypeFocus?: string
  accessControlModernizationStatus?: string
  keyContactPerson?: string
  designation?: string
  emailAddress?: string
  phoneNumber?: string
  linkedInProfile?: string
  websiteUrl?: string
  // Professional Drivers (for Proposition 2)
  primaryMotivation?: string
  upcomingTriggers?: string
  riskLevel?: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  budgetOwnership?: string
  procurementModel?: string
  budgetApproach?: string
  preferredEngagementType?: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType?: string
  preferredDeploymentModel?: string
  implementationTimeline?: string
  serviceExpectations?: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking?: string
  additionalComments?: string
}

// Distributor data for Preposition 1
interface DistributorData {
  sNo: number
  chemicalType: string
  distributorCompanyName: string
  headquartersLocation: string
  yearOfEstablishment: string
  ownershipStructure: string
  contactName: string
  tel: string
  emailId: string
  // Business Overview
  coreBusinessActivities: string
  chemicalsSupplied: string
  keyBrands: string
  // Operational Scale & Reach
  distributionHubs: string
  geographicCoverage: string
  customerSegments: string
  // Market Positioning & Differentiation
  certifications: string
  approxRevenueEmployees: string
  strengthsStrategicRelevance: string
}

// Producer data for Preposition 2
interface ProducerData {
  sNo: number
  producerCompanyName: string
  headquartersLocation: string
  yearOfEstablishment: string
  ownershipStructure: string
  contactNameDesignation: string
  tel: string
  emailId: string
  // Business Overview
  solventsRecovered: string
  industriesServed: string
  recoveryTechnologies: string
  productionCapacity: string
  certifications: string
  circularEconomyCommitments: string
  // Market Positioning & Differentiation
  competitiveStrengths: string
  partnershipsClients: string
}

// End-user/Customer data for Preposition 3
interface EndUserData {
  sNo: number
  customerCompanyName: string
  headquartersLocation: string
  yearOfEstablishment: string
  industryClassification: string
  contactNameDesignation: string
  tel: string
  emailId: string
  // Procurement & Usage Insights
  currentAdoptionOfRecoveredSolvents: string
  demandVolumesOrIntensity: string
  procurementPriorities: string
  barriersToAdoption: string
  // Strategic Relevance
  recentSustainabilityEsgInitiatives: string
  keyPartnershipsInSolventSourcing: string
}

const sampleProducerData: ProducerData[] = [
  {
    sNo: 1,
    producerCompanyName: 'OFRU Recycling GmbH & Co. KG',
    headquartersLocation: 'Bavaria, Germany',
    yearOfEstablishment: '1978',
    ownershipStructure: 'Family-owned',
    contactNameDesignation: 'Michael Robinson (CEO)',
    tel: '49 6023 50422-0',
    emailId: 'info@ofru.com',
    solventsRecovered: 'Acetone Toluene Xylene, Isopropyl Alcohol (IPA), Methyl Ethyl Ketone (MEK), Ethanol Ethyl Acetate Methanol, Butyl',
    industriesServed: 'Pharmaceuticals, Coatings & Paints, Adhesives, Inks & Printing, Chemicals, Electronics, and others',
    recoveryTechnologies: 'Vacuum Distillation, Fractional Distillation, Scraper Systems',
    productionCapacity: 'Capacity Range: 20–1000+ liters per hour',
    certifications: 'ISO 9001:2015, ISO 14001:2015, IECEx Certification',
    circularEconomyCommitments: 'Solvent recovery, waste reduction, reuse & recycling programs',
    competitiveStrengths: 'OFRU Recycling\'s competitive strengths lie in its ability to provide cost savings compared to virgin solvents, its niche specialization in high-performance solvent',
    partnershipsClients: 'The company has established partnerships with firms like Flexo Wash and serves notable clients including Nippon Paints, PPG, BASF'
  },
  {
    sNo: 2,
    producerCompanyName: 'Dürr Systems AG',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 3,
    producerCompanyName: 'Veolia Environmental Services',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 4,
    producerCompanyName: 'Producer 4',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 5,
    producerCompanyName: 'Producer 5',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 6,
    producerCompanyName: 'Producer 6',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 7,
    producerCompanyName: 'Producer 7',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 8,
    producerCompanyName: 'Producer 8',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 9,
    producerCompanyName: 'Producer 9',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 10,
    producerCompanyName: 'Producer 10',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 11,
    producerCompanyName: 'Producer 11',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 12,
    producerCompanyName: 'Producer 12',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  },
  {
    sNo: 13,
    producerCompanyName: 'Producer 13',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    solventsRecovered: 'xx',
    industriesServed: 'xx',
    recoveryTechnologies: 'xx',
    productionCapacity: 'xx',
    certifications: 'xx',
    circularEconomyCommitments: 'xx',
    competitiveStrengths: 'xx',
    partnershipsClients: 'xx'
  }
]

const sampleDistributorData: DistributorData[] = [
  {
    sNo: 1,
    chemicalType: 'Alkalis, Solvents – Alcohols, Solvents – Ketones, Solvents - Esters, Solvents – Glycols & Glycol Ethers, Solvents – Aromatic, Solvents- Hydrocarbons',
    distributorCompanyName: 'Solventis',
    headquartersLocation: 'England, U.K.',
    yearOfEstablishment: '2002',
    ownershipStructure: 'Family-owned',
    contactName: 'David Lubbock',
    tel: '32 (0) 3 205 16 66',
    emailId: 'sales@solventis.net',
    coreBusinessActivities: 'Solventis is primarily a stockist and bulk distributor of petrochemical solvents.',
    chemicalsSupplied: 'Alkalis, Solvents – Alcohols, Solvents – Ketones, Solvents – Esters, Solvents – Glycols & Glycol Ethers, Solvents – Aromatics, Solvents – Hydrocarbons',
    keyBrands: 'Solventis holds an exclusive licensing agreement with Kilfrost Group PLC for aircraft de-icing fluids; their subsidiary Kilfrost Europe handles those products.',
    distributionHubs: 'Antwerp, Scunthorpe, Guildford',
    geographicCoverage: 'Pan-European, EMEA, Global',
    customerSegments: 'Manufacturing, Automotive, Chemicals, Coatings, Adhesives, Paints',
    certifications: 'ISO9001, ISO14001, REACH, Responsible Care, CyberEssentials',
    approxRevenueEmployees: 'US$ 351.77 Mn. & ~70',
    strengthsStrategicRelevance: 'Antwerp, Blending, Storage, Logistics, Commodity, Sustainability, Brenntag'
  },
  {
    sNo: 2,
    chemicalType: 'xx',
    distributorCompanyName: 'Tradebe Medioambiente, S.I.',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 3,
    chemicalType: 'xx',
    distributorCompanyName: 'Sojitz Solvadis GmbH',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 4,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 4',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 5,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 5',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 6,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 6',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 7,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 7',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 8,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 8',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 9,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 9',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 10,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 10',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 11,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 11',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 12,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 12',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  },
  {
    sNo: 13,
    chemicalType: 'xx',
    distributorCompanyName: 'Distributor 13',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    ownershipStructure: 'xx',
    contactName: 'xx',
    tel: 'xx',
    emailId: 'xx',
    coreBusinessActivities: 'xx',
    chemicalsSupplied: 'xx',
    keyBrands: 'xx',
    distributionHubs: 'xx',
    geographicCoverage: 'xx',
    customerSegments: 'xx',
    certifications: 'xx',
    approxRevenueEmployees: 'xx',
    strengthsStrategicRelevance: 'xx'
  }
]

// Sample end-user/customer data for Preposition 3
const sampleEndUserData: EndUserData[] = [
  {
    sNo: 1,
    customerCompanyName: 'Syngenta',
    headquartersLocation: 'Basel, Switzerland',
    yearOfEstablishment: '2000',
    industryClassification: 'Agrochemicals, Seed & Crop Protection, Specialty Chemicals',
    contactNameDesignation: 'Jeff Rowe (CEO)',
    tel: 'xx',
    emailId: 'media.relations@syngentagroup.com',
    currentAdoptionOfRecoveredSolvents: 'Yes, Syngenta has partnered with Indaver, a European waste management company, to establish a £35 million solvent recycling facility at Syngenta\'s Huddersfield site in the UK. This facility aims to process and recycle 15,000 tonnes of industrial waste annually to recover acetonitrile (CAN), a solvent used in pharmaceuticals and agriculture.The project is currently assessing feasibility, with construction expected to begin in 2026 and operations commencing in 2028',
    demandVolumesOrIntensity: 'Specific figures: While exact demand volumes for recovered solvents are not publicly disclosed, the establishment of the Huddersfield recycling facility indicates a significant commitment to solvent recovery.Context: The facility\'s capacity to process 15,000 tonnes of industrial waste annually suggests a substantial demand for recovered solvents, particularly acetonitrile, within Syngenta\'s operations.',
    procurementPriorities: 'Price: Competitive pricing is essential to maintain cost-effectiveness in procurement. Quality: High-quality recovered solvents are crucial to ensure product performance and compliance with industry standards. Compliance: Adherence to environmental regulations and industry standards is a top priority. ESG Targets: Syngenta\'s sustainability initiatives, such as the Sustainable Sourcing Programme, emphasize the importance of environmental, social, and governance factors in procurement decisions. Producer Reliability: Consistent and dependable Producers are vital to ensure uninterrupted operations and supply chain stability.',
    barriersToAdoption: 'Performance Perception: There may be concerns regarding the performance of recovered solvents compared to virgin solvents, especially in critical applications. Certification Gaps: Lack of standardized certifications for recovered solvents can pose challenges in ensuring quality and regulatory compliance. Infrastructure Costs: The initial investment required for setting up solvent recovery facilities and associated infrastructure can be significant. Regulatory Compliance: Navigating the complex regulatory landscape for recovered solvents can be challenging, requiring careful management to ensure compliance.',
    recentSustainabilityEsgInitiatives: 'Syngenta is committed to advancing sustainability and circular economy principles within its operations. A notable initiative is the collaboration with Indaver, a European waste management company, to establish a solvent recycling facility at Syngenta\'s Huddersfield site in the UK. This facility aims to process and recycle 15,000 tonnes of industrial waste annually, recovering acetonitrile (CAN), a vital solvent in agricultural product manufacturing.',
    keyPartnershipsInSolventSourcing: 'Syngenta has partnered with Indaver to develop the solvent recycling facility in Huddersfield. Indaver will build, own, and operate the facility, processing Syngenta\'s industrial waste to recover CAN.'
  },
  {
    sNo: 2,
    customerCompanyName: 'Hempel A/S (Coatings)',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 3,
    customerCompanyName: 'Sika AG (Adhesives/Sealants/Coatings)',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 4,
    customerCompanyName: 'Bostik (Arkema Adhesive Solutions)',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 5,
    customerCompanyName: 'Customer 5',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 6,
    customerCompanyName: 'Customer 6',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 7,
    customerCompanyName: 'Customer 7',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 8,
    customerCompanyName: 'Customer 8',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 9,
    customerCompanyName: 'Customer 9',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 10,
    customerCompanyName: 'Customer 10',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 11,
    customerCompanyName: 'Customer 11',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 12,
    customerCompanyName: 'Customer 12',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  },
  {
    sNo: 13,
    customerCompanyName: 'Customer 13',
    headquartersLocation: 'xx',
    yearOfEstablishment: 'xx',
    industryClassification: 'xx',
    contactNameDesignation: 'xx',
    tel: 'xx',
    emailId: 'xx',
    currentAdoptionOfRecoveredSolvents: 'xx',
    demandVolumesOrIntensity: 'xx',
    procurementPriorities: 'xx',
    barriersToAdoption: 'xx',
    recentSustainabilityEsgInitiatives: 'xx',
    keyPartnershipsInSolventSourcing: 'xx'
  }
]

// Sample data for demonstration
const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    customerName: 'Saudi Aramco - Ras Tanura Refinery',
    parentGroup: 'Saudi Aramco',
    country: 'Saudi Arabia',
    city: 'Ras Tanura',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Refinery',
    businessOverview: 'World\'s largest integrated energy and chemicals company',
    industryVertical: 'Oil & Gas / Energy',
    totalAnnualRevenue: '400,000',
    productTypeFocus: 'Critical Infrastructure Protection',
    accessControlModernizationStatus: 'Exploring Options',
    keyContactPerson: 'Ahmed Al-Rashid',
    designation: 'Corporate Security Director',
    emailAddress: 'a.rashid@aramco.com',
    phoneNumber: '+966 13 877 0000',
    linkedInProfile: 'linkedin.com/in/ahmedal',
    websiteUrl: 'www.aramco.com',
    primaryMotivation: 'Replace aging/legacy PAC systems, Strengthen identity-Centric security/Zero Trust',
    upcomingTriggers: 'New facility openings / campus expansions, VMS or alarm system upgrades requiring integration',
    riskLevel: 'Medium',
    budgetOwnership: 'Corporate Security',
    procurementModel: 'Via Global SI (e.g., for multi-site rollouts)',
    budgetApproach: 'Enterprise/global rollout, Capex (hardware-heavy)',
    preferredEngagementType: 'Multi-year modernization program',
    preferredSolutionType: 'Multi-site unified access platform, Biometric access (fingerprint, facial, multimodal)',
    preferredDeploymentModel: 'Private Cloud (regulated industries)',
    implementationTimeline: 'Enterprise-wide modernization: 24–36 months',
    serviceExpectations: 'System design & architecture planning, Hardware installation & cabling, 24/7 monitoring / support',
    customerBenchmarking: 'High potential - Global leader in critical infrastructure',
    additionalComments: 'Strong security focus, requires integration with existing SCADA systems'
  },
  {
    sNo: 2,
    customerName: 'ADNOC Refining - Ruwais',
    parentGroup: 'ADNOC Group',
    country: 'UAE',
    city: 'Ruwais Industrial City',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Refinery',
    businessOverview: 'Leading diversified energy company',
    industryVertical: 'Oil & Gas / Energy',
    totalAnnualRevenue: '60,000',
    productTypeFocus: 'Industrial Facility Security',
    accessControlModernizationStatus: 'Pilot Testing',
    keyContactPerson: 'Fatima Al-Mansouri',
    designation: 'IT Security Head',
    emailAddress: 'f.mansouri@adnoc.ae',
    phoneNumber: '+971 2 602 0000',
    linkedInProfile: 'linkedin.com/in/fatimam',
    websiteUrl: 'www.adnoc.ae',
    primaryMotivation: 'Improve operational efficiency & central monitoring, Enable mobile credentials & lower card issuance costs',
    upcomingTriggers: 'Digital transformation initiatives, Cyber-physical security convergence projects',
    riskLevel: 'High',
    budgetOwnership: 'IT / Digital Infrastructure',
    procurementModel: 'Via Regional System Integrator (SI)',
    budgetApproach: 'Mid-scale campus program, Hybrid spend',
    preferredEngagementType: 'Pilot - Scale Model',
    preferredSolutionType: 'Cloud-based PACS, Mobile access (BLE/NFC)',
    preferredDeploymentModel: 'SaaS / Cloud PACS (growing demand)',
    implementationTimeline: 'Quick pilot: 3–6 months',
    serviceExpectations: 'Software configuration (HFR, IAM, VMS), Training & onboarding',
    customerBenchmarking: 'High potential - Active pilot with mobile credentials',
    additionalComments: 'Fast-track implementation, focus on mobile-first approach'
  },
  {
    sNo: 3,
    customerName: 'Qatar Petroleum - Mesaieed Industrial',
    parentGroup: 'QatarEnergy',
    country: 'Qatar',
    city: 'Mesaieed',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Petrochemical',
    businessOverview: 'State-owned petroleum company',
    industryVertical: 'Oil & Gas / Petrochemicals',
    totalAnnualRevenue: '52,000',
    productTypeFocus: 'Petrochemical Plant Security',
    accessControlModernizationStatus: 'No Activity',
    keyContactPerson: 'Mohammed Al-Thani',
    designation: 'Facilities Manager',
    emailAddress: 'm.thani@qatarenergy.qa',
    phoneNumber: '+974 4013 3333',
    linkedInProfile: 'linkedin.com/in/mohammedt',
    websiteUrl: 'www.qatarenergy.qa',
    primaryMotivation: 'Meet compliance requirements (ISO, GDPR, regulatory mandates)',
    upcomingTriggers: 'Compliance audits prompting modernization',
    riskLevel: 'Low',
    budgetOwnership: 'Facilities Management',
    procurementModel: 'RFP-driven competitive process',
    budgetApproach: 'Pilot/Beta deployment',
    preferredEngagementType: 'Turnkey project with integrator',
    preferredSolutionType: 'Card-based access control',
    preferredDeploymentModel: 'On-Premises (traditional security-sensitive environments)',
    implementationTimeline: 'Phased migration of old hardware to new ecosystem',
    serviceExpectations: 'Compliance & audit support',
    customerBenchmarking: 'Medium potential - Early stage evaluation',
    additionalComments: 'Awaiting budget approval for modernization initiative'
  },
  {
    sNo: 4,
    customerName: 'Kuwait National Petroleum Company',
    parentGroup: 'KNPC',
    country: 'Kuwait',
    city: 'Mina Al-Ahmadi',
    coreIndustry: 'Oil & Gas',
    facilityType: 'Refinery',
    businessOverview: 'Kuwait\'s national oil refining company',
    industryVertical: 'Oil & Gas / Refining',
    totalAnnualRevenue: '35,000',
    productTypeFocus: 'Refinery Access Management',
    accessControlModernizationStatus: 'Exploring Options',
    keyContactPerson: 'Khalid Al-Sabah',
    designation: 'Physical Security Manager',
    emailAddress: 'k.sabah@knpc.com.kw',
    phoneNumber: '+965 2326 5000',
    linkedInProfile: 'linkedin.com/in/khalids',
    websiteUrl: 'www.knpc.com.kw',
    primaryMotivation: 'Reduce credential misuse (fraud, tailgating), Improve operational efficiency & central monitoring',
    upcomingTriggers: 'VMS or alarm system upgrades requiring integration, New facility openings / campus expansions',
    riskLevel: 'Medium',
    budgetOwnership: 'Corporate Strategy / Risk Management',
    procurementModel: 'Via Regional System Integrator (SI)',
    budgetApproach: 'Capex (hardware-heavy), Hybrid spend',
    preferredEngagementType: 'Turnkey project with integrator',
    preferredSolutionType: 'Biometric access (fingerprint, facial, multimodal), Smart-lock ecosystems',
    preferredDeploymentModel: 'Hybrid (local hardware + cloud management)',
    implementationTimeline: 'Mid-scale rollout: 12–18 months',
    serviceExpectations: 'Hardware installation & cabling, Managed access administration service',
    customerBenchmarking: 'Medium potential - Strategic fit for biometrics',
    additionalComments: 'Regional expansion planned, needs scalable solution'
  },
  {
    sNo: 5,
    customerName: 'DUBAL Aluminium Smelter',
    parentGroup: 'Emirates Global Aluminium',
    country: 'UAE',
    city: 'Dubai - Jebel Ali',
    coreIndustry: 'Manufacturing',
    facilityType: 'Aluminium Smelter',
    businessOverview: 'One of the world\'s largest aluminium producers',
    industryVertical: 'Manufacturing / Metals',
    totalAnnualRevenue: '6,500',
    productTypeFocus: 'Manufacturing Plant Security',
    accessControlModernizationStatus: 'Pilot Testing',
    keyContactPerson: 'Sara Al-Hashemi',
    designation: 'Operations Security Director',
    emailAddress: 's.hashemi@ega.ae',
    phoneNumber: '+971 4 802 9999',
    linkedInProfile: 'linkedin.com/in/sarah',
    websiteUrl: 'www.ega.ae',
    primaryMotivation: 'Enable mobile credentials & lower card issuance costs, Strengthen identity-Centric security/Zero Trust',
    upcomingTriggers: 'Hybrid work access flexibility needs, Digital transformation initiatives',
    riskLevel: 'High',
    budgetOwnership: 'Operations',
    procurementModel: 'Direct purchase from PAC vendor',
    budgetApproach: 'Enterprise/global rollout, Opex (cloud subscriptions)',
    preferredEngagementType: 'SaaS subscription for cloud PACS',
    preferredSolutionType: 'Cloud-based PACS, Mobile access (BLE/NFC)',
    preferredDeploymentModel: 'SaaS / Cloud PACS (growing demand)',
    implementationTimeline: 'Quick pilot: 3–6 months',
    serviceExpectations: 'Training & onboarding, 24/7 monitoring / support',
    customerBenchmarking: 'High potential - Active pilot scaling to enterprise',
    additionalComments: 'Reference customer for manufacturing sector, mobile-first approach'
  },
  {
    sNo: 6,
    customerName: 'Oman LNG - Qalhat',
    parentGroup: 'Oman LNG LLC',
    country: 'Oman',
    city: 'Qalhat - Sur',
    coreIndustry: 'Oil & Gas',
    facilityType: 'LNG Terminal',
    businessOverview: 'Major LNG producer in the Middle East',
    industryVertical: 'Oil & Gas / LNG',
    totalAnnualRevenue: '4,200',
    productTypeFocus: 'LNG Terminal Security',
    accessControlModernizationStatus: 'Exploring Options',
    keyContactPerson: 'Yusuf Al-Balushi',
    designation: 'Facilities Security Head',
    emailAddress: 'y.balushi@omanlng.com',
    phoneNumber: '+968 2520 6000',
    linkedInProfile: 'linkedin.com/in/yusufb',
    websiteUrl: 'www.omanlng.com',
    primaryMotivation: 'Replace aging/legacy PAC systems, Meet compliance requirements (ISO, GDPR, regulatory mandates)',
    upcomingTriggers: 'Compliance audits prompting modernization, VMS or alarm system upgrades requiring integration',
    riskLevel: 'Low',
    budgetOwnership: 'Facilities Management',
    procurementModel: 'Consortium or framework agreement',
    budgetApproach: 'Pilot/Beta deployment',
    preferredEngagementType: 'Long-term managed services contract',
    preferredSolutionType: 'QR-based visitor management, Card-based access control',
    preferredDeploymentModel: 'Hybrid (local hardware + cloud management)',
    implementationTimeline: 'Mid-scale rollout: 12–18 months',
    serviceExpectations: 'Managed access administration service, Compliance & audit support',
    customerBenchmarking: 'Medium potential - Focused on visitor management',
    additionalComments: 'LNG-specific security requirements, visitor management priority'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title, height = 600 }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Preposition 1 Table - Company Profile + Contact Details + Business Overview + Operational Scale & Reach + Market Positioning & Differentiation
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {/* Top level headers */}
          <tr>
            <th colSpan={6} className="bg-[#C5B4E3] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Company Profile
            </th>
            <th colSpan={3} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Business Overview
            </th>
            <th colSpan={3} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Operational Scale & Reach
            </th>
            <th colSpan={3} className="bg-[#F5DEB3] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Market Positioning & Differentiation
            </th>
          </tr>
          {/* Sub headers */}
          <tr className="bg-gray-100">
            {/* Company Profile columns */}
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">S.No.</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Chemical Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Coagulants, Flocculants, Acids, Alkalis, Disinfectants / Oxidants, Solvents – Alcohols, Alkalis, Solvents – Alcohols, Solvents – Ketones, Solvents - Esters, Solvents – Glycols & Glycol Ethers, Solvents –)</div>
            </th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Distributor's Company Name</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Headquarters location</div>
              <div className="font-normal text-[10px] text-gray-600">(City, Country)</div>
            </th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Year of establishment</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Ownership structure</div>
              <div className="font-normal text-[10px] text-gray-600">(Private, Public, JV, Family-owned)</div>
            </th>
            {/* Contact Details columns */}
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Name</th>
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Tel.</th>
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Id:</th>
            {/* Business Overview columns */}
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Core business activities</div>
              <div className="font-normal text-[10px] text-gray-600">(distribution focus, specialty vs. commodity mix)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Chemicals supplied for industrial and water treatment</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., coagulants, flocculants, acids, alkalis, solvents)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Key brands represented or partnerships with manufacturers</th>
            {/* Operational Scale & Reach columns */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Distribution hubs/warehouses across Europe</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Geographic coverage</div>
              <div className="font-normal text-[10px] text-gray-600">(regional vs. pan-European vs. country-specific)</div>
            </th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer segments served</div>
              <div className="font-normal text-[10px] text-gray-600">(water utilities, manufacturing industries, beverage & pharmaceutical)</div>
            </th>
            {/* Market Positioning & Differentiation columns */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Certifications</div>
              <div className="font-normal text-[10px] text-gray-600">(ISO, REACH, Responsible Care, sustainability credentials)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">Approx. revenue / employees</th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Strengths / strategic relevance in the chemical distribution landscape</th>
          </tr>
        </thead>
        <tbody>
          {sampleDistributorData.map((distributor, index) => (
            <tr key={distributor.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Company Profile */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.chemicalType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.distributorCompanyName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.headquartersLocation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.yearOfEstablishment}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.ownershipStructure}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.contactName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.tel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                {distributor.emailId !== 'xx' ? (
                  <a href={`mailto:${distributor.emailId}`}>{distributor.emailId}</a>
                ) : (
                  <span className="text-black">{distributor.emailId}</span>
                )}
              </td>
              {/* Business Overview */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.coreBusinessActivities}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.chemicalsSupplied}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.keyBrands}</td>
              {/* Operational Scale & Reach */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.distributionHubs}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.geographicCoverage}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.customerSegments}</td>
              {/* Market Positioning & Differentiation */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.certifications}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.approxRevenueEmployees}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{distributor.strengthsStrategicRelevance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 2 Table - Producer Company Profile + Contact Details + Product & Service Portfolio + Sustainability & Compliance + Commercial Indicators
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {/* Top level headers */}
          <tr>
            <th colSpan={5} className="bg-[#C5B4E3] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Company Profile
            </th>
            <th colSpan={3} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Product & Service Portfolio
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Sustainability & Compliance
            </th>
            <th colSpan={2} className="bg-[#F5DEB3] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Commercial Indicators
            </th>
          </tr>
          {/* Sub headers */}
          <tr className="bg-gray-100">
            {/* Company Profile columns */}
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">S.No.</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Producer's Company Name</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Headquarters location</div>
              <div className="font-normal text-[10px] text-gray-600">(City, Country)</div>
            </th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Year of establishment</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Ownership structure</div>
              <div className="font-normal text-[10px] text-gray-600">(Private, Public, JV, Family-owned)</div>
            </th>
            {/* Contact Details columns */}
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Name, Designation</th>
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Tel.</th>
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Id:</th>
            {/* Product & Service Portfolio columns */}
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Solvents recovered</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., Acetone, Toluene, Xylene, IPA, MEK, Ethanol, etc.)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industries served</div>
              <div className="font-normal text-[10px] text-gray-600">(pharma, coatings, adhesives, inks, chemicals, electronics)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Recovery technologies used</div>
              <div className="font-normal text-[10px] text-gray-600">(distillation, fractionation, filtration, adsorption, etc.)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Production/recovery capacity</div>
              <div className="font-normal text-[10px] text-gray-600">(Tons)</div>
            </th>
            {/* Sustainability & Compliance columns */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Certifications</div>
              <div className="font-normal text-[10px] text-gray-600">(ISO 14001, REACH, ESG initiatives)</div>
            </th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Circular economy commitments</div>
              <div className="font-normal text-[10px] text-gray-600">(waste reduction, reuse, recycling programs)</div>
            </th>
            {/* Commercial Indicators columns */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Competitive strengths</div>
              <div className="font-normal text-[10px] text-gray-600">(price advantage vs. virgin solvents, niche product specialization, local)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Partnerships & clients</div>
              <div className="font-normal text-[10px] text-gray-600">(where available)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleProducerData.map((producer, index) => (
            <tr key={producer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Company Profile */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.producerCompanyName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.headquartersLocation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.yearOfEstablishment}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.ownershipStructure}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.contactNameDesignation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.tel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                {producer.emailId !== 'xx' ? (
                  <a href={`mailto:${producer.emailId}`}>{producer.emailId}</a>
                ) : (
                  <span className="text-black">{producer.emailId}</span>
                )}
              </td>
              {/* Business Overview */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.solventsRecovered}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.industriesServed}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.recoveryTechnologies}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.productionCapacity}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.certifications}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.circularEconomyCommitments}</td>
              {/* Market Positioning & Differentiation */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.competitiveStrengths}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{producer.partnershipsClients}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 3 Table - Company Profile + Contact Details + Procurement & Usage Insights + Strategic Relevance
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {/* Top level headers */}
          <tr>
            <th colSpan={5} className="bg-[#C5B4E3] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Company Profile
            </th>
            <th colSpan={3} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Usage Insights
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Strategic Relevance
            </th>
          </tr>
          {/* Sub headers */}
          <tr className="bg-gray-100">
            {/* Company Profile columns */}
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">S.No.</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Customer's Company Name</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Headquarters location</div>
              <div className="font-normal text-[10px] text-gray-600">(City, Country)</div>
            </th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Year of establishment</th>
            <th className="bg-[#E6D5F2] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Classification</div>
              <div className="font-normal text-[10px] text-gray-600">(e.g., Pharmaceuticals, Coatings, Adhesives, Agrochemicals, Electronics)</div>
            </th>
            {/* Contact Details columns */}
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Name / Designation</th>
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Tel.</th>
            <th className="bg-[#FFE4C4] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Id:</th>
            {/* Procurement & Usage Insights columns */}
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Current adoption of recovered solvents</div>
              <div className="font-normal text-[10px] text-gray-600">(yes/no, extent, types used)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Demand volumes or intensity</div>
              <div className="font-normal text-[10px] text-gray-600">(high, medium, low; approximate volume if known)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Procurement priorities</div>
              <div className="font-normal text-[10px] text-gray-600">(cost savings, sustainability, quality assurance, supply reliability)</div>
            </th>
            <th className="bg-[#B8E6B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Barriers to adoption</div>
              <div className="font-normal text-[10px] text-gray-600">(quality concerns, regulatory constraints, supply chain issues)</div>
            </th>
            {/* Strategic Relevance columns */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Recent sustainability / ESG initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(commitments, certifications, targets)</div>
            </th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Key partnerships in solvent sourcing</div>
              <div className="font-normal text-[10px] text-gray-600">(current suppliers, recyclers, strategic collaborations)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleEndUserData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Company Profile */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerCompanyName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.headquartersLocation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.yearOfEstablishment}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryClassification}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.contactNameDesignation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.tel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                {customer.emailId !== 'xx' ? (
                  <a href={`mailto:${customer.emailId}`}>{customer.emailId}</a>
                ) : (
                  <span className="text-black">{customer.emailId}</span>
                )}
              </td>
              {/* Procurement & Usage Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.currentAdoptionOfRecoveredSolvents}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.demandVolumesOrIntensity}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementPriorities}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.barriersToAdoption}</td>
              {/* Strategic Relevance */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.recentSustainabilityEsgInitiatives}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPartnershipsInSolventSourcing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Distributor's Database"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Producer's Database"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Potential Customer's Database"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
