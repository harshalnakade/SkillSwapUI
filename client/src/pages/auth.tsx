import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login/signup
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-skill-blue to-skill-purple flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to SkillSwap</h2>
              <p className="text-gray-600">Join our community of learners and teachers</p>
            </div>

            {/* Auth Toggle */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <Button
                variant={isLogin ? "default" : "ghost"}
                className={`flex-1 text-sm font-medium ${
                  isLogin 
                    ? "bg-white text-skill-blue shadow-sm" 
                    : "text-gray-600 hover:text-skill-blue"
                }`}
                onClick={() => setIsLogin(true)}
                data-testid="button-login-tab"
              >
                Login
              </Button>
              <Button
                variant={!isLogin ? "default" : "ghost"}
                className={`flex-1 text-sm font-medium ${
                  !isLogin 
                    ? "bg-white text-skill-blue shadow-sm" 
                    : "text-gray-600 hover:text-skill-blue"
                }`}
                onClick={() => setIsLogin(false)}
                data-testid="button-signup-tab"
              >
                Sign Up
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    data-testid="input-name"
                    className="focus:ring-2 focus:ring-skill-blue focus:border-transparent"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  data-testid="input-email"
                  className="focus:ring-2 focus:ring-skill-blue focus:border-transparent"
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={isLogin ? "Enter your password" : "Create a password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  data-testid="input-password"
                  className="focus:ring-2 focus:ring-skill-blue focus:border-transparent"
                />
              </div>

              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    data-testid="input-confirm-password"
                    className="focus:ring-2 focus:ring-skill-blue focus:border-transparent"
                  />
                </div>
              )}

              {isLogin ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange("rememberMe", !!checked)}
                      data-testid="checkbox-remember"
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <a href="#" className="text-sm text-skill-blue hover:underline" data-testid="link-forgot-password">
                    Forgot password?
                  </a>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", !!checked)}
                    data-testid="checkbox-terms"
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-skill-blue text-white hover:bg-blue-600"
                data-testid="button-submit"
              >
                {isLogin ? "Login" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Or continue with</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center hover:bg-gray-50"
                  data-testid="button-google"
                >
                  <span className="text-red-500 mr-2">G</span>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center hover:bg-gray-50"
                  data-testid="button-github"
                >
                  <span className="text-gray-800 mr-2">⚊</span>
                  GitHub
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
