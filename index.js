import express from "express"; // module js way to import files its works asynchronusly

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// jokes routes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything! \uD83D\uDE08",
    },
    {
      id: 2,
      title: "What do you get when you cross a snowman and a vampire?",
      content: "Frostbite! ❄️🧛",
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field! 🌾🏆",
    },
    {
      id: 4,
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts. 💀❌💀",
    },
    {
      id: 5,
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese! 🧀😋",
    },
  ];
  
  res.send(jokes)
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
