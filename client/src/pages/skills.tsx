import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Clock, Globe, MapPin } from "lucide-react";
import { mockSkills, type Skill } from "@/lib/mock-data";
import { SessionModal } from "@/components/modals/SessionModal";

export default function SkillsPage() {
  const [skills] = useState<Skill[]>(mockSkills);
  const [filters, setFilters] = useState({
    category: "all",
    level: "all",
    format: "all",
    search: ""
  });
  const [sessionModalOpen, setSessionModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = filters.category === "all" || skill.category.toLowerCase() === filters.category.toLowerCase();
    const matchesLevel = filters.level === "all" || skill.level.toLowerCase() === filters.level.toLowerCase();
    const matchesFormat = filters.format === "all" || skill.format.toLowerCase() === filters.format.toLowerCase();
    const matchesSearch = filters.search === "" || 
      skill.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      skill.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      skill.teacherName.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesFormat && matchesSearch;
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Programming": "bg-blue-100 text-blue-800",
      "Data Science": "bg-emerald-100 text-emerald-800",
      "Design": "bg-purple-100 text-purple-800",
      "Languages": "bg-yellow-100 text-yellow-800",
      "Business": "bg-orange-100 text-orange-800",
      "Music": "bg-pink-100 text-pink-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const handleRequestSession = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId);
    if (skill) {
      setSelectedSkill(skill);
      setSessionModalOpen(true);
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Skills</h1>
          <p className="text-xl text-gray-600">Discover amazing skills taught by our community members</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Category</Label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
                  <SelectTrigger data-testid="select-category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="languages">Languages</SelectItem>
                    <SelectItem value="data science">Data Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Level</Label>
                <Select value={filters.level} onValueChange={(value) => handleFilterChange("level", value)}>
                  <SelectTrigger data-testid="select-level">
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Format</Label>
                <Select value={filters.format} onValueChange={(value) => handleFilterChange("format", value)}>
                  <SelectTrigger data-testid="select-format">
                    <SelectValue placeholder="All Formats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="in-person">In-Person</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Search</Label>
                <Input
                  placeholder="Search skills..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  data-testid="input-search"
                  className="focus:ring-2 focus:ring-skill-blue focus:border-transparent"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <Card key={skill.id} className="hover:shadow-lg transition-shadow" data-testid={`card-skill-${skill.id}`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={skill.teacherAvatar} alt={skill.teacherName} />
                    <AvatarFallback>{skill.teacherName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1" data-testid={`text-skill-name-${skill.id}`}>
                      {skill.name}
                    </h3>
                    <p className="text-skill-blue font-medium" data-testid={`text-teacher-${skill.id}`}>
                      by {skill.teacherName}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-500 mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1" data-testid={`text-rating-${skill.id}`}>
                        {skill.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500" data-testid={`text-level-${skill.id}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4" data-testid={`text-description-${skill.id}`}>
                  {skill.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span data-testid={`text-duration-${skill.id}`}>{skill.duration}</span>
                    </span>
                    <span className="flex items-center">
                      {skill.format === 'Online' ? (
                        <Globe className="w-4 h-4 mr-1" />
                      ) : (
                        <MapPin className="w-4 h-4 mr-1" />
                      )}
                      <span data-testid={`text-format-${skill.id}`}>{skill.format}</span>
                    </span>
                  </div>
                  <Badge className={getCategoryColor(skill.category)} data-testid={`badge-category-${skill.id}`}>
                    {skill.category}
                  </Badge>
                </div>
                
                <Button
                  className="w-full bg-skill-blue text-white hover:bg-blue-600"
                  onClick={() => handleRequestSession(skill.id)}
                  data-testid={`button-request-${skill.id}`}
                >
                  Request Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredSkills.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="bg-gray-100 text-gray-700 hover:bg-gray-200"
              data-testid="button-load-more"
            >
              Load More Skills
            </Button>
          </div>
        )}

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No skills found matching your criteria.</p>
            <Button
              onClick={() => setFilters({ category: "all", level: "all", format: "all", search: "" })}
              className="mt-4"
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Session Request Modal */}
      <SessionModal
        open={sessionModalOpen}
        onOpenChange={setSessionModalOpen}
        skillName={selectedSkill?.name}
        teacherName={selectedSkill?.teacherName}
      />
    </div>
  );
}
