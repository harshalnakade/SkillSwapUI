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
import { Calendar, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SessionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skillName?: string;
  teacherName?: string;
}

export function SessionModal({ open, onOpenChange, skillName, teacherName }: SessionModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "1",
    message: "",
    learningGoals: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time for your session.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Session Requested!",
      description: `Your session request for "${skillName}" has been sent to ${teacherName}. You'll be notified once they respond.`,
    });

    setFormData({
      date: "",
      time: "",
      duration: "1",
      message: "",
      learningGoals: ""
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Session</DialogTitle>
          <DialogDescription>
            Schedule a learning session for "{skillName}" with {teacherName}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  data-testid="input-session-date"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  data-testid="input-session-time"
                />
              </div>
            </div>
            
            <div>
              <Label>Expected Duration</Label>
              <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                <SelectTrigger data-testid="select-duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">30 minutes</SelectItem>
                  <SelectItem value="1">1 hour</SelectItem>
                  <SelectItem value="1.5">1.5 hours</SelectItem>
                  <SelectItem value="2">2 hours</SelectItem>
                  <SelectItem value="3">3 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="learningGoals">What do you want to learn?</Label>
              <Textarea
                id="learningGoals"
                placeholder="Describe your learning goals and what you'd like to focus on..."
                value={formData.learningGoals}
                onChange={(e) => handleInputChange("learningGoals", e.target.value)}
                data-testid="textarea-learning-goals"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Message to Teacher (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Any additional message or questions for the teacher..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                data-testid="textarea-message"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              data-testid="button-cancel-session"
            >
              Cancel
            </Button>
            <Button type="submit" data-testid="button-request-session">
              <Calendar className="w-4 h-4 mr-2" />
              Request Session
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}