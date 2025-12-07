import { Zap, Stethoscope, Users } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollAnimation';

const cards = [
	{
		icon: Zap,
		title: 'Устали пробовать всё подряд',
		description:
			'Принимали БАДы, ходили в зал — но не понимаете, что помогает именно вам',
		accentColor: 'warning' as const,
	},
	{
		icon: Stethoscope,
		title: 'Врач сказал: пора заняться собой',
		description:
			'Вы чувствуете, что это важно, но не знаете, как вписать советы в свой день, когда и так не хватает сил и времени',
		accentColor: 'warning' as const,
	},
	{
		icon: Users,
		title: 'Опасаетесь наследственных заболеваний',
		description:
			'Вы готовы действовать, но сложно разобраться, с чего начать и помогает ли это. Нужна ясность и доказательство, что ваши шаги работают',
		accentColor: 'warning' as const,
	},
];

const colorClasses = {
	danger: {
		bg: 'bg-danger/10',
		bgHover: 'group-hover:bg-danger/20',
		icon: 'text-danger',
		border: 'hover:border-danger/30',
	},
	warning: {
		bg: 'bg-warning/10',
		bgHover: 'group-hover:bg-warning/20',
		icon: 'text-warning',
		border: 'hover:border-warning/30',
	},
};

export const WhoIsItFor = () => {
	return (
		<section id='who-is-it-for' className='py-24 relative'>
			<div className='container mx-auto px-4 md:px-6'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Кому это <span className='text-gradient'>подходит?</span>
						</h2>
						<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
							Pinch для тех, кто хочет понять, что делать для профилактики
							заболеваний
						</p>
					</div>
				</ScrollReveal>

				<div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
					{cards.map((card, index) => {
						const colors = colorClasses[card.accentColor];
						return (
							<ScrollReveal key={index} delay={index * 100}>
								<div
									className={`group relative p-8 rounded-2xl gradient-card border border-border/50 ${colors.border} transition-all duration-300 hover:-translate-y-1 shadow-card h-full`}
								>
									<div
										className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 ${colors.bgHover} transition-colors`}
									>
										<card.icon className={`w-7 h-7 ${colors.icon}`} />
									</div>
									<h3 className='text-xl font-semibold mb-3 text-foreground'>
										{card.title}
									</h3>
									<p className='text-muted-foreground leading-relaxed'>
										{card.description}
									</p>
								</div>
							</ScrollReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
