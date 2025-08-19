import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface AddSkillModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddSkillModal({ open, onOpenChange }: AddSkillModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    level: "",
    format: "",
    duration: "",
    price: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.description || !formData.category || !formData.level) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate adding skill
    toast({
      title: "Success!",
      description: `Your skill "${formData.name}" has been added successfully.`,
    });

    // Reset form and close modal
    setFormData({
      name: "",
      description: "",
      category: "",
      level: "",
      format: "",
      duration: "",
      price: ""
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Skill</DialogTitle>
          <DialogDescription>
            Share your expertise with the community. Fill in the details about the skill you want to teach.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="skillName">Skill Name *</Label>
              <Input
                id="skillName"
                placeholder="e.g., React.js Fundamentals"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                data-testid="input-skill-name"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe what you'll teach and what learners will gain..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                data-testid="textarea-description"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger data-testid="select-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="languages">Languages</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Your Level *</Label>
                <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                  <SelectTrigger data-testid="select-level">
                    <SelectValue placeholder="Your expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Format</Label>
                <Select value={formData.format} onValueChange={(value) => handleInputChange("format", value)}>
                  <SelectTrigger data-testid="select-format">
                    <SelectValue placeholder="Teaching format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="in-person">In-Person</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Duration</Label>
                <Input
                  placeholder="e.g., 1-2 hours"
                  value={formData.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                  data-testid="input-duration"
                />
              </div>
            </div>
            
            <div>
              <Label>Price per Session (Optional)</Label>
              <Input
                type="number"
                placeholder="0"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                data-testid="input-price"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button type="submit" data-testid="button-add-skill">
              Add Skill
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}