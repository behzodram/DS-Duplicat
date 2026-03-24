var DATA = {
  "user": {
    "id": 101,
    "name": "Ali",
    "age": 25,
    "email": "ali@example.com",
    "roles": ["admin", "editor"]
  },
  "settings": {
    "theme": "dark",
    "notifications": {
      "email": true,
      "sms": false,
      "push": true
    },
    "language": "uz"
  },
  "projects": [
    {
      "id": 1,
      "title": "Driver Connect App",
      "status": "active",
      "tasks": [
        {"id": 101, "name": "Setup Firebase", "done": true},
        {"id": 102, "name": "UI Design", "done": false}
      ]
    },
    {
      "id": 2,
      "title": "E-commerce Website",
      "status": "pending",
      "tasks": [
        {"id": 201, "name": "Database Setup", "done": false}
      ]
    }
  ],
  "lastLogin": "2026-03-17T12:00:00Z",
  "isActive": true
}

function dataGet(){ return DATA }