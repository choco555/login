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
			className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="w-[1200px] h-3/4 mx-auto my-auto fixed inset-0 flex items-center justify-center overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-black/20 backdrop-blur-md rounded-xl shadow-2xl max-w-[calc(100vw-20px)] md:max-w-[calc(100vw-40px)]">
				{/* Left visual panel */}
				<div className="relative overflow-hidden h-full hidden md:block">
					<img src={hero} alt="Decorative" className="w-full h-full object-cover drop-shadow-4xl rounded-r-[25%] border-r-2 border-white border-solid" />
				</div>

				{/* Right form panel */}
				<div className="flex justify-center p-6 md:p-10 h-full">
					<div className="w-full max-w-md">
						<div className="flex flex-col items-center gap-4 mb-6">
							<img src={logo} alt="Brand" className="w-full h-25" />
							<h1 className="text-3xl font-bold text-white">Resident Author</h1>
							<p className="text-white/90 text-xl font-extrabold">Welcome back</p>
							<p className="text-sm text-white/70 -mt-3">Sign in to continue to your account.</p>
						</div>

						<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-6 md:p-8">
							<form onSubmit={handleSubmit} className="space-y-5">
								<div className="space-y-2">
									<label className="text-sm font-medium text-white/90">Email Address</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-2.5 text-white placeholder-white/50 outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20"
										placeholder="Enter your email"
										required
									/>
								</div>

								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<label className="text-sm font-medium text-white/90">Password</label>
										<a href="#" className="text-sm text-white/70 hover:text-white hover:underline">Forgot your password?</a>
									</div>
									<div className="relative">
										<input
											type={showPassword ? 'text' : 'password'}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder=""
											className="w-full rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-2.5 text-white placeholder-white/50 outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20"
											required
										/>
										<button
											type="button"
											className="absolute inset-y-0 right-0 px-3 text-sm text-white/70 hover:text-white"
											onClick={() => setShowPassword((v) => !v)}
										>
											{showPassword ? 'Hide' : 'Show'}
										</button>
									</div>
								</div>

								<button
									type="submit"
									className="w-full rounded-lg bg-white/20 backdrop-blur-sm text-white font-medium py-2.5 hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-white/20 border border-white/30 transition-all duration-200"
								>
									Log in
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


