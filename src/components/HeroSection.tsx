import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
	const scrollToForm = () => {
		document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className='relative min-h-screen flex items-center justify-center pt-16 overflow-hidden'>
			{/* Background effects */}
			<div className='absolute inset-0 gradient-glow opacity-60' />
			<div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow' />

			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				<div className='max-w-4xl mx-auto text-center'>
					<div className='animate-fade-up' style={{ animationDelay: '0.1s' }}>
						<span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8'>
							<span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
							Ранний доступ открыт
						</span>
					</div>

					<h1
						className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up'
						style={{ animationDelay: '0.2s' }}
					>
						Советов много, а сил и времени{' '}
						<span className='text-gradient'>их применять нет</span>
					</h1>

					<p
						className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up'
						style={{ animationDelay: '0.3s' }}
					>
						Простые, научно обоснованные персональные шаги по профилактике
						хронических заболеваний, которые легко встраиваются в ваш день.
						Видите изменения после каждого шага — без лишнего стресса.
					</p>

					<div
						className='flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-up'
						style={{ animationDelay: '0.4s' }}
					>
						<Button
							variant='hero'
							onClick={() => scrollToForm()}
							className='group'
						>
							Хочу попробовать Pinch
							<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
						</Button>

						{/*<Button variant='heroOutline' onClick={() => scrollToForm()}>
							Оформить предзаказ
						</Button>*/}
					</div>

					{/*<p
						className='text-sm text-muted-foreground/70 max-w-lg mx-auto animate-fade-up'
						style={{ animationDelay: '0.5s' }}
					>
						Pinch не лечит и не ставит диагнозы, он про простые шаги в
						повседневной жизни.
					</p>*/}
				</div>
			</div>

			{/* Decorative elements */}
			<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent' />
		</section>
	);
};
