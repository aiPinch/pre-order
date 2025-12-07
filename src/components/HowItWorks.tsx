import { Smartphone, ListChecks, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollAnimation';

const steps = [
	{
		number: '01',
		icon: Smartphone,
		title: 'Подключаете данные',
		description:
			'Выберите удобный способ: подключите смарт‑девайсы или внесите данные о себе вручную. ИИ проанализирует и покажет ваши основные уязвимости',
	},
	{
		number: '02',
		icon: ListChecks,
		title: 'Получите персональный план',
		description:
			'Получаете научно обоснованные шаги по питанию и активности — то, что реально вписать в обычный день',
	},
	{
		number: '03',
		icon: TrendingUp,
		title: 'Видимый прогресс',
		description:
			'Простые графики и общий индекс показывают изменения — вы видите, что это работает',
	},
];

export const HowItWorks = () => {
	return (
		<section id='how-it-works' className='py-24 relative'>
			{/* Background accent */}
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent' />

			<div className='container mx-auto px-4 md:px-6 relative'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Как работает <span className='text-gradient'>Pinch?</span>
						</h2>
						<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
							Три простых шага к осознанной заботе о здоровье
						</p>
					</div>
				</ScrollReveal>

				<div className='max-w-4xl mx-auto'>
					{steps.map((step, index) => (
						<ScrollReveal key={index} delay={index * 150}>
							<div className='relative flex gap-6 md:gap-10 pb-12 last:pb-0'>
								{/* Connector line */}
								{index < steps.length - 1 && (
									<div className='absolute left-6 md:left-10 top-20 w-px h-[calc(100%-5rem)] bg-gradient-to-b from-primary/50 to-transparent' />
								)}

								{/* Number circle */}
								<div className='flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center relative z-10'>
									<span className='text-primary font-bold text-lg md:text-2xl'>
										{step.number}
									</span>
								</div>

								{/* Content */}
								<div className='flex-1 pt-1 md:pt-4'>
									<div className='flex items-center gap-3 mb-3'>
										<step.icon className='w-5 h-5 text-primary' />
										<h3 className='text-xl md:text-2xl font-semibold text-foreground'>
											{step.title}
										</h3>
									</div>
									<p className='text-muted-foreground leading-relaxed text-base md:text-lg'>
										{step.description}
									</p>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
};
