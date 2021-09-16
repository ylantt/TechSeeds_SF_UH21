const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// @desc    Login with google
// @route   POST /api/v1/auth/googlelogin
// @access  Public
exports.googleLogin = async (req, res, next) => {
  const { tokenId } = req.body;
  console.log(process.env.GOOGLE_CLIENT_ID);

  client
    .verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then((response) => {
      //   const { email_verfied, name, email } = response.payload;
      console.log(response);
    });
};
