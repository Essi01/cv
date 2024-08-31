import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';


export const items: Array<Experience> = [
    {
        slug: 'comptia-security-plus',
        company: 'CompTIA',
        description: 'CompTIA Security+ ce Certification (2023). Recognized industry standard for cybersecurity knowledge. ',
        contract: ContractType.Certification,
        type: 'Cybersecurity',
        location: 'Online',
        period: { from: new Date(2023, 0, 1) },
        skills: getSkills('cybersecurity', 'risk-management', 'threat-detection', 'network-security'),
        name: 'CompTIA Security+ ce',
        color: '#FF0000', // Replace with the appropriate color
        links: [
            { to: 'https://www.credly.com/badges/f4c443dd-5674-4099-bc0c-d8f286ed9539/linked_in_profile', label: 'View on Credly' }
        ],
        logo: Assets.CompTIA, // Replace with the appropriate asset if available
        shortDescription: 'Certified in cybersecurity fundamentals, including risk management and threat detection.'
    },
    {
        slug: 'mta-security-fundamentals',
        company: 'Microsoft',
        description: 'Microsoft Technology Associate: Security Fundamentals - Certified 2021. Foundation in security concepts and Microsoft security tools.',
        contract: ContractType.Certification,
        type: 'Security Fundamentals',
        location: 'Online',
        period: { from: new Date(2021, 0, 1) },
        skills: getSkills('security-basics', 'microsoft-security-tools', 'access-management'),
        name: 'MTA: Security Fundamentals',
        color: '#0078D4', // Microsoft color scheme
        links: [
            { to: 'https://www.credly.com/badges/a0c13b11-4e60-43fb-8243-328cd40f6890?source=linked_in_profile', label: 'View on Credly' }
        ],
        logo: Assets.MTAs, // Replace with the appropriate asset if available
        shortDescription: 'Certified in foundational security concepts and Microsoft security tools.'
    },
    {
        slug: 'mta-networking-fundamentals',
        company: 'Microsoft',
        description: 'Microsoft Technology Associate: Networking Fundamentals - Certified 2021. Basic understanding of networking concepts and Microsoft networking technologies.',
        contract: ContractType.Certification,
        type: 'Networking Fundamentals',
        location: 'Online',
        period: { from: new Date(2021, 0, 1) },
        skills: getSkills('networking-basics', 'microsoft-networking', 'tcp-ip', 'dns'),
        name: 'MTA: Networking Fundamentals',
        color: '#0078D4', // Microsoft color scheme
        links: [
            { to: 'https://www.credly.com/badges/8ec85f49-f1bd-4c29-9eb5-7ab54cea8678?source=linked_in_profile', label: 'View on Credly' }
        ],
        logo: Assets.MTAn, // Replace with the appropriate asset if available
        shortDescription: 'Certified in basic networking concepts and Microsoft networking technologies.'
    },
    {
        slug: 'mta-windows-server-fundamentals',
        company: 'Microsoft',
        description: 'Microsoft Technology Associate: Windows Server Administration Fundamentals - Certified 2021. Basic skills in managing and configuring Windows Server environments.',
        contract: ContractType.Certification,
        type: 'Windows Server Administration',
        location: 'Online',
        period: { from: new Date(2021, 0, 1) },
        skills: getSkills('windows-server', 'server-configuration', 'active-directory', 'group-policy'),
        name: 'MTA: Windows Server Administration Fundamentals',
        color: '#0078D4', // Microsoft color scheme
        links: [
            { to: 'https://www.credly.com/badges/eaec4fd9-ec17-4bcf-9cc4-b29e8b132055?source=linked_in_profile', label: 'View on Credly' }
        ],
        logo: Assets.MTAw, // Replace with the appropriate asset if available
        shortDescription: 'Certified in managing and configuring Windows Server environments.'
    },
    {
        slug: 'microsoft-security-compliance-identity',
        company: 'Microsoft',
        description: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals - Certified 2021. Focused on the principles of security, compliance, and identity management in Microsoft environments.',
        contract: ContractType.Certification,
        type: 'Security, Compliance, and Identity',
        location: 'Online',
        period: { from: new Date(2021, 0, 1) },
        skills: getSkills('security', 'compliance', 'identity-management', 'microsoft-security'),
        name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
        color: '#0078D4', // Microsoft color scheme
        links: [
            { to: 'https://www.credly.com/badges/772efc9f-ae95-4136-93ef-ec9e673c52a6?source=linked_in_profile', label: 'View on Credly' }
        ],
        logo: Assets.Asec, // Replace with the appropriate asset if available
        shortDescription: 'Certified in the principles of security, compliance, and identity management within Microsoft environments.'
    },
    {
        slug: 'microsoft-azure-fundamentals',
        company: 'Microsoft',
        description: 'Microsoft Certified: Azure Fundamentals (AZ-900) - Certified 2021. Knowledge of Azure services, cloud concepts, and Microsoft cloud offerings.',
        contract: ContractType.Certification,
        type: 'Cloud Computing',
        location: 'Online',
        period: { from: new Date(2020, 0, 1) },
        skills: getSkills('azure', 'cloud-computing', 'cloud-services', 'microsoft-azure'),
        name: 'Microsoft Certified: Azure Fundamentals',
        color: '#0078D4', // Microsoft color scheme
        links: [
            { to: 'https://www.credly.com/badges/f70f2262-7f28-4325-8e8d-8f5155e157c0', label: 'View on Credly' }
        ],
        logo: Assets.Azure, // Replace with the appropriate asset if available
        shortDescription: 'Certified in Azure cloud services, cloud concepts, and Microsoft cloud offerings.'
    }
];

export const title = 'Certifications';
