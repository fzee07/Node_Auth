const router = require("express").Router();

// Rendering the Logged in Page
router.get("/login", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Log in Please",
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
