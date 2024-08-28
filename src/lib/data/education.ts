import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science specialization in Cybersecurity',
		description: '',
		location: 'Agder',
		logo: Assets.UiA,
		name: '',
		organization: 'UiA',
		period: { from: new Date(2022, 8, 15), to: new Date(2025, 8, 14) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Cybersecurity', 'Object-oriented programming', 'Network', 'Operating systems', 'Databases', 'kubernetes', 'Chaos engineering']
	},
	{
		degree: 'Preparatory Course for Engineering Education',
		description: '',
		location: 'Agder',
		logo: Assets.UiA,
		name: '',
		organization: 'UiA',
		period: { from: new Date(2022, 8, 15), to: new Date(2023, 8, 15) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Mathematics', 'Physics', 'Report writing', 'Problem solving', 'Teamwork']
	},
	{
		degree: 'Vocational Certificate in ICT Service',
		description: 'Passed with Distinction',
		location: 'Stavanger',
		logo: Assets.TietoEVRY,
		name: '',
		organization: 'TietoEVRY',
		period: { from: new Date(2020, 8, 15), to: new Date(2022, 8, 15) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['IT-support', 'Windows server', 'Citrix', 'VDI', 'Teamwork', 'Communication', 'Problem solving', 'IT-drift', 'Azure'], 	
	}
];

export const title = 'Education';
