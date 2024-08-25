import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science specialization in Cybersecurity',
		description: '',
		location: 'Agder',
		logo: Assets.Unknown,
		name: '',
		organization: 'UiA',
		period: { from: new Date(2022, 8, 15), to: new Date(2025, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Cybersecurity', 'Object-oriented programming', 'Network', 'Operating systems', 'Databases', 'kubernetes', 'Chaos engineering']
	},
	{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
