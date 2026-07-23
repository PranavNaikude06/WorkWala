export const MOCK_BOOKINGS = [
  {
    id: "b-1",
    title: "Boundary wall construction",
    category: "Mason",
    status: "ongoing", // "ongoing" | "completed" | "cancelled"
    statusLabel: "Ongoing",
    pay: "₹12,400",
    dueDate: "Due: Oct 24",
    workersAssignedCount: 5,
    workers: [
      { name: "Ramesh K.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDALPxEUeGh3XbRzn1u30T7TqX9zSm-Wbp3DwId8YSqbqYn3gvfZigbycl0wcsgKu4cGUZCa-Ir8ApqcJRgAEPOMlcBwxefz0AaAPMYf9Rsadin1mApNixyMeREm16PEYFqeKQBcFsSBuNJ3mjrdOUjLQvuTZ5ltskSz0nPQlZPGrWE0Bdt_se0thi3DQPb2Am2PpFdbGdqAcl3cPL3NHW4MsK8Y0-_nf-EA3KE_jakMRGCiUYAGrplDg" },
      { name: "Suresh M.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2UDKVVDQ0Z8vC_H4q6S29BJBYtSzouXtT6YK1EaiHGG1PrHYyq6rnHF2555qubavjAYq9HJAB2JWuQdHfNTToxExGDUTIlRMLa1Xh05yofmwUJFVkDZS8SKjpSM8HLNFRA0RUMdSdAm2VKj9kWtU-GFq2HTqVnpkdi0BOrKKghPD557TXFLAypBYBTzEB_RWHlgqIB45Sju7br-v4aiejybG3TZTDS6KRixDUjswygQEs0L2j5KA7g" },
    ]
  },
  {
    id: "b-2",
    title: "Apartment Rewiring",
    category: "Electrician",
    status: "ongoing",
    statusLabel: "In Progress",
    pay: "₹4,500",
    dueDate: "Due: Oct 20",
    workersAssignedCount: 2,
    workers: [
      { name: "Suresh P.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2UDKVVDQ0Z8vC_H4q6S29BJBYtSzouXtT6YK1EaiHGG1PrHYyq6rnHF2555qubavjAYq9HJAB2JWuQdHfNTToxExGDUTIlRMLa1Xh05yofmwUJFVkDZS8SKjpSM8HLNFRA0RUMdSdAm2VKj9kWtU-GFq2HTqVnpkdi0BOrKKghPD557TXFLAypBYBTzEB_RWHlgqIB45Sju7br-v4aiejybG3TZTDS6KRixDUjswygQEs0L2j5KA7g" }
    ]
  }
];

export const MOCK_NOTIFICATIONS = [
  {
    id: "n-1",
    title: "Ramesh K. expressed interest",
    subtitle: "He is interested in your 'Site Supervisor' vacancy at Malad West.",
    time: "2m ago",
    type: "interest",
    unread: true,
  },
  {
    id: "n-2",
    title: "Payment Received",
    subtitle: "₹4,500 has been credited to your WorkWala wallet for Borivali Project.",
    time: "1h ago",
    type: "payment",
    unread: true,
  },
  {
    id: "n-3",
    title: "New Job Suggestion",
    subtitle: "A new 'Electrician' post matches your skills in Thane area.",
    time: "4h ago",
    type: "job",
    unread: false,
  },
  {
    id: "n-4",
    title: "Profile Verified",
    subtitle: "Your documents have been successfully verified. You are now a 'Verified Professional'.",
    time: "Yesterday",
    type: "verification",
    unread: false,
  }
];

export const MOCK_MESSAGES = [
  {
    id: "m-1",
    sender: "Ramesh K.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDALPxEUeGh3XbRzn1u30T7TqX9zSm-Wbp3DwId8YSqbqYn3gvfZigbycl0wcsgKu4cGUZCa-Ir8ApqcJRgAEPOMlcBwxefz0AaAPMYf9Rsadin1mApNixyMeREm16PEYFqeKQBcFsSBuNJ3mjrdOUjLQvuTZ5ltskSz0nPQlZPGrWE0Bdt_se0thi3DQPb2Am2PpFdbGdqAcl3cPL3NHW4MsK8Y0-_nf-EA3KE_jakMRGCiUYAGrplDg",
    text: "Hi Ramesh, can you come tomorrow around 10:00 AM? The pipe under the kitchen sink is leaking heavily.",
    time: "10:32 AM",
    isMe: true,
  },
  {
    id: "m-2",
    sender: "Ramesh K.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDALPxEUeGh3XbRzn1u30T7TqX9zSm-Wbp3DwId8YSqbqYn3gvfZigbycl0wcsgKu4cGUZCa-Ir8ApqcJRgAEPOMlcBwxefz0AaAPMYf9Rsadin1mApNixyMeREm16PEYFqeKQBcFsSBuNJ3mjrdOUjLQvuTZ5ltskSz0nPQlZPGrWE0Bdt_se0thi3DQPb2Am2PpFdbGdqAcl3cPL3NHW4MsK8Y0-_nf-EA3KE_jakMRGCiUYAGrplDg",
    text: "10:00 AM works perfectly. Please share your exact location via the pin, and I'll be there on time. Do you have any spare washers or should I bring them?",
    time: "10:35 AM",
    isMe: false,
  }
];
