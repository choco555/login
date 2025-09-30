import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const logo = new URL('../../assets/SDN.png', import.meta.url).href;
	const hero = new URL('../../assets/book.png', import.meta.url).href;
	const background = new URL('../../assets/bg.jpg', import.meta.url).href;

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		// TODO: replace with real auth call
		console.log({ email, password });
	}

	return (
		<div
			className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
			style={{ 
				backgroundImage: `url(${background})`,
				backgroundColor: '#1a1a2e',
				minHeight: '100vh'
			}}
		>
			<div className="overflow-hidden bg-black/20 backdrop-blur-md rounded-xl shadow-2xl height-responsive width-responsive" style={{ 
				display: 'grid', 
				gridTemplateColumns: '1fr'
			}}>
				{/* Mobile-first grid container */}
				<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-0 grid-fallback" style={{ minHeight: '100%' }}>
					{/* Left visual panel */}
					<div className="relative overflow-hidden h-full hidden md:block" style={{ minHeight: '100%' }}>
						<img src={hero} alt="Decorative" className="w-full h-full object-cover drop-shadow-4xl rounded-r-[25%] border-r-2 border-white border-solid" />
					</div>

					{/* Right form panel */}
					<div className="flex justify-center items-center p-responsive h-full" style={{ minHeight: '100%' }}>
						<div className="w-full max-w-md">
							<div className="flex flex-col items-center space-responsive mb-6">
								<img src={logo} alt="Brand" className="w-full logo-responsive" />
								<h1 className="text-responsive-3xl font-bold text-white">Resident Author</h1>
								<p className="text-white/90 text-responsive-xl font-extrabold">Welcome back</p>
								<p className="text-responsive-sm text-white/70 -mt-3">Sign in to continue to your account.</p>
							</div>

							<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-responsive">
								<form onSubmit={handleSubmit} className="space-y-5">
									<div className="space-y-2">
										<label className="text-responsive-sm font-medium text-white/90">Email Address</label>
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm input-responsive text-white placeholder-white/50 outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20"
											placeholder="Enter your email"
											required
										/>
									</div>

									<div className="space-y-2">
										<div className="flex items-center justify-between">
											<label className="text-responsive-sm font-medium text-white/90">Password</label>
											<a href="#" className="text-responsive-xs text-white/70 hover:text-white hover:underline">Forgot your password?</a>
										</div>
										<div className="relative">
											<input
												type={showPassword ? 'text' : 'password'}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												placeholder=""
												className="w-full rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm input-responsive text-white placeholder-white/50 outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20"
												required
											/>
											<button
												type="button"
												className="absolute inset-y-0 right-0 px-responsive text-responsive-xs text-white/70 hover:text-white"
												onClick={() => setShowPassword((v) => !v)}
											>
												{showPassword ? 'Hide' : 'Show'}
											</button>
										</div>
									</div>

									<button
										type="submit"
										className="w-full rounded-lg bg-white/20 backdrop-blur-sm text-white font-medium button-responsive hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-white/20 border border-white/30 transition-all duration-200"
									>
										Log in
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


