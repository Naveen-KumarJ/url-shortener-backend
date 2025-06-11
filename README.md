# 🌐 URL Shortener with Node.js, Express & MongoDB

This is a simple and functional URL shortener application built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to shorten long URLs and tracks how many times each shortened URL was visited.

## 🚀 Features

- Shorten any valid URL
- Redirect to the original URL
- Track number of clicks for each short URL
- Built with Express and MongoDB
- Error handling for invalid routes or input

---

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- nanoid (for unique ID generation)

---

## 📂 Project Structure

```

project-root/
│
├── controller/
│   └── url.controller.js      # Handles core logic
│
├── model/
│   └── url.model.js           # Mongoose schema
│
├── routes/
│   └── url.routes.js          # All route definitions
│
├── index.html                 # Basic front-end form
├── server.js                  # Entry point
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/url-shortener-nodejs.git
cd url-shortener-nodejs
````

2. **Install Dependencies**

```bash
npm install
```

3. **Configure MongoDB**

* Replace the connection string in `server.js` with your own MongoDB URI (e.g., MongoDB Atlas or local):

```js
mongoose.connect("your-mongodb-uri", { useNewUrlParser: true, useUnifiedTopology: true });
```

4. **Run the Application**

```bash
npm start
```

5. **Access the App**

Visit: [http://localhost:8080](http://localhost:8080)

---

## 📬 API Endpoints

| Method | Endpoint            | Description                   |
| ------ | ------------------- | ----------------------------- |
| GET    | `/`                 | Loads the HTML form           |
| POST   | `/generateShorturl` | Generates a shortened URL     |
| GET    | `/:shorturl`        | Redirects to the original URL |


---

## 🧑‍💻 Author

* [Naveen Kumar J](https://github.com/Naveen-KumarJ)

---