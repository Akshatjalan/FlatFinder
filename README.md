# FlatFinder

**FlatFinder** is a full-stack rental marketplace application that helps users find or list available shared flats and flatmates — just like posts on Facebook groups, but with a better experience.

Built with:
- 🔧 **Frontend:** React
- ⚙️ **Backend:** Java Spring Boot

---

## 📌 Features

### 🔍 Discover Rooms & Flatmates
- Browse listings for shared apartments and available rooms
- View detailed information (rent, amenities, flatmates, etc.)

### 📝 List Your Flat
- Post vacant rooms in your flat
- Add flat details, rent, preferred flatmates, and contact info

### 📂 Categories & Filters *(Coming Soon)*
- Filter by location, rent, gender preference, and amenities

---

## 📁 Project Structure

```

FlatFinder/
├── frontend/      # React app
│   └── src/
│       └── components/
│       └── pages/
├── backend/       # Spring Boot API
│   └── src/
│       └── main/java/com/flatfinder/
│       └── resources/
├── README.md
└── .gitignore

````

---

## 🚀 Getting Started

### 🖥️ Frontend

```bash
cd frontend
npm install
npm start
````

> Runs the React frontend on [http://localhost:3000](http://localhost:3000)

### ⚙️ Backend

```bash
cd backend
./mvnw spring-boot:run
```

> Starts Spring Boot API on [http://localhost:8080](http://localhost:8080)

---

## 🔌 API Endpoints

Example endpoints:

```
GET    /api/listings
POST   /api/listings
GET    /api/listings/{id}
```

More coming soon...

---

## ✨ Tech Stack

* React
* Java, Spring Boot, Maven
* MySQL or PostgreSQL (planned)
* RESTful APIs
* GitHub Actions (CI/CD - coming soon)

---

## 📅 Roadmap

* [x] Flat/room listing UI
* [x] REST APIs for listings
* [ ] Filters and search
* [ ] User authentication
* [ ] Booking and messaging system
* [ ] Mobile responsive design

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests.

---

## 📄 License

MIT License

---

> Built with ❤️ by Akshat Jalan
