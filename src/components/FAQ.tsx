import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollReveal } from '@/hooks/useScrollAnimation';

const faqs = [
	{
		question: 'Pinch заменяет врача?',
		answer:
			'Нет. Pinch — это инструмент для формирования здоровых привычек на основе ваших данных. Мы не ставим диагнозы и не назначаем лечение.',
	},
	{
		question: 'Когда я увижу результат?',
		answer:
			'Некоторые изменения в самочувствии вы можете заметить уже через несколько дней регулярного выполнения микрошагов. Более существенные сдвиги в показателях здоровья обычно видны через 4–8 недель.',
	},
	{
		question: 'Насколько персонализирован план?',
		answer:
			'План строится на основе вашего образа жизни и целей. Это не общие советы из интернета, а конкретные шаги, адаптированные под ваши реальные возможности.',
	},
	{
		question: 'Есть ли трекер привычек?',
		answer:
			'В Pinch есть удобный трекер для отслеживания выполненных микрошагов. Вы видите свой прогресс и общую динамику — это помогает сохранять мотивацию.',
	},
	{
		question: 'Как защищены мои данные?',
		answer:
			'Мы не передаём информацию третьим лицам и соблюдаем требования законодательства о персональных данных.',
	},
	{
		question: 'Сколько это будет стоить?',
		answer:
			'Сейчас идёт тестирование. До любого платного запуска мы честно покажем модель ценообразования и дадим возможность оценить, подходит ли вам продукт.',
	},
];

export const FAQ = () => {
	return (
		<section id='faq' className='py-24 relative'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='max-w-3xl mx-auto'>
					<ScrollReveal>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								Частые <span className='text-gradient'>вопросы</span>
							</h2>
							<p className='text-muted-foreground text-lg'>
								Ответы на то, что спрашивают чаще всего
							</p>
						</div>
					</ScrollReveal>

					<Accordion type='single' collapsible className='space-y-4'>
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className='rounded-2xl gradient-card border border-border/50 px-6 overflow-hidden data-[state=open]:border-primary/30'
							>
								<AccordionTrigger className='text-left text-lg font-medium py-6 hover:no-underline hover:text-primary transition-colors'>
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className='text-muted-foreground leading-relaxed pb-6'>
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};
