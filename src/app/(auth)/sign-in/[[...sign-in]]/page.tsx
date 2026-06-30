import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to Toreso
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Access your B2B packaging dashboard
                    </p>
                </div>
                <div className="flex justify-center">
                    <SignIn
                        appearance={{
                            elements: {
                                formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
                                footerActionLink: 'text-primary hover:text-primary/90',
                                card: 'shadow-none border-none bg-transparent',
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
