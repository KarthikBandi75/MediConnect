import jwt from "jsonwebtoken";

export const authUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Unauthorized - No token provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;  
    next();
} catch (error) {
    console.error("Error in verifyToken", error);
    return res.status(401).json({ success: false, message: "Invalid token" });
}
};
