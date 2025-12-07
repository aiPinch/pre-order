import { Button } from '@/components/ui/button';
import { PinchLogo } from '@/components/PinchLogo';

export const Header = () => {
	const scrollToForm = () => {
		document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
	};

	const navLinks = [
		{ label: 'Кому подходит', id: 'who-is-it-for' },
		{ label: 'Преимущества', id: 'benefits' },
		{ label: 'Как работает', id: 'how-it-works' },
		//{ label: 'Прогресс', id: 'progress' },
		{ label: 'Напишите нам', id: 'contact' },
		{ label: 'FAQ', id: 'faq' },
	];

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className='fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex h-16 items-center justify-between'>
					<div className='flex items-center'>
						<PinchLogo className='h-8' />
					</div>

					<nav className='hidden lg:flex items-center gap-6'>
						{navLinks.map(link => (
							<button
								key={link.id}
								onClick={() => scrollToSection(link.id)}
								className='text-muted-foreground hover:text-foreground transition-colors text-sm'
							>
								{link.label}
							</button>
						))}
					</nav>

					<Button onClick={scrollToForm} size='sm'>
						Попробовать
					</Button>
				</div>
			</div>
		</header>
	);
};
