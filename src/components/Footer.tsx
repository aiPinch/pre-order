import { PinchLogo } from '@/components/PinchLogo';

export const Footer = () => {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const navLinks = [
		{ label: 'Кому подходит', id: 'who-is-it-for' },
		{ label: 'Как работает', id: 'how-it-works' },
		{ label: 'Преимущества', id: 'benefits' },
		{ label: 'Прогресс', id: 'progress' },
		{ label: 'Ранний доступ', id: 'signup' },
		{ label: 'FAQ', id: 'faq' },
		{ label: 'Опрос', id: 'survey' },
		{ label: 'Написать нам', id: 'contact' },
	];

	return (
		<footer className='py-12 border-t border-border/50'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid md:grid-cols-3 gap-8 mb-8'>
					{/* Logo & Description */}
					<div>
						<div className='mb-4'>
							<PinchLogo className='h-10' />
						</div>
						<p className='text-sm text-muted-foreground leading-relaxed'>
							Простые, научно обоснованные шаги для вашего здоровья с видимым
							прогрессом
						</p>
					</div>

					{/* Navigation */}
					<div className='md:col-span-2'>
						<h4 className='text-sm font-semibold text-foreground mb-4'>
							Разделы
						</h4>
						<div className='flex flex-wrap gap-x-6 gap-y-2'>
							{navLinks.map(link => (
								<button
									key={link.id}
									onClick={() => scrollToSection(link.id)}
									className='text-sm text-muted-foreground hover:text-primary transition-colors'
								>
									{link.label}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className='pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='text-sm text-muted-foreground'>
						© {new Date().getFullYear()} Pinch. Все права защищены.
					</p>
					<p className='text-xs text-muted-foreground/70 text-center md:text-right max-w-md'>
						Pinch не является медицинским сервисом и не заменяет консультацию
						врача
					</p>
				</div>
			</div>
		</footer>
	);
};
