const formControllers = require ("../controllers/formControllers");
const express = require('express');
const router = require("express").Router();

router.post("/formulaire", formControllers.form);

module.exports = router;