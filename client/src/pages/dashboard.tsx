import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  User, 
  Lightbulb, 
  Calendar, 
  MessageCircle, 
  GraduationCap, 
  Presentation,
  Star,
  Plus,
  Send
} from "lucide-react";
import { 
  mockUser, 
  mockSessions, 
  mockConversations, 
  mockMessages,
  teachingSkills,
  learningSkills,
  recentActivity,
  type Session,
  type Conversation,
  type Message
} from "@/lib/mock-data";

export default function DashboardPage() {
  const [match] = useRoute("/dashboard/:section?");
  const section = (match as { section?: string })?.section || "overview";
  const [activeSessionTab, setActiveSessionTab] = useState("upcoming");
  const [activeConversation, setActiveConversation] = useState("1");
  const [newMessage, setNewMessage] = useState("");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "skills", label: "My Skills", icon: Lightbulb },
    { id: "sessions", label: "Sessions", icon: Calendar },
    { id: "messages", label: "Messages", icon: MessageCircle, badge: "3" }
  ];

  const renderOverview = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Hi, <span data-testid="text-username">{mockUser.name}</span> 👋
        </h1>
        <p className="text-gray-600">Welcome back to your skill sharing journey</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-skill-blue to-blue-600 text-white cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Find a Skill</h3>
            <p className="mb-4 opacity-90">Discover new skills to learn from our community</p>
            <Button 
              className="bg-white text-skill-blue hover:bg-gray-100"
              data-testid="button-browse-skills"
            >
              Browse Skills
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-skill-emerald to-emerald-600 text-white cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Offer a Skill</h3>
            <p className="mb-4 opacity-90">Share your knowledge and help others grow</p>
            <Button 
              className="bg-white text-skill-emerald hover:bg-gray-100"
              data-testid="button-add-skill"
            >
              Add Skill
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-skill-blue rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-white w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium" data-testid={`text-activity-${index}`}>
                    {activity.message}
                  </p>
                  <p className="text-sm text-gray-600" data-testid={`text-activity-time-${index}`}>
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="text-skill-blue w-5 h-5" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold" data-testid="stat-skills-learned">{mockUser.skillsLearned}</p>
                <p className="text-gray-600 text-sm">Skills Learned</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Presentation className="text-skill-emerald w-5 h-5" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold" data-testid="stat-skills-taught">{mockUser.skillsTaught}</p>
                <p className="text-gray-600 text-sm">Skills Taught</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="text-skill-purple w-5 h-5" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold" data-testid="stat-total-sessions">{mockUser.totalSessions}</p>
                <p className="text-gray-600 text-sm">Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="text-yellow-500 w-5 h-5" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold" data-testid="stat-rating">{mockUser.rating}</p>
                <p className="text-gray-600 text-sm">Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="p-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
        
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                <AvatarFallback>{mockUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2" data-testid="text-profile-name">
                  {mockUser.name}
                </h2>
                <p className="text-gray-600 mb-4" data-testid="text-profile-bio">
                  {mockUser.bio}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span data-testid="text-profile-location">📍 {mockUser.location}</span>
                  <span data-testid="text-profile-join-date">📅 Joined {mockUser.joinDate}</span>
                </div>
              </div>
              <Button 
                className="bg-skill-blue text-white hover:bg-blue-600"
                data-testid="button-edit-profile"
              >
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">My Skills</h3>
              <Button 
                className="bg-skill-emerald text-white hover:bg-emerald-600"
                data-testid="button-add-skill-profile"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Teaching</h4>
                <div className="space-y-3">
                  {teachingSkills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                      <div>
                        <span className="font-medium text-emerald-800" data-testid={`text-teaching-skill-${index}`}>
                          {skill.name}
                        </span>
                        <span className="text-sm text-emerald-600 ml-2">{skill.level}</span>
                      </div>
                      <span className="text-sm text-emerald-600" data-testid={`text-teaching-sessions-${index}`}>
                        {skill.sessions} sessions
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Learning</h4>
                <div className="space-y-3">
                  {learningSkills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <span className="font-medium text-blue-800" data-testid={`text-learning-skill-${index}`}>
                          {skill.name}
                        </span>
                        <span className="text-sm text-blue-600 ml-2">{skill.level}</span>
                      </div>
                      <span className="text-sm text-blue-600" data-testid={`text-learning-sessions-${index}`}>
                        {skill.sessions} sessions
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderSessions = () => (
    <div className="p-8">
      <div className="max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sessions</h1>
          <Button 
            className="bg-skill-blue text-white hover:bg-blue-600"
            data-testid="button-request-session"
          >
            <Plus className="w-4 h-4 mr-2" />
            Request New Session
          </Button>
        </div>

        {/* Session Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
          {["upcoming", "completed", "teaching"].map((tab) => (
            <Button
              key={tab}
              variant={activeSessionTab === tab ? "default" : "ghost"}
              className={`flex-1 text-sm font-medium ${
                activeSessionTab === tab
                  ? "bg-white text-skill-blue shadow-sm"
                  : "text-gray-600 hover:text-skill-blue"
              }`}
              onClick={() => setActiveSessionTab(tab)}
              data-testid={`button-tab-${tab}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        {/* Sessions Content */}
        <div className="grid gap-6">
          {mockSessions.map((session) => (
            <Card key={session.id} className={`border-l-4 ${
              session.status === 'Completed' ? 'border-emerald-500' : 'border-skill-blue'
            }`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`text-session-name-${session.id}`}>
                      {session.skillName}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span data-testid={`text-session-teacher-${session.id}`}>{session.teacherName}</span>
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span data-testid={`text-session-date-${session.id}`}>{session.date}</span>
                      </span>
                      <span className="flex items-center">
                        <span data-testid={`text-session-time-${session.id}`}>{session.time}</span>
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4" data-testid={`text-session-description-${session.id}`}>
                      {session.description}
                    </p>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        className={
                          session.status === 'Completed' 
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }
                        data-testid={`badge-session-status-${session.id}`}
                      >
                        {session.status}
                      </Badge>
                      <span className="text-sm text-gray-600" data-testid={`text-session-format-${session.id}`}>
                        {session.format}
                      </span>
                      {session.rating && (
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2">Rating:</span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {session.feedback && (
                      <p className="text-gray-700 mt-2 italic" data-testid={`text-session-feedback-${session.id}`}>
                        "{session.feedback}"
                      </p>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    {session.status === 'Pending' && (
                      <>
                        <Button 
                          variant="outline" 
                          className="text-skill-blue border-skill-blue hover:bg-blue-50"
                          data-testid={`button-reschedule-${session.id}`}
                        >
                          Reschedule
                        </Button>
                        <Button 
                          className="bg-skill-blue text-white hover:bg-blue-600"
                          data-testid={`button-join-${session.id}`}
                        >
                          Join Session
                        </Button>
                      </>
                    )}
                    {session.status === 'Completed' && (
                      <Button 
                        variant="outline"
                        className="text-skill-blue border-skill-blue hover:bg-blue-50"
                        data-testid={`button-book-again-${session.id}`}
                      >
                        Book Again
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="h-full">
      <div className="flex h-full">
        {/* Chat List */}
        <div className="w-1/3 bg-white border-r border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
            <div className="mt-4">
              <Input
                placeholder="Search conversations..."
                className="focus:ring-2 focus:ring-skill-blue focus:border-transparent"
                data-testid="input-search-conversations"
              />
            </div>
          </div>
          <div className="overflow-y-auto">
            {mockConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                  activeConversation === conversation.id ? "bg-blue-50" : ""
                }`}
                onClick={() => setActiveConversation(conversation.id)}
                data-testid={`conversation-${conversation.id}`}
              >
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={conversation.userAvatar} alt={conversation.userName} />
                    <AvatarFallback>{conversation.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-900 truncate" data-testid={`text-conversation-name-${conversation.id}`}>
                        {conversation.userName}
                      </h3>
                      <span className="text-xs text-gray-500" data-testid={`text-conversation-time-${conversation.id}`}>
                        {conversation.lastMessageTime}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate" data-testid={`text-conversation-message-${conversation.id}`}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unreadCount > 0 && (
                    <div className="w-2 h-2 bg-skill-blue rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage 
                  src={mockConversations.find(c => c.id === activeConversation)?.userAvatar} 
                  alt={mockConversations.find(c => c.id === activeConversation)?.userName} 
                />
                <AvatarFallback>
                  {mockConversations.find(c => c.id === activeConversation)?.userName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-gray-900" data-testid="text-chat-header-name">
                  {mockConversations.find(c => c.id === activeConversation)?.userName}
                </h3>
                <p className="text-sm text-emerald-600">Online</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end space-x-2 ${message.isCurrentUser ? 'justify-end' : ''}`}
              >
                {!message.isCurrentUser && (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={message.senderAvatar} alt={message.senderName} />
                    <AvatarFallback>{message.senderName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                )}
                <div className="max-w-xs lg:max-w-md">
                  <div className={`rounded-2xl px-4 py-2 ${
                    message.isCurrentUser
                      ? 'bg-skill-blue text-white rounded-br-sm'
                      : 'bg-gray-200 text-gray-900 rounded-bl-sm'
                  }`}>
                    <p data-testid={`text-message-${message.id}`}>{message.content}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${message.isCurrentUser ? 'text-right' : ''}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-3">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 focus:ring-2 focus:ring-skill-blue focus:border-transparent"
                data-testid="input-new-message"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && newMessage.trim()) {
                    // In a real app, this would send the message
                    setNewMessage("");
                  }
                }}
              />
              <Button 
                className="bg-skill-blue text-white hover:bg-blue-600 rounded-full p-3"
                onClick={() => {
                  if (newMessage.trim()) {
                    setNewMessage("");
                  }
                }}
                data-testid="button-send-message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (section) {
      case "profile":
        return renderProfile();
      case "skills":
        return renderProfile(); // Skills are shown in profile for now
      case "sessions":
        return renderSessions();
      case "messages":
        return renderMessages();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-skill-blue">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <div className="px-3">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = section === item.id;
              return (
                <a
                  key={item.id}
                  href={`/dashboard/${item.id}`}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 transition-colors ${
                    isActive
                      ? "text-skill-blue bg-blue-50"
                      : "text-gray-600 hover:text-skill-blue hover:bg-blue-50"
                  }`}
                  data-testid={`link-sidebar-${item.id}`}
                >
                  <Icon className="mr-3 w-5 h-5" />
                  {item.label}
                  {item.badge && (
                    <Badge className="ml-auto bg-red-500 text-white text-xs" data-testid={`badge-${item.id}`}>
                      {item.badge}
                    </Badge>
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
