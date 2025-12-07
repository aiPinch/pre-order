import {
	BarChart3,
	TrendingDown,
	CheckCircle2,
	Check,
	Circle,
	Apple,
	Pill,
	Activity,
} from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollAnimation';

export const ProgressSection = () => {
	return (
		<section id='progress' className='py-24 relative overflow-hidden'>
			{/* Background glow */}
			<div className='absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl' />

			<div className='container mx-auto px-4 md:px-6 relative'>
				<ScrollReveal>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Видимый прогресс и{' '}
							<span className='text-gradient'>простой риск-индекс</span>
						</h2>
						<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
							Мы знаем, как сложно оставаться мотивированным, когда результат не
							очевиден. Поэтому Pinch показывает, как каждый маленький шаг
							влияет на вашу общую картину здоровья
						</p>
					</div>
				</ScrollReveal>

				{/* Two-column layout: Text left, Mockup right */}
				<div className='grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto'>
					{/* Content - Left */}
					<div className='space-y-8 '>
						<div className='flex items-start gap-5'>
							<div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
								<BarChart3 className='w-7 h-7 text-primary' />
							</div>
							<div>
								<h4 className='text-xl font-semibold text-foreground mb-2'>
									Визуальный дашборд
								</h4>
								<p className='text-muted-foreground text-base leading-relaxed md:text-lg'>
									Отслеживайте выполненные шаги и их влияние на ключевые
									показатели
								</p>
							</div>
						</div>

						<div className='flex items-start gap-5'>
							<div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
								<TrendingDown className='w-7 h-7 text-primary' />
							</div>
							<div>
								<h4 className='text-xl font-semibold text-foreground mb-2'>
									Понятный риск-индекс
								</h4>
								<p className='text-muted-foreground text-base leading-relaxed md:text-lg'>
									Простая шкала показывает общий тренд и зоны для внимания
								</p>
							</div>
						</div>

						<div className='flex items-start gap-5'>
							<div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
								<CheckCircle2 className='w-7 h-7 text-primary' />
							</div>
							<div>
								<h4 className='text-xl font-semibold text-foreground mb-2'>
									Маленькие победы
								</h4>
								<p className='text-muted-foreground text-base leading-relaxed md:text-lg'>
									Каждый выполненный шаг — видимое достижение, которое
									мотивирует
								</p>
							</div>
						</div>
					</div>

					{/* Big Mockup - Right */}
					<div className='relative'>
						<div className='rounded-3xl gradient-card border border-border/50 p-8 shadow-card'>
							<div className='flex items-center justify-between mb-8'>
								<span className='text-sm text-muted-foreground'>
									Ваш прогресс за месяц
								</span>
								<span
									className='text-sm font-semibold flex items-center gap-1'
									style={{ color: 'hsl(142 80% 45%)' }}
								>
									<svg
										className='w-4 h-4'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2.5'
									>
										<path
											d='M18 15l-6-6-6 6'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Улучшается
								</span>
							</div>

							{/* Stats */}
							<div className='grid grid-cols-3 gap-2 sm:gap-4 mb-8'>
								<div className='text-center p-2 sm:p-4 rounded-xl bg-success/10 border border-success/20'>
									<div className='text-xl sm:text-3xl font-bold text-success'>
										42
									</div>
									<div className='text-[10px] sm:text-xs text-muted-foreground mt-1'>
										Выполнено
									</div>
								</div>
								<div className='text-center p-2 sm:p-4 rounded-xl bg-success/10 border border-success/20'>
									<div className='text-xl sm:text-3xl font-bold text-success'>
										-28%
									</div>
									<div className='text-[10px] sm:text-xs text-muted-foreground mt-1'>
										Риск-индекс
									</div>
								</div>
								<div className='text-center p-2 sm:p-4 rounded-xl bg-primary/5'>
									<div className='text-xl sm:text-3xl font-bold text-foreground'>
										21
									</div>
									<div className='text-[10px] sm:text-xs text-muted-foreground mt-1'>
										День подряд
									</div>
								</div>
							</div>

							{/* Overall Score Diagram */}
							<div className='mb-8 pt-6 border-t border-border/50'>
								<div className='flex items-center justify-between mb-4'>
									<span className='text-sm text-muted-foreground'>
										Общая оценка
									</span>
									<span
										className='text-xs font-semibold'
										style={{ color: 'hsl(142 80% 45%)' }}
									>
										↑ +12 за месяц
									</span>
								</div>

								<div className='flex items-center gap-6'>
									{/* Circular progress */}
									<div className='relative w-24 h-24 flex-shrink-0'>
										<svg
											className='w-full h-full -rotate-90'
											viewBox='0 0 100 100'
										>
											<circle
												cx='50'
												cy='50'
												r='40'
												fill='none'
												stroke='hsl(var(--muted))'
												strokeWidth='8'
												opacity='0.3'
											/>
											<circle
												cx='50'
												cy='50'
												r='40'
												fill='none'
												stroke='hsl(174, 72%, 56%)'
												strokeWidth='8'
												strokeLinecap='round'
												strokeDasharray={`${72 * 2.51} 251`}
											/>
										</svg>
										<div className='absolute inset-0 flex flex-col items-center justify-center'>
											<span className='text-2xl font-bold text-foreground'>
												72
											</span>
											<span className='text-xs text-muted-foreground'>
												из 100
											</span>
										</div>
									</div>

									{/* Category bars */}
									<div className='flex-1 space-y-2 '>
										<div className='flex items-center justify-between text-xs'>
											<span className='text-muted-foreground'>Питание</span>
											<div className='flex items-center gap-2'>
												<div className='w-20 h-1.5 rounded-full bg-muted/30'>
													<div
														className='h-full rounded-full bg-primary'
														style={{ width: '68%' }}
													/>
												</div>
												<span className='text-muted-foreground w-6'>68</span>
											</div>
										</div>
										<div className='flex items-center justify-between text-xs'>
											<span className='text-muted-foreground'>Активность</span>
											<div className='flex items-center gap-2'>
												<div className='w-20 h-1.5 rounded-full bg-muted/30'>
													<div
														className='h-full rounded-full bg-primary'
														style={{ width: '75%' }}
													/>
												</div>
												<span className='text-muted-foreground w-6'>75</span>
											</div>
										</div>
										<div className='flex items-center justify-between text-xs'>
											<span className='text-muted-foreground'>Добавки</span>
											<div className='flex items-center gap-2'>
												<div className='w-20 h-1.5 rounded-full bg-muted/30'>
													<div
														className='h-full rounded-full bg-primary'
														style={{ width: '82%' }}
													/>
												</div>
												<span className='text-muted-foreground w-6'>82</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Completed Step - Curcumin */}
							<div className='pt-6 border-t border-border/50'>
								<div className='flex items-center gap-2 mb-3'>
									<Check className='w-4 h-4 text-primary' />
									<span className='text-xs text-primary font-medium'>
										Выполнено сегодня
									</span>
								</div>

								<div className='flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20'>
									<div className='w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0'>
										<Pill className='w-5 h-5 text-primary' />
									</div>
									<div>
										<div className='text-sm font-medium text-foreground mb-1'>
											Добавить в рацион куркуму
										</div>
										<p className='text-xs text-muted-foreground leading-relaxed'>
											Куркумин поддерживает здоровье суставов. Добавляйте ½ ч.л.
											в еду в день.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Decorative glow */}
						<div className='absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl -z-10' />

						<p className='text-center text-xs text-muted-foreground/70 mt-4'>
							* Пример визуализации интерфейса
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
