export interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
  location: string;
  joinDate: string;
  avatar: string;
  rating: number;
  skillsLearned: number;
  skillsTaught: number;
  totalSessions: number;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  format: 'Online' | 'In-Person' | 'Hybrid';
  duration: string;
  teacherId: string;
  teacherName: string;
  teacherAvatar: string;
  rating: number;
  sessionsCount: number;
}

export interface Session {
  id: string;
  skillName: string;
  teacherName: string;
  teacherAvatar: string;
  date: string;
  time: string;
  duration: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  description: string;
  format: string;
  rating?: number;
  feedback?: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export interface Conversation {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}

export const mockUser: User = {
  id: '1',
  name: 'Harshal Patel',
  email: 'harshal@example.com',
  bio: 'Full-stack developer passionate about teaching React and Node.js. Love learning new skills and connecting with fellow developers.',
  location: 'San Francisco, CA',
  joinDate: 'March 2024',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
  rating: 4.8,
  skillsLearned: 12,
  skillsTaught: 8,
  totalSessions: 24
};

export const mockSkills: Skill[] = [
  {
    id: '1',
    name: 'React.js Development',
    description: 'Learn modern React development including hooks, context, and best practices. Perfect for beginners and intermediate developers.',
    category: 'Programming',
    level: 'Expert',
    format: 'Online',
    duration: '1-2 hours',
    teacherId: '2',
    teacherName: 'John Smith',
    teacherAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    rating: 4.9,
    sessionsCount: 15
  },
  {
    id: '2',
    name: 'Python for Data Science',
    description: 'Master Python for data analysis, visualization, and machine learning. Includes pandas, matplotlib, and scikit-learn.',
    category: 'Data Science',
    level: 'Advanced',
    format: 'Online',
    duration: '2-3 hours',
    teacherId: '3',
    teacherName: 'Sarah Chen',
    teacherAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b1e1ad0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    rating: 4.8,
    sessionsCount: 8
  },
  {
    id: '3',
    name: 'UI/UX Design Fundamentals',
    description: 'Learn design principles, user research, wireframing, and prototyping. Tools covered: Figma, Adobe XD, and design thinking.',
    category: 'Design',
    level: 'Intermediate',
    format: 'Hybrid',
    duration: '1.5-2 hours',
    teacherId: '4',
    teacherName: 'Emma Wilson',
    teacherAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    rating: 4.7,
    sessionsCount: 12
  },
  {
    id: '4',
    name: 'Conversational Spanish',
    description: 'Build confidence in speaking Spanish through practical conversations. Focus on real-world scenarios and pronunciation.',
    category: 'Languages',
    level: 'Beginner',
    format: 'Online',
    duration: '1 hour',
    teacherId: '5',
    teacherName: 'Carlos Rodriguez',
    teacherAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    rating: 4.9,
    sessionsCount: 20
  },
  {
    id: '5',
    name: 'Digital Marketing Strategy',
    description: 'Learn effective digital marketing strategies including SEO, social media, email marketing, and content creation.',
    category: 'Business',
    level: 'Intermediate',
    format: 'Online',
    duration: '2 hours',
    teacherId: '6',
    teacherName: 'Alex Thompson',
    teacherAvatar: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    rating: 4.6,
    sessionsCount: 10
  },
  {
    id: '6',
    name: 'Acoustic Guitar Basics',
    description: 'Start your guitar journey with basic chords, strumming patterns, and simple songs. No prior experience needed!',
    category: 'Music',
    level: 'Beginner',
    format: 'In-Person',
    duration: '1 hour',
    teacherId: '7',
    teacherName: 'Jake Miller',
    teacherAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    rating: 4.8,
    sessionsCount: 15
  }
];

export const mockSessions: Session[] = [
  {
    id: '1',
    skillName: 'Python Fundamentals',
    teacherName: 'Sarah Chen',
    teacherAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b1e1ad0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    date: 'Dec 15, 2024',
    time: '2:00 PM - 3:00 PM',
    duration: '1 hour',
    status: 'Pending',
    description: 'Learn the basics of Python programming including variables, functions, and control structures.',
    format: 'Online via Zoom'
  },
  {
    id: '2',
    skillName: 'React Fundamentals',
    teacherName: 'Mike Johnson',
    teacherAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    date: 'Dec 10, 2024',
    time: '1:00 PM - 2:30 PM',
    duration: '1.5 hours',
    status: 'Completed',
    description: 'Introduction to React components and hooks',
    format: 'Online',
    rating: 5,
    feedback: 'Great session! Mike explained React concepts very clearly.'
  }
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    userId: '2',
    userName: 'Mike Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50',
    lastMessage: 'Thanks for the great React session!',
    lastMessageTime: '2m',
    unreadCount: 1,
    isOnline: true
  },
  {
    id: '2',
    userId: '3',
    userName: 'Sarah Chen',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b1e1ad0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50',
    lastMessage: 'Ready for our Python session tomorrow?',
    lastMessageTime: '1h',
    unreadCount: 0,
    isOnline: false
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '2',
    senderName: 'Mike Johnson',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32',
    content: 'Hey! Thanks for the amazing React session yesterday. I finally understand hooks now!',
    timestamp: '2:45 PM',
    isCurrentUser: false
  },
  {
    id: '2',
    senderId: '1',
    senderName: 'Harshal Patel',
    senderAvatar: '',
    content: "I'm so glad it helped! Hooks can be tricky at first but you'll get the hang of it. Feel free to reach out if you have more questions.",
    timestamp: '2:47 PM',
    isCurrentUser: true
  },
  {
    id: '3',
    senderId: '2',
    senderName: 'Mike Johnson',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32',
    content: "Definitely will! Would you be available for another session next week? I'd love to dive deeper into useEffect.",
    timestamp: '2:48 PM',
    isCurrentUser: false
  }
];

export const teachingSkills = [
  { name: 'React.js', level: 'Expert', sessions: 15 },
  { name: 'Node.js', level: 'Advanced', sessions: 8 },
  { name: 'JavaScript', level: 'Expert', sessions: 22 }
];

export const learningSkills = [
  { name: 'Python', level: 'Beginner', sessions: 3 },
  { name: 'Data Science', level: 'Beginner', sessions: 1 },
  { name: 'UI/UX Design', level: 'Intermediate', sessions: 5 }
];

export const recentActivity = [
  {
    type: 'completed',
    message: 'You completed a session: "React Fundamentals"',
    time: '2 hours ago',
    icon: 'graduation-cap'
  },
  {
    type: 'request',
    message: 'New session request for "Guitar Basics"',
    time: '5 hours ago',
    icon: 'chalkboard-teacher'
  }
];
