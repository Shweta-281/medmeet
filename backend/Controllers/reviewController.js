import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

//get all reviews
export const getAllReviews = async (req, res) => {
  const reviews = await Review.find({});

  try {
    const reviews = await Reviews.Find({});

    res.status(200).json({ success: true, message: "Not found" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Not found" });
  }
};

//create review

export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.body.doctorId;
  if (!req.body.user) req.body.user = req.body.userId;

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};