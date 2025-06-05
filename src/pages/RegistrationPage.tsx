import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthFooter from '@/components/auth/AuthFooter';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const RegistrationPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log('RegistrationPage loaded');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
        setLoading(false);
        return;
    }

    console.log('Attempting registration with:', { username, email, password });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success
    setSuccess('Account created successfully! Redirecting to login...');
    console.log('Registration successful');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
    // In a real app, handle API response for errors (e.g., email already exists)
    // setLoading(false); // Only set to false on error if not redirecting
  };

  const authFooterLinks = [
    { to: '/login', text: 'Already have an account? Login' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <AuthHeader logoText="MyApp" />
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join us! Fill in the details below to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert variant="default" className="bg-green-100 border-green-300 text-green-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="yourusername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
        </CardContent>
         <CardFooter className="flex-col items-center">
            <AuthFooter links={authFooterLinks} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationPage;