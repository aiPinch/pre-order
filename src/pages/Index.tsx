import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { WhoIsItFor } from '@/components/WhoIsItFor';
import { HowItWorks } from '@/components/HowItWorks';
import { Benefits } from '@/components/Benefits';
import { ProgressSection } from '@/components/ProgressSection';
import { WhatHappensNext } from '@/components/WhatHappensNext';
import { SurveyBlock } from '@/components/SurveyBlock';
import { SignupForm } from '@/components/SignupForm';
import { FAQ } from '@/components/FAQ';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { HealthBackground } from '@/components/HealthBackground';
import { useSessionTracking } from '@/hooks/useSessionTracking';

const Index = () => {
	useSessionTracking();

	return (
		<div className='min-h-screen bg-background relative overflow-x-hidden'>
			<HealthBackground />
			<Header />
			<main>
				<HeroSection />
				<Benefits />
				<WhoIsItFor />
				<HowItWorks />

				<ProgressSection />
				{/*<WhatHappensNext />*/}
				<SurveyBlock />
				<SignupForm />
				<ContactSection />
				<FAQ />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
