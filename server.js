const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=UTF-8",
  });

  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Backstage Self-Service Portal</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body {
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Frame container */
.container {
    width: 90%;
    max-width: 650px;
    text-align: center;
    background: rgba(255,255,255,0.12);
    padding: 45px 35px;
    border-radius: 18px;
    backdrop-filter: blur(12px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.35);
    border: 1px solid rgba(255,255,255,0.15);
}

/* Heading */
h1 {
    font-size: 34px;
    margin-bottom: 12px;
}

/* Description */
p {
    font-size: 18px;
    margin-bottom: 25px;
    opacity: 0.9;
}

/* Button */
.btn {
    padding: 12px 28px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(90deg,#00c6ff,#0072ff);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: scale(1.06);
    box-shadow: 0 0 15px rgba(0,198,255,0.6);
}

/* Footer section */
.footer {
    margin-top: 30px;
    font-size: 14px;
    opacity: 0.85;
    line-height: 1.6;
}

/* Divider */
.divider {
    margin: 15px auto;
    width: 60%;
    height: 1px;
    background: rgba(255,255,255,0.3);
}

/* Team */
.team-title {
    font-weight: bold;
    margin-top: 10px;
}

.team-list {
    margin-top: 8px;
}

.team-list div {
    margin: 3px 0;
}

</style>

</head>

<body>

<div class="container">

    <h1>🚀 Backstage Self-Service Portal</h1>

    <p>Welcome to the DevOps Automation Platform Backstage Portal</p>

    <button class="btn"
        onclick="alert('Service is running successfully!')">
        Check Status
    </button>

    <div class="footer">

        <div class="divider"></div>

        <div>
        Powered by Node.js | Running Behind GCP Load Balancer
        </div>

        <div class="team-title">
        Backstage SSP Team
        </div>

        <div class="team-list">
            <div>Suresh Maurya — Architect</div>
            <div>Chaitanya Pandey — Developer</div>
            <div>Jaykumar Kesvan — Developer</div>
        </div>

    </div>

</div>

</body>
</html>
`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});