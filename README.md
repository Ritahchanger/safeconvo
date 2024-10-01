## `SafeConvo: Realtime Communication App` ##

SafeConvo is a realtime communication app built using the MERN stack (MongoDB, Express, React, Node.js). It features real-time messaging, JWT-based authentication, and responsive UI built with Tailwind CSS. Vite is used for fast frontend build performance.

## `Features` ##

- **User Authentication**: Secure user authentication using JWT.
- **Real-Time Messaging**: Send and receive messages in real time.
- **Context API**: Use React's Context API to manage state for messages and conversations globally.
- **Responsive UI**: Built with Tailwind CSS to ensure responsive design across devices.
- **Fast Build**: Vite is used for faster frontend development and hot module replacement.

## `Tech Stack` ##

- **Frontend**: React, Vite, Tailwind CSS, Context API
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT for secure user sessions
- **WebSocket**: For real-time communication (via Socket.io)

## `Prerequisites` ##

- Node.js (v14 or later)
- MongoDB (local or Atlas)
- Git

## `Installation` ##

1. Clone the repository:

   ```bash
   git clone https://github.com/Ritahchanger/safeconvo.git
   cd safeconvo

## `Running the site` ##

- Inside the frontend folder,run `npm install`

- Inside the backend folder,run `npm install`
- then run (inside the frontend folder) `npm run dev`

## `Create .env file inside the backend folder the add the following` ##

- `MONGO_DB_URI=enter url of the mongodb installation`
- `JWT_SECRET=enter the jwt secret`
- Then run (inside the backend folder) `npm run dev`


