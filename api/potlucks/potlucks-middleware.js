const validatePotluck = (req, res, next) => {
  const potluck = req.body;

  if (
    !potluck.date ||
    potluck.date.trim() === "" ||
    !potluck.time ||
    potluck.time.trim() === "" ||
    !potluck.location ||
    potluck.location.trim() === "" ||
    !potluck.title ||
    potluck.title.trim() === ""
  ) {
    return next({
      status: 400,
      message: "date, time, location, and title must be provided",
    });
  }

  if (!potluck.invites || !potluck.items) {
    return next({ status: 400, message: "invites and items must be provided" });
  }

  for (const invite of potluck.invites) {
    if (!invite.to || typeof invite.to !== "number") {
      return next({
        status: 400,
        message:
          "all invites must have a valid {to: } property, must be a number",
      });
    }

    if (!invite.from || typeof invite.from !== "number") {
      return next({
        status: 400,
        message:
          "all invites must have a valid {from: } property, must be a number",
      });
    }

    if (!invite.status || invite.status.trim() === "") {
      return next({
        status: 400,
        message: "all invites must have a valid status",
      });
    }

    if (!invite.from_username || invite.from_username.trim() === "") {
      return next({
        status: 400,
        message: "all invites must have a {from_username:} property",
      });
    }
    if (!invite.to_username || invite.to_username.trim() === "") {
      return next({
        status: 400,
        message: "all invites must have a {to_username:} property",
      });
    }
  }

  next();
};

module.exports = { validatePotluck };
