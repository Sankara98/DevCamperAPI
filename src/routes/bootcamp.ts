import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
    res
        .status(200)
        .json({success: true, msg: "show all bootcamps"});
});
router.get("/:id", (req, res) => {
    res
        .status(200)
        .json({success: true, msg: `Show bootcamp ${req.params.id}`});
});

router.post("/", (req, res) => {
    res
        .status(200)
        .json({success: true, msg: "Create new bootcamp"});
});

router.put("/:id", (req, res) => {
    res
        .status(200)
        .json({success: true, msg: "Update bootcamp"});
});

router.delete("/:id", (req, res) => {
    res
        .status(200)
        .json({success: true, msg: "Delete bootcamp"});
});

export default router;