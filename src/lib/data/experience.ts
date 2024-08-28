import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'cybersecurity-rd-marine-technologies',
		company: 'Marine Technologies',
		description: 'Worked on international cybersecurity standards for maritime systems. Improved the cybersecurity of maritime control systems.',
		contract: ContractType.Internship,
		type: 'Cybersecurity R&D',
		location: 'Egersund',
		period: { from: new Date(2023, 5, 1), to: new Date(2024, 7, 31) },
		skills: getSkills('cybersecurity', 'network-security', 'maritime-systems'),
		name: 'Cybersecurity R&D',
		color: '#000080',
		links: [],
		logo: Assets.MT,
		shortDescription: 'Improved the cybersecurity of maritime control systems.'
	},
	{
		slug: 'it-consultant-tieto-evry',
		company: 'Centric contracted to TietoEVRY',
		description: 'IT support for a security client in their IT systems.',
		contract: ContractType.Contract,
		type: 'IT Consulting',
		location: 'Stavanger',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 7, 31) },
		skills: getSkills('it-support', 'security-client', 'it-systems'),
		name: 'IT Consultant',
		color: '#4B0082',
		links: [],
		logo: Assets.TietoEVRY,
		shortDescription: 'IT support for a security client in their IT systems.'
	},
	{
		slug: 'service-desk-specialist-tieto-evry',
		company: 'TietoEVRY',
		description: `Worked at the TietoEVRY Service Desk, handling both 1st and 2nd line support. Provided support in both Norwegian and English. The systems I worked with include Windows Server, Citrix, VDI, Azure, RSA, Microsoft 365, VPN, and various customer-specific applications. Set a record for the number of calls handled in a month (three times). Additionally, I have experience in Access Management, conducted training for other departments on various customer IT systems, and was responsible for mentoring an apprentice.`,
		contract: ContractType.Apprenticeship,
		type: 'Service Desk Specialist',
		location: 'Stavanger',
		period: { from: new Date(2019, 7, 1), to: new Date(2021, 7, 31) },
		skills: getSkills('windows-server', 'citrix', 'vdi', 'azure', 'rsa', 'microsoft-365', 'vpn', 'access-management'),
		name: 'Service Desk Specialist (Apprentice)',
		color: '#4682B4',
		links: [],
		logo: Assets.TietoEVRY,
		shortDescription: 'Handled 1st and 2nd line support at the TietoEVRY Service Desk.'
	},
	{
		slug: 'referee-handball',
		company: 'Norwegian Olympic and Paralympic Committee and Confederation of Sports',
		description: 'Guided the game and gained solid experience in communication with players, coaches, officials, and parents. Effectively handled stressful situations quickly and sensibly.',
		contract: ContractType.PartTime,
		type: 'Sports',
		location: 'Egersund',
		period: { from: new Date(2016, 0, 1), to: new Date(2019, 11, 31) },
		skills: getSkills('communication', 'stress-management', 'leadership'),
		name: 'Referee - Handball',
		color: '#FF4500',
		links: [],
		logo: Assets.NHF,
		shortDescription: 'Gained solid experience in communication and stress management as a handball referee.'
	}
];

export const title = 'Professional Experience';
