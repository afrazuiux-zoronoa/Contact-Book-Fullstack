const express = require("express");
const contactModel = require("./models/contact.model");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Create a user with "POST" method using contactModel.create
app.post("/contacts", async (req, res) => {
  const newContact = req.body;
  const contact = await contactModel.create(newContact);
  res.status(201).json({
    message: "Contact saved!",
    contact,
  });
});

// Reading a user data with "GET" method using contactModel.find
app.get("/contacts", async (req, res) => {
  const contacts = await contactModel.find();
  res.status(200).json({
    message: "Contacts fetched!",
    contacts,
  });
});

// Update a user data with "PATCH" method using contactModel.findByIdAndUpdate
app.patch("/contacts/:id", async (req, res) => {
  const updateContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(201).json({
    message: "Contact updated!",
    updatedContact: updateContact,
  });
});

// Delete a user data with "DELETE" method using contactModel.findByIdAndDelete
app.delete("/contacts/:id", async (req, res) => {
  const deleteContact = await contactModel.findByIdAndDelete(req.params.id);

  res.status(201).json({
    message: "Contact deleted!",
  });
});

module.exports = app;
