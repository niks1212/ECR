cat > app.js <<EOF
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from ECS Fargate on AWS!");
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(\`App running on port \${PORT}\`);
});
EOF

