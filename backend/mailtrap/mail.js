const { sender, client } = require("./mailTrap");
const { VERIFICATION_EMAIL_TEMPLATE } = require("./mailTrapTamplate.js");

const sendVeryficationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Verify your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "verificationCode",
        verificationToken
      ),
    });
  } catch (error) {
    console.log(error);
    throw new Error("error sending verifiycation email");
  }
};

module.exports = {
  sendVeryficationEmail,
};
