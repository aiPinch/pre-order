import { Button } from '@/components/ui/button';
import { MessageSquare, ExternalLink } from 'lucide-react';

export const SurveyBlock = () => {
	const handleSurveyClick = () => {
		window.open('https://forms.yandex.ru/u/692fef11e010dbc458f9018c', '_blank');
	};

	return (
		<section id='survey' className='py-16 relative'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='max-w-4xl mx-auto'>
					<div className='relative rounded-3xl overflow-hidden'>
						{/* Gradient background */}
						<div className='absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20' />
						<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(174_72%_56%/0.15),transparent_70%)]' />

						<div className='relative pt-8 pr-8 pl-8 pb-0 md:pt-12 md:pr-12 md:pl-12 md:pb-0 flex flex-col md:flex-row items-center gap-6 md:gap-10'>
							<div className='w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0'>
								<MessageSquare className='w-8 h-8 text-primary' />
							</div>

							<div className='flex-1 text-center md:text-left'>
								<h3 className='text-xl md:text-2xl font-bold text-foreground mb-2'>
									Помогите сделать Pinch лучше
								</h3>
								<p className='text-muted-foreground'>
									Пройдите короткий опрос и расскажите, что для вас важно.
								</p>
							</div>

							<Button
								variant='default'
								size='lg'
								className='flex-shrink-0'
								onClick={handleSurveyClick}
							>
								Принять участие в опросе
								<ExternalLink className='w-4 h-4' />
							</Button>
						</div>
						<p className='text-sm pt-4 pr-8 pl-8 pb-8 w-4/5 mx-auto text-foreground/70 text-center md:text-xs'>
							Только сейчас есть возможность пообщаться о своем опыте с
							разработчиками.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
