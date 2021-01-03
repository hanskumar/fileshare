const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    file_name: {
      type: String,
      required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    file_url: {
      type: String,
      required: true,
    },
    file_extension: {
      type: String,
      required: true,
    },
    file_size: {
        type: String,
        required: true,
    },
    status: {
      type: String
    },
    sender_email: {
        type: String,
    },
    reciever_email: {
        type: String,
    },
    message: {
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("file", fileSchema);