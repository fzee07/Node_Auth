const router = require("express").Router();

// Rendering the Logged in Page
router.get("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({
    success: true,
    data: "Login Page",
  });
});

// Submitting the form for Login
router.post("/login", (req, res) => {
  res.send("Logged in");
});

// Rendering the page for signup
router.get("/signup", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Signup Please",
  });
});

// Submitting the page for Signup
router.post("/signup", (req, res) => {
  res.send("Signed up");
});

module.exports = router;
