import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Lightbulb } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-skill-blue to-skill-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Swap Skills.<br />
              <span className="text-yellow-300">Grow Together.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with others to teach what you know and learn what you need.
              Build meaningful connections through skill sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth" data-testid="button-join-now">
                <Button 
                  size="lg"
                  className="bg-white text-skill-blue hover:bg-gray-100 text-lg px-8 py-4"
                >
                  Join Now
                </Button>
              </Link>
              <Link href="/skills" data-testid="button-explore-skills">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-skill-blue text-lg px-8 py-4"
                >
                  Explore Skills
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How SkillSwap Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your skill sharing journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Learn Card */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-skill-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Learn</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover new skills from passionate teachers in your community.
                From coding to cooking, find your next learning adventure.
              </p>
            </div>

            {/* Teach Card */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-skill-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Teach</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your expertise and help others grow. Teaching reinforces your own
                knowledge while building meaningful connections.
              </p>
            </div>

            {/* Connect Card */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-skill-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Build lasting relationships through shared learning experiences.
                Grow your network while developing new capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-skill-blue mb-2" data-testid="stat-learners">2,500+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-skill-emerald mb-2" data-testid="stat-skills">150+</div>
              <div className="text-gray-600">Skills Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-skill-purple mb-2" data-testid="stat-sessions">5,000+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2" data-testid="stat-rating">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-skill-blue mb-4">SkillSwap</h3>
              <p className="text-gray-400">Connecting learners and teachers worldwide</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-about">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-how-it-works">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-help">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-community">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-safety">Safety</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
