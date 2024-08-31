import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Cybersecurity', slug: 'cyber' }),
	defineSkillCategory({ name: 'Software Development', slug: 'software-dev' }),
	defineSkillCategory({ name: 'Cloud Infrastructure', slug: 'cloud' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Data Communication', slug: 'data-comm' }),
	defineSkillCategory({ name: 'Data Modeling & Databases', slug: 'databases' }),
	defineSkillCategory({ name: 'Algorithms & Data Structures', slug: 'algos' }),
	defineSkillCategory({ name: 'Operating Systems', slug: 'os' }),
	defineSkillCategory({ name: 'Microcontrollers', slug: 'microcontrollers' }),
	defineSkillCategory({ name: 'Mathematics & Physics', slug: 'math-physics' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Operations', slug: 'operations' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'cybersecurity',
		color: 'red',
		description: 'Protecting systems, networks, and programs from digital attacks.',
		logo: Assets.cyber,
		name: 'Cybersecurity',
		category: 'cyber'
	}),
	defineSkill({
		slug: 'cyber-risk',
		color: 'darkred',
		description: 'Managing risks related to cybersecurity by identifying, analyzing, and responding to potential threats.',
		logo: Assets.cyber,
		name: 'Cybersecurity Risk Management',
		category: 'cyber'
	}),
	defineSkill({
		slug: 'software-dev',
		color: 'blue',
		description: 'Designing, coding, testing, and maintaining software applications.',
		logo: Assets.JavaScript,
		name: 'Software Development',
		category: 'software-dev'
	}),
	defineSkill({
		slug: 'software-security',
		color: 'green',
		description: 'Implementing practices and tools to ensure the security of software throughout its lifecycle.',
		logo: Assets.JavaScript,
		name: 'Software Security',
		category: 'software-dev'
	}),
	defineSkill({
		slug: 'cloud-infra',
		color: 'purple',
		description: 'Designing and managing scalable and reliable cloud infrastructure.',
		logo: Assets.Unknown,
		name: 'Cloud Infrastructure',
		category: 'operations'
	}),
	defineSkill({
		slug: 'network-security',
		color: 'orange',
		description: 'Ensuring the security and privacy of data as it is transmitted across networks.',
		logo: Assets.Unknown,
		name: 'Network, Security, and Privacy',
		category: 'data-comm'
	}),
	defineSkill({
		slug: 'data-modeling',
		color: 'yellow',
		description: 'Creating conceptual and logical models for managing and storing data efficiently.',
		logo: Assets.Unknown,
		name: 'Data Modeling and Databases',
		category: 'software-dev'
	}),
	defineSkill({
		slug: 'algos',
		color: 'darkblue',
		description: 'Designing and analyzing algorithms and data structures to solve computational problems efficiently.',
		logo: Assets.Unknown,
		name: 'Algorithms and Data Structures',
		category: 'software-dev'
	}),
	defineSkill({
		slug: 'os',
		color: 'gray',
		description: 'Understanding and managing the software that controls computer hardware and provides a base for application software.',
		logo: Assets.Unknown,
		name: 'Operating Systems',
		category: 'software-dev'
	}),
	defineSkill({
		slug: 'chaos-engineering',
		color: 'black',
		description: 'Experimenting on a system to build confidence in its capability to withstand turbulent conditions in production.',
		logo: Assets.Unknown,
		name: 'Chaos Engineering',
		category: 'operations'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'devops',
		color: 'cyan',
		description: 'Combining software development and IT operations to shorten the development lifecycle.',
		logo: Assets.Unknown,
		name: 'DevOps',
		category: 'operations'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
